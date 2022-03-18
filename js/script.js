$(document).ready(function(){
//prototype
    function Order(size, topping, crust){
        this.size = size
        this.topping = topping
        this.crust = crust        
    }
    Order.prototype.fullOrder = function(){
        return ("Your order has " + this.size + " " + topping + " " + crust); 
    }

    //user interface








})