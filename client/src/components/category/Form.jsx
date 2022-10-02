import React from 'react'

export default function Form({onChange,category,stateUpdate,onSubmit}) {
    return (
        <div className="card p-3">
            <form action="" method='POST' onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="">Categoria: </label>
                    <input onChange={(e) => onChange(e)} type="text" value={category.categoria} name='categoria' className='form-control' />
                </div>

                <div className="form-group">
                    <label htmlFor="">Descripción: </label>
                    <textarea onChange={(e) => onChange(e)} type="text" value={category.descripcion} name='descripcion' className='form-control' />
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
