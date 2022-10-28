import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../layouts/Main'
import { ventaDetalleAPI } from '../api/detalleVenta.js'
import { useEffect } from 'react'
import moment from 'moment'
export default function DetalleVenta(props) {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [infoVenta, setInfoVenta] = useState([])

  const getDetalleVenta = async () => {
    let result = await ventaDetalleAPI.getProductById(id)
    setInfoVenta(result.body)
  }
  useEffect(() => {
    if (isLoading) {
      getDetalleVenta();
      setIsLoading(false)
    }
  }, [isLoading])
  //Impirmir PDF
  const Imprimir = ()=> {
    const btnPDF = document.getElementById('btn-pdf');
    btnPDF.style.display = "none"
    window.print()
  }
  /*
  
  <td>{moment.utc(item.fecha_venta).format('DD/MM/YYYY')}</td>
                            <td>{item.clienteNombre + ' ' + item.clienteApellido}</td>
  */
  var total = 0;
  var cliente = '';
  var fechaVenta = ''
  return (
    <Main title={'Detalle de la venta'} description={'Administrar ventas'}>
      <div className="tile">
        <button className='btn btn-outline-success' id='btn-pdf' onClick={() => Imprimir()}>Imprimir</button>
        <div className="row">
          <div className="col-md-8">
              <h3>Factura del cliente</h3>
              <p>La siguiente factura contiene los productos comprados en esta farmacia</p>
          </div>
          <div className="col-md-4">
             Fecha de emisión: {moment().format()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <table className="table table-responsive-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Precio unitario</th>
                  <th>Descuento</th>
                </tr>
              </thead>
              <tbody>
                {
                  infoVenta.map((item, index) => {
                    total = item.total_pago
                    cliente = item.nombre + ' ' + item.apellido
                    fechaVenta = item.fecha_venta
                    return <tr key={index}>

                      <td>{item.id}</td>
                      <td>{item.producto}</td>
                      <td>{item.descripcion}</td>
                      <td>${item.precio_venta}</td>
                      <td>{item.descuento}</td>
                    </tr>

                  })
                }

                <tr>
                  <th colSpan={3}>
                    <h5>Total a pagar</h5>
                  </th>
                  <th><h4>${total}</h4></th>
                </tr>
                <tr>
                  <th colSpan={0}>
                    <h6>Cliente: </h6>
                  </th>
                  <th><h6>{cliente}</h6></th>
                </tr>
                <tr>
                  <th colSpan={0}>
                    <h6>Fecha de venta: </h6>
                  </th>
                  <th><h6>{moment.utc(fechaVenta).format('DD/MM/YYYY')}</h6></th>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </Main>
  )
}
