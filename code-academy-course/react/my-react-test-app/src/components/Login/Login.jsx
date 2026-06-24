import { useState } from 'react';
import './Login.scss';
import ProfilePage from '../Profile/Profile'

function AuthForm() {
    const password = 'diego';
    const [authorised, setAuthorised] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const enteredPassword = e.target.querySelector('input[type="password"]').value;
        const isAuth = enteredPassword === password;
        setAuthorised(isAuth);
    }

    const login = (
        <form action="#" onSubmit={handleSubmit}>
            <input type='password' autoComplete='password' placeholder='Login to see contact details...' />
            <input type='submit' />
        </form>
    )

    const contact = (
        <div>
            <ProfilePage />
            <ul>
                <li>
                    client@example.com
                </li>
                <li>
                    555.555.5555
                </li>
            </ul>
        </div>
    )

    return (
        <div className='auth-container'>
            {authorised ? <h2>Contact Details</h2> : <h2>Enter the Password to know all about me</h2>}
            {authorised ? contact : login}
        </div>
    )
};

export default AuthForm;
