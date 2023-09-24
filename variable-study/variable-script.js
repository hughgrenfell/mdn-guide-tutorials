const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');
myAge = 42;

buttonA.onclick = () => {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
}


