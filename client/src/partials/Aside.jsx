import React from 'react'
import { Link } from 'react-router-dom'
export default function Aside() {
  return (
    <aside className="app-sidebar">
      <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image" />
        <div>
          <p className="app-sidebar__user-name">John Doe</p>
          <p className="app-sidebar__user-designation">Administrador</p>
        </div>
      </div>
      <ul className="app-menu">
        <li><Link className="app-menu__item active" to={'/'}><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Dashboard</span></Link></li>
        <li className="treeview"><Link className="app-menu__item" to={"/usuarios"} data-toggle="treeview"><i className="app-menu__icon fa fa-users"></i><span className="app-menu__label">Usuarios</span><i className="treeview-indicator fa fa-angle-right"></i></Link>
          <ul className="treeview-menu">
            <li><a className="treeview-item" href="bootstrap-components.html"><i className="icon fa fa-users"></i> Usuarios</a></li>
            <li><a className="treeview-item" href="https://fontawesome.com/v4.7.0/icons/" target="_blank" rel="noopener"><i className="icon fa fa-circle-o"></i> Font Icons</a></li>
            <li><a className="treeview-item" href="ui-cards.html"><i className="icon fa fa-circle-o"></i> Cards</a></li>
            <li><a className="treeview-item" href="widgets.html"><i className="icon fa fa-circle-o"></i> Widgets</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}
