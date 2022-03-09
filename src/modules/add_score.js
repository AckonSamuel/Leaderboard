import { url } from './initialize_game.js';

const game_id = 'WAtaGU0naxzTYhJLb';
const add_score = async (name, score) => {
    const response = await fetch(`${url}/${game_id}/scores`, {
        method: 'POST',
        body: JSON.stringify({
            user: name,
            score,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
     });
     return response.json();
};

export default add_score;