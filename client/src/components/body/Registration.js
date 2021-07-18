import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import img from '../image/register.png'


const Registration = () => {
    const [user, setUser] = useState({
        name: '', email: '', phone: '', work: '', password: '', cpassword: ''
    })
    const history = useHistory()
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, phone, email, work, password, cpassword } = user
        const res = await fetch('/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, phone, email, work, password, cpassword })
        })
        console.log(res)
        const data= await res.json()
        if(res.status===422 || !data){
            window.alert(data.message)
            console.log(data.message);
            setUser({name: '', email: '', phone: '', work: '', password: '', cpassword: ''})
        }else{
            window.alert(data.message)
            console.log(data.message);
            history.push('/login')
            setUser({name: '', email: '', phone: '', work: '', password: '', cpassword: ''})

            
        }

    }

    return (
        <div>
            <section className='registration' style={{ fontSize: "18px" }}>
                <div className="form container">
                    <div className='py-2'>
                        <h2 className='text-center'>Sign up</h2>
                        <hr className='w-25 m-auto' />
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 ">
                            <form method='POST' onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="UserName" className="form-label">Your Name</label>
                                    <input placeholder='e.g : Abcde'
                                        style={{ fontSize: "13px", height: "30px" }}
                                        type="text"
                                        autoComplete='off'
                                        onChange={handleInput}
                                        value={user.name}
                                        className="form-control"
                                        name="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input
                                        style={{ fontSize: "13px", height: "30px" }}
                                        placeholder='e.g : abcde@email.com'
                                        type="email"
                                        autoComplete='off'
                                        onChange={handleInput}
                                        value={user.email}
                                        className="form-control"
                                        name='email' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phnNumber" className="form-label">Phone Number</label>
                                    <input style={{ fontSize: "13px", height: "30px" }}
                                        placeholder='e.g : +880 XXXXXXXXXXXX'
                                        type="number"
                                        className="form-control"
                                        autoComplete='off'
                                        onChange={handleInput}
                                        value={user.phone}
                                        name='phone' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="work" className="form-label">Work</label>
                                    <input style={{ fontSize: "13px", height: "30px" }}
                                        placeholder='e.g : abcde'
                                        type="text"
                                        className="form-control"
                                        autoComplete='off'
                                        onChange={handleInput}
                                        value={user.work}
                                        name="work" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input style={{ fontSize: "13px", height: "30px" }}
                                        placeholder='Password'
                                        autoComplete="off"
                                        onChange={handleInput}
                                        type="password"
                                        className="form-control"
                                        value={user.password}
                                        name='password' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmInputPassword" className="form-label">Confirm Password</label>
                                    <input style={{ fontSize: "13px", height: "30px" }}
                                        placeholder='Confirm Password'
                                        type="password"
                                        autoComplete="off"
                                        onChange={handleInput}
                                        className="form-control"
                                        value={user.cpassword}
                                        name="cpassword" />
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </form>
                        </div>

                        <div className="col-lg-6  mt-1">
                            <img src={img} alt="register" style={{ width: '100%', borderRadius: "5px" }} />
                            <p style={{ textAlign: "center" }} className='mt-3'>
                                <NavLink to="/login" style={{ textDecoration: "none" }}>Already have a account?</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registration
