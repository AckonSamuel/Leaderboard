const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const initialize_game = async (game_name) => {
    const response = await fetch(`${url}/`, {
        method: 'POST',
        body: JSON.stringify({name: game_name }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    });
    return response.json();
};

export { url, initialize_game };