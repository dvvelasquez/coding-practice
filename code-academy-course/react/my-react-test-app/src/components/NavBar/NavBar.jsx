import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
    const pages = [
        {name: 'Home', path: '/home'},
        {name: 'Forum Challenge', path: '/challenge'},
        {name: 'hooks', path: '/hooks'},
        {name: 'todo', path: '/todoList'},
        {name: 'Use Effect', path: '/use-effect'}
    ];

    return (
        <nav>
            <ul>
                {pages.map(page => (
                    <li className='nav-link' key={page.name}>
                        <Link to={page.path}>
                            {page.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
