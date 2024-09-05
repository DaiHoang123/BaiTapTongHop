addProduct = () => {
    let input = document.getElementById("input").value;
    if (input === "") {
        openModal();
    } else {
        products.push(input);
        saveLocalStorage();
        dislayProduct(products);
        document.getElementById("input").value = "";
    }
}

dislayProduct = (arr) => {
    let display = "";
    for(let i = 0 ; i < arr.length ; i++){
        if (i % 2 === 0) {
            display += `<div class="product_1">
                            ${arr[i]}
                            <button onclick="removeProduct(${i})" style="height:40px;">Xóa</button>
                        </div>
            
            `;
        } else {
            display += `<div class="product_1" style="background-color: white;">
                            ${arr[i]}
                            <button onclick="removeProduct(${i})" style="height:40px;">Xóa</button>
                        </div>
            `;
        }
    }
    document.getElementById("result").innerHTML = display;
    document.getElementById("total_product").innerHTML = `${arr.length} products`;
}

removeProduct = (index) => {
    products.splice(index, 1);
    saveLocalStorage();
    dislayProduct(products);
}

removeAllProduct = () => {
    products = [];
    localStorage.removeItem('products');
    document.getElementById("result").innerHTML = "";
    document.getElementById("total_product").innerHTML = `0 products`;
}

saveLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(products));
}

openModal = () => {
    document.querySelector('.modal').style.display = 'flex';
}

closeModal = () => {
    document.querySelector('.modal').style.display = 'none';
}

let products = JSON.parse(localStorage.getItem('products')) || [];
dislayProduct(products);