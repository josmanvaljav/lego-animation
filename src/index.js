const modal = document.querySelector(".modal");
const spiderman = document.querySelector(".spm1");
const batman = document.querySelector(".spm2");
const flash = document.querySelector(".spm3");
const radio1 = document.querySelector("#radio-1");
const radio2 = document.querySelector("#radio-2");
const radio3 = document.querySelector("#radio-3");
const closeButton = document.querySelector(".modal__content--close");

spiderman.addEventListener("click", () => {
    radio1.checked = true;
    modal.classList.remove("hidden");
    modal.classList.add("visible");
});
batman.addEventListener("click", () => {
    radio2.checked = true;
    modal.classList.remove("hidden");
    modal.classList.add("visible");
});
flash.addEventListener("click", () => {
    radio3.checked = true;
    modal.classList.remove("hidden");
    modal.classList.add("visible");
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
});
