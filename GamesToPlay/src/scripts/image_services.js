var backendBaseUrl = import.meta.env.VITE_APP_LOCAL_BACKEND_URL;

export async function fetchGameBoxArt(gameTitle) {

    return fetch(`${backendBaseUrl}/game/box-art?${new URLSearchParams({game_title: gameTitle})}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .catch(err => console.log(err));
}

export function saveGameBoxArt(boxArtURL) {

    return fetch(`${backendBaseUrl}/game/box-art/update`, {
        method: "POST"
    })
}