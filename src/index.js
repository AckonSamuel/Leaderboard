import './style.css';
import add_score from './modules/add_score.js';
import { initialize_game } from './modules/initialize_game.js';
import get_result from './modules/retrieve_data.js';

const user_name = document.getElementById('name');
const user_score = document.getElementById('score');
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('#submit');
initialize_game('God of War');

submit.addEventListener('click', () => {
  if( user_name.value != '' && user_score.value != ''){
  add_score(user_name.value, user_score.value);
  user_name.value = '';
  user_score.value = '';
}
  console.log("worked");
});

 
refresh.addEventListener('click', () => {
  window.location.reload();
})

window.onload = () => get_result();
