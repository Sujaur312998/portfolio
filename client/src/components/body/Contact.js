import React, { useState, useEffect } from 'react'
import phone from '../image/phone.png'
import email from '../image/email.jpg'
import address from '../image/address.png'
import { useHistory } from 'react-router-dom';

const Contact = () => {
    
    const [user, setUser] = useState({ name: "", email: "", phone: "", message: "" });
    const history = useHistory()

    const callContactPage = async () => {
        try {
            const res = await fetch("/getdata", {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            setUser({
                ...user,
                name: data.name,
                email: data.email,
                phone: data.phone
            })
            //console.log(data);
            if (!res.status === 200) {
                throw new Error(res.error)
            }


        } catch (error) {
            console.log(error)
            history.push("/login")
        }
    }
    const handleInput = e => {
        const name = e.target.name
        const value = e.target.value
        setUser({
            ...user, [name]: value
        })
    }

    const contactForm = async(e) => {
        e.preventDefault()

        const { name, email, phone, message } = user

        const res = await fetch('/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, message
            })
        })
        const data = await res.json()

        if (!data) {
            console.log(data.message);
        } else {
            alert(data.message)
            setUser({
                ...user,
                name: data.name,
                email: data.email,
                phone: data.phone,
                message:''
            })
        }
    }


    useEffect(() => {
        callContactPage()
    }, []);

    return (
        <div >
            <div className="row">
                <div className="col-lg-10 offset-lg-2 d-lg-flex m-auto justify-content-between">
                    <div className="contact_info_item d-flex py-2 m-1 ">
                        <img src={phone} alt="" style={{ width: "50px" }} className="col-5" />
                        <div className=' px-3'>
                            <div className="contact_info_title">
                                Phone
                            </div>
                            <div className="contact_info_text">
                                +880 1786312998
                            </div>
                        </div>
                    </div>
                    <div className="contact_info_item d-flex py-2 m-1 ">
                        <img src={email} alt="" style={{ width: "45px" }} />
                        <div className=' px-3'>
                            <div className="contact_info_title">
                                Email
                            </div>
                            <div className="contact_info_text">
                                suja312998@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="contact_info_item d-flex py-2 m-1 ">
                        <img src={address} alt="" style={{ width: "50px" }} />
                        <div className=' px-3'>
                            <div className="contact_info_title">
                                Address
                            </div>
                            <div className="contact_info_text">
                                Mirpur-12, Dhaka, Bangladesh
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto row ">
                <div className='py-2'>
                    <h2 className='text-center'>
                        <strong> Get in Touch</strong>
                    </h2>
                    <hr className='w-50 m-auto' />
                </div>
                <form method='POST'>
                    <div className='input_filed col-md-12 d-lg-flex justify-content-between'>
                        <div className='w-100 py-3 mx-1'>
                            <input
                                placeholder='Your name'
                                type="text"
                                className="form-control"
                                value={user.name}
                                onChange={handleInput}
                                name='name'
                            />
                        </div>
                        <div className='w-100 py-3 mx-1'>
                            <input
                                placeholder='Email'
                                type="email"
                                className="form-control"
                                value={user.email}
                                onChange={handleInput}
                                name='email'
                            />
                        </div>
                        <div className='w-100 py-3 mx-1'>
                            <input
                                placeholder='Phone Number'
                                type="number"
                                className="form-control"
                                value={user.phone}
                                onChange={handleInput}
                                name='phone'
                            />
                        </div>
                    </div>
                    <div className="form-outline p-1">
                        <textarea className="form-control"
                            onChange={handleInput}
                            name='message'
                            placeholder='Message...'
                            rows="5"></textarea>
                    </div><br />
                    <button type="submit" onClick={contactForm} className="btn btn-primary ms-1">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
