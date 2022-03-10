import './style.css';
import addScore from './modules/addScore.js';
import getResult from './modules/retrieve_data.js';

const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
  if (userName.value !== '' && userScore.value !== '') {
    addScore(userName.value, userScore.value);
    userName.value = '';
    userScore.value = '';
  }
});

refresh.addEventListener('click', () => {
  window.location.reload();
});

window.onload = () => getResult();
