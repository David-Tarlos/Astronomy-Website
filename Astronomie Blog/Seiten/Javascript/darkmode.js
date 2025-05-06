// Hole den gespeicherten Wert für Dark Mode aus localStorage
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// Funktion, um den Dark Mode zu aktivieren
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}


const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
}


if (darkmode === 'active') {
    enableDarkmode();
}


themeSwitch.addEventListener("click", () => {
    
    darkmode = localStorage.getItem('darkmode')
    if (darkmode !== "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});
