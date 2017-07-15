$(document).ready(function () {
    var items = []; 
    var band = false;
    
    $(document).on("click", ".operation", function(){
        
        if(band){
            $(".result, .operations p").text("0");
            items =[];
            band = false;
        }
        
        if ($(".result").text() != "0") {
            
            var oper = $(this).attr("value");
            var number = parseFloat($(".result").text());
            var data = $(".operations p").text();

            if (data != "0") {
                $(".operations p").text(data + " " + number + " " + signo(oper));
                items.push(number);
                items.push(signo(oper));
            } else {
                $(".operations p").text(number + " " + signo(oper));
                items.push(number);
                items.push(signo(oper));
            }
            
            $(".result").text("0");
        }
        
    });
    
    $(document).on("click", "#same", function(){
        
        var result = items[0];
        var data = $(".operations p").text();
        console.log(items);
        
        for(var  i = 1; i < items.length; i++){
            
            switch(items[i]){
                
                case "+":
                    result += items[i + 1];
                    break;
                case "-":
                    result -= items[i + 1];
                    break;
                case "x":
                    result *= items[i + 1];
                    break;
                case "%":
                    result /= items[i + 1];
                    break;
                    
            }
            i++;
        }
        
        $(".result").text(result.toFixed(2));    
        $(".operations p").text(data + " " + result.toFixed(2));   
        band = true;
        });
        

    
    $(document).on("click", ".number", function () {
        
        if(band){
            $(".result, .operations p").text("0");
            items =[];
            band = false;
        }
        
        var res = $(".result").text();

        if (res == 0) {
            res = "";
        }

        $(this).attr("value", function (ind, val) {

            $(".result").text(res + val);

        });

    });

    $(document).on("click", "button[value='CE']", function () {

        $(".result").text("0");

    });

    $(document).on("click", "button[value='C']", function () {
        
        $(".result").text("0");
        $(".operations p").text("0");

    });

    $(document).on("click", "button[value='del']", function () {

        var numbers = $(".result").text();

        if (numbers != "0") {
            numbers = numbers.split("");
            if (numbers.length != 1) {
                numbers.pop();
                numbers = numbers.join("");
                $(".result").text(numbers);
            } else {
                $(".result").text("0");
            }

        }

    });

});

const signo = (oper) => {

    switch (oper) {
        case "multiplicar":
            return "x";
        case "dividir":
            return "%";
        case "menos":
            return "-";
        case "sumar":
            return "+";
        case "igual":
            return "=";
    }

}
