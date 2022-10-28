import React from 'react'
import { useState } from 'react'
import { productAPI } from '../../api/product'
import {useForm} from "react-hook-form"

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
    const {register,handleSubmit} = useForm()

    const onSubmit = (data) =>{
        const result = productAPI.storeProduct(data)
        //console.log(data)
    }
    return (
        <div className="card p-3">
            <form action="" method='POST' onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
                <div className="row">
                    <div className="col-sm-12 col-md-6 mb-3">
                        <div className="form-group">
                            <label htmlFor="">Producto: </label>
                            <input  type="text" {...register('producto', { required: true })}  name='producto' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Descripción: </label>
                            <textarea  {...register('descripcion', { required: true })} type="text" name='descripcion' className='form-control' />
                        </div>


                        <div className="form-group">
                            <label htmlFor="">Precio de compra: </label>
                            <input  type="number" min={0}  name='precio_compra' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Precio de venta: </label>
                            <input  type="number" {...register('precio_venta', { required: true })} name='precio_venta' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Unidad de medida: </label>
                            <select  name="unidad_medida" {...register('unidad_medida', { required: true })} className='form-control'>
                                <option value="" selected>Selec. Medidad</option>
                                <option value="miligramos">Miligramos</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3">
                        <div className="form-group">
                            <label htmlFor="">Fecha de vencimiento: </label>
                            <input  type="date" {...register('fecha_vencimiento', { required: true })} name='fecha_vencimiento' className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Imagen: </label>
                            <input  type="file" {...register('imagen_producto', { required: true })} name='imagen_producto' className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Stock: </label>
                            <input  type="number" min={0} {...register('stock', { required: true })} name='stock' className='form-control' />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Categoria: </label>
                            <select  name="categoria_id" {...register('categoria_id', { required: true })} className='form-control'>
                                <option value="" selected>Selec. Categoria</option>
                                <option value="1">Medicamentos</option>
                            </select>
                        </div>

                    </div>
                </div>
                <button type='submit' className='btn btn-outline-success'>Guardar</button>
            </form>
        </div>
    )
}
