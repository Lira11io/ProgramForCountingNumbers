const n = prompt("Введите целое число:"); //задаем диалоговое окно с сообщением
const digits = n.split(""); //разделяем число на цифры
console.log("Цифры числа:"); //выводим в консоль фразу "Цифры числа"
for (let digit of digits) {
  console.log(digit); //выводим каждую цифру числа
}
console.log(`Количество цифр: ${digits.length}`); //выводим сколько цифр в числе
let sum = 0;
for (let digit of digits) {
  sum += Number(digit); //находим сумму цифр
}
console.log(`Сумма цифр: ${sum}`); //выводим сууму цифр в консоль

console.log(digits.reverse().join("")); // меняем порядок цифр и выводим новое число
