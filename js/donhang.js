let cart = JSON.parse(localStorage.getItem('cart')) || [];
const productList = document.querySelector('.product_list');
const productTotal = document.querySelector('.product_total');

const removeCart = (key) => {
    cart = cart.filter(e => e.key !== key);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

let total = 0;
cart.forEach(e => {
    productList.innerHTML += `<tr>
                <td>
                    <img src="${$products[e.key].photo}" width="200px" alt="${$products[e.key].name}"/>
                </td>
                <td>${$products[e.key].name}</td>
                <td>${$products[e.key].description}</td>
                <td>${e.count}</td>
                <td>${$products[e.key].price}đ</td>
                <td>${$products[e.key].price * e.count}đ</td>
                <td>
                    <div class="cart_icon" onclick="removeCart(${e.key})">
                    <i class="fas fa-trash-alt"></i>
                    </div>
                </td>
            </tr>`;

    total += $products[e.key].price * e.count;
})

productTotal.innerHTML += `
        <tr>
            <td colspan="6">
            Tổng thành tiền (A) = ${total}đ
            </td>
            <td></td>
        </tr>

        <tr>
            <td colspan="6">
            Chiết khấu (B) = 0.1 x B = ${total * 0.01}đ
            </td>
            <td></td>
        </tr>

        <tr>
            <td colspan="6">
            Thuế (C) = 1% x (A - B) = ${(total - (total * 0.01)) * 0.01}đ
            </td>
            <td></td>
        </tr>
        <tr>
            <td colspan="6">
            Tiền vận chuyển (D) =${total * 0.05} đ
            </td>
            <td></td>
        </tr>

        <tr>
            <td colspan="6">
            Tổng đơn hàng = A - B + C + D = ${((total - (total * 0.01) + (total - (total * 0.01)) * 0.01) + (total * 0.05))}đ
            </td>
            <td></td>
        </tr>

        <tr>
            <td colspan="6">
            <button class="shopping" onclick="myFunction()">Đặt hàng</button>
            </td>
            <td></td>
        </tr>`

function myFunction(key) {
  alert("Đặt hàng thành công.");
   // removeCart(cart);
    //location.reload();
    cart = cart.filter(e => e.key == key);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();  


}
