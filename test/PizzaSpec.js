describe("Pizza viewmodel", function() {
    var viewModel;

    beforeEach(function() {
        viewModel = new ViewModel([{name: 'classic', price: 180},
            {name: 'large', price: 240}]);
    });

    it("initializes", function() {
        expect(viewModel.pizzas().length).toEqual(2);
        expect(viewModel.pizzas()[0].name).toEqual('classic');
        expect(viewModel.pizzas()[0].price).toEqual(180);
    });

    it("remove", function() {
        viewModel.remove(new Pizza('large', 240));
        expect(viewModel.pizzas().length).toEqual(1);
        expect(viewModel.pizzas()[0].name).toEqual('classic');
        expect(viewModel.pizzas()[0].price).toEqual(180);
    });

    it("add", function() {
        viewModel.pizzaName('unknown');
        viewModel.pizzaPrice(100);
        viewModel.add();
        expect(viewModel.pizzas().length).toEqual(3);
        expect(viewModel.pizzas()[2].name).toEqual('unknown');
        expect(viewModel.pizzas()[2].price).toEqual(100);
    });

    /*it("add should throw an Error if price NaN", function() {
        viewModel.pizzaName('unknown');
        viewModel.pizzaPrice('test');
        expect(function(){viewModel.add()}).toThrow(new Error('Pizza: invalid price'));
        expect(viewModel.pizzas().length).toEqual(2);
    });*/
})