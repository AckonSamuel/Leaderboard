import fill from "./show_score.js";

const getResult = async () => {
  const url =
    "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/hel-lo/scores/";
  const data = await fetch(url);
  const obj = await data.json();
  fill(obj.result);
};

export default getResult;
