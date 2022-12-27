import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {

  return (<>
  <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/information">Information</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
  <Outlet />
  フッター
  </>)
}


export default Layout