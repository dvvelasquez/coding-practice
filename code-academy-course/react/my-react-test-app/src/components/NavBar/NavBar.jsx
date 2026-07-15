import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
    const pages = [
        {name: 'Home', path: '/home'},
        {name: 'Challenges', path: '/challenge'},
        {name: 'hooks', path: '/hooks'},
        {name: 'todos', path: '/todoList'},
        {name: 'Use Effect', path: '/use-effect'},
        {name: 'fetch', path: '/fetch'},
        {name: 'css-styling', path: '/styling'},
        {name: 'forms', path: '/forms'},
        {name: 'tailwind', path: '/tailwind'}
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
