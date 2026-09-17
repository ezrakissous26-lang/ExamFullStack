export async function fetchRegister(username: string, email: string, password: string) {
    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, email, password})
        })
        const data = await response.json()
        if (!response.ok) {
            const err = new Error(data.error)
            throw err
        }
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function fecthLogin(email: string, password: string) {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })
        const data = await response.json()
        if (!response.ok) {
            const err = new Error(data.error)
            throw err
        }
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function fecthPostPost(data: string, token: string) {
    try {
        const response = await fetch('http://localhost:3000/post', {
            method: 'POST',
            headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
            body: JSON.stringify({message: data})
        })
        const dataResponse = await response.json()
        if (!response.ok) {
            const err = new Error(dataResponse.error)
            throw err
        }
        return data
    } catch (error) {

        console.log(error)
        throw error
    }
}

export async function fecthGetPost(token: string) {
    try {
        const response = await fetch('http://localhost:3000/post', {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`},
        })
        const data = await response.json()
        if (!response.ok) {
            const err = new Error(data.error)
            throw err
        }
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}