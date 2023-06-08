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

export const postGifApi = async ( name, imageUrl, genre ) => {
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, imageUrl, genre}),
    }
    const response = await fetch(`${basePath}/gif`, params)
    const data = await response.json()
    return data;
}

export const deleteGifByIdApi = async ( _id ) => {
    const params = {
        method: "DELETE"
    }
    const response = await fetch(`${basePath}/gif/${_id}`, params)
    const data = await response.json()
    return data;
}