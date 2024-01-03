var products = [
  {
    photo: 'img/big-mac.png',
    name: 'Big Mac',
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: 'img/mc-chicken.png',
    name: 'Mc Chicken',
    price: 4.99,
    active: false,
    quantity: 1,
  },
  {
    photo: 'img/double-cb.png',
    name: 'Double Cheese Burger',
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: 'img/fries.png',
    name: 'Fries',
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: 'img/nuggets.png',
    name: 'Mc Nuggets',
    price: 3.49,
    active: false,
    quantity: 1,
  },
  {
    photo: 'img/salad.png',
    name: 'Salad',
    price: 2.79,
    active: false,
    quantity: 1,
  },
  {
    photo: 'img/cola.png',
    name: 'Coke',
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: 'img/lipton.png',
    name: 'Ice Tea',
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: 'img/water.png',
    name: 'Water',
    price: 1.49,
    active: false,
    quantity: 1,
  },
];

//Declarative rendering
const SelfServiceMachine = {
  //Function to our data - Holds the data state for the whole app - now we can use the message key on our html!! - We can inject data directly to the html from our js file
  data() {
    return {
      message: 'Pick your items',
      products: window.products,
    };
  },

  methods: {
    total: function () {
      let total = 0;
      for (let product of this.products) {
        if (product.active) {
          total += product.quantity * product.price;
        }
      }
      return total.toFixed(2);
    },
  },
};

//Setup the app with the #app html container
Vue.createApp(SelfServiceMachine).mount('#app');
