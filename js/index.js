let fetchdata = fetch("https://dummyjson.com/products").then((res) => res.json())
fetchdata.then((data) => {
    console.log(data.products);
    product = data.products
    str = ``
    product.map((el) => {
        str += `
        <a href="/pages/details.html?id=${el.id}">
        <div class="product-card" >
                <div class="product-img">
                    <img src="${el.thumbnail}" alt="">
                </div>
                <div class="product-data">
                    <h3>${el.title}</h3>
                    <p  style="font-weight: bold;">${el.brand}</p>
                    <p style="background-color:green; display:inline;border-radius:5px; padding:3px;">
            <i style="color: gold; background-color: transparent;" class="bi bi-star-fill"></i>
                    ${el.rating}</p>
                    <p style="color: green;">${el.discountPercentage}% Discount</p>
                    <button>view</button>
                </div>
            </div>
    </a>
         
        `
    })
    document.querySelector(".products").innerHTML = str



})
// function newPage(el) {
//     console.log(el.id);
    
//     fetch(`https://dummyjson.com/products/${el.id}/`).then((res) => res.json()).then((data) => {
//         // console.log(data);
//         let datas = []
//         datas.push(data)
//         console.log(datas);



        //             let total=
        //             str1+=`
        //             
        //         `
    // })

    // document.querySelector(".main-body").innerHTML=str1    
