import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Main from '../layouts/Main'
import { userAPI } from '../api/user.js'
import Form from '../components/users/Form'
import Table from '../components/users/Table'
import {notify} from "../partials/notify.js"
//Scripted password
import bcrypt from "bcryptjs"

let objUser = {
  nombre: '',
  apellido: '',
  email: '',
  passwd: '',
  estado: 1
}
export default function User() {
  //State button update  
  const [stateUpdate, setStateUpdate] = useState(false);
  const [user, setUser] = useState(objUser)
  const [data, setData] = useState([])
  const onChange = (e) => {
    const newUser = {
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    }
    setUser({ ...user, ...newUser })

  }
  /*
  ##EXAMPLE OF ENCRYPTED PASSWD
  bcrypt.hash('Jose_deo503', 10, function(err, hash) {
    // Store hash in your password DB.
    bcrypt.compare('Jose_deo503', hash, function(err, result) {
      console.log(result)
    });
    console.log(hash)
});
*/
  const validationForm = ()=>{
    if(!user.nombre){
      notify.warn('¡Nombre requerido!')
      return false
    }
    if(!user.apellido){
      notify.warn('¡Apellido requerido!')
      return false
    }
    if(!user.email){
      notify.warn('¡Email requerido!')
      return false
    }
    if(!user.passwd){
      notify.warn('¡Contraseña requerido!')
      return false
    }
    return true
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if(validationForm()){
      if (stateUpdate) {
        //Actualizo
        const { id } = user
        const result = userAPI.updateUser(id, user)
        setStateUpdate(false)
        //Notify
        notify.success('¡Usuario actualizado!')
      } else {
        //Inserted
        //Bcrypt password
        bcrypt.hash(user.passwd,10,(err,hash)=>{
          user.passwd = hash
          //Inserted in BD
          const result = userAPI.storeUser(user)
        })
        //Notify
        notify.success('¡Usuario agregado!')
      }
      autoloadUsers()
      setUser(objUser)
    }
    
  }
  const autoloadUsers = async () => {
    const result = await userAPI.getUsers();
    setData([...result.body])
  }
  const delUser = (id) => {
    console.log(id)
    userAPI.deleteUser(id);
    //Notify
    notify.success('¡Usuario eliminado!')
  }
  const getUserById = async (id) => {
    const { body } = await userAPI.getUserById(id);
    setStateUpdate(true)
    setUser({ ...user, ...body[0] })
  }
  useEffect(() => {
    autoloadUsers()
  }, [data])

  return (
    <Main title={'Usuarios'} description={'Administrar usuarios'}>
      <div className="row">
        <div className="col-md-4">
          <Form stateUpdate={stateUpdate} user={user} onChange={onChange} onSubmit={onSubmit} />
        </div>
        <div className="col-md-8">
          <div className="tile">
            <h3 className="tile-title">Usuarios</h3>
            <Table data={data} getUserById={getUserById} delUser={delUser} />
          </div>
        </div>
      </div>
    </Main>
  )
}
