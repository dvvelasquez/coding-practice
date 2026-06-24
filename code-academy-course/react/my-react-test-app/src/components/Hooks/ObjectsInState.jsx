import { useState } from "react";

export default function EditProfile() {
    const [profile, setProfile] = useState({});

    const handleChange = ({ target}) => {
        const { name, value } = target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(JSON.stringify(profile, '', 2));
        setProfile({});
    };

    const formStyles = {
        margin: "40px 0"
    }

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            <input
                value={profile.firstName || ''}
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="First Name"
            />
            <input
                value={profile.lastName || ''}
                onChange={handleChange}
                type="text"
                name="lastName"
                placeholder="Last Name"
            />
            <input
                value={profile.bday || ''}
                onChange={handleChange}
                type="date"
                name="bday"
            />
            <input
                value={profile.password || ''}
                onChange={handleChange}
                type="password"
                name="password"
            placeholder="Password"
            />
            <button type="submit">Save Profile</button>
        </form>
    );
}
