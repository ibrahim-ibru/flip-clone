let data;
async function getProduct() {
    const searchurl=window.location.search
    const urlParams=new URLSearchParams(searchurl)
    const id=urlParams.get("id")
    const res=await fetch(`https://dummyjson.com/products/${id}`)   
    data= await res.json()
    console.log(data);
    discount=data.price*(data.discountPercentage/100)
    
    const total=Math.round(data.price+discount)
    document.querySelector(".main-details").innerHTML=`
    <div class="main">
        <div class="sub-main1">
            <div class="img-sub-main">

            <div class="img-list">
            <div><img src="${data.thumbnail}" alt=""></div>
            <div><img src="${data.thumbnail}" alt=""></div>
            <div><img src="${data.thumbnail}" alt=""></div>
            <div><img src="${data.thumbnail}" alt=""></div>
            <div><img src="${data.thumbnail}" alt=""></div>
            <div><img src="${data.thumbnail}" alt=""></div>
                </div>
                <div class="main-img">
                <img src="${data.thumbnail}" alt="">
                </div>
                </div>
                <div class="buttons">
                ${localStorage.getItem(data.id)?`<button onclick="goToCart(${data.id})">GO TO CART</button>`:`<button onclick="addToCart(${data.id})">ADD TO CART</button>`}
                <button>BUY NOW</button>
                </div>
                </div>
                <div class="sub-main2">
                <h2>${data.title}</h2>
                <div ><p class="rating"><span><i style="color: gold; background-color: transparent;margin:0 5px 0 0" class="bi bi-star-fill"></i>${data.rating}</span> Ratings</p></div>
                <span><b style="font-size:35px; padding: 0 17px 0 0;">${data.price}</b></span> <span style="font-size: 22px; text-decoration: line-through; color: grey; padding: 0 10px 0 0;">${total}</span><span style="color: green;">  ${data.discountPercentage}% off</span><span><div class="flipassured"><img src="../images/flipassured.png" alt=""></div></span>
                <p style="font-size: 18px;"><b>Available offers</b></p>
                <p style="font-size: 14px;"><div class="img-tag"><img src="/images/flip-tag.png" alt=""></div>Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
                <p style="font-size: 14px;"><div class="img-tag"><img src="/images/flip-tag.png" alt=""></div>Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
                <p style="font-size: 14px;"><div class="img-tag"><img src="/images/flip-tag.png" alt=""></div>Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
                <p style="font-size: 14px;"><div class="img-tag"><img src="/images/flip-tag.png" alt=""></div>Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
                <p style="font-size: 14px;"><div class="img-tag"><img src="/images/flip-tag.png" alt=""></div>Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
                <div class="exchange">
                <div class="ex1" style="border: 1px solid ;">
                <div clablackss="left-ex">
                <input type="radio" name="" id="">
                </div>
                <div class="mid-ex">Buy without Exchange</div>
                <div class="right-ex">${data.price}</div>
                </div>
                <div class="ex2" style="border: 1px solid black;">
                <div class="left-ex">
                <input type="radio" name="" id="">
                </div>
                <div class="mid-ex">Buy with Exchange</div>
                <div class="right-ex">upto ${data.discountPercentage+10}% off</div>
                </div>
                </div>
                </div>
                </div>
    `
     
}
getProduct()

a=localStorage.length
a!=0?document.getElementById("notification").textContent=a:document.getElementById("notification").style.display="none"

function addToCart(id){
    localStorage.setItem(id,JSON.stringify(data))
    getProduct()
}

function goToCart(id){
    window.location.href=`../pages/cart.html?id=${id}`
}
