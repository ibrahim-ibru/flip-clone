let fetchdata = fetch("https://dummyjson.com/products").then((res) => res.json())
fetchdata.then((data) => {
    console.log(data.products);
    product = data.products
    str = ``
    product.map((el) => {
        str += `
        <div class="product-card" onclick="goToDetails(${el.id})">
                <div class="product-img">
                    <img src="${el.thumbnail}" alt="">
                </div>
                <div class="product-data">
                    <h3>${el.title.length>14?el.title.substring(0,14)+"...":el.title}</h3>
                    <p  style="font-weight: bold;">${el.brand}</p>
                    <p style="background-color:green; display:inline;border-radius:5px; padding:3px;">
            <i style="color: gold; background-color: transparent;" class="bi bi-star-fill"></i>
                    ${el.rating}</p>
                    <p style="color: green;">${el.discountPercentage}% Discount</p>
                    <button><i class="bi bi-eye eye"></i><span class="view">view</span></button>
                </div>
            </div>
         
        `
    })
    document.querySelector(".products").innerHTML = str


})

function goToDetails(id){
    console.log(id);
    window.location.href=`../pages/details.html?id=${id}`    
}