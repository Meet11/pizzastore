var Pizza = function(name, price) {
    this.name = name;
    this.price = price;
}

var ViewModel = function (initialStock) {
    var self = this;

    self.pizzaName = ko.observable("");
    self.pizzaPrice = ko.observable("");

    self.pizzas = ko.observableArray(ko.utils.arrayMap(initialStock, function(pizza) {
        return {name: pizza.name, price: pizza.price}
    }));

    self.remove = function(pizza) {
        $.each(self.pizzas(), function() { findAndRemove(self, pizza.name) })
    };

    self.add = function(pizza) {
        self.pizzas.push({name: self.pizzaName(), price: self.pizzaPrice()});
        self.pizzaName('');
        self.pizzaPrice('');
    };

    //private
    function findAndRemove(self, value) {
        self.pizzas(_(self.pizzas()).reject(function(el) {
           return el.name === value;
       }));
    }
}

