function displayCart(){
    str=``
    for(i=0;i<localStorage.length;i++){
        
        const key=localStorage.key(i)
        const prod=JSON.parse(localStorage.getItem(key))
        console.log(prod);
        discount=prod.price*(prod.discountPercentage/100)
        const total=Math.round(prod.price+discount)        
        str+=`
        <div class="cart-item">
            <div class="img-cart"><img src="${prod.thumbnail}" alt=""></div>
            <div class="cart-prod-details">
                <h1>${prod.title}</h1>
                <p>${prod.brand}</p>
                <p><span><span><i style="color: gold; background-color: transparent;margin:0 5px 0 0" class="bi bi-star-fill"></i>${prod.rating}</span>rating</span></p>
                <p><span style="font-size: 20px; text-decoration: line-through; color: grey; padding-right: 10px;">${total} </span><span style="font-size: 30px; font-weight: 700; padding-right: 20px; ">${prod.price}</span><span style="color: green;">${prod.discountPercentage}% off</span></p>
                <button class="btn-remove-cart" onclick="removeCart(${prod.id})">Remove</button>
            </div>
            <div class="cart-delivery">
                <p>Delivery by Sat Nov 23 |<span style="text-decoration: line-through;color: grey;">$40</span></p>
            </div>
        </div>
        <div class="price-details">
            
        </div>
        `
    }
    document.querySelector(".cart-body").innerHTML=str

}

displayCart()