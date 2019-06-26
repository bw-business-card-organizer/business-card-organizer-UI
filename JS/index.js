// Start for main JS!

function collapse() {
    let login = document.querySelector('.btn');
    login.addEventListener('click', (event) => {
        let landing = document.querySelector('.landing');
        let login = document.querySelector('.btn');
        event.preventDefault(); // fire this on the event
        landing.classList.toggle('landing-collapsed');
        let goto = login.getAttribute('href');
        setTimeout(function() {
            window.location = goto;
        }, 500);
        return false;
    });
}

collapse();

function setSlides() {
    window.addEventListener('keydown', (event) => {
        let slides = document.querySelectorAll('[data-slidenum]');
        if(slides.length < 1) return; //we don't wont to do this with no slides
        let current = document.querySelector('.showing');
        if(event.keyCode == '38') { // up arrow key
            event.preventDefault();
            let prevNum = +current.dataset.slidenum - 1;
            if(prevNum < 1) return;
            let prev = slides[prevNum - 1];
            prev.scrollIntoView({'behavior': 'smooth', 'block': 'center'});
            current.classList.toggle('showing');
            prev.classList.toggle('showing');
        }
        else if(event.keyCode == '40') { // down arrow key
            event.preventDefault();
            let nextNum = +current.dataset.slidenum + 1;
            if(nextNum > slides.length) return;
            let next = slides[nextNum - 1];
            next.scrollIntoView({'behavior': 'smooth', 'block': 'center'});
            current.classList.toggle('showing');
            next.classList.toggle('showing');
        }
    });
}

setSlides();