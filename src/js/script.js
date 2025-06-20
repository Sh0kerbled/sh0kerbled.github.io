document.querySelector(".price").onclick = (event) => {
    event.preventDefault();
    document.querySelector(".plans").scrollIntoView({ behavior: "smooth" });
}

const lang = navigator.language || navigator.userLanguage;
if (lang.startsWith('ru')) {
    window.location.replace('/ru');
} else {
    window.location.replace('/en');
}