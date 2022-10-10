const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay'),
    link = document.querySelector('a');


// btn.onclick = function () {
//     alert('123');
// };

let i = 0;

const deleter = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);

    // console.log(e.target);
    // i++;
    // if (i == 2) {
    //     btn.removeEventListener('click', deleter);
    // }
};

// btns.addEventListener('click', deleter);

// overlay.addEventListener('click', deleter);

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);

    // window.open(e.target.href, '_blank');
});

btns.forEach(element => {
    element.addEventListener('click', deleter, {once: true});
});