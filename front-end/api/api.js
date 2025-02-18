// Fetch ou Axios
// Fetch -> nativo do browser
// Axios -> biblioteca de terceiros
import axios from 'axios';

const URL = "http://localhost:3000"

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;