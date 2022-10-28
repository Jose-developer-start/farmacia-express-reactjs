import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import Select from "react-select";
//DATE LIBRAY
import moment from 'moment';
import { useEffect } from 'react';
let dateLocale = moment().format('YYYY/MM/DD')

export default function Form({stateUpdate,saveData,users,clients,products,saveVentaDetalle,getProductById}) {
    const {register,handleSubmit,resetField,setValue} = useForm()
    const [productSelected,setProductSelect] = useState([])
    const [paymentFin,setPaymentFin] = useState(0)
    const [isLoaded,setIsLoaded] = useState(true) 

    const onSubmit = async (dataForm)=> {
        let result = await saveData(dataForm)
        
        saveVentaDetalle(productSelected,result.insertId)
        resetField('fecha_venta')
        resetField('total_pago')
        resetField('descuento')
        resetField('cliente_id')
        resetField('usuario_id')

    }
    const onChange = async(selectData)=> {
        setProductSelect(selectData) //Capture data producto select form
        
        /* selectData.map(async(productUnique)=>{
            let paymentProduct = await getProductById(productUnique.value)
            let sumPayment = 0
            paymentProduct.map((product)=>{
                sumPayment += product.precio_venta
                setPaymentFin(sumPayment)
            })   
        }) */
        const idsProduct = selectData.map((productUnique)=> productUnique.value)
        console.log(idsProduct)
        var total = 0;
        const productUnique = idsProduct.map( async (id)=>{
            let result = await getProductById(id)
            let payment = result.map((product)=> product.precio_venta)
            total += payment[0]
            setPaymentFin(total) //Total de a pagar
            
        })
    }
    useEffect(()=>{
        setValue('total_pago',paymentFin)
    },[paymentFin])

    return (
        <div className="card p-3">
            <form method='POST' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="">Productos: </label>
                    <Select options={products} isMulti onChange={(e)=>{onChange(e)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Fecha.Venta: </label>
                    <input  type="text" readOnly {...register('fecha_venta',{ required: true })} value={dateLocale} name='fecha_venta' className='form-control' />
                </div>

                <div className="form-group">
                    <label htmlFor="">Total pago: </label>
                    <input readOnly  type="number" step={.01} {...register('total_pago',{ required: true })} name='total_pago' className='form-control' />
                </div>

                <div className="form-group">
                    <label htmlFor="">Descuento: </label>
                    <input  type="text" {...register('descuento',{ required: true })} name='descuento' className='form-control' placeholder='0%,5%,10%,50%,90%' />
                </div>

                <div className="form-group">
                    <label htmlFor="">Cliente: </label>
                    <select className='form-control' name="cliente_id" {...register('cliente_id',{ required: true })} >
                        <option value="" required selected>Selecionar</option>
                        {
                            clients.map((client)=>(
                                <option value={client.id} >{ client.nombre + ' ' + client.apellido  }</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Vendedor: </label>
                    <select className='form-control' name="usuario_id" {...register('usuario_id',{ required: true })} id="">
                        <option value="" required selected>Selecionar</option>
                        
                        {
                            users.map((user)=>(
                                <option value={user.id} >{ user.nombre + ' ' + user.apellido  }</option>
                            ))
                        }
                    </select>
                </div>

                {
                    stateUpdate ?
                        <button type='submit' className='btn btn-outline-success'>Actualizar</button>
                        :
                        <button type='submit' className='btn btn-outline-success'>Guardar</button>
                }
            </form>
        </div>
    )
}
