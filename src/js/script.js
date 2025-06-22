document.querySelector(".price").onclick = (event) => {
    event.preventDefault();
    document.querySelector(".plans").scrollIntoView({ behavior: "smooth" });
}

for (let i = 1; i < 20; i++) {
    let row = "*";
    for (let j = 1; j < i; j++) {
        row += "*";
    }
    console.log(row);
}