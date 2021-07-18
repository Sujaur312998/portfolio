import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

const Logout = () => {
    const history = useHistory()


    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
            .then(res => {
                history.push('/login', { replace: true })
            })
            .catch(e => console.log(e))
    }, []);
    return (
        <div>

        </div>
    )
}

export default Logout
