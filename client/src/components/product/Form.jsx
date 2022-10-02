import React from 'react'
import { useState } from 'react'
import { productAPI } from '../../api/product'

let objProduct = {
    producto: '',
    descripcion: '',
    precio_compra: '',
    precio_venta: '',
    unidad_medida:'',
    fecha_vencimiento: '',
    imagen_producto: '',
    stock: '',
    categoria_id: ''
}

export default function Form() {

    const [product,setProduct] = useState(objProduct)

    const onChange = (e)=>{
        let newProduct = {
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value
        }
        setProduct({...product,...newProduct})
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const result = productAPI.storeProduct(product)
        setProduct(objProduct)
        console.log('Guardado')
    }
    return (
        <div className="card p-3">
            <form action="" method='POST' onSubmit={(e) => onSubmit(e)} encType="multipart/form-data">
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-3">
                        <div className="form-group">
                            <label htmlFor="">Producto: </label>
                            <input onChange={(e) => onChange(e)} type="text" value={product.producto}  name='producto' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Descripción: </label>
                            <textarea onChange={(e) => onChange(e)} type="text" value={product.descripcion} name='descripcion' className='form-control' />
                        </div>


                        <div className="form-group">
                            <label htmlFor="">Precio de compra: </label>
                            <input onChange={(e) => onChange(e)} type="number" min={0} value={product.precio_compra} name='precio_compra' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Precio de venta: </label>
                            <input onChange={(e) => onChange(e)} type="number" value={product.precio_venta} name='precio_venta' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Unidad de medida: </label>
                            <select onChange={(e) => onChange(e)} name="unidad_medida" id="" className='form-control'>
                                <option value="" selected>Selec. Medidad</option>
                                <option value="miligramos">Miligramos</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <div className="form-group">
                            <label htmlFor="">Fecha de vencimiento: </label>
                            <input onChange={(e) => onChange(e)} type="date" value={product.fecha_vencimiento} name='fecha_vencimiento' className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Imagen: </label>
                            <input onChange={(e) => onChange(e)} type="file" value={product.imagen_producto} name='imagen_producto' className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Stock: </label>
                            <input onChange={(e) => onChange(e)} type="number" min={0} value={product.stock} name='stock' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Categoria: </label>
                            <select onChange={(e) => onChange(e)} name="categoria_id" id="" className='form-control'>
                                <option value="" selected>Selec. Categoria</option>
                                <option value="miligramos">Miligramos</option>
                            </select>
                        </div>

                    </div>
                </div>
                <button type='submit' className='btn btn-outline-success'>Guardar</button>
            </form>
        </div>
    )
}
