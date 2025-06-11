const allSections = document.querySelectorAll(".features");

let observer = new IntersectionObserver((callback, options) => {
    callback.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            console.log("word")
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.7
})

allSections.forEach(element => {
    observer.observe(element);
});