import React from 'react'

export default function Table({data,getCategoryById,delCategory}) {
    return (
        <table className="table table-responsive-sm table-bordered-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Categoria</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.categoria}</td>
                            <td>{item.descripcion}</td>
                            <td>
                                <button onClick={() => getCategoryById(item.id)} className='btn btn-outline-info btn-sm mr-2'>Edit</button>
                                <button onClick={() => delCategory(item.id)} className='btn btn-destroy btn-sm'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
