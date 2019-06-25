// Start for main JS!

function collapse() {
    let landing = document.querySelector('.landing');
    let login = landing.querySelector('.btn');
    login.addEventListener('click', () => {
        login.preventDefault();
        landing.classList.toggle('landing-collapsed');
        let goto = login.getAttribute('href');
        setTimeout(function() {
            window.location = goto;
        }, 1000);
    });
}

collapse();