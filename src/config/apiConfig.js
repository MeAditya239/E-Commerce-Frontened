import axios from "axios"
//export const API_BASE_URL="http://localhost:5454"

//export const API_BASE_URL="https://ecommerce-backend-production-884d.up.railway.app" 


export const API_BASE_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:8080" // local dev
        : "https://ecommerce-backend-production-884d.up.railway.app"; // production


const jwt = localStorage.getItem("jwt")


export const api = axios.create({
    baseURL : API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        'Content-Type': "application/json"
    }
})