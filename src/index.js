import './style.css';

const li = document.querySelectorAll('li');
const liArr = Array.from(li);

for (let i = 0; i < liArr.length; i += 1) {
  if (i % 2 !== 0) { liArr[i].style.background = '#aaa'; }
}