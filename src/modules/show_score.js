const contain_scores = document.querySelector('.contain-scores');
const fill = (data) => {
    data.map((m) => {
        const li = document.createElement('li');
        li.innerHTML = `${m.user} : ${m.score}`;
        contain_scores.appendChild(li);
        return m;
    });
};

export default fill;