let products;
try {
    products = JSON.parse(localStorage.getItem("products")) || [];
} catch (e) {
    products = [];
}

let mainElement = document.querySelector(".content");

function changeReviewState(element) {
    const parentElement = element.parentElement;
    const reviewElement = parentElement.querySelector(".review-content");
    if (reviewElement.classList.contains("is-hidden")) {
        reviewElement.classList.remove("is-hidden");
    } else {
        reviewElement.classList.add("is-hidden");
    }
}

function removeReview(productName, review, btn) {
    btn.parentElement.removeChild(btn.parentElement.querySelector("p"));
    btn.parentElement.removeChild(btn);

    const product = getProduct(productName);
    const reviews = product.reviews;
    const index = reviews.indexOf(review);
    reviews.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
}

function getProduct(productName) {
    let product = products.find(value => value.title === productName);
    if (!product) {
        throw new Error(`Not existing product ${productName}`);
    }

    return product;
}

const showElements = () => {
    for (let product of products) {
        const productElement = document.createElement("div");
        const productName = document.createElement("span");
        productName.classList.add("heading");
        productName.textContent = product.title;
        productElement.appendChild(productName);
        productName.addEventListener("click", function (e) {
            changeReviewState(this);
        });

        const reviewsElement = document.createElement("div");
        reviewsElement.classList.add("review-content", "is-hidden");
        for (let review of product.reviews) {
            const reviewElement = document.createElement("div");
            const reviewText = document.createElement("p");
            reviewText.textContent = `Отзыв: ${review}`;
            reviewElement.appendChild(reviewText);

            const deleteReview = document.createElement("button");
            deleteReview.textContent = "Удалить";
            deleteReview.addEventListener("click", function (e) {
                removeReview(product.title, review, this);
            })
            reviewElement.appendChild(deleteReview);
            reviewsElement.appendChild(reviewElement);
        }
        productElement.appendChild(reviewsElement)

        mainElement.appendChild(productElement);
    }
}

showElements();
const addReviewAnchor = document.createElement("a");
addReviewAnchor.href = "add-review.html";
addReviewAnchor.textContent = "Добавить отзыв";
mainElement.appendChild(addReviewAnchor);
