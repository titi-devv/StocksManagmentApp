const localhost = 'http://localhost:3000'

export const getData = async (data: string) => {
    const res = await fetch(`${localhost}/api/${data}`)
    return await res.json()
}

export const getSortedArticles = async (query: string, data: string) => {
    const res = await fetch(`${localhost}/api/sortedArticles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, data }),
    })
    return res.json()
}

export const getStocks = async (data: string) => {
    const res = await fetch(`${localhost}/api/stocks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    })
    return res.json()
}

export const getSupplier = async (data: string) => {
    const res = await fetch(`${localhost}/api/sortedSupplier`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
    })
    return res.json()
}

export const getUser = async (email: string, password: string) => {
    console.log('getUSer', email, password)
    const res = await fetch(`${localhost}/api/getUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    return await res.json()
}

export const addUser = async (
    name: string,
    email: string,
    password: string
) => {
    const res = await fetch(`${localhost}/api/addUser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
    return res
}
