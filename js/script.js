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

        //size
        if (asize === "1"){
            sizePrice = 400;
            //console.log(sizePrice); 
        }else if (asize === "2"){
            sizePrice = 600;
        }else if (asize === "3"){
            sizePrice = 800;
        }
        console.log("Cost is " + sizePrice);

        //topping
        if (asize === "1"){
            if (atopping === "4"){
                toppingPrice = 80;
            }else if (atopping === "5"){
                toppingPrice = 100;
            }else if (atopping === "6"){
                toppingPrice = 120;
            }
        }

        if (asize === "2"){
            if (atopping === "4"){
                toppingPrice = 100;
            }else if (atopping === "5"){
                toppingPrice = 120;
            }else if (atopping === "6"){
                toppingPrice = 140;
            }
        }

        if (asize === "3"){
            if (atopping === "4"){
                toppingPrice = 120;
            }else if (atopping === "5"){
                toppingPrice = 140;
            }else if (atopping === "6"){
                toppingPrice = 160;
            }
        }
        console.log("Topping costs " + toppingPrice);

        //crust
        if (asize === "1"){
            if (acrust === "7"){
                crustPrice = 150;
            }else if (acrust === "8"){
                crustPrice = 170;
            }else if (acrust === "9"){
                crustPrice = 200;
            }
        }

        if (asize === "2"){
            if (acrust === "7"){
                crustPrice = 170;
            }else if (acrust === "8"){
                crustPrice = 200;
            }else if (acrust === "9"){
                crustPrice = 230;
            }
        }

        if (asize === "3"){
            if (acrust === "7"){
                crustPrice = 200;
            }else if (acrust === "8"){
                crustPrice = 230;
            }else if (acrust === "9"){
                crustPrice = 250;
            }
        }
        console.log("Crust costs " + crustPrice);
    
    
    })

    







})