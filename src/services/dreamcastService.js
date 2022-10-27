import * as tokenService from "./tokenService"

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/dreamcasts`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (dreamcastData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dreamcastData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const update = async (dcId, castId, actorData) => {
  try {
    const res = await fetch(`${BASE_URL}/${dcId}/cast/${castId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({actor: actorData})
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export async function deleteDreamcast(movieID) {
  try {
    const res = await fetch(`${BASE_URL}/${movieID}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
    
  } catch (error) {
    console.log(error);
  }
}

export {
  index,
  show,
  create,
  update,
}