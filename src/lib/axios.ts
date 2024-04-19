import axios from "axios";

export const apiConta = axios.create({
  baseURL:"http://localhost:8889/api/"
})
export const apiUsuario = axios.create({
  baseURL:"http://localhost:8080/api/"
})

