import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Main from '../layouts/Main'
import { userAPI } from '../api/user.js'
import Form from '../components/users/Form'
import Table from '../components/users/Table'
export default function User() {
  //State button update  
  const [stateUpdate,setStateUpdate] = useState(false);
    const [user,setUser] = useState({
        nombre: '',
        apellido: '',
        email: '',
        passwd: '',
        estado: 1
    })
    const [data,setData] = useState([])
    const onChange = (e)=>{
        const newUser = {
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value
        }
        setUser({...user,...newUser})
        console.log(user)
    }
    const onSubmit = async (e)=>{
        e.preventDefault();
        if(stateUpdate){
          //Actualizo
          const {id} = user
          const result = userAPI.updateUser(id,user)
          setStateUpdate(false)
        }else{
          //Inserted
          const result = userAPI.storeUser(user)
        }
        autoloadUsers()
        setUser({
          nombre: '',
          apellido: '',
          email: '',
          passwd: '',
          estado: 1
      })
    }
    const autoloadUsers = async()=>{
        const result = await userAPI.getUsers();
        setData([...result.body])
    }
    const delUser = (id)=>{
      console.log(id)
      userAPI.deleteUser(id);
    }
    const getUserById = async (id)=>{
      const {body} = await userAPI.getUserById(id);
      setStateUpdate(true)
      setUser({...user,...body[0]})
    }
    useEffect(()=>{
        autoloadUsers()
    },[data])
    
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
