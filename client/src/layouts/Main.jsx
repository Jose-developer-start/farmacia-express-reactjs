import React from 'react'

export default function Main({title,description,children}) {
  return (
    <main className="app-content">
    <div className="app-title">
      <div>
        <h1><i className="fa fa-dashboard"></i> {title}</h1>
        <p>{description}</p>
      </div>
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item"><i className="fa fa-home fa-lg"></i></li>
        <li className="breadcrumb-item"><a href="#">{title}</a></li>
      </ul>
    </div>
    {children}
  </main>
  )
}
