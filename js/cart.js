// const cart = {
// 	items: [],

// 	getItems () {
// 		return this.items;
// 	}, // вызываються из items

// 	add (product) {
// 		for (const item of this.items) {
// 			if (item.name === product.name){
// 				item.quantity += 1
// 				return;
// 			}
// 		}
// 		const newProduct = {
// 			...product,
// 			quantity: 1,
// 		}
// 		return this.items.push(newProduct);
// 	}, 

// 	remove (productName) {
// 		for (let i = 0; i < this.items.length; i+=1) {
// 			const {name} = this.items[i]
// 			if (productName === name) {
// 				return this.items.splice(name, 1);
// 			}
// 		}
// 	},


// 	clear () {
// 		return this.items = [];
// 	}, 


// 	countingTotalPrice () {
// 		let total = 0;
// 		for(let i = 0; i < this.items.length; i+=1){
// 			total+=this.items[i].price * this.items[i].quantity;
// 		}
// 		return total;
// 	}, 


// }



// //добавил товары в items
// cart.add({name: 'apple', price: 30});
// cart.add({name: 'lemon', price: 50});
// cart.add({name: 'lemon', price: 50});
// cart.add({name: 'banane', price: 20});
// cart.add({name: 'banane', price: 20});
// cart.add({name: 'pineapple', price: 70});
// cart.add({name: 'orange', price: 40});

// //получил товары
// console.table(cart.getItems())

// //удалил один товар
// console.log(cart.remove('apple'));

// //Проверил товары
// console.table(cart.getItems())

// //Подсчитал цену
// console.log(cart.countingTotalPrice())