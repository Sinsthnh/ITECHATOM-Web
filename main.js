
let anhs = [
    "./img/anh1.jpg",
    "./img/anh2.jpg",
    "./img/anh3.jpg",
    "./img/anh4.jpg",
    "./img/anh5.jpg",
    "./img/anh6.jpg"
];

let position = 0;
function showFist() {
    position = 0;
    const anh = document.getElementById("anh");
    anh.src = anhs[position];
}

function showLast() {
    position = anhs.length - 1;
    const anh = document.getElementById("anh");
    anh.src = anhs[position];
}

function showNext() {
    if(position < anhs.length - 1) {
        position++;
    }
    const anh = document.getElementById("anh");
    anh.src = anhs[position];
}

function showPrev() {
    if(position > 0) {
        position--;
    }
    const anh = document.getElementById("anh");
    anh.src = anhs[position];
}

var header2 = document.getElementById("header2");
var menuSUB = document.querySelector(".menuSUD");
var nav = document.querySelector("#header #nav")

var i = 1;
function MENU() {
    i++ 
    if(i % 2 == 0) {
       nav.style.display = 'block' 
    }else if(i % 2 != 0){
        nav.style.display = 'none'
    }   
}


var bag = document.getElementById("bag");
var cart = document.getElementById("cart");
var diem =1;
bag.addEventListener("click",function(){
    diem++;
    if(diem % 2 == 0){
        cart.style.display = "block";
    }else if(diem % 2 != 0) {
        cart.style.display = "none";
    }
})

var btnProduce = document.querySelectorAll(".vh");
var number = document.querySelector(".bag #Number")
btnProduce.forEach(function(element){
    element.addEventListener("click",function(event){
        var btnP = event.currentTarget;
        var Produce = btnP.parentElement;
        var ProduceImg = Produce.querySelector("img").src;
        var ProduceName = Produce.querySelector("h3").innerHTML;
        var priceSub = Produce.querySelector("h4").innerHTML.slice(0,Produce.querySelector("h4").innerHTML.length - 1);
        var ProducePrice = priceSub.toString().slice(0,2) + priceSub.toString().slice(3,6) + priceSub.toString().slice(7,) ;
        console.log(ProducePrice)
        addCart(ProduceImg,ProduceName,ProducePrice,priceSub);
        deletes();
    })
})

function addCart(ProduceImg,ProduceName,ProducePrice,priceSub) {
    var cartImg = document.querySelector("#body-cart #img-cart");
    var cartTtle = document.querySelector("#body-cart #title-cart");
    cartImg.style.display = "none";
    cartTtle.style.display = "none";
    var bodyCart = document.querySelector("#body-cart #table-cart ");
    var addItem = document.createElement("tr");
    var content = '<td class="tdImg"><img src="'+ProduceImg+'" alt="" class="produce-img"></td><td><h3 class="produce-name" >'+ProduceName+'</h3></td><td><h3 class="produce-price" >'+priceSub+' đ</h3></td><td class="tdInput"><input type="number" width="10px" class="produce-quantity" value="1" style="color: black;"></td><td class="idSub" ><h3>'+priceSub+' đ</h3><button class="delete" style="cursor:po class="btn-cart" inter">Xóa</button></td>'
    addItem.innerHTML = content;
    var compare =[];
    compare = bodyCart.children
    for(var i = 0;i < compare.length; i++){
        if(compare[i].children[1].children[0].innerHTML == ProduceName){
            alert("Sản Phẩm Đã Có Trong vỏ hàng");
            return false
        }
    }
    var count =  bodyCart.children.length + 1;
    bodyCart.append(addItem);
    number.innerHTML = count;
    if(count > 0){
        number.style.display = 'block';
    }
    update(ProducePrice);
}

function update(ProducePrice) {
    var bodyCart = document.querySelector("#body-cart #table-cart ");
    var value = bodyCart.querySelectorAll(".produce-quantity");
    value.forEach(function(updaItem){
        var SubTotalText = updaItem.parentElement.parentElement.querySelector(".idSub h3");
        updaItem.addEventListener("change",function(event){
            var btnUpda = event.currentTarget;
            if(btnUpda.value > 0){
                var subTotal = btnUpda.value * ProducePrice;
            }
            if(btnUpda.value > 0 ) {
                if(subTotal.toString().length == 8){
                    SubTotalText.innerHTML = subTotal.toString().slice(0,2) + "."+subTotal.toString().slice(2,5) + "." +subTotal.toString().slice(5,) + "đ"; 
                }else if(subTotal.toString().length == 9){
                    SubTotalText.innerHTML = subTotal.toString().slice(0,3) + "."+subTotal.toString().slice(3,6) + "." +subTotal.toString().slice(6,) + "đ"; 
                }
            }else if(btnUpda.value <= 0) {
                btnUpda.value = 0;
                SubTotalText.innerHTML = "0.0đ"; 
                SumTotal()
            }
            
        })
    })
}

function deletes() {
    var bodyCart = document.querySelector("#body-cart #table-cart ");
    var btnDele = bodyCart.querySelectorAll('.delete')
    var cartImg = document.querySelector("#body-cart #img-cart");
    var cartTtle = document.querySelector("#body-cart #title-cart");
    btnDele.forEach(function(deleItem){
        deleItem.addEventListener("click",function(event){
            var btnDele = event.currentTarget;
            var product = btnDele.parentElement.parentElement
            product.remove();
            var count =  bodyCart.children.length;
            number.innerHTML = count;
            if(count == 0){
                number.style.display = 'none';
                cartImg.style.display = "block";
                cartTtle.style.display = "block";
            }
            
        })
    })
}



    





