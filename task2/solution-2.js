/*
Задание 2

Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
{
product: "Apple iPhone 13",
reviews: [
{
id: "1",
text: "Отличный телефон! Батарея держится долго.",
},
{
id: "2",
text: "Камера супер, фото выглядят просто потрясающе.",
},
],
},
{
product: "Samsung Galaxy Z Fold 3",
reviews: [
{
id: "3",
text: "Интересный дизайн, но дорогой.",
},
],
},
{
product: "Sony PlayStation 5",
reviews: [
{
id: "4",
text: "Люблю играть на PS5, графика на высоте.",
},
],
},
];
 */

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const main = document.querySelector(".content");
function prepareInitData() {
   for (let product of initialData) {
       const divElement = document.createElement("div");
       divElement.id = product.product;
       const h3Element = document.createElement("h3");
       h3Element.textContent = product.product;
       divElement.append(h3Element);
       for (let reviews of product.reviews) {
           const pElement = document.createElement("p");
           pElement.textContent = reviews.text;
           divElement.append(pElement);
       }
       main.append(divElement);
   }
}

function addCurrentReview(currentBtn) {
    const parentDivNode = currentBtn.parentNode;
    const reviewText = parentDivNode.querySelector("textarea").value;

    if (!isValidReview(reviewText)) {
        throw new Error(`Review text "${reviewText}" is invalid by rule: less than 50 symbols, or greater than 500 symbols.`);
    }

    const productSelect = parentDivNode.querySelector("select");
    const product = productSelect.value;

    const productElement = document.getElementById(product);
    let newReviewElement = document.createElement("p");
    newReviewElement.textContent = reviewText;
    productElement.appendChild(newReviewElement);
}

function isValidReview(content) {
    return content.length >= 50 && content.length < 500;
}

const button = document.querySelector("button");
button.addEventListener("click", function (e) {
    addCurrentReview(this);
});

prepareInitData();
