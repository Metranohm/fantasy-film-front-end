import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/actors`



export async function search(actorSearch) {
  const res = await fetch(`${BASE_URL}/search`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(actorSearch)
  })
  return res.json()
}

export async function create(actorData) {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(actorData)
    })
    return res.json()
    
  } catch (error) {
    console.log(error);
  }
}

export async function favorite(actorData) {
  try {
    const res = await fetch(`${BASE_URL}/favorite`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(actorData)
    })
    return res.json()    
  } catch (error) {
    console.log(error)
  }
}

export async function deleteFav(actorData) {
  try {
    const res = await fetch(`${BASE_URL}/favorite`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(actorData)
    })
    return res.json()
    
  } catch (error) {
    console.log(error);
  }
}

export async function index () {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}