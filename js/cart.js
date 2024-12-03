function displayCart(){
    str=``
    discount=0
    fultotal=0
    fuldisc=0
    for(i=0;i<localStorage.length;i++){
        
        const key=localStorage.key(i)
        const prod=JSON.parse(localStorage.getItem(key))
        console.log(prod);
        discount=prod.price*(prod.discountPercentage/100)
        let total=Math.round(prod.price+discount) 
        fultotal+=total  
        fuldisc+=discount     
        str+=`
        <div class="cart-item" onclick="goToDetails(${prod.id})">
            <div class="img-cart"><img src="${prod.thumbnail}" alt=""></div>
            <div class="cart-prod-details">
                <h2>${prod.title}</h2>
                <p>${prod.brand}</p>
                <p><span><span><i style="color: gold; background-color: transparent;margin:0 5px 0 0" class="bi bi-star-fill"></i>${prod.rating}</span>rating</span></p>
                <p><span style="font-size: 20px; text-decoration: line-through; color: grey; padding-right: 10px;">${total} </span><span style="font-size: 30px; font-weight: 700; padding-right: 20px; ">${prod.price}</span><span style="color: green;">${prod.discountPercentage}% off</span></p>
                <button class="btn-remove-cart" onclick="removeCart(${prod.id})">Remove this product</button>
            </div>
            <div class="cart-delivery">
                <p>Delivery by Sat Nov 23 |<span style="text-decoration: line-through;color: grey;">$40</span></p>
            </div>
        </div>
        
        `
        
    }
    console.log(`ftotal: ${fultotal} ;;; fdisc: ${Math.floor(fuldisc)}`);
    displayPrice(fultotal,Math.floor(fuldisc),Math.round(discount))
    
    document.querySelector(".cart-body").innerHTML=str

}

function removeCart(id){
    localStorage.removeItem(id)
    displayCart()
}

a=localStorage.length
a!=0?document.getElementById("notification").textContent=a:document.getElementById("notification").style.display="none"

function displayPrice(ftotal,fdisc,discount){
    
    document.querySelector(".price-details-body").innerHTML=`
    <div>
                        <p>Price (${localStorage.length} items)</p>
                        <p>$${ftotal}</p>
                    </div>
                    <div>
                        <p>Discount Price</p>
                        <p>$${localStorage.length<2?discount:fdisc}</p>
                    </div>
                    <div>
                        <p>Shiping Charge</p>
                        <p>${localStorage.length>=3?`<span style="text-decoration: line-through;color: gray;">$100</span><span style="color: green;margin-left:10px;">FREE</span>`:"$100"}</p>
                    </div>
                    <div class="total-price">
                        <p>Total</p>
                        <p>$${localStorage.length<3?(fdisc!=0?ftotal-fdisc+100:ftotal-discount+100):(fdisc!=0?ftotal-fdisc:ftotal-discount)}</p>
                    </div>
                    <div style="color :green;font-size:18px; margin-left:30px;">You will save $${fdisc!=0?fdisc:discount} on this order</div>
    `
}

displayCart()

function goToDetails(id){
    console.log(id);
    window.location.href=`../pages/details.html?id=${id}`    
}