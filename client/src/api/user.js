let URL = 'http://localhost:5000/api/users/';
export const userAPI = {
    getUsers : async ()=>{
        const res = await fetch(URL)
        return await res.json()
    },
    getUserById: async (id)=>{
        const res = await fetch(URL + id)
        return await res.json()
    },
    storeUser: async (data)=>{
        const res = await fetch(URL,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    updateUser: async (id,data)=>{
        const res = await fetch(URL + id,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    deleteUser: async (id)=>{
        const res = await fetch(URL + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    }
}