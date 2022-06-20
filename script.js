function cartBoxCreation(sourceItem, nameProduct, priceProduct, itemId, dataQuantity){

    let source = sourceItem.src;
    let quantity = parseInt(dataQuantity);
    let id = itemId;
    let nameProductText = nameProduct.innerText;
    let priceProductItem = parseInt(priceProduct.innerText.slice(8, (priceProduct.innerText.length)));
    var cardBox = document.createElement("div");
    const cartBox = document.querySelector("#cart-box");
    let itemsCost = priceProductItem * quantity;
    let cardBoxId = id;
    cardBox.innerHTML = `<div class="cart-item" id="plop${cardBoxId}">
                            <div class="img-box__cart">
                                <img src="${source}" alt="" id="yop${cardBoxId}">
                            </div>
                            <div class="desc-box">
                                <h3>${nameProductText}</h3>
                                <div>
                                    <span>Price : ${priceProductItem}€ </span>
                                    <button data-event="not" class="removeItem" id="removeItem${id}">remove 1</button>
                                    <strong id="test${id}">Quantity : ${quantity}</strong>
                                    <code class="priceBox" id="test2${id}">Price : ${itemsCost}€</code>
                            </div>
                            </div>
                        </div>`;	
                        
    cartBox.appendChild(cardBox);

    let priceBoxs = document.querySelectorAll(".priceBox");
    let totalPrice = 0;
        for(let i = 0; i < priceBoxs.length; i++){
            totalPrice += parseInt(priceBoxs[i].innerText.slice(8, (priceBoxs[i].innerText.length)));
        }
        document.querySelector("#priceTotalBox").innerText = `Total price : ${totalPrice}€`;

    const btnRemoves = document.querySelectorAll(".removeItem");
    
        btnRemoves.forEach((btnRemove) => { 
                
                if (btnRemove.getAttribute("data-event") === "done"){
                    console.log(btnRemove.getAttribute("data-event"));
                }
                else{
                btnRemove.setAttribute("data-event", "done");
                btnRemove.addEventListener("click", function(){
                let priceProductItem = parseInt(priceProduct.innerText.slice(8, (priceProduct.innerText.length)));
                let idRemove = this.id.slice(10);
                let qty = parseInt(document.querySelector("#box" + idRemove).getAttribute("data-quantity"));
                qty--;
                let itemsCost = priceProductItem * qty;
                document.querySelector("#box" + idRemove).setAttribute("data-quantity", qty);
                
                if (qty > 0){
                    document.querySelector("#test" + idRemove).innerText = "Quantity : " + (qty);
                    document.querySelector("#test2" + idRemove).innerText = "price : " + (itemsCost);
                }else{
                    btnRemove.parentElement.parentElement.parentElement.remove();
                }
        
                let priceBoxs = document.querySelectorAll(".priceBox");
        
                let totalPrice = 0;
                for(let i = 0; i < priceBoxs.length; i++){
                    totalPrice += parseInt(priceBoxs[i].innerText.slice(8, (priceBoxs[i].innerText.length)));
                }
                document.querySelector("#priceTotalBox").innerText = `Total price : ${totalPrice}€`;
                });
            }
        });

}    

const btnToCloseCart = document.querySelector("#btn-to-close-cart");

    btnToCloseCart.addEventListener("click", function(){
        const cartBox = document.querySelector("#cart-box");
        cartBox.style.display = "none";
    });


const btnAdds = document.querySelectorAll(".AddCartBtn");

    btnAdds.forEach(function(btnAdd){
        btnAdd.addEventListener("click", function(){
            let itemId = 0;
            let dataQuantity = this.parentElement.parentElement.parentElement.getAttribute("data-quantity");
            const cartToDisplay = document.querySelector("#cart-box");
            cartToDisplay.style.display = "block";

            if (dataQuantity == 0){
                dataQuantity ++;    
                this.parentElement.parentElement.parentElement.setAttribute("data-quantity", dataQuantity);    
                let sourceItem = this.parentElement.parentElement.parentElement.querySelector("img");
                let nameProduct = this.parentElement.parentElement.parentElement.querySelector("h3");
                let priceProduct = this.parentElement.parentElement.parentElement.querySelector("span");
                itemId = parseInt(this.parentElement.parentElement.parentElement.id.slice(3));
                cartBoxCreation(sourceItem, nameProduct, priceProduct,itemId, dataQuantity);
            } else {
                dataQuantity ++;
                let boxToSelect = this.parentElement.parentElement.parentElement;
                let priceProduct = this.parentElement.parentElement.parentElement.querySelector("span");
                let thisId = parseInt(boxToSelect.id.slice(3));
                boxToSelect.setAttribute("data-quantity", dataQuantity);
                let quantitySpot = document.querySelector(`#test${thisId}`);
                let priceSpot = document.querySelector(`#test2${thisId}`);
                if (quantitySpot !== null){
                    quantitySpot.innerText = "Quantity : " + dataQuantity;
                    priceSpot.innerText = "Price : " + (parseInt(priceProduct.innerText.slice(8, (priceProduct.innerText.length))) * dataQuantity);
                }
            }

            let priceBoxs = document.querySelectorAll(".priceBox");
            let totalPrice = 0;
            for(let i = 0; i < priceBoxs.length; i++){
                totalPrice += parseInt(priceBoxs[i].innerText.slice(8, (priceBoxs[i].innerText.length)));
            }
            document.querySelector("#priceTotalBox").innerText = `Total price : ${totalPrice}€`;
        });
    });





