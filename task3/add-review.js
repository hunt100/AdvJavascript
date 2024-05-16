/*
Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах.
Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
 */

let products;
try {
    products = JSON.parse(localStorage.getItem("products")) || [];
} catch (e) {
    products = [];
}

const button = document.querySelector("button");
button.addEventListener("click", function (e) {
    addCurrentReview();
});

function getProduct(productName) {
    let product = products.find(value => value.title === productName);
    if (!product) {
        product = {
            title: productName,
            reviews: []
        };
        products.push(product);
    }

    return product;
}

function addReviewToProduct(productName, reviewText) {
    let product = getProduct(productName);
    product.reviews.push(reviewText);
    localStorage.setItem("products", JSON.stringify(products));
}

function addCurrentReview() {
    const productName = document.querySelector("input").value;
    const reviewText = document.querySelector("textarea").value;

    if (!reviewText || !productName) {
        throw new Error("Please enter a review and product name");
    }

    addReviewToProduct(productName, reviewText);
}
