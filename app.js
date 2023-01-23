
const cartArray =[]
const addToCard =(a)=>{
    const productCount = document.getElementById('products-count')
    productCount.textContent='';
    const name = a.parentNode.children[1].children[0].innerText;
    const price = a.parentNode.children[2].children[0].innerText;

    const product = {
        name,
        price : parseFloat(price)
    }
cartArray.push(product)

displayToCart(cartArray)

}

const displayToCart = (cartArray)=>{
    let totalPrice = 0;
    const totalProduct = []
    const tablecontainer = document.getElementById("table-container");
    tablecontainer.innerHTML = '';
    for(let i = 0; i< cartArray.length; i++){
        const name = cartArray[i].name;
        const price = cartArray[i].price;
        totalPrice+=cartArray[i].price;
         totalProduct.push(name)
        

//localstorege...............

        // const products ={
        //     totalProduct,
        //     price,
        //     totalPrice
        // } 

        // localStorage.setItem("product", JSON.stringify(products))
        

        const tr = document.createElement('tr')
        tr.innerHTML= `
        <th>${i+1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `
        
        tablecontainer.appendChild(tr);

        const tableRow = document.createElement('tr')
        tableRow.innerHTML = `
            <th></th>
             <td>Total Price</td>
             <td>${totalPrice}</td>
             
        `
        tablecontainer.appendChild(tableRow)
    }

}