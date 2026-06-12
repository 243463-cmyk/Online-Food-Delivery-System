class Order {
    constructor(id, food, price) {
        this.id = id;
        this.food = food;
        this.price = price;
    }

    displayOrder() {
        console.log(`Order ID: ${this.id}`);
        console.log(`Food: ${this.food}`);
        console.log(`Price: ${this.price}`);
    }
}

const order1 = new Order(1, "Burger", 500);
order1.displayOrder();