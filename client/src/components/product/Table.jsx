import React from 'react'

export default function Table({data}) {
  return (
    <table className="table table-responsive-sm table-bordered-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Precio de compra</th>
                    <th>Precio de venta</th>
                    <th>Fecha de vencimiento</th>
                    <th>Stock</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.producto}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.precio_compra}</td>
                            <td>{item.precio_venta}</td>
                            <td>{item.fecha_vencimiento}</td>
                            <td>{item.stock}</td>
                            <td>
                                <div className="row">
                                    <div className="col-md-6">
                                        <button className='btn btn-outline-primary btn-sm'>Vender</button>
                                    </div>
                                    <div className="col-md-6">
                                        <button className='btn btn-outline-danger btn-sm'>Eliminar</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
  )
}
