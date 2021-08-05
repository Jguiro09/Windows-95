function hide () {
    modal = document.querySelector(".myModal")
    modal.classList.toggle("hidden");
}

document.getElementById("test").addEventListener("click", hide)
document.getElementById("test2").addEventListener("click", hide)