document.querySelector(".price").onclick = (event) => {
    event.preventDefault();
    document.querySelector(".plans").scrollIntoView({ behavior: "smooth" });
}