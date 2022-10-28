import React from 'react'
import { useState } from 'react';
import Form from '../components/ventas/Form'
import Main from '../layouts/Main'
import { ventasAPI } from '../api/venta.js'
import { clientAPI } from '../api/client.js'
import { userAPI } from '../api/user.js'
import { productAPI } from '../api/product.js'
//API de detalle venta
import { ventaDetalleAPI } from '../api/detalleVenta.js'

import Table from '../components/ventas/Table';
import { useEffect } from 'react';

export default function Sale() {
    const [stateUpdate, setStateUpdate] = useState(false);
    const [isLoading,setIsLoading] = useState(true) //Load the data
    const [data,setData] = useState([])
    const [users,setUsers] = useState([])
    const [clients,setClients] = useState([])
    //Productos state
    const [products,setProducts] = useState([])
    const saveData = async (data)=>{
        const result = await ventasAPI.storeVenta(data)
        setIsLoading(true)
        return result
    }
    const saveVentaDetalle = (dataProductVenta,idVenta)=> {

      dataProductVenta.forEach((detalleVentaUnitario,index)=>{
        let objVentaDetalle = {
          venta_id: idVenta,
          producto_id: detalleVentaUnitario.value,
          sucursal_id: 0,
          precio_unitario: 0
        }
        const result = ventaDetalleAPI.storeProduct(objVentaDetalle)
      })
      //console.log('Detalle de venta insertado')
    }
    const getDataAll = async ()=> {
        const ventas = await ventasAPI.getVenta()
        //usuarios
        const usuarioFull = await userAPI.getUsers()
        //clientes
        const clientesFull = await clientAPI.getClient()
        setUsers(usuarioFull.body) //User api
        setClients(clientesFull.body) //Clientes api
        setData(ventas.body) //Ventas api
    }
    const getProductsAll = async ()=> {
      const {body} = await productAPI.getProduct()
      let optionSelect = []

      body.forEach((product)=>{
        let currentProduct = {
          value: product.id,
          label: product.producto
        }
        optionSelect.push(currentProduct)
      })
      //console.log(optionSelect)

      
      setProducts(optionSelect)
    }
    const getProductById = async(idProduct)=> {
      let getProduct = await productAPI.getProductById(idProduct)
      return getProduct.body
    }

    const getVentasById = ()=> {

    }

    const delVenta = (id) => {
      ventasAPI.deleteVenta(id)
      setIsLoading(true)

    }
    useEffect(()=>{
      if (isLoading) {
        getDataAll();
        getProductsAll()
        setIsLoading(false)
      }
    },[isLoading])
  return (
    <Main title={'Realizar la venta'} description={'Administrar ventas'}>
      <div className="row">
        <div className="col-md-4">
          <Form stateUpdate={stateUpdate} saveVentaDetalle={saveVentaDetalle} getProductById={getProductById} users={users} clients={clients} products={products} saveData={saveData} />
        </div>
        <div className="col-md-8">
          <div className="tile">
            <h3 className="tile-title">Ventas</h3>
            <Table data={data} getVentasById={getVentasById} delVenta={delVenta} />
          </div>
        </div>
      </div>
    </Main>
  )
}
