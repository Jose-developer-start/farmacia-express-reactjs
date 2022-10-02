let URL = 'http://localhost:5000/api/categorias/';
export const categoryAPI = {
    getCategory : async ()=>{
        const res = await fetch(URL)
        return await res.json()
    },
    getCategoryById: async (id)=>{
        const res = await fetch(URL + id)
        return await res.json()
    },
    storeCategory: async (data)=>{
        const res = await fetch(URL,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    updateCategory: async (id,data)=>{
        const res = await fetch(URL + id,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    },
    deleteCategory: async (id)=>{
        const res = await fetch(URL + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await res.json()
    }
}