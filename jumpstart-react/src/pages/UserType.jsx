import React, { useState, useEffect } from "react";
import './UserType.css'
import BuildProfile from "./BuildProfile";

function UserType() {
    const [user, setUser] = useState(true);

    const toUser = () => {
        setUser(false)
    }


    return (
        <>
            {user ?
                <>
                    <div className="container">
                        <button className="user" onClick={toUser} >
                            <img
                                className="image"
                                src="https://cdn.pixabay.com/photo/2020/04/09/16/35/offer-5022188_960_720.jpg"
                            />
                            <h2>user</h2>
                        </button>
                        <button className="user" >
                            <img
                                className="image"
                                src="https://cdn.pixabay.com/photo/2020/04/09/16/35/help-out-5022189_960_720.jpg"
                            />
                            <h2>Service Provider</h2>
                        </button>
                    </div>
                </>
                :
                <div>
                    <BuildProfile />
                </div>
            }
        </>
    )
}

export default UserType