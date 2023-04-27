import './Menu.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <aside className="Menu">
        <nav>
          <ul>
            <li>
              <Link to='/'>Inicio</Link>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
          </ul>
        </nav>
    </aside>
  );
}


