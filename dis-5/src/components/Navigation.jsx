import {NavLink} from 'react-router-dom';

export default function Navigation() {
  
  return(
    <>
    <h3>Navigation Menu</h3>
    <nav>
      <ul>
        <li>
          <NavLink to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/ComponentA'}>
            ComponentA
          </NavLink>
        </li>
        <li>
          <NavLink to={'/ComponentB'}>
            ComponentB
          </NavLink>
        </li>
      </ul>
    </nav>
    </>
  )
}