import React from 'react'
import moment from "moment"
import { Link } from 'react-router-dom'
export default function Table({data,getVentasById,delVenta}) {

    return (
        <table className="table table-responsive-sm table-bordered-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Fecha venta</th>
                    <th>Total pago</th>
                    <th>Descuento</th>
                    <th>Cliente</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{moment.utc(item.fecha_venta).format('DD/MM/YYYY')}</td>
                            <td>{item.total_pago}</td>
                            <td>{item.descuento}</td>
                            <td>{item.clienteNombre + ' ' + item.clienteApellido}</td>
                            <td>
                                <Link to={'/detalle-venta/' + item.id} className='btn btn-outline-info btn-sm mr-2'>Ver</Link>
                                <button onClick={() => delVenta(item.id)} className='btn btn-destroy btn-sm'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
