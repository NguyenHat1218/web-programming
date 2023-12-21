const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const searchResult = document.querySelector('.search_result');

$products.forEach(product => {
    if (product.name.toLowerCase().indexOf(params.keyword.toLowerCase()) !== -1)
        searchResult.innerHTML += `
        <div class="search_product">

            <img class="img" src="${product.photo}"/>
            <div class="search_product_name">
                ${product.name}
            </div>
            <div class="product_nav">
                 Số lượng
                 <input type="number" id="${product.id}" />
                 <button>
                     Đặt hàng
                  </button>
             </div>
        </div>`
});
const products = document.querySelectorAll('.search_product');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const addToCart = (input, key) => {
        
    if (input.value <= 0 || input.value > 100){
         alert('Số lượng phải nằm từ 1 đến 100');
    }else{
        alert("Đã thêm vào giỏ hàng.");
    }
        
    let added = false;

    cart = cart.map(e => {
        if (e.key === key) {
            added = true;
            return {
                ...e,
                count: e.count + parseInt(input.value),
            };
        }
        return e;
    });

    if (!added)
        cart.push({
            key,
            count: parseInt(input.value) || 0,
        })

    localStorage.setItem('cart', JSON.stringify(cart));
}

products.forEach((product, key) => {
    
    const input = product.querySelector('input');
    const button = product.querySelector('button');
    const id = product.querySelector('input').getAttribute('id');

    button.addEventListener('click', () => addToCart(input,parseInt(id)));
    input.addEventListener('keydown', event => {
        if (event.code === 'Enter')
            addToCart(input, id);
    })

})