import axios from "axios";

export const api = axios.create({
baseURL: "https://chamavolante-sistema-de-chamados.onrender.com/api"
});