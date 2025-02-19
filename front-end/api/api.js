// Fetch ou Axios
// Fetch -> nativo do browser
// Axios -> biblioteca de terceiros
import axios from "axios";

// const NODE_ENV = process.env.NODE_ENV; // development ou production
// const URL = "http://localhost:3000/api"; //
const URL = "https://projeto-clone-spotify-ss8p.onrender.com/api"; //

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
