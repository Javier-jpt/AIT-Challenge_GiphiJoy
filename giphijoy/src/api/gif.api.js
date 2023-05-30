import { basePath } from "./config";

// Getting info from back !!!

export const getGifsApi = async () => {
    const response = await fetch(`${basePath}/gif`)
    const data = await response.json()
    return data;
}

export const getGifsByGenreApi = async ( genre ) => {
    const response = await fetch(`${basePath}/gif/${genre}`)
    const data = await response.json()
    return data;
}

export const postGifApi = async ( gif ) => {
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gif),
    }
    const response = await fetch(`${basePath}/gif`, params)
    const data = await response.json()
    return data;
}

export const deleteGifByIdApi = async ( _id ) => {
    const response = await fetch(`${basePath}/gif/${_id}`)
    const data = await response.json()
    return data;
}