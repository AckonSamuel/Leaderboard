import './style.css';
import add_score from './modules/add_score.js';
import { initialize_game } from './modules/initialize_game.js';
import get_result from './modules/retrieve_data.js';


const li = document.querySelectorAll('li');
const liArr = Array.from(li);

for (let i = 0; i < liArr.length; i += 1) {
  if (i % 2 !== 0) { liArr[i].style.background = '#aaa'; }
};

const user_name = document.getElementById('name');
const user_score = document.getElementById('score');
const form = document.querySelector('form');
initialize_game('God of War');
form.addEventListener('submit', () => {
  add_score(user_name.value, user_score.value);
  form.reset();
});

const refresh = document.querySelector('.refresh');
 
refresh.addEventListener('click', get_result);

window.onload = () => get_result();
