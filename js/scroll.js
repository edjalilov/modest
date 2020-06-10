const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let btn = document.querySelector('.scroll-btn');
let timer;

btn.addEventListener('click', toTop);

function toTop() {
    let scrolled = window.pageYOffset;
    if (scrolled > 0) {
        scrollTo(0, scrolled -= 100);
        timer = setTimeout(toTop, 10);
    }
}

window.addEventListener('scroll', function () {
    if (pageYOffset > 800) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
})