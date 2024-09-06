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
                            <div style="flex:7">${arr[i]}</div>
                            <button onclick="editProduct(${i})" style="height:40px; flex:1; flex-shrink: 0;min-width: 100px;">Sửa</button>
                            <button onclick="removeProduct(${i})" style="height:40px; flex:1; flex-shrink: 0;min-width: 100px;">Xóa</button>
                        </div>
            `;
        } else {
            display += `<div class="product_1" style="background-color: white;">
                            <div style="flex:7">${arr[i]}</div>
                            <button onclick="editProduct(${i})" style="height:40px; flex:1; flex-shrink: 0;min-width: 100px;">Sửa</button>
                            <button onclick="removeProduct(${i})" style="height:40px; flex:1; flex-shrink: 0;min-width: 100px;">Xóa</button>
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

// editProduct = (index) => {
//     let input = prompt("Nhập tên sản phẩm: ");
//     if (input === "")
//     {
//         openModal();
//     }
//     else
//     {
//         products[index] = input;
//         dislayProduct(products);
//     }
// }

editProduct = (index) => {
    openModalChangeProduct();
    indexGlobal = index;
}

changeProduct = (index) => {
    let input = document.getElementById("input_change_product").value;
    if(input === "")
    {
        document.querySelector('.modal_change_product').style.display = 'none';
        openModal();
    }
    else
    {
        products[index] = input;
        saveLocalStorage();
        dislayProduct(products);
        closeModalChangeProduct();
    }
}

saveLocalStorage = () => {
    localStorage.setItem('products', JSON.stringify(products));
}

openModal = () => {
    document.querySelector('.modal').style.display = 'flex';
}

openModalChangeProduct = () => {
    document.querySelector('.modal_change_product').style.display = 'flex';
    document.getElementById('input_change_product').value = "";
}

closeModal = () => {
    document.querySelector('.modal').style.display = 'none';
}

closeModalChangeProduct = () => {
    document.querySelector('.modal_change_product').style.display = 'none';
}

let products = JSON.parse(localStorage.getItem('products')) || [];
dislayProduct(products);
let indexGlobal = 0;