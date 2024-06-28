import React, { useRef, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { useAuth } from '../context/AuthProvider'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login, signup} = useAuth()

    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            console.log("first")
            await signup(emailRef.current.value, passwordRef.current.value)
            
        } catch (e) {
            console.log(e)
        }
      
          setLoading(false)

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form onSubmit={onSubmit}>
                        <Form.Group  className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group  className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="Password" ref={passwordRef} placeholder="Enter password" />
                        </Form.Group>
                        <Button variant="primary" disabled={loading} type="submit" className="w-100 mb-3">
                            Log In
                        </Button>
                        <div className="w-100 text-center">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
                
    )
}
