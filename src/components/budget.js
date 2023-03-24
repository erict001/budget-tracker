import React, { useEffect, useState } from "react";

export function EditProfile() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        localStorage.setItem("budget", JSON.stringify(profile))
    }, [profile]);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setProfile((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(profile, '', 2));
    };

    const styles = {
        formStyle: {
            display: "flex",
            flexDirection: "column"
        }
    }
    return (
        <div className="App">
            <div className="App-header"> 
                <form style={styles.formStyle} onSubmit={handleSubmit}>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}