import { url } from './initializeGame.js';

const game_id = 'hel-lo';
const addScore = async (name, points) => {
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

export default addScore;