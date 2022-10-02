import React from 'react'

export default function Form({onChange,client,stateUpdate,onSubmit}) {
    return (
        <div className="card p-3">
            <form action="" method='POST' onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="">Nombre: </label>
                    <input onChange={(e) => onChange(e)} type="text" value={client.nombre} name='nombre' className='form-control' />
                </div>

                <div className="form-group">
                    <label htmlFor="">Apellido: </label>
                    <input onChange={(e) => onChange(e)} type="text" value={client.apellido} name='apellido' className='form-control' />
                </div>


                <div className="form-group">
                    <label htmlFor="">DUI: </label>
                    <input onChange={(e) => onChange(e)} type="text" value={client.dui} name='dui' className='form-control' />
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
