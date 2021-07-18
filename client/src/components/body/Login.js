import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import img from '../image/register.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        const data = await res.json()
        if (res.status === 422 || !data) {
            window.alert(data.message)
            console.log(data.message);
        } else {
            window.alert(data.message)
            history.push('/')
        }

    }

    return (
        <section className='registration ' style={{ fontSize: "18px" }}>
            <div className="container form ">
                <div className='py-2'>
                    <h2 className='text-center'>Login</h2>
                    <hr className='w-25 m-auto' />
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 mt-3" >
                        <form method='POST' onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input style={{ fontSize: "13px", height: "30px" }}
                                    placeholder='e.g : abcde@email.com'
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                    name='email'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input style={{ fontSize: "13px", height: "30px" }}
                                    placeholder='Password'
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="off"
                                    className="form-control"
                                    name='password' />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>

                    <div className="col-lg-6 col-md-12 mt-3">
                        <img src={img} alt="register" style={{ width: '100%', borderRadius: "5px" }} />
                        <p style={{ textAlign: "center" }} className='mt-3'>
                            <NavLink to="/registration" style={{ textDecoration: "none" }}>Click switch to Registration</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login
