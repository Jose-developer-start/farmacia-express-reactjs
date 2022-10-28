let URL = 'http://localhost:5000/api/detalle-ventas/';
export const ventaDetalleAPI = {
    getProduct : async ()=>{
        const res = await fetch(URL)
        return await res.json()
    },
    getProductById: async (id)=>{
        const res = await fetch(URL + id)
        return await res.json()
    },
    storeProduct: async (data)=>{
        const res = await window.fetch(URL,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Connection': 'keep-alive',
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    updateProduct: async (id,data)=>{
        const res = await fetch(URL + id,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    deleteProduct: async (id)=>{
        const res = await fetch(URL + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    }
}