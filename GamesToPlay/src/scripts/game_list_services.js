var backendBaseUrl = import.meta.env.VITE_APP_LOCAL_BACKEND_URL;

export async function getGameList(gameType) {

    return fetch(`${backendBaseUrl}/game/${gameType}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then( response => response.json())
    .catch(err => { throw err })
}

export async function addGame(gameType, gameDetails) {    

    return fetch(`/game/${gameType}/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: gameDetails
    })
    .then(response => response.json())
    .catch(err => { throw err })
}

export async function updateGameDetails(gameType, gameDetails) {

    return fetch(`/game/${gameType}/update`, {

        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: gameDetails
    })
    .then(response => response.json())
    .catch(err => { throw err })
}

export async function deleteGame(gameType, gameTitle) {

    return fetch(`/game/${gameType}/delete?${new URLSearchParams({gameTitle: gameTitle})}`, 
    {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .catch(err => { throw err })
}

export async function markGameAsPlayed(gameTitle) {

    return fetch(`/game/mark-as-played?${new URLSearchParams({gameTitle: gameTitle})}`, 
    {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .catch(err => { throw err })
}