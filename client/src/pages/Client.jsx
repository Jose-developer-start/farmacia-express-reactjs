import React from 'react'
import Form from '../components/client/Form';
import Table from '../components/client/Table';
import {notify} from "../partials/notify.js"
//Scripted password
import bcrypt from "bcryptjs"
import Main from '../layouts/Main';
import { useState } from 'react';
import { useEffect } from 'react';
import { clientAPI } from '../api/client';

let objClient = {
  nombre: '',
  apellido: '',
  dui: ''
}
export default function Client() {
    //State button update  
  const [stateUpdate, setStateUpdate] = useState(false);
  const [client, setClient] = useState(objClient)
  const [data, setData] = useState([])
  const onChange = (e) => {
    const newClient = {
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    }
    setClient({ ...client, ...newClient })

  }
  const validationForm = ()=>{
    if(!client.nombre){
      notify.warn('¡Nombre requerido!')
      return false
    }
    if(!client.apellido){
      notify.warn('¡Apellido requerido!')
      return false
    }
    if(!client.dui){
      notify.warn('¡Email requerido!')
      return false
    }
    return true
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if(validationForm()){
      if (stateUpdate) {
        //Actualizo
        const { id } = client
        const result = clientAPI.updateClient(id, client)
        setStateUpdate(false)
        //Notify
        notify.success('Cliente actualizado!')
      } else {
        //Inserted
        
        const result = clientAPI.storeClient(client)
        notify.success('¡Cliente agregado!')
      }
      autoloadClient()
      setClient(objClient)
    }
    
  }
  const autoloadClient = async () => {
    const result = await clientAPI.getClient();
    setData([...result.body])
  }
  const delClient = (id) => {
    console.log(id)
    clientAPI.deleteClient(id);
    //Notify
    notify.success('Cliente eliminado!')
  }
  const getClientById = async (id) => {
    const { body } = await clientAPI.getClientById(id);
    setStateUpdate(true)
    setClient({ ...client, ...body[0] })
  }
  useEffect(() => {
    autoloadClient()
  }, [data])
  return (
    <Main title={'Clientes'} description={'Administrar clientes'}>
      <div className="row">
        <div className="col-md-4">
          <Form stateUpdate={stateUpdate} client={client} onChange={onChange} onSubmit={onSubmit} />
        </div>
        <div className="col-md-8">
          <div className="tile">
            <h3 className="tile-title">Usuarios</h3>
            <Table data={data} getClientById={getClientById} delClient={delClient} />
          </div>
        </div>
      </div>
    </Main>
  )
}
