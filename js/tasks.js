//!-----------------------------------------------------------------------------------------------
// #region "switch" пошук зі списку "case"

// стоимость
// let cost;
// let asses;
// первый вариант покупки
// const lvl1 = "free"
// второй вариант покупки
// const lvl2 = "pro"
// третий вариант покупки
// const lvl3 = "premium"
// let a = prompt ("У нас в асортементе есть 3 вида акаунта Free, Pro, Premium. Какой акаунт выберите?") //баннер с выбором акаунта

// поиск выбраного клиентом акаунта и открытие его доступа
// switch (a.toLowerCase()) {
//доступ первого уровня
// case lvl1:
// 	cost = "is-open-1" //тут функция добавления "toggle" к страничке класов которые открывают доступ
// 	asses = "Вам открыт доступ Free уровня"
// break;
//доступ второго уровня
// case lvl2:
// 	cost = "is-open-2" //тут функция добавления "toggle" к страничке класов которые открывают доступ
// 	asses = "Вам открыт доступ pro уровня"
// break;
//доступ третьего уровня
// 	case lvl3:
// 		cost = "is-open-3" //тут функция добавления "toggle" к страничке класов которые открывают доступ
// 		asses = "Вам открыт доступ premium уровня"
// 	default :

// 	break;
// }

// alert (asses);

// #endregion
//!-----------------------------------------------------------------------------------------------

//!-----------------------------------------------------------------------------------------------
// #region Возведение в степень

// let x = prompt("Введите число для возведения в степень");
// let y = prompt("введите степень которая будет возводить это число");
// let c = confirm("Ваш результакт: " + Math.pow(x, y));

// let x = prompt("Введите число для возведения в степень");
// x = Number.parseFloat(x);
// x = Number(x.toFixed(2));
// let y = prompt("введите степень которая будет возводить это число");
// y = Number.parseFloat(y);
// y = Number(y.toFixed(2));

// #endregion
//!-----------------------------------------------------------------------------------------------

//!-----------------------------------------------------------------------------------------------

// #region крутое применение if,else, &&, ||

// const x1 = 20;
// const x2 = 100;

// let number = prompt("Введите число а мы сравним его с данными");
// number = Number.parseFloat(number);
// number = number.toFixed(3);
// number = Number(number);

// Первое условие < x1
// if (number < x1) {
// 	alert(`Ваше число ${number} меньше чем 20`);
// } else {
// 	alert (`ваше число ${number} больше чем 20`);
// }

// Второе условие > x2
// if (number > x2) {
// 	alert (`Ваше число ${number} больше чем 100`);
// }else {
// 	alert (`Ваше число ${number} меньше чем 100`);
// }

// Третье условие > x1 && <x2

// if(number >= x1 && number <= x2){
// 	alert (`ваше число ${number} попадает во внутрь кординаты x1 и x2`);
// }else {
// 	alert (`ваше число ${number} не попадает во внутрь кординаты x1 и x2`);
// }

// Четвертое условие <x1 || >x2

// 1 вариант
// if (number <=x1){
// 	alert (`ваше число ${number} меньше или равно 20`);
// } else if (number >x1 && number <= x2) {
// 	alert (`ваше число ${number} больше 20 но меньше или равно 100`);
// } else {
// 	alert (`ваше число ${number} больше чем 100`);
// }
// 2 вариант
// if (number <= x1 || number >= x2){
// 	alert (`ваше число ${number} меньше или равно 20 или больше или равно 100`);
// } else {
// 	alert (`ваше число ${number} больше 20 но меньше чем 100`);
// }
// -------------------------------------------------------------
// let good;
// const online = confirm ("Ты в онлайне?");
// const friend = confirm ("Ты в списке друзей");
// const afk = confirm ("У тебя не включен режим не беспокоить");

// if (online && friend && afk) {
// 	let a = prompt ("как дела good or no?");
// 	if (a == good) {
// 		alert("рад за тебя");
// 	}else {
// 		alert("Будем верить в лучшее!")
// 	}

// }

// #endregion
//!-----------------------------------------------------------------------------------------------

//!-----------------------------------------------------------------------------------------------
// #region применение switch

// const option = 3;
// let message = "";

// switch (option) {
// 	case 1:
// 	message = console.log("вы сможете забрать товар завтра после 12:00");
// 	break;

// 	case 2:
// 		message = console.log("вы сможете забрать товар завтра после 13:00");
// 		break;

// 	case 3:
// 	message = console.log("вы сможете забрать товар завтра после 14:00");
// 	break;

// 	default:
// 		message = console.log("wtf")
// }

// #endregion
//!-----------------------------------------------------------------------------------------------

//!-----------------------------------------------------------------------------------------------
//#region Найдите пользователя в масиве.

// const baza = ["Denys", "Alex", "Liza", "Artem", "Jon", "Gilbert", "Dima", "Mira"];

// const login = "Liza";

// for (let i = 0; i<baza.length; i+=1){
// 	if (baza[i] === login) {
// 		console.log(`Пользователь ${login} найден`)
// 		break;
// 	}
// }

// for (const name of baza){
// 	if (name === login){
// 		console.log(`Пользователь ${login} найден`);
// 		break;
// 	}
// 		console.log(`Пользователь ${login} не найден`);
// }

// if (baza.includes(login)){
// 	console.log(`Пользователь ${login} найден`);
// }

// const a = baza.includes(login) ? console.log(`Пользователь ${login} найден`) : console.log(`Пользователь ${login} не найден`);

//#endregion
//!-----------------------------------------------------------------------------------------------

//!-----------------------------------------------------------------------------------------------
//#region Смена больших букв на маленикие и маленькие на большие

// let string = "HFddOlaA";
// let invertedString = '';
// string = string.split('')
// console.log(string)

// for (let i = 0; i<string.length; i+=1){

//1
// if (string[i] === string[i].toUpperCase()){
// 	console.log("эта буква в верхнем регистре " + string[i])
// 	invertedString = invertedString + string[i].toLowerCase()
// } else {
// 	invertedString = invertedString + string[i].toUpperCase()
// }

//2
// invertedString = string[i] === string[i].toUpperCase() ? invertedString += string[i].toLowerCase() : invertedString += string[i].toUpperCase();
// }

// console.log(invertedString)

//3
// const string = "aleksandR is degan";

// function invert (words) {
// let resultString = ""
// 	for(let i = 0; i < words.length; i+=1){
// 		if (words[i] === words[i].toLowerCase()){
// 			resultString += words[i].toUpperCase()
// 		} else {
// 			resultString += words[i].toLowerCase()
// 		}
// 	}
// return resultString;

// }

// const result = invert(string);
// console.log(result)

//#endregion
//!-----------------------------------------------------------------------------------------------

//todo Уровень 1.1

// #region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// const num = -1;

// if (num < 0) {
// 	console.log(`число ${num} отрицательное`)
// } else {
// 	console.log(`число ${num} положительное`)
// }

// function number (num) {
// 	if (num > 0){
// 		console.log("Число положительное")
// 	} else if (num === 0){
// 		console.log("Число равно 0")
// 	} else {
// 		console.log("Число отрицательное")
// 	}
// 	return num;
// }

// const x = number(-1)
// console.log (x)

// #endregion about

// #region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дана строка. Выведите в консоль длину этой строки.

// const text = "string";
// console.log(text.length);

// #endregion

// #region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дана строка. Выведите в консоль последний символ строки.

// const text = "string";
// console.log(text.slice(-1));

// #endregion

// #region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано число. Проверьте, четное оно или нет.

// const num = 9;

// if (num % 2 === 0) {
// 	console.log (`ваше число ${num} четное`);
// } else {
// 	console.log (`ваше число ${num} не четное`);
// }

//#endregion

// #region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const text1 = "qword";
// const text2 = "words";

// if (text1.charAt(0).toLowerCase() === text2.charAt(0).toLowerCase()) {
// 	console.log(`первые буквы слов  ${text1}, ${text2} совпадают`);
// } else {
// 	console.log(`первые буквы слов  ${text1}, ${text2} не совпадают`);
// }

// #endregion

// #region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// let word = "ветвь"
// word = word.trim().toLowerCase()

// const letter = "ь"

// if (word.slice(-1) === letter) {
// 	let x = word [word.length - 2]
// 	console.log(x)

// } else {
// 	console.log (word);
// }

//#endregion

//todo Уровень 1.2

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано число. Выведите в консоль последнюю цифру этого числа.

// let num = 45567;
// num = num.toString().slice(-1)
// num = Number(num)
// console.log(num)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано число. Выведите в консоль первую цифру этого числа.

// let num = 22313;

// num = Number(num.toString().charAt(0));
// console.log(num)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// let num = 3457;

// let result;

// result = Number(num.toString().charAt(0)) + Number(num.toString().slice(-1));
// console.log(result)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано число. Выведите количество цифр в этом числе.

// let num = 17126;

// num = num.toString().length;
// console.log(num);

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// let num1 = 23;
// let num2 = 23;

// num1= Number(num1.toString().charAt(0));
// num2= Number(num2.toString().charAt(0));

// if (num1 === num2) {
// 	console.log("числа совпадают")
// } else {
// 	console.log("числа не совпадают")
// }

//#endregion

//todo Уровень 1.3

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// let string = "some word";

// if (string.length > 1) {
// 	let letter = string[string.length - 2]
// 	console.log(letter)
// }

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Даны два целых числа. Проверьте, что первое число без остатка делится на второе.

// const num1 = 323;
// const num2 = 23;

// let result = (num1 / num2);

// result = Number.parseInt(result);
// console.log(result);

//#endregion

//todo Уровень 1.4

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Выведите в консоль все целые числа от 1 до 100.

// const num = 100

// for (let i = 1; i <= num; i+=1) {
// 	console.log(i)
// }

// function number (min, max) {
// for (let i = min; i<=max; i+=1) {
// 	console.log(i);
// }
// }

// number(1, 13)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Выведите в консоль все целые числа от -100 до 0.

// for (let i = -100; i <= 0; i+=1){
// 	console.log (i)
// }

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Выведите в консоль все целые числа от 100 до 1.

// for (let i = 100; i>=1; i-=1) {
// 	console.log(i)
// }

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Выведите в консоль все четные числа из промежутка от 1 до 100.

// for (let i = 1; i<=100; i+=1) {

// 	if (i % 2 === 0){
// 		console.log(`номер ${i}`)
// 	}
// }

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

// for(let i = 3; i<=100; i+=3){
// 	console.log(i);
// }

//#endregion

//todo Уровень 1.5

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Найдите сумму всех целых чисел от 1 до 100.

// let sum = 0;
// for (let i = 0; i<=100; i+=1) {
// 	sum = i + sum
// }
// console.log(sum)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Найдите сумму всех целых четных чисел в промежутке от 1 до 100.

// let sum = 0;

// for (let i = 0; i<=100; i+=1){
// 	if (i%2 === 0) {
// 		sum = i + sum
// 	}
// }
// console.log(sum)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.

// let sum = 0;

// for (let i = 0; i<=100; i+=1){
// 	if (i%2 !== 0){
// 		sum = i + sum
// 	}
// }
// console.log(sum)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Даны два целых числа. Найдите остаток от деления первого числа на второе.

// const num1 = 11;
// const num2 = 2;

// let sum;

// sum = num1 % num2;
// console.log(sum);

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

// let string = "hello world";

// string = string.split(' ');
// string = string.join('');

// console.log(string.length )

// for (let i = string.length - 1; i>=0; i-=1){
// 	console.log(string[i]);
// }

// let string1 = "hello world";

// for(const x of string1){
// 	console.log(x)
// }

//#endregion

//todo Уровень 1.6

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// const mas = [2,2,2,2];
// let sum = 0;

// for (let i = 0; i < mas.length; i+=1){
// 	sum += Math.pow(mas[i], 2);
// };

// console.log(sum);

// function array (mas){
// 	let sum = 0;
// 	for (let i = 0; i < mas.length; i+=1){
// 		sum += Math.pow(mas[i], 2)
// 	}
// 	return sum;

// }

// console.log(array([2,2,2,2]))

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// const mas = [4,4,4,4];
// let sum = 0;

//1

// for (let i = 0; i < mas.length; i+=1){
// 	sum += Math.sqrt(mas[i]);
// }

//2

// for (const masOne of mas){
// 	sum += Math.sqrt(masOne);
// };

// console.log(sum);

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан массив с числами. Найдите сумму положительных элементов этого массива.

// const mas = [1, -5, 6, 10, 4, -1];

// let sum = 0;

// for (let i = 0; i < mas.length; i += 1){
// 	if (mas[i] >= 0){
// 		sum += mas[i];
// 	};
// };

// console.log(sum);

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// const mas = [10, 5, 5, 5, 11, 20, 5, 6, 1];
// let caunt = 0;
// let sum = 0;

// for ( let i = 0; i < mas.length; i+=1){
// 	if (mas[i] > 0 && mas[i] < 10 && caunt !== 3) {
// 		sum += mas[i];
// 		caunt+=1
// 	}

// }

// console.log(sum);

//#endregion

//todo Уровень 1.7

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дана строка: "abcde" Получите массив букв этой строки.

// const text = "abcde";

// const textResult = text.split('');

// console.log(textResult);

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано некоторое число: 12345 Получите массив цифр этого числа. *

// const number = 12345;

// const nemberMas = Array.from(String(number), Number);

// console.log (nemberMas);

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано некоторое число: 12345 Переверните его: 54321

// const number = 123445;
// let num = 0;

// const numberArrey = Array.from(String(number), Number);

// for (let i = numberArrey.length - 1; i >= 0; i-=1){

// num += String(numberArrey[i])
// }

// console.log(Number(num))

///////////// let numResult = Array.from(String(num), Number);

// numResult.splice(0, 1);
// let n = Number(numResult.join(''));
///////////// console.log(n)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано некоторое число: 12345 Найдите сумму цифр этого числа.

// const num = 12345;

// const numArray = Array.from(String(num), Number);

// let sum = 0;

// for (let i = 0; i < numArray.length; i+=1){
// 	sum+=numArray[i]
// }

// console.log(sum)

//#endregion

//todo Уровень 1.8

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Заполните массив целыми числами от 1 до 10.

// let mas = [];

// let max = 11;

// let min = 1;

// for (let i = min; i<=max; i+=1){
// mas.push(i)
// }

// console.log(mas)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Заполните массив четными числами из промежутка от 1 до 100.

// const mas = [];

// const min = 1;
// const max = 100;

// for (let i = min; i <= 100; i+=1){
// 	if (i % 2 === 0) {
// 		mas.push(i)
// 	}
// }

// console.log(mas)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.

// const mas = [1.456, 2.125, 3.32, 4.1, 5.34];

// for (let i = 0; i < mas.length; i+=1){
// mas[i] = Number(mas[i].toFixed(1))
// }
// console.log(mas)

//#endregion

//todo Уровень 1.9

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// const mas = ['http://accc', '://adccc', 'http://accfff', 'den', 'eeeeeeeeee', 'CD\SCDASC'];

// const mas2 = []

// const http = 'http://'

// for (let i = 0; i < mas.length; i+=1){

// 	if (mas[i].slice(0, 7) === http){
// 		mas2.push(mas[i])
// 	}
// }
// console.log(mas2)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

// const mas = ['http://accc', '://adccc.html', 'http://accfff.html', 'den', 'eeeeeeeeee', 'CD\SCDASC'];

// const html = '.html';

// const mas2 = [];

// for (let i = 0; i < mas.length; i+=1){
// 	if (mas[i].slice(-5) === html){
// 		mas2.push(mas[i])
// 	}
// }

// console.log(mas2)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

// const mas = [2, 4, 10, 20, 4];
// const mas2 = []

// for (let i = 0; i<mas.length; i+=1){
// 	mas2.push(mas[i]*1.1)
// }

// console.log (mas2)

//#endregion

//todo Уровень 1.10

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Заполните массив случайными числами из промежутка от 1 до 100.

// const mas = [];

// const min = 1;

// const max = 100;

// const value = 20;

// for (let i = 0; i <= value; i+=1){
// 	mas.push(Number((Math.random()*(max - min) + min).toFixed(0)))
// }

// console.log(mas)

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дано некоторое число: 12345 Выведите в консоль все его символы с конца.

// const num = 12345;

// const numArray = Array.from(String(num), Number);

// let numResult = '';

// for (let i = numArray.length - 1; i>=0; i-=1){
// 	numResult+= String(numArray[i]);
// }

// console.log(Number(numResult))

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6]; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]

// const arr1 = [1, 2, 3];

// const arr2 = [4, 5, 6];

// const mas = arr1.concat(arr2);

// console.log(mas);

//#endregion

//#region 🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁🏁Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] По очереди выведите в консоль подмассивы из двух элементов нашего массива: [1, 2] [3, 4] [5, 6]   *****

// const mas = [1, 2, 3, 4, 5, 6];

// const mas1 = [];

// const mas2 = [];

// const mas3 = [];

// for (let i = 0; i < mas.length; i+=1){
// 	if (mas[i]<= mas[1]){
// 		mas1.push(mas[i])
// 	} else if (mas[i] >= mas[2]&& mas[i]<=mas[3]){
// 		mas2.push(mas[i])
// 	} else {
// 		mas3.push(mas[i])
// 	}
// }

// console.log(mas1, mas2, mas3)

//#endregion

//todo Уровень 2.1

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка. Найдите позицию первого нуля в строке.

// const string = "kjddkBIBSDBIkmsdk0msmd"

// function whereIsZero (finding) {

// const zero = 0;

// for (let i = 0; i < finding.length; i+=1){

// 	if (Number(finding[i]) !== zero){
// 		continue;
// 	} else {
// 		let index = finding.indexOf(finding[i]);
// 		return console.log(`В данной строке есть 0 и он на ${index} позиции`)
// 	}

// }

// }

// console.log(whereIsZero(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

// function allNumberForFive (cauntingFiveMin, cauntingFiveMax) {

// for (let masMini = cauntingFiveMin; masMini <= cauntingFiveMax; masMini+=1) {

// 	let testMas = Array.from(String(masMini), Number);

// 	let total  = 0;
// 	for (let i = 0; i < testMas.length; i+=1) {

// 		total = testMas[0]+testMas[1]
// 		if (total === 5) {
// 			let result = Number(testMas.join(''))
// 			console.log(result)
// 		}

// 	}

// }

// }

// allNumberForFive(1,10000)

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан массив. Удалите из него элементы с заданным значением.

// const mas = [4,6,12,44,1,6,6,3]

// function delNum (fromMas, del) {
// const newMas = [];
// 	for (let i = 0; i < fromMas.length; i+=1){
// 		console.log(fromMas[i])
// 		if (fromMas[i] !== del){
// 			newMas.push(fromMas[i])
// 		}
// 	}
// 	return newMas;

// }

// const delResult = delNum(mas, 6)

// console.log(delResult)

//#endregion

//#region  🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Найдите сумму первой половины элементов этого массива.

// const mas = [1, 2, 3, 4, 5, 6];

// function halfSumMas (sumMas) {
// 	let total = 0;

// 	for (let i = 0; i < sumMas.length / 2; i+=1) {
// 		total += sumMas[i]
// 	}
// return total;
// }

// const resultHalfSum = halfSumMas(mas);

// console.log(resultHalfSum)

//#endregion

//todo Уровень 2.2

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

// const mas = [-1, -2, 3, -5, 4, 9, -1];

// function cauntingMinusFromMas (cauntingMas) {

// 	let total = 0;

// 	for (let i = 0; i < cauntingMas.length; i+=1) {
// 		if (cauntingMas[i] < 0) {
// 			total += 1
// 		}
// 	}
// return total;
// }

// const cauntingMinus = cauntingMinusFromMas(mas);

// console.log (cauntingMinus)

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан массив с числами. Оставьте в нем только положительные числа.

// const mas = [-1, -2, 3, -5, 4, 9, -1];

// function onlyPlus (fromMas) {
// let onlyPlusNumbers = [];

// for (let i = 0; i < fromMas.length; i+=1) {
// 	if (fromMas[i] > 0) {
// 		onlyPlusNumbers.push(fromMas[i])
// 	}

// }

// return onlyPlusNumbers;

// }

// const onlyPlusNumbers = onlyPlus(mas)

// console.log(onlyPlusNumbers)

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана строка. Удалите предпоследний символ из этой строки.

// const string = "asdfghjkl";

// function delOlmostLastItem (delItem) {
// let total = "";
// 	for(let i = 0; i < delItem.length; i+=1) {
// 		total = delItem.length - 2;
// 	}
// 	return delItem[total];
// }

// const item = delOlmostLastItem(string);

// console.log(item)

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// const mas = [10, 20, 3, 4, 5, 6];

// function sumTwoMas (testMas) {

// let total1 = 0;
// let total2 = 0;

// 	for (let i = 0; i < testMas.length / 2; i += 1){
// 		total1 += testMas[i]
// 	}

// 	for (let i = testMas.length / 2; i < testMas.length; i+=1) {
// 		total2+=testMas[i]
// 	}
// return total1 / total2
// }

// const sum = sumTwoMas(mas);

// console.log(sum)

//#endregion

//todo Уровень 2.3

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

// const word1 = "hello";

// const word2 = "olla";

// function theSeymOrNo (firstWord, secondWord) {
// let total1 = "";
// let total2 = "";

// for (let i = 0; i < firstWord.length; i+=1) {
// 	total1 = firstWord.length - 1;
// 	firstWord[total1];
// }

// total2 = secondWord[0];

// if (total2.toLowerCase() === firstWord[total1].toLowerCase()) {
// return console.log (`Последняя буква "${firstWord[total1]}" первого слова такая же как и первая буква "${total2}" второго слова`);
// } else {
// 	return console.log ('Совпадений не найдено')
// }

// }

// theSeymOrNo(word1, word2);

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка. Найдите позицию третьего нуля в строке.

// const string = "Et0KS0KL0K";

// function whereIsThreeZero (finding) {
// let total = ""
// let totalResult = "000"
// let cauntNull = 0;
// 	for (let i = 0; i < finding.length; i+=1) {
// 		if (finding[i] === '0' && cauntNull !== 4){
// 			total = i
// 			cauntNull += 1
// 			if (totalResult === total && cauntNull === 3) {
// 				return total
// 			}
// 		}
// 	}
// 	return total;
// }

// const result = whereIsThreeZero(string);

// console.log(result)

// #endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.

// const string = '12,34,56';

// let newString = string.replace(',', ' ').replace(',', ' ');
// const mas = newString.split(' ')

// function sum (testMas) {
// 	let total = 0;
// 	for (let i = 0; i < testMas.length; i+=1) {
// 		total+=Number(testMas[i]);
// 	}
// return total
// }

// console.log(sum(mas))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана дата в следующем формате: '2025-12-31' Преобразуйте эту дату в следующий объект: { year: '2025', month: '12', day: '31',}

// const dateString = '2025-12-31';
// const [year, month, day] = dateString.split('-');

// const dateObject = {
//     year,
//     month,
//     day,
// };

// console.log(dateObject);
// Вывод: { year: '2025', month: '12', day: '31' }

//#endregion

//todo Уровень 2.4

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

// const string = "sssjwejow3idnw1";

// function findingFirstNumber (testString) {
// 	let result = 0;
// 	for (const item of testString) {

// 		if (Number(item)) {
// 			result = Number(item)
// 			return result;
// 		}
// 	}
// }

// console.log(findingFirstNumber(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

// const keys1 =[];
// const values1 = [];

// const object = {
// 	name: "Denys",
// 	lastName: "Harkusha",
// 	age: 26,
// 	birsDay: [11, 2, 1998],
// 	job: "FrontendDeveloper",

// 	forKeys() {
// 		keys1.push(Object.keys(this))
// 	},
// 	forValues() {
// 		values1.push(Object.values(this))
// 	}
// }
// object.forValues()
// object.forKeys()
// console.log(values1)
// console.log(keys1)

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дано число. Выведите в консоль количество четных цифр в этом числе.

// let numbers = 2235826596285;
// numbers = String(numbers)
// function evenNumbers (testNumbers) {
// let even = "";
// 	for (let i = 0; i < testNumbers.length; i+=1) {
// 		if (Number(testNumbers[i]) % 2 === 0) {
// 		even += testNumbers[i]
// 		}
// 	}
// 	return Number (even)
// }

// console.log(evenNumbers(numbers))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка: 'abcde' Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'

// let string = 'abcde';

// function evenUpperCase (testString) {
// 	let newString ='';
// 	for (let i = 0; i < testString.length; i+=1){
// 		if ( i % 2 === 0) {
// 			newString += testString[i].toUpperCase()
// 		} else {
// 			newString += testString[i].toLowerCase()
// 		}
// 	}
// 	return newString

// }

// console.log(evenUpperCase(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка со словами: 'aaa bbb ccc' Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc';

// let string = 'aaa bbb ccc';

// function firstLetterUpper (testString) {

// 	const firstLetter = testString[0].toUpperCase()
// 	let nextLetter = '';

// 	for (let i = 1; i < testString.length; i+=1) {
// 		if (testString[i] == false) {

// 			nextLetter += ' ' + testString[i+1].toUpperCase()

// 		 } else if ( testString[i] === testString[i].toLowerCase()){

// 			nextLetter += testString[i].toLowerCase()
// 		}
// 	}

// 	return firstLetter + nextLetter
// }

// console.log(firstLetterUpper(string)) // хз как убрать копию малой буквы  'Aaa Bbbb Cccc'

//#endregion

//todo Уровень 2.5

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка, например, вот такая: '023m0df0dfg0' Получите массив позиций всех нулей в этой в строке.

// const string = '023m0df0dfg0';

// function findingPozishenNull (testString) {
// const masPozishen = [];

// for (let i = 0; i < testString.length; i+=1) {
// 	if (Number(testString[i]) === 0) {
// 		masPozishen.push(i)
// 	}
// }
// return masPozishen
// }

//  console.log(findingPozishenNull(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка: 'abcdefg' Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'

// const string = 'abcdefg';

// function deleteEveryTheThree (testString) {

// let newMas = [];
// 	for (let i = 0; i < testString.length; i+=1) {
// 		newMas.push(testString[i]);
// 	}

// 	for (let i = 0; i < newMas.length; i+=1) {
// 		if ( i % 3 === 0 && i !== 0) {
// 			newMas[i-1] = ''
// 		}
// 	}

// return newMas.join('')
// }

// console.log(deleteEveryTheThree(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6] Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// const mas = [1, 2, 3, 4, 5, 6];

// function divadeHalfMas (testMas) {
// 	let total1 = 0;
// 	let total2 = 0;

// 	for (let i = 0; i < testMas.length; i+=1) {
// 		if (i % 2 !== 0) {
// 			total1 += testMas[i]
// 		} else {
// 			total2 += testMas[i]
// 		}
// 	}
// return total1 / total2;
// }

// console.log(divadeHalfMas (mas))

//#endregion

//todo Уровень 2.6

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

// const string = 'kbejW37HDHDB37HDS8JCNS7';

// function pzishenNumbersFromString (testString) {

// 	const pozishenMas = [];

// 	for (let i = 0; i < testString.length; i+=1){

// 		if (Number(testString[i])) {
// 				pozishenMas.push(i)
// 		}
// 	}
// return pozishenMas;
// }

// console.log(pzishenNumbersFromString(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан массив с некоторыми числами, например, вот такой: [123, 456, 789] Напишите код, который перевернет числа в этом массиве по следующему принципу: [321, 654, 987] ❓❓❓

// const mas = [123, 456, 789];

// function fromStarttoEnd (testMas) {
// const resultMas = [];
// const mas1 = [];
// const mas2 = [];
// const mas3 = [];
// mas1.push(testMas[0]); // [1,2,3]
// mas2.push(testMas[1]); // [4,5,6]
// mas3.push(testMas[2]); // [7,8,9]

// const masResult1 = mas1.join('').split(''); // ['123']
// const masResult2 = mas2.join('').split(''); // ['456']
// const masResult3 = mas3.join('').split(''); // ['789']

// const masLastResult1 = [];
// const masLastResult2 = [];
// const masLastResult3 = [];

// 	for (let i = masResult1.length - 1; i >= 0; i-=1) {
// 		masLastResult1.push(masResult1[i])
// 	} // ['3','2','1']
// 	for (let i = masResult2.length - 1; i >= 0; i-=1) {
// 		masLastResult2.push(masResult2[i])
// 	} // ['6','5','4']
// 	for (let i = masResult3.length - 1; i >= 0; i-=1) {
// 		masLastResult3.push(masResult3[i])
// 	} // ['9','8','7']

// 	let massLastResult1 = masLastResult1.join('').split(' '); // ['321']
// 	let massLastResult2 = masLastResult2.join('').split(' '); // ['654']
// 	let massLastResult3 = masLastResult3.join('').split(' '); // ['987']

// 	const newResultMas1 = [];
// 	const newResultMas2 = [];
// 	const newResultMas3 = [];

// 	for (let i = 0; i < 1; i+=1) {
// 		newResultMas1.push(Number(massLastResult1[i]))
// 	}// [321]
// 	for (let i = 0; i < 1; i+=1) {
// 		newResultMas2.push(Number(massLastResult2[i]))
// 	}// [654]
// 	for (let i = 0; i < 1; i+=1) {
// 		newResultMas3.push(Number(massLastResult3[i]))
// 	}// [987]
//  resultMas.push(...newResultMas1, ...newResultMas2, ...newResultMas3)
//  return resultMas //// [321, 654, 987]
// }

// console.log(fromStarttoEnd(mas))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка с числом: '1234567' Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567' ***

// const string = '1234567';
// const stringMas = string.split('')

// const spaceAfterThree = (testString) => {

// 	let insideString;

// 	for (let i = 1; i < testString.length; i+=4) {

// 		testString.splice(i, 0, ' ')
// 	}
// 	insideString = testString.join('')

// 	return insideString;
// }

// console.log( spaceAfterThree(stringMas))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан некоторый массив с числами, например, вот такой:[1, 2, 3, 4, 5, 6] Слейте пары элементов вместе: [12, 34, 56]

// const mas = [1, 2, 3, 4, 5, 6];

// const twoNombersIsItem = (testMas) => {
// 	const insideMas = []

// 	for(let i = 0; i < testMas.length; i+=2) {
// 		insideMas.push(Number(String(testMas[i]) + String(testMas[i+1])));
// 	}
// 	return insideMas;
// }

// console.log(twoNombersIsItem(mas))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка со словами:'aaa bbb ccc eee fff' Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее: 'aaa Bbb ccc Eee fff'

// const string = 'aaa bbb ccc eee fff';

// function capitalizeEverySecondWord(testString){
// 	let stringInside = testString.split(' ')

// 	for (let i = 0; i < stringInside.length; i+=2){
// 		stringInside[i] = stringInside[i].charAt(0).toUpperCase() + stringInside[i].slice(1)
// 	}

// 	return stringInside.join(' ')
// }

// console.log(capitalizeEverySecondWord(string))

//#endregion

//todo Уровень 2.7

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка: 'a bc def ghij' Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее: 'A BC DEF ghij'

// const string = 'a bc def ghij';

// function mainIsMaxThree (testString) {
// 	let insideString = testString.split(' ');
// 		for (let i = 0; i < insideString.length; i+=1){
// 			if (insideString[i].length <= 3){
// 				insideString[i] = insideString[i].charAt(0).toUpperCase() + insideString[i].slice(1)
// 			}
// 		}
// 		return insideString;
// }

// console.log(mainIsMaxThree(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

// let letter = 'Ф';

// if (letter === letter.toLowerCase()){
// 	console.log(`символ ${letter} в нижнем ркгистре`)
// } else {
// 	console.log(`символ ${letter} в верхнем ркгистре`)
// }

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дано некоторое число, например, такое: 123789 Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28

// const numbers = 123789;
// const masNumbers = Array.from (String(numbers), Number);

// function onlyEvenNumbers (testMasNumbers) {

// 	const insideMasNumbers = [];
// 	for (const item of testMasNumbers) {
// 		if (item % 2 === 0) {
// 			insideMasNumbers.push(item)
// 		}
// 	}

// 	return Number(insideMasNumbers.join(''))
// }

// console.log (onlyEvenNumbers(masNumbers))

//#endregion

//todo Уровень 2.8

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

// const string = 'g g g D D D s s s'

// const masString = string.split(' ')
// function howMenyMainLetters(testmasString) {
// 	let insideMasString = []
// 	for (let i = 0; i < testmasString.length; i+=1){
// 		if (testmasString[i].charAt(0).toUpperCase() === testmasString[i].charAt(0)){
// 			insideMasString.push(testmasString[i])
// 		}
// 	}

// 	if (insideMasString.length - 1 >= 2){
// 		return console.log(`больше двух заглавных букв`)
// 	} else {
// 		return console.log(`меньше двух заглавных букв`)
// 	}

// }
// 	console.log(howMenyMainLetters(masString))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка: '1 22 333 4444 22 5555 1' Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее: '1 22 333 22 1'

// const string = '1 22 333 4444 22 5555 1';

// function maxThreeLetterInWords (testString) {
// const insideMasString = testString.split(' ');
// const insideMasString1 = [];
// console.log(insideMasString)
// for (let i = 0; i < insideMasString.length; i+=1) {

// 	if (insideMasString[i].length <= 3) {

// 		insideMasString1.push(insideMasString[i])
// 	}
// }
// return insideMasString1.join(' ')
// }

// console.log(maxThreeLetterInWords(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Даны два массива:let arr1 = [1, 2, 3]; let arr2 = ['a', 'b', 'c']; Слейте эти массивы в новый массив следующим образом: [1, 2, 'a', 'b', 'c', 3]

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];

// arr1 = [1, 2, ...arr2, 3];

// console.log(arr1)

//#endregion

//todo Уровень 2.9

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дано некоторое число: 123456 Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее: 12 + 34 + 56

// const number = 123456;

// function sumEveryTwo(testNumner) {

// 	const insideNumber = String(testNumner);
// 	const masInsideNumbers = insideNumber.split('');
// 	let insideNumbers = '';

// 	for (let i = 0; i < masInsideNumbers.length; i+=2) {
// 		console.log(Number(masInsideNumbers[i]));
// 		insideNumbers += masInsideNumbers[i] + masInsideNumbers[i+1] + ' ';
// 	}

// 	const insideMasNumbers = insideNumbers.split(' ');
// 	let total = 0;

// 	for (let i = 0; i < insideMasNumbers.length; i+=1){
// 		if (insideMasNumbers[i]){
// 			total+=Number(insideMasNumbers[i]);
// 		}
// 	}

// 	return total
// }

// console.log(sumEveryTwo(number))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан массив с числами: [1, 2, 3, 4, 5] Выведите в консоль элементы этого массива в обратном порядке.

// const mas = [1, 2, 3, 4, 5]

// for (let i = mas.length - 1; i >= 0; i-=1){
// 	console.log (mas[i])
// }

//#endregion

//todo Уровень 2.10

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

// const string = "eh382uu";

// function maxThreeLetter (testString) {
// const testMasString = testString.split('')
// const testEmptyMas = [];
// 	for (let i = 0; i < testMasString.length; i+=1){
// 		if (!Number(testMasString[i])){
// 			testEmptyMas.push(testMasString[i])
// 		}
// 	}

// 	const withoutNumbers = testEmptyMas.join('');
// 	if (withoutNumbers.length <= 3){
// 		return  console.log(`в строке меньше или 3 буквы`)
// 	}
// 	return console.log(`в строке больше трех букв`)
// }

// console.log(maxThreeLetter(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дано число. Получите первую четную цифру с конца этого числа.

// const number = 37992463;

// function lastEvenNumber (testNumber) {
// const insideNumber = String(testNumber);
// const insideMas = insideNumber.split('');
// let result = 0;
//  for (let i = insideMas.length - 1; i >= 0; i-=1){
// 	if (Number(insideMas[i])%2 === 0){
// 		result = Number(insideMas[i])
// 		break;
// 	}
//  }
// return result
// }

// console.log(lastEvenNumber(number))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дана некоторая строка: 'abcde abcde abcde' Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'

// const string = 'abcde abcde abcde';

// function addSumbol (testString){
// 	const insideMas = testString.split(' ')
// 	let insideResultString = '';
// for (let i = 0; i < insideMas.length; i+=1){
// 	insideResultString += '!' + insideMas[i].slice(1) + ' ';
// 	console.log(insideMas[i])
// }
// return insideResultString

// }

// console.log(addSumbol(string))

//#endregion

//#region 🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩🧩Дан массив с числами: [1, 2, 3, 3, 4, 5] Проверьте, что в этом массиве есть два одинаковых элемента подряд.

// const mas = [1, 2, 3, 3, 4, 5];

// function findingTheSameNum(testMas){
// let num = 0;
// for (let i = 0; i < testMas.length; i+=1){
// 	if (testMas[i] === testMas[i+1]){
// 		return console.log(`в этом масиве есть 2 одинаковых числа`)
// 	}
// }
// return console.log(`в этом масиве нет 2 одинаковых числа`)
// }

// console.log(findingTheSameNum(mas))

//#endregion

//todo Уровень 3.1

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// const num = 12345;

// function nextNumBiger(testNum) {
// 	const stringNum = String(testNum);
// 	const masNum = stringNum.split('')
// 	let numForResult = 0;

// 	for (let i = masNum.length - 1; i >= 0; i-=1){
// 		if (masNum[i] > masNum[i-1]){
// 			numForResult+= masNum[i]
// 		}
// 	}
// const result = Number(numForResult) + masNum[0]

// if (result.length === masNum.length && masNum[0] < masNum[1]){
// 	return console.log("цифры этого числа расположены по возрастанию")
// }

// return console.log("цифры этого числа не расположены по возрастанию")
// }

// console.log(nextNumBiger(num))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив[1, '', 2, 3, '', 5] Удалите из массива все пустые строки.

// const mas = [1, '', 2, 3, '', 5];

// const string = mas.join('')

// const masResult = Array.from(String(string), Number)

// console.log(masResult)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Даны два массива:let arr1 = [1, 2, 3];let arr2 = [1, 2, 3, 4, 5];Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];

// function theSeymMas(mas1, mas2) {

// if (mas1.length > mas2.length) {

// 	for (let i = 0; i < mas1.length; i+=1){
// 		if (mas1.length > mas2.length) {
// 			mas1.pop()
// 		}
// 	}

// 	return console.log(mas1, mas2)

// } else {

// 	for (let i = 0; i < mas2.length; i+=1){
// 		if (mas2.length > mas1.length) {
// 			mas2.pop()
// 		}
// 	}

// 	return console.log(mas2, mas1)

// }

// }

// console.log(theSeymMas(arr1, arr2))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив:[[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],] Отсортируйте элементы в каждом подмассиве.

// const mass = [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],];

// const [mas1, mas2, mas3] = mass;

// 	mas1.sort((a,b)=> a - b);
// 	mas2.sort((a,b)=> a-b);
// 	mas3.sort((a,b)=>a-b);

// console.log (mass)

//#endregion

//todo Уровень 3.2

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

// const min = 10;
// const max = 1000;

// for (let i = min; i <= max; i+=1) {
//     const secondToLastDigit = Math.floor(i / 10);
//     if (secondToLastDigit % 2 === 0) {
//         console.log(i);
//     }
// }

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив. Удалите из него каждый пятый элемент.

// const mas = [1,2,3,4,5,6,7,8,9,10,11];

// function deleteEveryFive (testMas) {
// 	const insideMas = [];
// 	for (let i = 1; i < testMas.length; i+=1){
// 		if (i % 5 !== 0){
// 			insideMas.push(testMas[i-1])
// 		}
// 	}
// 	return insideMas;
// }

// console.log(deleteEveryFive(mas))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дана некоторая переменная с числом:let num = 5;Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка: '00000'

// const num = 5;

// function letMakeZero(testNum) {
// const mas = [];

// 	for(let i = 0; i<testNum; i+=1){
// 		mas.push(0)
// 	}

// return mas.join('')
// }

// console.log(letMakeZero(num))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дана некоторая строка со словами:'aaa bbb ccc eee fff'Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:'aaa ccc fff'

// const string = 'aaa bbb ccc eee fff';

// function deleteEveryTwoWord(testString) {

// 	const insideMas = testString.split(' ');
// 	const insideResultMas = [];

// 	for (let i = 0; i < insideMas.length; i+=2){
// 		insideResultMas.push(insideMas[i])
// 	}

// 	return insideResultMas.join(' ')

// }

// console.log(deleteEveryTwoWord(string))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив:[[1, 2, 3],[4, 5, 6],[7, 8, 9]],]Найдите сумму элементов этого массива.

// const multyMas = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// const [a,b,c] = multyMas;

// function sumFromMultyMas (a,b,c) {

// 	let total = 0;

// 	for (let i = 0; i < a.length; i+=1){
// 		total+=a[i]
// 	}

// 	for (let i = 0; i < b.length; i+=1){
// 		total+=b[i]
// 	}

// 	for (let i = 0; i < c.length; i+=1){
// 		total+=c[i]
// 	}

// return total

// }

// console.log(sumFromMultyMas(a,b,c))

//#endregion

//todo Уровень 3.3

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

// const mas = ['q', 'sdf', 'sd', 'sddd', 'sd', 'asass'];

// function deleteMoreFiveLeters(testMas) {
// 	 const insideMas = [];
// 	 for (const item of testMas){
// 		if (item.length <= 3){
// 			insideMas.push(item);
// 		}
// 	 }
// 	 return insideMas;
// }

// console.table (deleteMoreFiveLeters(mas));

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дано некоторое число: 1357 Проверьте, что все цифры этого числа являются нечетными.

// const num = 1357;

// function notEvenNumbers(testNum){
// const insideString = String(testNum);
// let insidetestString = '';

// for (let i = 0; i < insideString.length; i+=1){
// 	if (Number(insideString[i]) % 2 !== 0) {
// 		insidetestString += insideString[i]
// 	}
// }

// let text= '';

// if (insideString.length === insidetestString.length){
// 	text = console.log(`Все цифры четные`)
// } else {
// 	console.log(`Не все цифры четные`)
// }

// return insidetestString
// }

// console.log(notEvenNumbers(num))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дано некоторое слово: 'abcba' Проверьте, что это слово читается одинаково с любой стороны.

// const string = 'abcba';

// function seymOrNo(testString){
// const insideMas1 = [];
// const insideMas2 = [];
// const insideMas = testString.split('');

// for (let i = 0; i < insideMas.length; i+=1){
// 	insideMas1.push(insideMas[i])
// }

// for (let i = insideMas.length - 1; i >= 0; i-=1){
// 	insideMas2.push(insideMas[i])
// }

// const stringResult1 = insideMas1.join('');
// const stringResult2 = insideMas2.join('');

// let message = '';
// if (stringResult1 === stringResult2){
// 	message = 'читается одинаково с любой стороны'
// } else {
// 	message = 'не читается одинаково с любой стороны'
// }

// return console.log (message)
// }

// console.log(seymOrNo(string))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив:[[[11, 12, 13],[14, 15, 16],[17, 17, 19],],[[21, 22, 23],[24, 25, 26],[27, 27, 29],],[[31, 32, 33],[34, 35, 36],[37, 37, 39],],]Найдите сумму элементов этого массива.

// const multyMas = [[[11, 12, 13],[14, 15, 16],[17, 17, 19],],[[21, 22, 23],[24, 25, 26],[27, 27, 29],],[[31, 32, 33],[34, 35, 36],[37, 37, 39]]];

// function sumFromBigArr(testMas){
// const [a, b, c] = testMas;
// const mas = []

// for (const item of a){
// 	mas.push(...item)
// }
// for (const item of b){
// 	mas.push(...item)
// }
// for (const item of c){
// 	mas.push(...item)
// }

// let total = 0;

// for (let i = 0; i < mas.length; i+=1){
// 	total+=mas[i]
// }

// return total
// }

// console.log(sumFromBigArr(multyMas))

//#endregion

//todo Уровень 3.4

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

// for (let i = 10; i <= 1000; i++) {
//     const firstDigit = Math.floor(i / 100); // Получаем первую цифру числа
//     if (firstDigit % 2 === 0) {
//         console.log(i);
//     }
// }

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]Поменяйте местами пары элементов этого массива:[2, 1, 4, 3, 6, 5]❓❓❓

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан следующий объект:let obj = {1: {1: 11,2: 12,3: 13,},2: {1: 21,2: 22,3: 23,},3: {1: 24,2: 25,3: 26,},} Найдите сумму элементов этого объекта.

// let obj = {
//     1: {1: 11, 2: 12, 3: 13},
//     2: {1: 21, 2: 22, 3: 23},
//     3: {1: 24, 2: 25, 3: 26}
// };

// let sum = 0;

// for (let key1 in obj){
// 	for (let key2 in obj[key1]){
// 		sum += obj[key1][key2]
// 	}
// }

// console.log(`Сумма элементов объекта: ${sum}`);

//#endregion

//todo Уровень 3.5

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

// const string = 'sds ass sfs asss'

// function takeWorldsWithFistA(testString){
// const insideMas = testString.split(' ');
// const testEmptyMas = [];
// for (let i = 0; i < insideMas.length; i+=1){
// 	if (insideMas[i].charAt(0) === 'a'){
// 		testEmptyMas.push(insideMas[i])
// 	}
// }
// return testEmptyMas;
// }

// console.log(takeWorldsWithFistA(string))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

// const mas = [2, 5, 10, 11, 44, 50];

// function numbersDivideOnFive (testMas) {
// 	const insideMas = [];
// 	for (let i = 0; i < testMas.length; i+=1){
// 		if (testMas[i] % 5 === 0) {
// 			insideMas.push(testMas[i])
// 		}
// 	}
// 	return insideMas;
// }

// console.log(numbersDivideOnFive(mas))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан следующий объект: under :) Найдите сумму элементов этого объекта.

// let obj1 = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }

// let total = 0;

// for (let key in obj1){
// 	for(let key1 in obj1[key]){
// 		for (let key2 in obj1[key][key1]){
// 			total += obj1[key][key1][key2]
// 		}
// 	}
// }

// console.log(total)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

// const numbers = [10, 25, 304, 42, 7, 100, 890, 12345];

// const numbersWithZero = numbers.filter(number => number.toString().includes('0'));
// console.log(`Числа с цифрой 0: ${numbersWithZero}`);

// const numbersWithOne = numbers.filter(number => number.toString().includes('1'));
// console.log(numbersWithOne)

// const numbersWithFIve = numbers.filter(number => number.toString().includes('5'));
// console.log(numbersWithFIve)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

// const mas = [2,4,67,89,9,0,2,3];

// const findThree = mas.find(item => item.toString().includes('3'));

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дано некоторое число: 35142 Отсортируйте цифры этого числа. В нашем случае должно получится следующее:12345

// const number = 35142;

// const numArr = Array.from(String(number), Number);

// const numAfterSort = numArr.sort((a, b) => a - b )

// console.log(Number(numAfterSort.join('')))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Напишите программу, которая сформирует следующую строку: '-1-2-3-4-5-'

// let mas = [];

// for (let i = 1; i<=5; i+=1){
// 	mas.push(i)
// }

// const string = '-' + mas.join('-') + '-';

// console.log(string);

//#endregion

//todo Уровень 3.6

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр

// const mas = [23333,4,6733,89,9,2333,3];

// const newMas = mas.filter((item) => {
// 	if (item.toString().length < 3) {
// 		return item
// 	}
// })

// console.log(newMas)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дано число, например, вот такое: let num = 12345; Проверьте, что все цифры этого числа больше нуля.

// const num = 12345;

// const numArr = Array.from(String(num), Number);

// const ckeckNum = numArr.every((item)=> {
// 	if (item > 0){
// 		return item
// 	}
// })
// console.log (ckeckNum)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан некоторый массив, например, вот такой:[123, 456, 789]Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const mas = [123, 456, 789];

// const num = Number(mas.join(''));

// const newMas = Array.from(String(num), Number)

// console.log(newMas)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан следующая структура: (under) Найдите сумму элементов этой структуры.

// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];

// let total = 0;

// for (let key in data){
// 	for (let key1 in data[key]){
// 		total+=data[key][key1]
// 	}
// }

// console.log(total)

//#endregion

//todo Уровень 3.7

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дана строка со словами. Отсортируйте слова в алфавитном порядке.

// const string = 'aaa mmm eee lll rrr bbb';

// const stringMas = string.split(' ');

// const stringFromAtoB = stringMas.sort((a, b) => a.localeCompare(b));

// console.log (stringFromAtoB.join(' '));

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дано число. Получите массив делителей этого числа.

// const num = 3;

// const mas = []

// for (let i = 1; i <= 30; i+=1){
// 	if (i % num === 0){
// 		mas.push(i)
// 	}
// }

// console.log(mas)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Даны два числа. Получите массив общих делителей этих чисел.

// const num1 = 3;
// const num2 = 2;
// const mas = [];

// for (let i = 1; i <= 30; i+=1){
// 	if (!(i % num1) && !(i % num2)){
// 		mas.push(i)
// 	}
// }

// console.log(mas)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Через запятую написаны числа. Получите максимальное из этих чисел.

// const numbers = [2, 4, 6, 7, 6, 4]

// const maxNumber = Math.max(...numbers);

// console.log(maxNumber)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

// const numbers = [2, 42, 6, 73, 6, 44]

// const newMas = [];

// for (let i = 0; i < numbers.length; i+=1){
// 	if (numbers[i] <= 9){
// 		newMas.push(numbers[i])
// 		newMas.push(numbers[i])
// 	} else {
// 		newMas.push(numbers[i])
// 	}
// }

// console.log(newMas)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дана строка. Удалите из нее все гласные буквы.

//1
// const string = 'hello world';

// function deleteLetters (testString){
// const insideArr = string.split('');
// const resArr = []
// const result = insideArr.filter( item => item !== 'a' && item !== 'e' && item !== 'i' && item !== 'o' && item !== 'u')
// return result.join('')
// }

// console.log(deleteLetters(string))

//2
// const string = 'hello world'

// function letters (testSt){

// let insideString = '';

// for (let i = 0; i < testSt.length; i+=1){
// 	if (testSt[i] !== 'a' && testSt[i] !== 'e' && testSt[i] !== 'o' && testSt[i] !== 'i' ){
// 		insideString += testSt[i]
// 	}
// }
// return insideString
// }

// console.log(letters(string))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

// const inputStrin = "Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.";

// const string = inputStrin.split(' ');

// const resultSt = string.map((item)=> {
// 	const lastLetter = item[item.length -1];
// 	const lastLetterResult = lastLetter.toUpperCase()
// 	return item.slice(0, -1) + lastLetterResult
// }).join(' ')

// console.log(resultSt)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан следующая структура: (under) Найдите сумму элементов этой структуры.

// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];

// let total = 0;

// for (let key in data){
// 	for(let key1 in data[key]){
// 		for (let key2 in data[key][key1]){
// 			total += data[key][key1][key2]
// 		}
// 	}
// }

// console.log(total)

//#endregion

//todo Уровень 3.8

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

// const mas = [23333,43,6733,839,93,2333,3];

// const result = mas.every(item => {
// 	return item.toString().includes('3')
// })

// console.log(result)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дана строка в формате: 'kebab-case' Преобразуйте ее в формат: 'snake_case'

// const string = 'kebab-case';

// const stringNew = string.split('-').join('_')

// console.log(stringNew)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀⭐⭐⭐Дана строка в формате'snake_case'Преобразуйте ее в формат:'camelCase'

// const string = 'snake_case';
// const insideMas = string.split('_');

// function newView (testSt) {
// 	const newMas = [];
// 	newMas.push(testSt[0] = 'camel');
// 	newMas.push(testSt[1].charAt(0).toUpperCase() + testSt[1].slice(1))

// 	return newMas.join('')
// }

// console.log(newView(insideMas))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀⭐⭐⭐Сформируйте с помощью циклов следующий массив:[[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],]

// const mainMas = [];

// const insideMas = [];

// for (let i = 1; i <= 3; i+=1){
// 	insideMas.push(i)
// }

// for (let i = 0; i < 3; i+=1){
// 	mainMas.push(insideMas)
// }

// console.log(mainMas)

//#endregion

//todo Уровень 3.9

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀⭐⭐⭐⭐(ДОП)❕❕❕ дана строка вывести в обьект количество букв и саму букву как ключ

// //1
// const srt = 'djlbnldfnbeenbelnbwenllwdnvlwdvnwejewbjbejwbejbvwbvwlvuevweehcbjwhcvjhvwemcevhwhcvewchwevcehw';

// const st = 'djcksivkdksvwbdldslljviuwuskkgiDBIsdkjabsdkuhwiuskbsdiag iuwKK wbvjkwVWjvhVJWdhbciqb'
// //1
// const newOb = st.split('').reduce((acc, item)=>{acc.hasOwnProperty(item) ? acc[item] += 1 : acc[item] = 1; return acc},{})
// //2
// const newOb1 = st.split('').reduce((acc, item)=>{item in acc ? acc[item] += 1 : acc[item] = 1; return acc},{})
// //3
// const newOb3 = st.split('').reduce((acc, item)=>{Object.keys(acc).includes(item) ? acc[item] += 1 : acc[item] = 1; return acc},{})

// console.table(newOb)
// console.table(newOb1)
// console.table(newOb3)

// //2
// const string1111 = 'nwoinoewcmweocmoewimcweoicmewichewfojewfowejfpapejajmciojcneicineciecniecneincie';
// const insideMas11 = string1111.split('');

// function takeStrToObj(items){

// return items.reduce((acc, item)=>{
// 	if (acc.hasOwnProperty(item)){
// 		acc[item]+=1
// 	}else{
// 		acc[item] = 1
// 	}
// 	return acc
// },{})
// }

// console.log(takeStrToObj(insideMas11))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀⭐⭐⭐(ДОП)❕❕❕ задание на уникальность

// const mas = ['js', 'html', 'css', 'js']

// const result = mas.filter((item, inx, arr)=> arr.indexOf(item) === inx)

// console.log(result)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дана строка. Проверьте, что эта строка состоит только из цифр.

// const string = '1203791037';

// const arrString = string.split('')

// const checking = arrString.every(item => Number(item) || item === '0');

// console.log(checking)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀⭐⭐⭐Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

// const arr = [223, 100, 1000, 4304, 44, 4]

// function delZero (items){
// return items.reduce((acc, item) => { !(item.toString().includes('00')) ? acc.push(item) : acc; return acc}, [])
// }

// console.log(delZero(arr))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀⭐⭐⭐Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

// const resultArr = [];

// for (let i = 0; i <= 1000; i+=1){
// 	let firstNum = Math.floor(i / 100);
// 	let secondNum = Math.floor (i / 10)%10;
// 	let lastNum = Number(String(i).slice(-1));

// 	if (firstNum + secondNum + lastNum === 13){
// 		resultArr.push(i)
// 	}
// }

// console.log(resultArr)

//#endregion

//todo Уровень 3.10

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

// const startArr = ['22', 10, true, [1,2,3], 5, 'string']

// function dubleElements (items) {
// 	const resultArr = [];

// 	for (let i = 0; i < items.length; i+=1){
// 		resultArr.push(items[i])
// 		resultArr.push(items[i])
// 	}

// 	return resultArr
// }

// console.log(dubleElements(startArr))

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

// const arr = [2,3,4,5,6,7,8,9]

// const num = 3;

// const filterNumbers = items => items.filter((item) => !(item % num))

// console.log(filterNumbers(arr));

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀⭐⭐⭐⭐Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

// const number1222 = 12445;
// const number2222 = 54321;

// function getCommonDigits(num1, num2) {
//     const digits1 = Array.from(String(num1), Number);
//     const digits2 = Array.from(String(num2), Number);

//     const commonDigits = digits1.filter(digit => digits2.includes(digit));

//     return commonDigits;
// }

// const commonDigitsArray = getCommonDigits(number1222, number2222);

// console.log(`Общие цифры в числах ${number1222} и ${number2222}: ${commonDigitsArray}`);

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

// const num = 384312130;

// const arr = Array.from(String(num), Number)

// const newMas = []
// for (let i = 1; i < arr.length - 1; i+=1){
// 	if (arr[i] === 3){
// 		newMas.push(i+1)
// 	}
// }

// console.log(newMas)

//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите. ❓❓❓

// const mas = [222,33,5,76,12,4]
// const news = []
// for (let i = 0; i < mas.length; i+=1){
// 	let masInside = Array.from(String(mas[i]), Number);
// 	let masRes = masInside.filter(item =>  )
// 	console.log(masRes)
// }
//#endregion

//#region 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀Дан массив:(under) Слейте элементы этого массива в один одномерный массив:

// const mas = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// const resMas = mas.flatMap(item => item)

// console.log(resMas)

//#endregion

//todo Уровень 4.1

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая вернет текущий день недели словом.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

// const string = 'hello world'

// const cat = 5;

// function catString(testString, testCat){
// const insideArr = []
// const insideString = testString.split('');

// for (let i = 0; i < testCat; i+=1){
// 	insideArr.push(testString[i]);
// }

// return insideArr.join('')

// }

// console.log(catString(string, cat))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.❓❓❓

//todo Уровень 4.2

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// const num = 23493;

// function totalNumbersFromNum (testNum) {
// const insideNum = Array.from(String(num), Number);
// const result = insideNum.reduce((acc, item) => acc += item, 0)
// return result
// }

// console.log(totalNumbersFromNum(num))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

// const num = 2310320300123;

// function deleteZero (insideNum) {
// const insideArr = Array.from(String(insideNum), Number);
// const result = insideArr.filter( item => item !== 0)
// return Number(result.join(''))
// }

// console.log(deleteZero(num))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:{next: 'пн',curr: 'вс',prev: 'сб',}❓❓❓

//todo Уровень 4.3

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

// const arrey = [2, 3, 4, 5, 3, 6, 1, 2, 4]

// const delDubl = items => items.filter((item, inx) => items.indexOf(item) === inx)

// console.log(delDubl(arrey))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.❓❓❓

// const arrey = [2, 2, 3, 4, 5, 3, 6, 1, 2, 4]

// const delDubl = items => items.filter((item, inx) => items.indexOf(item) === inx)

// console.log(delDubl(arrey))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

// const arrey = [2, 3, 5, 4, 5, 3, 6,6, 1,1, 2, 4];

// function delElements (items) {
// 	const insideArr = [];
// 	for(let i = 0; i < items.length; i+=1){
// 		if (items[i] !== items[i+1] && items[i] !== items[i-1]){
// 			insideArr.push(items[i])
// 		}
// 	}
// 	return insideArr
// }

// console.log(delElements(arrey))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта: {max: 9,min: 1,}

// const mas = [2,4,5,7,8,23,43,66,3];

// function maxAndMinNum(testMas){
// const numMin = Math.min(...testMas);
// const numMax = Math.max(...testMas);

// const obj = {}

// const min = 'min';
// const max = 'max';

// obj[min] = numMin;
// obj[max] = numMax;

// return obj
// }

// console.log(maxAndMinNum(mas))

//#endregion

//todo Уровень 4.4

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать число, а количество его делителей.

// const num = 10;

// function howManyDivideInNum(testNum){
// const resMas = [];

// for(let i = 1; i <= testNum; i+=1){
// 	if (testNum % i === 0){
// 		resMas.push(i)
// 	}
// }
// return resMas.length
// }

// console.log(howManyDivideInNum(num))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.❓❓❓

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.

// const num = 10;

// function howManyDivideInNum(testNum){
// const resMas = [];

// for(let i = 1; i <= testNum; i+=1){
// 	if (testNum % i === 0){
// 		resMas.push(i)
// 	}
// }
// return resMas
// }

// console.log(howManyDivideInNum(num))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

// const num = 8;

// function howManyDivideInNum(testNum){
// const resMas = [];

// for(let i = 1; i <= testNum; i+=1){
// 	if (testNum % i === 0){
// 		resMas.push(i)
// 	}
// }
// let message = '';

// if (resMas.length > 2){
// 	message = `Число ${testNum} не простое`
// }else {
// 	message = `Число ${testNum} простое`
// }
// return message
// }

// console.log(howManyDivideInNum(num))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

// const num = 33;

// function evenMas(testNum){

// const resMas = [];
// const result = []

// for(let i = 1; i <= testNum; i+=1){
// 		resMas.push(i)
// }

// for (const item of resMas){
// 	if (item % 2 === 0){
// 		result.push(item)
// 	}
// }

// return result
// }

// console.log(evenMas(num))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

// const min = 1;
// const max = 100;

// function randomNumbersInArr (min, max) {
// const result = [];

// for (let i = min; i <= max; i+=1){
// 	result.push(Math.round(Math.random()*(max - min)+ min))
// }

// return result
// }

// console.log(randomNumbersInArr(min, max))

//#endregion

//todo Уровень 4.5

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.

// const string = '728682374'

// function whatIsThisNumbersOrNo (testString) {
// 	const insideString = testString.split('');
// 	const result = [];

// 	for(let i = 0; i < insideString.length; i+=1){
// 		if (Number(insideString[i])){
// 			result.push(insideString[i])
// 		}
// 	}
// 	let message = '';
// 	if (insideString.length === result.length){
// 		message = `Строка полностью состоит из цифр`
// 	} else {
// 		message = `Строка не полностью состоит из цифр`
// 	}

// 	return message;
// }

// console.log(whatIsThisNumbersOrNo(string))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь. /⚙️⚙️⚙️⚙️//PATTERN//🧱🧱🧱🧱/

// function isFraction(str) {
//     const fractionPattern = /^\d+\/\d+$/;
//     return fractionPattern.test(str);
// }

// const testString = "58";
// console.log(`Строка "${testString}" ${isFraction(testString) ? 'является' : 'не является'} дробью.`);

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.

// const array = [5,6,2,3,5,1,4]

// function secondBigNum (testArr) {
// 	const afterSortArr = [...testArr].sort((a, b) => a - b)
// return afterSortArr[1]
// }

// console.log(secondBigNum(array))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.

// const min = 23;
// const max = 45;

// function fromMinToMax (min, max) {
// const resultArray = [];
// for (let i = min; i <= max; i+=1){
// 	resultArray.push(i);
// }
// return resultArray;
// }

// console.log(fromMinToMax(min, max));

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐Сделайте функцию, которая заполнит массив случайными латинскими буквами.

// function randomLetters (items) {

// 	const result = [];
// 	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// 	for (let i = 0; i <= items; i+=1){
// 		const randomInx = Math.round(Math.random() * (letters.length - 1) + 1);
// 		result.push(letters[randomInx])
// 	}
// 	return result
// }

// console.log(randomLetters(10))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.❓❓❓

//todo Уровень 4.6

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.

// const date = "2032-12-20";

// function isTryeDate(dates) {
//   const insideDates = dates.split("-").map((item) => Number(item));

//   const [yers, months, days] = insideDates;

//   if (!yers || !months || !days) {
//     return "такой даты нет";
//   }

//   // Создаем объект даты
//   const date = new Date(yers, months - 1, days);

//   // Проверяем, что компоненты даты совпадают с исходными значениями
//   return (
//     date.getFullYear() === yers &&
//     date.getMonth() === months - 1 &&
//     date.getDate() === days
//   );
// }
// console.log(isTryeDate(date));

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.

// function stringWithRandomLetters (length) {
// const result = [];
// const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// for (let i = 0; i <= length; i+=1){
// 	const inx = Math.round(Math.random() * letters.length);
// 	result.push(letters[inx])
// }
// return result.join('')
// }

// console.log(stringWithRandomLetters(8))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.

// const string = 'hello World';

// function onlyFirstUpperLetters (testString) {
// const arr = testString.split(' ');
// const result = [];
// for (let i = 0; i < arr.length; i+=1){
// 	result.push(arr[i].charAt(0).toUpperCase())
// }
// return result.join(' ')
// }

// console.log(onlyFirstUpperLetters(string))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐⭐Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.

// const array1234 = [22, 44, 12, 2, 34, 11, 33, 15];

// function arrNumToArrOfDivisors (testArr) {

// 	const result = [];

// 	for (let num of testArr){
// 		const insideArr = [];

// 		for(let i = 0; i <= num; i+=1){
// 			if (num % i === 0){
// 				insideArr.push(i)
// 			}
// 		}
// 		result.push(insideArr)
// 	}
// 	return result;
// }

// console.log(arrNumToArrOfDivisors(array1234))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⚙️⚙️⚙️⚙️Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

// const seconds = 86400;

// function convertS(s) {
// 	const second = 1;
// 	const minute = second * 60;
// 	const hour = minute * 60;
// 	const day = hour * 24;

// 	const days = Math.floor(s / day);
// 	const hours = Math.floor((s % day) / hour);
// 	const minutes = Math.floor(((s % day) % hour) / minute);
// 	const seconds = Math.floor((((s % day) % hour) % minute) / second);
//   const objData = {
// 	d: days,
// 	h: hours,
// 	m: minutes,
// 	s: seconds,
//   }
// 	return objData
//   }

// console.log(convertS(seconds));
//#endregion

//todo Уровень 4.7

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨⭐⭐⭐⭐Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

// const string1234 = 'hello world'

// function sortWordFromAtoB (testString) {
// const insideArr = testString.split(' ');
// const arrForArr = [];

// for (let i = 0; i < insideArr.length; i+=1){
// 	arrForArr.push(insideArr[i].split(''))
// }
// const arrResult = [];
// for (let i = 0; i < arrForArr.length; i+=1){
// 	arrResult.push(arrForArr[i].sort((a, b) => a.localeCompare(b)))
// }
// const result = arrResult.map(item => item.join(''))

// return result.join(' ')
// }

// console.log(sortWordFromAtoB(string1234))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.

// const mas1 = [1,2,3,4,5];
// const mas2 = [2,4,5,6,7,8];

// function theSeymElements (arr1, arr2){
// return arr1.reduce((acc,item)=> {arr2.indexOf(item) ? acc.push(item) : acc; return acc}, [] )
// }

// console.log(theSeymElements(mas1, mas2))

//#endregion

//todo Уровень 4.8

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.

// function randomElement (arr) {

// let inx = Math.round(Math.random() * arr.length);
// return arr[inx];

// }

// console.log(randomElement([2,5,'dd',5,'ee']))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.

// function randomResultEl (arr) {
// const resultArr = []
// let randomCaunt = Math.round(Math.random() * arr.length);

// for (let i = 0; i < randomCaunt; i+=1){
// 	resultArr.push(arr[i])
// }

// return resultArr
// }

// console.log(randomResultEl([2,5,'dd',5,'ee']))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.❓❓❓

// function randomElNotTheSame (arr){

// 	const insideArr = arr.filter((item, inx) => arr.indexOf(item) === inx);
// 	let inx = 0;
// 	for (let i = 0; i < insideArr.length; i +=1){
// 		if(inx[i] === inx[i - 1]){
// 		inx = Math.floor(Math.random() * insideArr.length - 1);
// 	}
// 	}

// return insideArr[inx]
// }

// console.log(randomElNotTheSame([2,5,'dd',5,'ee', 'ee', 'ee', 5]))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.

// function numbers (min, max, callback){
// let resultArr = [];
// for (let i = min; i<=max; i+=1){
// 	if (callback(i) <= 2){
// 		resultArr.push(i)
// 	}
// }

// return resultArr
// }

// console.log(numbers(1, 100, callback));

// function callback (item) {
// 	let result = [];
// 	for (let i = 1; i <= item; i+=1){
// 		if (item % i === 0){
// 			result.push(i)
// 		}
// 	}

// 		return result.length
// }

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.

// function sum (...arr) {
// const mas = [...arr];
// let total = 0;
// for (let i = 0; i < mas.length; i +=1){
// 	total += mas[i]
// }

// return total
// }

// console.log(sum(2,3,4,5,23,2,2,35,235,23,41,3,2))

//#endregion

//#region  🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

// function randomArr (min, max){
// const arr = [];
// for (let i = 0; i <= max; i+=1){
// 	arr.push(Math.round(Math.random()*(max - min) + min))
// }

// const arrResult = []

// for (let i = 0; i < arr.length; i+=1){
// 	if (arr[i] !== arr[i - 1]){
// 		arrResult.push(arr[i])
// 	}
// }
// return arrResult
// }

// console.log(randomArr(1,5))

//#endregion

//#region 🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.

// function differentNum (min, max){
// const resMas = [];

// for (let i = min; i <= max; i +=1){
// 	resMas.push(Math.round(Math.random() * (max - min) + min))
// }

// return resMas.filter((item, inx) => resMas.indexOf(item) === inx)
// }

// console.log(differentNum(1, 10))

//#endregion
//todo Next
//#region // Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const stringArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';
// // 1. поганий варіант
// function findLetter (arr, letter) {
// const insideArr = [];

// for(const item of arr){
// 	item.split('');
// 	for (let i = 0; i < item.length; i+=1){
// 		 if (item[i].includes(letter)){
// 			if(insideArr.includes(item)){
// 				continue;
// 			}
// 			insideArr.push(item)
// 		 }
// 	}
// }
// return insideArr

// }
// console.log(findLetter (stringArray, substring));

// // 2. хороший варіант
// function finding (arr, letter){
// 	const insideArr = [];

// 	for (const item of arr){
// 		if (item.includes(letter)){
// 			insideArr.push(item);
// 		}
// 	}

// 	return insideArr
// }

// console.log(finding (stringArray, substring));

// // 3. найкращий варіант
// const setArrAfterFilter = (arr, letter) => { return arr.filter(item => item.includes(letter))};
// console.log(setArrAfterFilter(stringArray, substring))

//#endregion

//#region Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".Напишіть функцію "findTopStudent", яка буде повертати об'єкти студентів з найвищим середнім балом.

// const students = [
// 	{ name: 'Марія', surname: 'Сидорова', grade: 4 },
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
// ];

// function findTopStudent(studentsInside){
// let total = 0;
// const arr = [];

// //знаходимо максимальний бал
// const maxArr = [];
// for (let i = 0; i < studentsInside.length; i+=1){
// 	maxArr.push(studentsInside[i].grade)
// }
// const max = Math.max(...maxArr);

// // Перебираємо масив об'єктів
// for(const student of studentsInside){
// 	if (student.grade >= total){
// 		total = student.grade
// 		if (student.grade >= max){
// 			arr.push(student)
// 		}
// 	}
// }

// return arr
// }

// console.log(findTopStudent(students));

// function findTopStudents1(studentsInside) {
// 	const sortedStudents = studentsInside.sort((a, b) => b.grade - a.grade);
// 	const topGrade = sortedStudents[0].grade;
// 	const topStudents = sortedStudents.filter(student => student.grade === topGrade);
// 	return topStudents;
//   }

//   console.log(findTopStudents1(students));

//#endregion

//#region ⭐⭐⭐⭐⭐
// let input1 = [[1,3], [2,6], [8,10], [15,18]]; //[[1,6], [8,10], [15,18]]
// let input2 = [[1,4], [4,5]]; //[1,5]
// let input3 = [[1,6], [6,8], [8,9], [12,15], [13, 20], [20, 21]];  //[[1, 9],[12, 21]]
// let input4 = [[1,6], [6,8], [8,9], [9,15], [13, 20], [20, 21]];  //[1, 21]
// let input5 = [[1,6], [7,8], [8,9], [12,15], [13, 20], [20, 21]];//[[1, 6], [7, 9], [12, 21]]
// let input6 = [[1,20], [6,7]]
// let input7 = [ [7,8], [8,9],[1,6],[13, 20],[12,15], [20, 21]];
// function merge(bigArr){
// 	if(bigArr.length < 2){
// 		return bigArr;
// 	}

// 	const firstResult = [];
// 	const secondResult = [];

// 	//сортуємо вхідний масив
// 	const insideArr = [...bigArr]
// 	const arrAfterSort = insideArr.sort((a,b) => a[0] - b[0])

// 	let item = 0;
// 	if (arrAfterSort){
// 		for(let arr = 0; arr < arrAfterSort.length; arr+=1){
// 			for(let i = 0; i < arrAfterSort[arr].length; i+=1){
// 				if(arrAfterSort[arr][i] <= item){
// 					arrAfterSort[arr].shift()
// 				}
// 				item = arrAfterSort[arr][i];
// 			}
// 			if (arrAfterSort[arr].length === 1){
// 				arrAfterSort[arr - 1].pop();
// 				arrAfterSort[arr - 1].splice(1,0, ...arrAfterSort[arr]);
// 				arrAfterSort[arr].shift()
// 			}
// 		}
// 		for(let i = 0; i < arrAfterSort.length; i+=1){
// 			if(arrAfterSort[i].length === 1){
// 				arrAfterSort[i-1].pop();
// 				arrAfterSort[i - 1].splice(1,0, ...arrAfterSort[i]);
// 				arrAfterSort[i].shift()
// 			}
// 		}
// 		if(arrAfterSort[1].length === 1){
// 			const specialArr = [];
// 			let min = 0;
// 			let max = 0;
// 			for(let i = 0; i < arrAfterSort.length; i+=1){
// 				specialArr.push(...arrAfterSort[i])
// 			}
// 			min = Math.min(...specialArr);
// 			max = Math.max(...specialArr);
// 			secondResult.push(min);
// 			secondResult.push(max)
// 		}
// 		if(secondResult.length > 0){
// 			return secondResult
// 		}else{
// 			for (const arr of arrAfterSort){
// 				if(arr.length === 2){
// 					firstResult.push(arr)
// 				}
// 			}
// 			if (firstResult.length === 1){
// 				return firstResult.flatMap(item => item)
// 			}
// 			return firstResult
// 		}
// 	}
// }

// console.log(merge(input1))
// console.log(merge(input2))
// console.log(merge(input3))
// console.log(merge(input4))
// console.log(merge(input5))
// console.log(merge(input6))
// console.log(merge(input7))
//#endregion

// #region ⭐⭐⭐ Если предидущее число меньше чем нынишнее нужно добавить разницу в total, если нет, то оставим total без изменений
// let prices1 = [0,7,1,5,3,6,4];
// let prices2 = [7,6,4,3,1];

// function maxProfit (prises){
// let item = 0;
// let total = 0;
// for(let i = prises.length - 1; i >= 0; i-=1){

// if(prises[i] < item){
// 	total += item - prises[i]
// }
// item = prises[i]
// }
// return total
// }

// console.log(maxProfit(prices1));
// console.log(maxProfit(prices2));
//#endregion

// const moutin = [0,1,0,2,1,0,1,3,2,1,2,1];

// function countingWater(moutins){
// let total = 0;
// let item = 0;

// for (let i = 0; i < moutins.length; i+=1){
// 	if (moutins[i] <= item && moutins[i + 1] >= moutins[i]){
// 		let min = Math.min(item, moutins[i + 1]);
// 		total += min
// 	}
// 	item = moutins[i]
// }

// return total

// }

// console.log(countingWater(moutin))

// #region 5.1⭐⭐⭐ Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.
const form = document.querySelector(".form-js");
const result = document.querySelector(".result-js");
const message = document.querySelector(".message-js");

let storageItem = localStorage.getItem("item");
storageItem
  ? (result.textContent = JSON.parse(storageItem))
  : (result.textContent = 0);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = e.target.elements.numbers.value;
  message.textContent = "";

  if (!value) {
    message.textContent = "Введите данные в форму!";
    return;
  }

  const filteredArr = value
    .split("")
    .filter((item) => Number(item) || item === "0")
    .map((item) => Number(item));

  if (!filteredArr.length) {
    message.textContent = "В вашей строке не было чисел!";
    localStorage.removeItem("item");
    result.textContent = 0;
    return;
  }

  let resultNum = filteredArr.reduce((acc, item) => acc + item, 0);

  localStorage.setItem("item", JSON.stringify(resultNum));
  result.textContent = resultNum;
});

// #endregion

// #region 5.2⭐⭐⭐ Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.

const startNumberEl = document.querySelector(".text-5-2");
const squareBtn = document.querySelector(".btn-5-2");
const squareBtnReset = document.querySelector(".btn-5-2-reset");
const squareInputEl = document.querySelector(".square-num-input");

squareInputEl.addEventListener("input", (e) => {
  startNumberEl.textContent = e.target.value;
});

squareBtn.addEventListener("click", () => {
  const value = Number(startNumberEl.textContent);
  if (!value) return;

  startNumberEl.textContent = Math.pow(value, 2);
});

squareBtnReset.addEventListener("click", () => {
  startNumberEl.textContent = 0;
  if (squareInputEl.value) {
    squareInputEl.value = "";
  }
});

// #endregion

// #region Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.

const sqrtBtn = () => {
  const btnValue = document.querySelector(".value-btn-5-4");
  const numberInput = document.querySelector(".numberInput5-4");
  const message = document.querySelector(".message-5-4-js");
  message.style.color = "red";
  let valueMain = 0;
  numberInput.addEventListener("input", (e) => {
    let value = e.target.value;
    if (!value || value.length > 10) {
      message.textContent = "Error";
      btnValue.textContent = "1";
      return;
    }
    message.textContent = "";
    btnValue.textContent = value;
    valueMain = btnValue.textContent;
  });

  btnValue.addEventListener("click", () => {
    let value = Number(btnValue.textContent);

    let newValue = Math.pow(value, 2);

    btnValue.textContent = newValue;

    if (btnValue.textContent === "Infinity") {
      btnValue.textContent = valueMain;
    }
  });
};
sqrtBtn();

//! 5-1-5
const focusOnInputs = () => {
  const firstInputEl = document.querySelector(".firstInput5-5");
  const secondInputEl = document.querySelector(".secondInput5-5");
  const result = document.querySelector(".result5-5");

  function setValue(e) {
    let value = Number(e.target.value.trim());
    result.innerHTML = "";
    result.textContent = value ? Math.pow(value, 2) : "Field is empty!!!";
    e.target.value = "";
  }

  firstInputEl.addEventListener("blur", setValue);
  secondInputEl.addEventListener("blur", setValue);
};

focusOnInputs();

//! 5-2-1
const randomResult = () => {
  const resuletEl = document.querySelector(".result5-2-1");
  const btnEl = document.querySelector(".btn-5-2-1");

  btnEl.addEventListener("click", () => {
    const min = 1;
    const max = 100;

    const firstNum = Math.ceil(Math.random() * (max - min) + min);
    const secondNum = Math.ceil(Math.random() * (max - min) + min);

    setTimeout(() => {
      resuletEl.textContent = `First num - ${firstNum}`;
    }, 10);

    setTimeout(() => {
      resuletEl.textContent = `Second num - ${secondNum}`;
    }, 2010);

    setTimeout(() => {
      resuletEl.textContent = `${firstNum} + ${secondNum}`;
    }, 4000);

    setTimeout(() => {
      resuletEl.textContent = `${firstNum} + ${secondNum} = `;
    }, 5000);

    setTimeout(() => {
      resuletEl.textContent = `${firstNum + secondNum}`;
    }, 6000);
  });
};
randomResult();

//! 5-2-2
const resultSumOfNumbers = () => {
  const form = document.querySelector(".form5-2-2");
  const resultEl = document.querySelector(".result5-2-2");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const innerForm = e.target.elements;
    const first = Number(innerForm.first.value) || 0;
    const second = Number(innerForm.second.value) || 0;

    if (first || (first === 0 && second) || second === 0) {
      resultEl.textContent = first + second;
    } else {
      resultEl.textContent = 0;
    }

    form.reset();
  });
};
resultSumOfNumbers();

//! 5-2-4
const showLengthInInput = () => {
  const formEl = document.querySelector(".form5-2-4");
  const resultEl = document.querySelector(".result5-2-4");

  let prevText = [];
  let timeInterval = 0;

  function writerText(letter, time = 200) {
    timeInterval += time;
    setTimeout(() => {
      prevText.push(letter);
      resultEl.textContent = [...prevText].join("");
    }, timeInterval);
  }

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    resultEl.innerHTML = "";
    const value = e.target.elements.text.value.trim();

    if (!value) return;

    const text = `Your result is ${value.length} sumbols`;

    for (let i = 0; i <= text.length; i += 1) {
      writerText(text[i]);
    }

    prevText = [];
    timeInterval = 0;
    e.target.reset();
  });
};
showLengthInInput();

//! 5-3-2
const whatValueIsMore = () => {
  const firstInputEl = document.querySelector(".firstInput5-3-2");
  const secondInputEl = document.querySelector(".secondInput5-3-2");
  const firstTextEl = document.querySelector(".firstText5-3-2");
  const secondTextEl = document.querySelector(".secondText5-3-2");
  const resultEl = document.querySelector(".signResult5-3-2");
  const btn = document.querySelector(".btn5-3-2");

  let value1 = 0;
  let value2 = 0;

  firstInputEl.addEventListener("input", (e) => {
    value1 = e.target.value.trim();
    firstTextEl.textContent = value1 || 0;
    resultEl.textContent = "";
    if (value1 > value2) {
      resultEl.textContent = ">";
    } else if (value1 < value2) {
      resultEl.textContent = "<";
    } else {
      resultEl.textContent = "=";
    }
  });

  secondInputEl.addEventListener("input", (e) => {
    value2 = e.target.value.trim();
    secondTextEl.textContent = value2 || 0;
    resultEl.textContent = "";
    if (value1 > value2) {
      resultEl.textContent = ">";
    } else if (value1 < value2) {
      resultEl.textContent = "<";
    } else {
      resultEl.textContent = "=";
    }
  });
};
whatValueIsMore();

//! 5-3-3
const countInputValue = () => {
  const formEl = document.querySelector(".form5-3-3");
  const resultEl = document.querySelector(".text5-3-3");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let result = 0;
    const value = e.target.elements.numbers.value.trim();
    for (let i = 0; i <= value.length; i++) {
      result += Number(value[i]);
    }

    resultEl.textContent = result;
    e.target.reset();
  });
};

countInputValue();

//! 5-3-4
const turnOverTheText = () => {
  const formEl = document.querySelector(".form5-3-4");
  const resultEl = document.querySelector(".text5-3-4");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = e.target.elements.el.value.trim();
    if (!value) return;
    if (value.length < 2) {
      alert("Value is too short");
    }
    let arr = [];
    for (let i = 0; i <= value.length; i++) {
      arr.push(value[i]);
    }
    const result = arr.reverse().join("");

    resultEl.textContent = result;
    e.target.reset();
  });
};
turnOverTheText();

//! 5-3-5
const fillInTheParagraph = () => {
  const result1 = document.querySelector(".firstText5-3-5");
  const result2 = document.querySelector(".secondText5-3-5");

  const count1 = document.querySelector(".countOne5-3-5");
  const count2 = document.querySelector(".countTwo5-3-5");

  const input = document.querySelector(".input5-3-5");
  const error = document.querySelector(".error5-3-5");

  const winnerResult = document.querySelector(".winner5-3-5");

  const btn = document.querySelector(".btn5-3-5");
  let btnState = true;
  btn.disabled = btnState;
  let state = true;
  let arr1 = [];
  let arr2 = [];
  let counter1 = 0;
  let counter2 = 0;
  let clicks = 0;

  function randomNumbers(arr, value = false) {
    let number = Math.ceil(Math.random() * (100 - 1) + 1);
    arr.push(number);
    return !value ? arr : [];
  }

  const handleInput = (e) => {
    const value = Number(e.target.value);
    if (value > 20 || !value) {
      error.textContent =
        "The number of games must be less than 21 and more than 0";
      btnState = true;
      btn.disabled = btnState;
    } else {
      btnState = false;
      btn.disabled = btnState;
      error.textContent = "";
      clicks = value;
    }
  };

  // const handleKeyDownWrapper = (callback) => (event) => {
  //   if (event.key === "Enter") {
  //     console.log(event.key);
  //     callback();
  //   }
  // };

  const handleClick = () => {
    if (state && counter1 < clicks) {
      winnerResult.textContent = "";
      state = false;
      count1.textContent = counter1 += 1;
      result1.textContent = randomNumbers(arr1)
        .toSorted((a, b) => a - b)
        .join(" | ");
    } else if (!state && counter2 < clicks) {
      state = true;
      count2.textContent = counter2 += 1;
      result2.textContent = randomNumbers(arr2)
        .toSorted((a, b) => a - b)
        .join(" | ");

      if (counter2 === clicks) {
        setTimeout(() => {
          result1.textContent = randomNumbers(arr1, true);
          result2.textContent = randomNumbers(arr2, true);
          counter1 = 0;
          counter2 = 0;
          clicks = 0;
          let maxNum1 = Math.max(...arr1);
          let maxNum2 = Math.max(...arr2);
          if (maxNum1 > maxNum2) {
            winnerResult.textContent = `Player 1 is the winner, the best result is ${maxNum1}`;
          } else if (maxNum2 > maxNum1) {
            winnerResult.textContent = `Player 2 is the winner, the best result is ${maxNum2}`;
          } else {
            winnerResult.textContent = "Omg this is draw!!!";
          }
          arr1 = [];
          arr2 = [];
          count1.textContent = counter1;
          count2.textContent = counter2;
        }, 1500);
      }
    }
  };

  input.addEventListener("input", handleInput);
  btn.addEventListener("click", handleClick);
  // btn.addEventListener("keydown", handleKeyDownWrapper(handleClick));
};
fillInTheParagraph();

//! 5-4-1
const changeText = () => {
  const first = document.querySelector(".firstText5-4-1");
  const second = document.querySelector(".secondText5-4-1");

  let originalText1 = first.textContent; // Сохраняем исходный текст
  let originalText2 = second.textContent;

  first.addEventListener("click", () => {
    first.textContent =
      first.textContent === originalText1 ? "!" : originalText1;
  });

  second.addEventListener("click", () => {
    second.textContent =
      second.textContent === originalText2 ? "!" : originalText2;
  });
};

changeText();

//! 5-4-2
const takeLink = () => {
  const linkEl = document.querySelector(".link5-4-2");
  const resultEl = document.querySelector(".result5-4-2");
  const btn = document.querySelector(".btn5-4-2");
  let state = true;

  btn.addEventListener("click", () => {
    if (state) {
      resultEl.textContent = linkEl.href;
      state = false;
    } else {
      resultEl.textContent = "__________________________";
      state = true;
    }
  });
};
takeLink();

//!5-4-4
const takeDate = () => {
  const yearEl = document.querySelector(".year5-4-4");
  const monthEl = document.querySelector(".month5-4-4");
  const dayEl = document.querySelector(".day5-4-4");
  const btn = document.querySelector(".btn5-4-4");
  const time = new Date();

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const daysOfWeek = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  btn.addEventListener("click", () => {
    yearEl.textContent = time.getFullYear();
    monthEl.textContent = monthNames[time.getMonth()];
    dayEl.textContent = time.getDate();
    dayEl.textContent = daysOfWeek[time.getDay() - 1];
  });
};
takeDate();

//!5-5-1
const takeDateFromInput = () => {
  const yearEl = document.querySelector(".year5-5-1");
  const monthEl = document.querySelector(".month5-5-1");
  const dayEl = document.querySelector(".day5-5-1");
  const formEl = document.querySelector(".form5-5-1");
  const messageEl = document.querySelector('.error5-5-1')
  const time = new Date();

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = e.target.elements.date.value.trim();
    let year = Number(value.slice(0, 4));
    let month = Number(value.slice(5, 7));
    let day = Number(value.slice(8, 10));

    if (year > Number(time.getFullYear())){
      messageEl.textContent = `A year cannot be more than ${time.getFullYear()}`;
      return;
    }

    if(month > 12 || month < 1){
      messageEl.textContent = "Incorrect month value. The value mustn't be more than 12 and less than 1";
      return;
    }
    
    if(day > 31 || day < 1){
      messageEl.textContent = "Incorrect day value. The value mustn't be more than 31 and less than 1";
      return;
    }
    messageEl.textContent = ""
    yearEl.textContent = year
    monthEl.textContent = month
    dayEl.textContent = day
    
  })
}
takeDateFromInput()