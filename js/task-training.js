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

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл,
? який для кожного елемента масиву буде виводити в консоль повідомлення у
? форматі <номер елемента> - <значення елемента>. Нумерація елементів
? повинна починатися з 1.
?
? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
? індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function (items) {
//     for (let i = 0; i < items.length; i++) {
//         const element = items[i];
//         console.log(`${i + 1}: ${element}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напиши функцію printInfo(names, phones) яка виводить
? у консоль ім'я та телефонний номер користувача. У параметри
? names та phones будуть передані рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках
? вказують на відповідність. Кількість імен та телефонів
? гарантовано однакова.
*/

// const printInfo = function (names, phones) {
//     const name = names.split(',');
//     const phone = phones.split(',');
//     console.log(name);
//     console.log(phone);
//     for (let i = 0; i < name.length; i++) {
//         const info = `${name[i]} - ${phone[i]}`;
//         console.log(info);
//     }
// }

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//     const sides = dimensions.split(' ');
//     return square = +sides[0] * +sides[1];
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
? В параметр letter будуть передавати рядок із однією літерою.
? Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// const checkCaseOfLetter = function (letter) {
//   // if (letter === letter.toLowerCase()) {
//   //   return 'lower case';
//   // } else {
//   //   return 'upper case';
//   // }

//   return letter === letter.toLowerCase() ? 'lower case' : 'upper case';
// };

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
? Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
? В параметр str будуть передавати рядок.
*/

// const changeCaseOfLetters = function (str) {
//     console.log(str);
//     const array = str.split('');
//     console.log(array);
//     let string = '';
//     for (let letter of array) {
//         if (letter === letter.toLowerCase()) {
//             string += letter.toUpperCase();
//         } else {
//             string += letter.toLowerCase();
//         }
//     }
//     return string;
// }

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

/*
? Метод splice().
?
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];



// function addCourse(courseName) {
//     if (courses.includes(courseName)) {
//         console.log(`У вас вже є курс ${courseName}`);
//     } else {
//         courses.push(courseName);
//     }
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'



// function removeCourse(courseName) {
//     if (courses.includes(courseName)) {
//         const deleted = courses.indexOf(courseName);
//         courses.splice(deleted, 1);
//     } else {
//         console.log(`Курс з назвою ${courseName} не знайдено`);
//     }
// }

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'



// function updateCourse(oldCourseName, newCourseName) {
//     const oldCourseIndex = courses.indexOf(oldCourseName);
//     courses.splice(oldCourseIndex, 1, newCourseName);
// }

// updateCourse('HTML', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']