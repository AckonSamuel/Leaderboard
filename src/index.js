import './style.css';
import addScore from './modules/addScore.js';
import { initializeGame } from './modules/initializeGame.js';
import getResult from './modules/retrieve_data.js';

const userName = document.getElementById('name');
const userScore = document.getElementById('score');
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('#submit');
initializeGame('God of War');

submit.addEventListener('click', () => {
  if( userName.value != '' && userScore.value != ''){
  addScore(userName.value, userScore.value);
  userName.value = '';
  userScore.value = '';
}
  console.log("worked");
});

 
refresh.addEventListener('click', () => {
  window.location.reload();
})

window.onload = () => getResult();
