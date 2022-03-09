import fill from './show_score.js';

const get_result = async () => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hel-lo/scores/';
    const data = await fetch(url);
    const obj = await data.json();
    fill(obj.result);
};

export default get_result;