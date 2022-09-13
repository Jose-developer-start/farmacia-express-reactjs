import React from 'react'

export default function Table({data,getUserById,delUser}) {
    return (
        <table className="table table-responsive-sm table-bordered-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => getUserById(item.id)} className='btn btn-outline-info btn-sm mr-2'>Edit</button>
                                <button onClick={() => delUser(item.id)} className='btn btn-destroy btn-sm'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
