/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = +rectSides[0] * +rectSides[1];

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number % 2 === 0) {
//         total += number;
//     }    
// }

// console.log('numbers: ', numbers);
// console.log('total: ', total);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const arrayNames = names.split(',');
// const arrayPhones = phones.split(',');

// console.log(arrayNames);
// console.log(arrayPhones);

// let contact;

// for (let i = 0; i < arrayNames.length; i++) {
//     console.log(contact = `${arrayNames[i]} ${arrayPhones[i]}`);
// }

/*
? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
*/

// const string = 'Our office is closed so we`re working from home today.';

// let newString = string.split(' ');
// newString = newString.slice(1, newString.length - 1).join(' ');

// console.log(newString);

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = 0;

// for (let i = 0; i < values.length; i++) {
//     if (values[i] < min) {
//         min = values[i];
//     }
// }

// console.log(min);

/*
? У нас є декілька масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// let total = 0;

// const salaries = managerSalaries.concat(developersSalaries);

// for (const salary of salaries) {
//     total += salary;
// }

// console.log(total);