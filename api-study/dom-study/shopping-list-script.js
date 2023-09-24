let ul = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let inputItem = input.value;
    input.value = '';

    let li = document.createElement('li');
    let span = document.createElement('span');
    let btn = document.createElement('button');

    span.textContent = inputItem;
    btn.textContent = 'Delete';

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);

    btn.addEventListener('click', () => {
        li.remove();
    })

    input.focus();
});