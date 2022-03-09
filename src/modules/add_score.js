import { url } from './initialize_game.js';

const game_id = 'hel-lo';
const add_score = async (name, points) => {
    const response = await fetch(`${url}/${game_id}/scores/`, {
        method: 'POST',
        body: JSON.stringify({
            user: name,
            score: points,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
     });
     return response.json();
};

export default add_score;