let URL = 'http://localhost:5000/api/ventas/';
export const ventasAPI = {
    getVenta : async ()=>{
        const res = await fetch(URL)
        return await res.json()
    },
    getVentaById: async (id)=>{
        const res = await fetch(URL + id)
        return await res.json()
    },
    storeVenta: async (data)=>{
        const res = await fetch(URL,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    updateVenta: async (id,data)=>{
        const res = await fetch(URL + id,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    deleteVenta: async (id)=>{
        const res = await fetch(URL + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    }
}