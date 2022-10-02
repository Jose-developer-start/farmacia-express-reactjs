import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Main from '../layouts/Main'
import { categoryAPI } from '../api/category.js'
import Form from '../components/category/Form'
import Table from '../components/category/Table'
import {notify} from "../partials/notify.js"
//Scripted password
import bcrypt from "bcryptjs"

let objCategory = {
  categoria: '',
  descripcion: ''
}
export default function Category() {
  //State button update  
  const [stateUpdate, setStateUpdate] = useState(false);
  const [category, setCategory] = useState(objCategory)
  const [data, setData] = useState([])
  const onChange = (e) => {
    const newCategory = {
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    }
    setCategory({ ...category, ...newCategory })

  }
  const validationForm = ()=>{
    if(!category.categoria){
      notify.warn('Categoria requerido!')
      return false
    }
    if(!category.descripcion){
      notify.warn('¡Descripción requerido!')
      return false
    }
    return true
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if(validationForm()){
      if (stateUpdate) {
        //Actualizo
        const { id } = category
        const result = categoryAPI.updateCategory(id, category)
        setStateUpdate(false)
        //Notify
        notify.success('Categoria actualizada!')
      } else {
        //Inserted
          const result = categoryAPI.storeCategory(category)
        //Notify
        notify.success('¡Categoria agregada!')
      }
      autoloadCategorias()
      setCategory(objCategory)
    }
    
  }
  const autoloadCategorias = async () => {
    const result = await categoryAPI.getCategory();
    setData([...result.body])
  }
  const delCategory = (id) => {
    console.log(id)
    categoryAPI.deleteCategory(id);
    //Notify
    notify.success('Categoria eliminada!')
  }
  const getCategoryById = async (id) => {
    const { body } = await categoryAPI.getCategoryById(id);
    setStateUpdate(true)
    setCategory({ ...category, ...body[0] })
  }
  useEffect(() => {
    autoloadCategorias()
  }, [data])

  return (
    <Main title={'Usuarios'} description={'Administrar usuarios'}>
      <div className="row">
        <div className="col-md-4">
          <Form stateUpdate={stateUpdate} category={category} onChange={onChange} onSubmit={onSubmit} />
        </div>
        <div className="col-md-8">
          <div className="tile">
            <h3 className="tile-title">Usuarios</h3>
            <Table data={data} getCategoryById={getCategoryById} delCategory={delCategory} />
          </div>
        </div>
      </div>
    </Main>
  )
}
