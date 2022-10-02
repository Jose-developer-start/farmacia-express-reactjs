let URL = 'http://localhost:5000/api/clientes/';
export const clientAPI = {
    getClient : async ()=>{
        const res = await fetch(URL)
        return await res.json()
    },
    getClientById: async (id)=>{
        const res = await fetch(URL + id)
        return await res.json()
    },
    storeClient: async (data)=>{
        const res = await fetch(URL,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    updateClient: async (id,data)=>{
        const res = await fetch(URL + id,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    deleteClient: async (id)=>{
        const res = await fetch(URL + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    }
}