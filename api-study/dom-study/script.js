const link = document.querySelector('a');

link.textContent = 'Mozzila Developer Network';
link.href = 'https:developer.mozilla.org';

const sect = document.querySelector('section');

const para = document.querySelector('p');
para.textContent = 'We hope you enjoyed the ride.';

sect.appendChild(para);

const text = document.createTextNode(' -  the premier source for web development knowledge.');

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

para.setAttribute('class', 'highlight');