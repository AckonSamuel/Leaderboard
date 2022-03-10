
const fill = (data) => {
    const contain_scores = document.querySelector('.contain-scores');
    while (contain_scores.firstChild) {
        contain_scores.removeChild(contain_scores.firstChild);
    };
    data.forEach((m) => {
        const li = document.createElement('li');
        li.innerHTML = `${m.user} : ${m.score}`;
        contain_scores.appendChild(li);
    });
};

export default fill;