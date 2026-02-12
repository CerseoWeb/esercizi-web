

let opzioni = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": "admin",
        "password": "admin"
    })
}


let res = await fetch(url, opzioni);

