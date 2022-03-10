const fill = (data) => {
  const containScores = document.querySelector('.containScores');
  while (containScores.firstChild) {
    containScores.removeChild(containScores.firstChild);
  }
  data.forEach((m) => {
    const li = document.createElement('li');
    li.innerHTML = `${m.user} : ${m.score}`;
    containScores.appendChild(li);
  });
};

export default fill;