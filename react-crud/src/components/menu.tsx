import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
    <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex={-1} id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
              <svg className="bi"><use xlinkHref="#house-fill"></use></svg>
              Products
            </a>
          </li>

        </ul>

        <hr className="my-3" />

        <ul className="nav flex-column mb-auto">
          <li className="nav-item">
            <Link className="nav-link d-flex align-items-center gap-2" to='/admin/products/'>
              Checklist items
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default Menu;