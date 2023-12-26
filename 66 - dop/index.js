import { getProducts } from "./requests.js";
import { getCategories } from "./requests.js";
import { fetchSearchByProducts } from "./requests.js";
import { fetchProductsByCategory } from "./requests.js";
// python3 -m http.server 8900
const products = document.querySelector('.js-products')
const select = document.querySelector('.js-select')
const search = document.querySelector('.js-search')

const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

const createProductCards = (productList) => {
    products.innerHTML = ''
    productList.products.forEach((product) => {
            const cardTemplate = 
            `<div class="product">
                <img class="product__img" src=${product.thumbnail} alt="">
                <div class="product__body">
                    <p class="product__price">${formatter.format(product.price)}</p>
                    <h2 class="product__title">${product.title}</h2>
                    <p class="product__descr">${product.description}</p>
                    <p class="product__brand">Brand: <span>${product.brand}</span></p>
                    <p class="product__category">Category: <span>${product.category}</span></p>
                </div>
                <div class="product__footer">
                    <div class="rating product__rating">
                        <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <p class="rating__value">${product.rating}</p>
                    </div>
                </div>
            </div>`
            products.insertAdjacentHTML('beforeend',cardTemplate);
        })
}
const createCategoryOptions = (categoryList) => {
    categoryList.forEach((category) => {
        const option = document.createElement('option')
        option.textContent = category
        select.append(option)
    })
}

getProducts().then(createProductCards)
getCategories().then(createCategoryOptions)

const handleSelectChange = (e) => fetchProductsByCategory(e.currentTarget.value).then(createProductCards)
const handleSearchChange = (e) => fetchSearchByProducts(e.currentTarget.value).then(createProductCards)

select.addEventListener('change',handleSelectChange)
search.addEventListener('input',handleSearchChange)