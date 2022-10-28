import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Main from '../layouts/Main'
import Form from '../components/product/Form'
import { productAPI } from '../api/product.js'
import {notify} from "../partials/notify.js"
//Scripted password
import bcrypt from "bcryptjs"
import Table from '../components/product/Table'

export default function Product() {

  const [data,setData] = useState([])
  const [btnStateAddProduct,setBtnStateAddProduct] = useState(true)

  const getProductoAll = async() => {
    const result = await productAPI.getProduct()
    setData(result.body)
  }

  const stateBTN = ()=> {
    if(btnStateAddProduct){
      setBtnStateAddProduct(false)
      return 0
    }
    setBtnStateAddProduct(true)
  }

  useEffect(()=>{
    getProductoAll()
  },[])

  //notify.warn('¡Contraseña requerido!')
  const onSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <Main title={'Productos'} description={'Administrar productos'}>
      <div className="tile">
        <div className='d-flex justify-content-end'>
          <button onClick={()=> stateBTN()} className='btn btn-outline-success my-4'>
            {
              btnStateAddProduct ?
                'Agregar Producto'
              : 
              'Mostrar productos'
            }
          </button>
        </div>
          {
            btnStateAddProduct ?
              <Table data={data} />
            :
              <Form />
          }
      </div>
    </Main>
  )
}