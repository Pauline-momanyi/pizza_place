$(document).ready(function(){
//prototype
    function Order(size, topping, crust){
        this.size = size
        this.topping = topping
        this.crust = crust        
    }
    Order.prototype.fullOrder = function(){
        return ("Your order has " + this.size + " " + this.topping + " " + this.crust); 
    }

    //user interface
    // var asize = $("#size").val();    
    // var atopping = $("#topping").val();
    // var acrust = $("#crust").val();
    $("#ordernow").click(function(e){
        var asize = $("#size").val();    
        var atopping = $("#topping").val();
        var acrust = $("#crust").val();
        var yourOrder = new Order (asize, atopping, acrust);
        console.log(yourOrder.fullOrder());

        //pricing
        var sizePrice
        var toppingPrice
        var crustPrice

        if (asize === "1"){
            sizePrice = 400;
            //console.log(sizePrice); 
        }else if (asize === "2"){
            sizePrice = 600;
        }else if (asize === "3"){
            sizePrice = 800;
        }
        console.log("Cost is " + sizePrice);
    })

    







})