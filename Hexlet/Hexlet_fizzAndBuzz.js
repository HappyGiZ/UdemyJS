function fizzAndBuzz(begin, end) {

    for (let i = begin; i <= end; i++) {

        if (begin > end) {

        } else if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');

        } else if (i % 3 == 0) {
            console.log('Fizz');

        } else if (i % 5 == 0) {
            console.log('Buzz');

        } else {
            console.log(i);
        }
    }
}

fizzAndBuzz(4, 55);