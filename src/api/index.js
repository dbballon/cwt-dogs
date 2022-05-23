import axios from 'axios';
export const getAllDogs = async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all")
    return res?.data?.message
}
export const getDogImage = async (name) => {
    const res = await axios.get(`https://dog.ceo/api/breed/${name}/images/random`)
    return res?.data?.message
}
