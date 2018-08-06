import axios from 'axios'
import env from '../config/index'
const FETCH_API = env.API_ENDPOINT

export async function findAll() {
    return await axios.get(FETCH_API).then(async res => {
        return await res.data
    })
}

export async function create(todo) {
    return await axios.post(FETCH_API, { ...todo }).then(async res => {
        return await res.data
    })
}

export async function remove(id) {
    return await axios.delete(`${FETCH_API}/${id}`).then(async res => {
        return await res.data
    })
}

export async function patch(id, todo) {
    return await axios.patch(`${FETCH_API}/${id}`, {...todo}).then(async res => {
        return await res.data
    })
}