let token = '7a297c6ab9f75d2840755733aa7a1fa0843b66c52b838f'


/**
 * IMPORTANT TO NOTE:
 * SERVER CALLS DO NOT WORK
 * I did not put the week 6 work on heroku to host it, and have been trying and failing to get it up.
 * As such, the server calls cannot function. However, you mentioned that we'd be able to host the apps ourselves soon,
 * so this is still being coded out with the hopes of reaching that point
 */
export const serverCalls = {
    get: async() => {
        const response = await fetch(`https://rangers-car-garage.herokuapp.com/api/cars`,{
            method: `GET`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async(data:any = {}) => {
        const response = await fetch(`https://rangers-car-garage.herokuapp.com/api/cars`,{
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to create data on server ')
        }

        return await response.json()
    },
    update: async(id:string, data:{}) => {
        const response = await fetch(`https://rangers-car-garage.herokuapp.com/api/cars/${id}`,{
            method: `PUT`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://rangers-car-garage.herokuapp.com/api/cars/${id}`,{
            method: `DELETE`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
        if (!response.ok){
            throw new Error('Failed to delete data from server')
        }

        return await response.json()
    }
}