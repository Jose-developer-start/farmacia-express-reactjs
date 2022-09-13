import React from 'react'

export default function Form({onChange,user,stateUpdate,onSubmit}) {
    return (
        <div className="card p-3">
            <form action="" method='POST' onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="">Nombre: </label>
                    <input onChange={(e) => onChange(e)} type="text" value={user.nombre} name='nombre' className='form-control' />
                </div>

                <div className="form-group">
                    <label htmlFor="">Apellido: </label>
                    <input onChange={(e) => onChange(e)} type="text" value={user.apellido} name='apellido' className='form-control' />
                </div>


                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input onChange={(e) => onChange(e)} type="email" value={user.email} name='email' className='form-control' />
                </div>



                <div className="form-group">
                    <label htmlFor="">Contraseña: </label>
                    <input onChange={(e) => onChange(e)} type="password" value={user.passwd} name='passwd' className='form-control' />
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
