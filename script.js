

function cartBoxCreation(sourceItem, nameProduct, priceProduct, itemId, dataQuantity){
    
    // console.log(sourceItem);
    let source = sourceItem.src;
    let quantity = dataQuantity;
    let id = itemId;
    let nameProductText = nameProduct.innerText;
    let priceProductItem = priceProduct.innerText;
    var cardBox = document.createElement("div");
    const cartBox = document.querySelector("#cart-box");
    cardBox.id = id;
    cardBox.innerHTML = `<div class="cart-item" id="${cardBox.id}">
                            <div class="img-box__cart">
                                <img src="${source}" alt="" id="${cardBox.id}">
                            </div>
                            <div class="desc-box">
                                <h3>${nameProductText}</h3>
                                <div>
                                    <span>Price : ${priceProductItem} </span>
                                    <button class="removeItem">remove</button>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                                    <strong id="test${cardBox.id}">Quantity : ${quantity}</strong>
                            </div>
                            </div>
                        </div>`;	
    cartBox.appendChild(cardBox);

    console.log(priceProductItem)

    const btnRemoves = document.querySelectorAll(".removeItem");
    btnRemoves.forEach(function(btnRemove){ 
        btnRemove.addEventListener("click", function(){
            btnRemove.parentElement.parentElement.parentElement.remove();
        });
    });
    


}    


const btnAdds = document.querySelectorAll(".AddCartBtn");

    btnAdds.forEach(function(btnAdd){
        btnAdd.addEventListener("click", function(){

            let dataQuantity = this.parentElement.parentElement.parentElement.getAttribute("data-quantity");
            if (dataQuantity == 0){
            dataQuantity ++;    
            let quantityUpdate = this.parentElement.parentElement.parentElement.setAttribute("data-quantity", dataQuantity);    
            let sourceItem = this.parentElement.parentElement.parentElement.querySelector("img");
            let nameProduct = this.parentElement.parentElement.parentElement.querySelector("h3");
            let priceProduct = this.parentElement.parentElement.parentElement.querySelector("span");
            let itemId = this.parentElement.parentElement.parentElement.id;
            console.log(itemId);
            console.log(sourceItem);
            console.log(nameProduct);
            cartBoxCreation(sourceItem, nameProduct, priceProduct,itemId, dataQuantity);
        } else {
            dataQuantity ++;
            let QuantityUpdate = this.parentElement.parentElement.parentElement.setAttribute("data-quantity", dataQuantity);
            let quantitySpot = document.querySelector(`#test${this.parentElement.parentElement.parentElement.id}`);
            quantitySpot.innerText = `Quantity : ${dataQuantity}`;
            
            }
        });
    });


