import "../css/style.css";
import { aush } from "./auth";

const userElem = document.getElementById('user');
const passElem = document.getElementById('password');
const btnElem = document.getElementById('button');
const errElem = document.getElementById('error');

const main = () => {
    btnElem.addEventListener('click', async (e) => {
        e.preventDefault();
        const resultUser = await aush(userElem.value);
        const resultPass = await aush(passElem.value);
        if (resultUser && resultPass) {
            location.replace("./dist/index.html");
        } else {
            errElem.classList.add('active');
        }
    });
}

main();