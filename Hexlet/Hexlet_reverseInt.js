function reverseInt(num) {

    let absolute = Math.abs(num).toString(),
        i = absolute.length - 1,
        reversed = '';

    while (i >= 0) {
        reversed += absolute[i];
        i--
    }

    if (num < 0) {
        console.log(Number('-' + reversed));

    } else {
        console.log(reversed);
    }

}

reverseInt(12345);
reverseInt(-987654321);
