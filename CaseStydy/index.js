class phone {
    constructor(name, image, price, inventory, index) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.inventory = inventory;
        this.index = index
    }
}

function listiPhone() {
    let listLength = iPhoneList.length
    let result = '<div style=" margin: 0 -10px;">'
    for (let i = 0; i < listLength; i++) {
        if (i % 3 !== 0) {
            result += iPhoneList[i].getPhone()
        }
        else {
            result += `</div>
                        <div style=" margin: 0 -10px;">
                            ${iPhoneList[i].getPhone()}
                        `
        }
    }
    result += '</div>'
    document.getElementById("output").innerHTML = result
}

function listPhone(arrPhone,currentPhone) {
    let listLength = arrPhone.length
    let result = ''
    for (let i = 0; i < listLength; i++) {
        if(i == 0)
        {
            result += `<div style=" margin: 0 -10px;">
                            <div style="padding: 10px;display: inline-block; width: calc(99%/3);">
                                <div class="card">
                                    <img src="${arrPhone[i].image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${arrPhone[i].name}</h5>
                                        <h3 class="cart-price" style="color: rgb(199, 0, 0);">$${parseInt(arrPhone[i].price).toLocaleString()}</h3>
                                        <h5>Inventory: ${arrPhone[i].inventory}</h5>
                                        <button class="btn btn-primary" onclick="addToCart('${arrPhone[i].name}','${arrPhone[i].image}','${arrPhone[i].price}',${arrPhone[i].inventory}, ${i})">Add to cart</button>
                                    </div>
                                </div>
                            </div>`
        }
        else if(i % 3 !== 0) {
            result += `<div style="padding: 10px;display: inline-block; width: calc(99%/3);">
                                <div class="card">
                                    <img src="${arrPhone[i].image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${arrPhone[i].name}</h5>
                                        <h3 class="cart-price" style="color: rgb(199, 0, 0);">$${parseInt(arrPhone[i].price).toLocaleString()}</h3>
                                        <h5>Inventory: ${arrPhone[i].inventory}</h5>
                                        <button class="btn btn-primary" onclick="addToCart('${arrPhone[i].name}','${arrPhone[i].image}','${arrPhone[i].price}',${arrPhone[i].inventory}, ${i})">Add to cart</button>
                                    </div>
                                </div>
                            </div>`
        }
        else {
                result += `</div>
                        <div style=" margin: 0 -10px;">
                            <div style="padding: 10px;display: inline-block; width: calc(99%/3);">
                                <div class="card">
                                    <img src="${arrPhone[i].image}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${arrPhone[i].name}</h5>
                                        <h3 class="cart-price" style="color: rgb(199, 0, 0);">$${parseInt(arrPhone[i].price).toLocaleString()}</h3>
                                        <h5>Inventory: ${arrPhone[i].inventory}</h5>
                                        <button class="btn btn-primary" onclick="addToCart('${arrPhone[i].name}','${arrPhone[i].image}','${arrPhone[i].price}',${arrPhone[i].inventory}, ${i})">Add to cart</button>
                                    </div>
                                </div>
                            </div>`
        }   
    }
    result += '</div>'
    document.getElementById("output").innerHTML = result
    currentList = currentPhone
    console.log(currentPhone)
}

let iPhoneList = [
    new phone('iPhone 12', './assets/image/iphone.webp', '10000000', 20, 0),
    new phone('iPhone 13', './assets/image/iphone.webp', '12000000', 30, 1),
    new phone('iPhone 14', './assets/image/iphone.webp', '13000000', 40, 2),
    new phone('iPhone 15', './assets/image/iphone.webp', '14000000', 50, 3),
    new phone('iPhone 16', './assets/image/iphone.webp', '15000000', 60, 4),
    new phone('iPhone 17', './assets/image/iphone.webp', '16000000', 70, 5),
    new phone('iPhone 18', './assets/image/iphone.webp', '17000000', 80, 6),
]

let SamsungList = [
    new phone('Galaxy S10', './assets/image/samsung.webp', '10000000', 20, 0),
    new phone('Galaxy S20', './assets/image/samsung.webp', '12000000', 30, 1),
    new phone('Galaxy S30', './assets/image/samsung.webp', '13000000', 40, 2),
    new phone('Galaxy S40', './assets/image/samsung.webp', '14000000', 50, 3),
    new phone('Galaxy S50', './assets/image/samsung.webp', '15000000', 60, 4),
    new phone('Galaxy S60', './assets/image/samsung.webp', '16000000', 70, 5),
    new phone('Galaxy S70', './assets/image/samsung.webp', '17000000', 80, 6),
]

let PixelList = [
    new phone('Google Pixel 1', './assets/image/pixel.webp', '10000000', 20, 0),
    new phone('Google Pixel 2', './assets/image/pixel.webp', '12000000', 30, 1),
    new phone('Google Pixel 3', './assets/image/pixel.webp', '13000000', 40, 2),
    new phone('Google Pixel 4', './assets/image/pixel.webp', '14000000', 50, 3),
    new phone('Google Pixel 5', './assets/image/pixel.webp', '15000000', 60, 4),
    new phone('Google Pixel 6', './assets/image/pixel.webp', '16000000', 70, 5),
    new phone('Google Pixel 7', './assets/image/pixel.webp', '17000000', 80, 6),
]

function addToCart(name, image, price, inventory) {
    let check = false;
    const index = cart.findIndex(item => item.name === name);
    if (index == -1)
    {
        cart.push(new phone(name, image, price, inventory, cartCount));
        cartCount+=1;
    }
    updateCartIcon();
    displayCart()
}

function updateCartIcon() {
    const cartIcon = document.getElementById("nav_cart");
    cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping cart_icon"></i><div style="font-weight:bold">${cartCount}</div>`;
}

function closeModal() {
    document.getElementById("cart_modal").style.display = `none`;
}

function closeModalNew() {
    document.getElementById("new_modal").style.display = `none`;
}

function openModal() {
    document.getElementById("cart_modal").style.display = `flex`;
}

function openModalNew() {
    document.getElementById("new_modal").style.display = `flex`;
}

function addQuantity(element, price) {
    let cartQuantity = element.parentElement.querySelector('.cart_item_quantity');
    cartQuantity.innerText = parseInt(cartQuantity.innerText) + 1;
    let amount = parseInt(cartQuantity.innerText) * price;
    element.parentElement.nextElementSibling.innerText = amount.toLocaleString();
}

function minusQuantity(element, price) {
    let cartQuantity = element.parentElement.querySelector('.cart_item_quantity');
    if (parseInt(cartQuantity.innerText) > 1) {
        cartQuantity.innerText = parseInt(cartQuantity.innerText) - 1;
    }
    let amount = parseInt(cartQuantity.innerText) * price;
    element.parentElement.nextElementSibling.innerText = amount.toLocaleString();
}

function displayCart() {
    let result = ''
    if (cart.length != 0) {
        let cartLenght = cart.length
        for (let i = 0; i < cartLenght; i++) {
            result += `
                        <div class="cart_modal_item">
                            <div style="display: flex; align-items: center;">
                                <img src="${cart[i].image}" alt="" class="cart_img">
                                <div class="cart_modal_item_name">
                                    ${cart[i].name}
                                </div>
                            </div>
                            <div class="cart_modal_item_quantity">
                                <div class="cart_item_adjust red" style="padding-bottom: 8px;" onclick="minusQuantity(this, ${cart[i].price})" onmousedown="return false;">
                                    -
                                </div>
                                <div class="cart_item_quantity">
                                    1
                                </div>
                                <div class="cart_item_adjust blue" style="padding-bottom: 5px" onclick="addQuantity(this, ${cart[i].price})" onmousedown="return false;">
                                    +
                                </div>
                            </div>
                            <div class="cart_modal_item_amount">
                                ${parseInt(cart[i].price).toLocaleString()}
                            </div>
                            <div class="cart_modal_trash red" onclick="removeCartItem('${cart[i].name}')">
                                <i class="fa-solid fa-trash-can"></i>
                            </div>
                        </div>
                        `
        }
        document.getElementById("displayCart").innerHTML = result
    }
    else
    {
        document.getElementById("displayCart").innerHTML = `<div style="width:100%;height:350px;display:flex;justify-content:center;align-items:center;">
                                                                Not found product!
                                                            </div>`
    }
}

function removeCartItem(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
        cart.splice(index, 1);
    }
    cartCount -= 1;
    updateCartIcon();
    displayCart();
}

function addNew() {
    let phoneTitle = document.getElementById("titlePhoneList").value
    let phoneName = document.getElementById("phoneName").value
    let phonePrice = document.getElementById("phonePrice").value
    let inven = document.getElementById("inventory").value
    let img = ''
    switch (phoneTitle){
        case 'iPhoneList':
            img = './assets/image/iphone.webp'
            break;
        case 'SamsungList':
            img = './assets/image/samsung.webp'
            break;
        default:
            img = './assets/image/pixel.webp'
    }
    if(phoneName == '')
    {
        alert("Vui lòng nhập tên sản phẩm")
    }
    else if(phonePrice == '')
    {
        alert("Vui lòng nhập giá sản phẩm")
    }
    else if(inven == '')
    {
        alert("Vui lòng nhập số lượng tồn kho")
    }
    else
    {
        if(phoneTitle == 'iPhoneList')
        {
            let index = iPhoneList.length
            iPhoneList.push(new phone(phoneName,img,phonePrice,inven,index))
            if(currentList == 'iphone')
            {
                listPhone(iPhoneList,'iphone') 
            }
        }
        else if(phoneTitle == 'SamsungList')
        {
            let index = iPhoneList.length
            SamsungList.push(new phone(phoneName,img,phonePrice,inven,index))
            if(currentList == 'samsung')
            {
                listPhone(SamsungList,'samsung') 
            }
        }
        else
        {
            let index = iPhoneList.length
            PixelList.push(new phone(phoneName,img,phonePrice,inven,index))
            if(currentList == 'pixel')
            {
                listPhone(PixelList,'pixel')
            }
        }
    }
}

let cart = [
]

let currentList = 'iphone'
let cartCount = 0;
listPhone(iPhoneList,'iphone');
displayCart();