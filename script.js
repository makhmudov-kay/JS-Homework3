do {
    var a = +prompt('Введите число');
} while (isNaN(a) || a == 0);

var b = +prompt('Введите степень для первого числа');
b = isNaN(b) || b == 0 ? 2 : b
alert("Ответ = " + (a**b));

do {
    var x = +prompt('Введите количество ступеней');
} while (isNaN(x) || x == 0 || x == null);

do {
    var y = prompt('Введите символ отступов');
} while ( y ==='');

do {
    var z = prompt('Введите конечный символ');
} while ( z ==='');

for (let i = 0; i < x; i++) {
    console.log(y.repeat(i)+z);
}
