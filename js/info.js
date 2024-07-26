//TODO РАСПЫЛЕНИЕ
// const a = [1,2,3,4];

//  const d = [9,10,11,12]

// const b = console.log(...a)

// const c = {...[ ...a, ...d]}

//  console.log(c)

//todo spread:
// const myObj = {}; // Создаем пустой объект
// myObj = { ...myObj, newKey: "новое значение" }; // Добавляем новый ключ

//TODO ДЕСТРУКТОРИЗАЦИЯ

// -------------------------------------------------------------
// const mas = [1,2,3,4,5,6]
// const [v,b,n,h,g,f] = mas;
// console.log(v,b,n,h,g,f);
// -------------------------------------------------------------

//  const autors = {
//  	den: 10,
//  	jon:9,
//  	jak:5,
// 	lusi:8,
//  };

// -------------------------------------------------------------
// //1
// const {den, jon, jak, lusi} = autors;
// const max = Math.max(den,jon,jak,lusi);
// console.log(max)
// -------------------------------------------------------------

// -------------------------------------------------------------
// //2
// const mas = Object.values(autors);
// console.log(Math.max(...mas))
// -------------------------------------------------------------

// -------------------------------------------------------------
// //3
// const masValues = Object.entries(autors);
// console.log(masValues)

//TODO РЕСТ - сбор остального

// const autors = {
// 	den: 10,
// 	jon:9,
// 	jak:5,
// 	lusi:8,
// };

// const {den, lusi, ...restProps} = autors;

// console.log(restProps)

//TODO #region ПЕРЕБОР ОБЪЕКТА В МАССИВЕ с помощью методов map, sort, reduce, filter
////-----------------------------------------------------------------------------------------------
let friends = [
  { id: 1, name: "Vova", age: 20, budget: 2400, isComplete: true },
  { id: 2, name: "Sara", age: 22, budget: 3500, isComplete: false },
  { id: 3, name: "Mike", age: 30, budget: 300, isComplete: true },
  { id: 4, name: "Bob", age: 16, budget: 200, isComplete: false },
];
//!-----------------------------------------------------------------------------------------------
// function disconds (item, diskond){
// return item.map( itm => ({...itm, budget: itm.budget - (itm.budget * diskond)}))}
// console.table(disconds(friends, 0.2))
//!-----------------------------------------------------------------------------------------------
//!-----------------------------------------------------------------------------------------------
//* двойной фильтер
function filt(items, age, value) {
  return items
    .filter(({ age: yers, budget }) => yers > age && value < budget)
    .filter(({ isComplete: isCompl }) => isCompl);
}
console.table(filt(friends, 18, 1000));
//!-----------------------------------------------------------------------------------------------
//!-----------------------------------------------------------------------------------------------
//* сортировка
// function sortItemMinToMax (items){
// return [...items].sort((a, b) => a.budget - b.budget)
// }
//!-----------------------------------------------------------------------------------------------
//!-----------------------------------------------------------------------------------------------
//* сортировка
//  const sortItemMinToMax = items => [...items].sort((a,b) => a.budget - b.budget);
// const sortItemMaxToMin = items => [...items].sort((a,b) => b.budget - a.budget)
// console.table(sortItemMinToMax(friends))
// console.table(sortItemMaxToMin(friends))
//!-----------------------------------------------------------------------------------------------
//!-----------------------------------------------------------------------------------------------
//* сортировка
// function sortAskOrDesk (items, sortAB){
// if (sortAB === 'ask'){
// 	return [...items].sort((a,b) => a.name.localeCompare(b.name))
// }else {
// 	return [...items].sort((a,b) => b.name.localeCompare(a.name))
// }
// }
//!-----------------------------------------------------------------------------------------------

//* КОМБИНАЦИИ

//!-----------------------------------------------------------------------------------------------
// const sortAskOrDesk = (items, sortAB) =>[...items].sort((a,b) => sortAB === 'ask' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
// console.table(sortAskOrDesk(friends, 'ask'))
// console.table(sortAskOrDesk(friends, 'desk'))
//!-----------------------------------------------------------------------------------------------
//!-----------------------------------------------------------------------------------------------
//*  количество Badget
// 	console.log ('---------------------------------------------------------------------------------------------')
// 	console.log ('количество Badget')
// const totalBadget = items => items.reduce((acc, {budget}) => acc + budget,0)
// console.log(totalBadget(friends))
//!-----------------------------------------------------------------------------------------------

//todo способы добавления ключей в объект

//!-----------------------------------------------------------------------------------------------
//1 Динамическое имя ключа (если имя ключа неизвестно до момента выполнения)
// const key1 = 'key1';
// const key2 = 'key2';

// const object = {};

// object[key1] = 3;

// object[key2] = 4;

// console.log(object)
//!-----------------------------------------------------------------------------------------------
//!-----------------------------------------------------------------------------------------------
// const myObj1 = {}; // Создаем пустой объект
// myObj1.newKey = "новое значение"; // Добавляем новый ключ
//!-----------------------------------------------------------------------------------------------

//todo Классы
//!-----------------------------------------------------------------------------------------------
//#region class User
// class User {
// 	static caunter = 0;
// 	static getCaunt (){
// 		this.caunter +=1
// 	}
// 	#location
// 	constructor ({name, email, password, age = 18, location = 'world'}){
// 		this.name = name;
// 		this.email = email;
// 		this.password = password;
// 		this.age = age;
// 		this.#location = location;
// 		User.getCaunt()
// 	}
// 	get locale(){
// 		return this.#location
// 	}
// 	set locale (city){
// 		this.#location = city
// 	}
// }

// const admin = new User ({location: 'Kherson', password: 'hghghghghg', name: 'Denys', email: 'test@gmail.com'})
// admin.locale = 'Dnipro'
// console.log(admin)

// class Avatar extends User {
// 	constructor({name, email, password, age, location, damage}){
// 		super({name, email, password, age, location})
// 		this.damage = damage
// 	}
// }

// const user1 = new Avatar ({location: 'Kherson', password: 'hghghghghg', name: 'Denys', email: 'test@gmail.com', damage: 500})
// console.log(user1)
//#endregion
//!-----------------------------------------------------------------------------------------------
//!-----------------------------------------------------------------------------------------------
//#region class User
// class User {
// 	#login;
// 	#email;
// 	constructor ({login, email}){
// 		this.#login = login;
// 		this.#email = email;
// 	}

// 	get login () {
// 		return this.#login;
// 	}
// 	set login (newLog){
// 		if(this.#login !== newLog){
// 			this.#login = newLog;
// 		}
// 	}

// 	get email () {
// 		return this.#email;
// 	}
// 	set email (newMail){
// 		if (this.#email !== newMail){
// 			this.#email = newMail;
// 		}
// 	}

// }

// const mango = new User ({login : 'Mango', email : 'mango@god.wolf'})

// console.log(mango.login = 'den')
//#endregion
//!-----------------------------------------------------------------------------------------------
//#region class Notes
// class Notes {

// 	static priority = {
// 		LOW : 'low',
// 		NORMAL : 'normal',
// 		HIGHT : 'hight',
// 	};

// 	constructor(items){
// 		this.items = items;
// 	}
// 	addNote (note) {
// 		const check = this.items.some(({text}) => text === note.text)
// 		if (!check){
// 			this.items.push(note);
// 		}
// 	}
// 	removeNote (note){
// 		const inx = this.items.findIndex(({text}) => text === note )
// 		if (!!~inx){//inx !== -1
// 			this.items.splice(inx, 1)
// 		}
// 	}
// 	updatePriority(note, newPrio){
// 		const check = this.items.some(({text}) => text === note);
// 		if (check){
// 			this.items.priority = newPrio
// 		}
// 	}
// }

// const myNotes = new Notes ([])

// myNotes.addNote({
// 	text : 'my first',
// 	priority : Notes.priority.LOW,
// })

// myNotes.addNote({
// 	text : 'my second',
// 	priority : Notes.priority.LOW,
// })

// myNotes.removeNote('my second')

// myNotes.updatePriority('my first', Notes.priority.HIGHT)
// console.log(myNotes)
//#endregion
//!-----------------------------------------------------------------------------------------------


//todo JSON
//!-----------------------------------------------------------------------------------------------
//* JSON.parse("ключ", "value");
//* JSON.stringify("ключ", "value");
//! Спочатку виконується код всередині блоку try.
//!Якщо помилки відсутні, блок catch ігнорується й управління передається далі.
//!Якщо в блоці try сталася помилка, його виконання зупиняється та інтерпретатор переходить до блоку catch.
//!Використовуючи конструкцію try...catch, можна обробити цей виняток таким чином, щоб скрипт за межами цієї конструкції продовжив працювати, навіть у разі помилки.
//* Перехоплення помилки
// try {
// 	const data = JSON.parse('{"name":"Mango","age":3,"isGoodBoy":true}');
//   } catch (error) {
// 	console.log(error.name); // "SyntaxError"
// 	console.log(error.message); // Unexpected token W in JSON at position 0
//   }
// const b = [23,44,55]

// const a = [1,1,2,3,4,5, ...b]
//!-----------------------------------------------------------------------------------------------

//todo import
//!-----------------------------------------------------------------------------------------------
import {sortWordFromAtoB as funkSortWordFromAtoB, arrNumToArrOfDivisors, getCommonDigits, takeStrToObj} from './tasks';

console.log(funkSortWordFromAtoB('word'));
console.log(arrNumToArrOfDivisors([56,44,22,66,3,65,22]));
console.log(getCommonDigits(2233, 1222));
console.log(takeStrToObj('bksdbalsLXNbccbdhkahvckahsvcaskhvckacblcLVLcv'));//!-----------------------------------------------------------------------------------------------