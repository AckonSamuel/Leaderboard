import fill from './show_score.js';

const get_result = async () => {
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/el-1/scores/';
    let data = await fetch(url);
    data = await data.json();
    fill(data.result);
};

export default get_result;