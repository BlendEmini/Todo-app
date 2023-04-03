"use strict";
const sectionEl = document.querySelector(".section");
const inputEl = document.querySelector("input");
const ulEl = document.querySelector(".list");
const submit = document.querySelector(".return-input-value");
const checkBtn = document.querySelector(".check-img");
submit.addEventListener("click", () => {
    // event.defaultPrevented();
    console.log(inputEl.value);
    todoList();
});

const todoList = function () {
    let newTask = inputEl.value;
    const liEl = document.createElement("li");
    liEl.innerText = newTask;
    ulEl.appendChild(liEl);
    inputEl.value = "";
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `   <button class="check-btn"></button>
    <img src="checkmark.svg" alt="" class="check-img">
    `;
    liEl.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `
    <button class="trash-btn"> </button>
    <img src="trash.svg" alt="" class="trash-img">
    `;
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked");
    });
    trashBtnEl.addEventListener("click", () => {
        liEl.remove();
    });
};




