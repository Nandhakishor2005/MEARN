class Item {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
        this.totalAmount = 0;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    updateQuantity(id, newQuantity) {
        let item = this.items.find(item => item.id === id);

        if (item) {
            item.quantity = newQuantity;
        }
    }

    calculateTotal() {
        this.totalAmount = 0;

        for (let item of this.items) {
            this.totalAmount += item.price * item.quantity;
        }

        return this.totalAmount;
    }

    applyDiscount(percentage) {
        this.totalAmount =
            this.totalAmount - (this.totalAmount * percentage / 100);
    }

    displayCart() {
        for (let item of this.items) {
            console.log(
                `${item.name} - ${item.price} x ${item.quantity}`
            );
        }

        console.log("Total:", this.totalAmount);
    }
}

let item1 = new Item("I1", "Laptop", 1000, 1);
let item2 = new Item("I2", "Mouse", 50, 2);
let item3 = new Item("I3", "Keyboard", 100, 1);

let cart = new ShoppingCart();

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

cart.updateQuantity("I1", 2);

cart.removeItem("I3");

cart.calculateTotal();
cart.applyDiscount(10);

cart.displayCart();