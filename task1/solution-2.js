/*
Задание 2

Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

Повара и их специализации:

Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
 */

class Cook {
    constructor(firstname, speciality) {
        this.firstname = firstname;
        this.speciality = speciality;
    }

    showInfo(dish) {
        return `${this.firstname} приготовит блюдо ${dish}`;
    }

}

let c1 = new Cook("Виктор", "Пицца");
let c2 = new Cook("Ольга", "Суши");
let c3 = new Cook("Дмитрий", "Десерты");

const dishesMapByCook = new Map();

dishesMapByCook.set(c1, new Set(["Пицца \"Маргарита\"", "Пицца \"Пепперони\""]));
dishesMapByCook.set(c2, new Set(["Суши \"Филадельфия\"", "Суши \"Калифорния\""]));
dishesMapByCook.set(c3, new Set(["Тирамису", "Чизкейк"]));

const orders = new Map();
orders.set("Алексей", new Set(["Пицца \"Пепперони\"", "Тирамису"]))
orders.set("Мария", new Set(["Суши \"Калифорния\"", "Пицца \"Маргарита\""]))
orders.set("Ирина", new Set(["Чизкейк"]))

function displayOrders() {
    for (let entry of orders.entries()) {
        let dishes = [...entry[1]];
        console.log(`Клиент ${entry[0]} заказал: ${dishes}`);
        for (let dish of dishes) {
            const responsibleCooks = [...dishesMapByCook]
                .filter(k => {
                    let values = k[1];
                    return values.has(dish)
                })
                .map(el => el[0]);
            responsibleCooks.forEach(value => console.log(value.showInfo(dish)));
        }
    }
}

displayOrders();
