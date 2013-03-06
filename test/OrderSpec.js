describe("Order viewmodel", function() {
    var viewModel, pizzaViewModel;

    beforeEach(function() {
        //given
        pizzaViewModel = new ViewModel([{name: 'classic', price: 180},
            {name: 'large', price: 240}]);
        viewModel = new OrderViewModel(pizzaViewModel);

    });

    it("initializes", function() {
        expect(pizzaViewModel.pizzas().length).toEqual(2);
        expect(viewModel.orders().length).toEqual(0);
    });

    it("add a pizza  with quantity", function() {
        //when
        viewModel.selectedPizza(pizzaViewModel.pizzas()[1]);
        viewModel.qty(2);
        viewModel.add();
        //then
        expect(viewModel.selectedPrice()).toEqual(480);

        //when
        viewModel.selectedPizza(pizzaViewModel.pizzas()[0]);
        viewModel.qty(2);
        viewModel.add();
        //then
        expect(viewModel.selectedPrice()).toEqual(360);
        expect(viewModel.totalPrice()).toEqual((480+360));
    });


})