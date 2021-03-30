import React from 'react'
import { Redirect, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Auth: React.FC = () => {

    const [email, setEmail] = React.useState('')

    const { loginWithEmail, user } = useAuth()
    const history = useHistory()

    //password ref
    const passwordRef = React.useRef<HTMLInputElement | null>(null)

    const login = async () => {
        var password = passwordRef.current?.value
        if(password){
            var res = await loginWithEmail(email, password)
            console.log(res?.user)
            if(res?.user){
                history.push('/dashboard')            
            }
        }
    }

    if(user){
        <Redirect to="/dashboard" />
    }
    return(
        <div className="h-screen w-screen">
            <nav className="px-8 py-4 font-mono">
                <h1 className="text-center font-mono text-3xl">vybe</h1>
            </nav>
            <div className="lg:flex lg:justify-center ">
            <section className="px-8 py-4 space-y-8 lg:w-1/3">
                <div className="space-y-8">
                    <div className="flex justify-center">
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            className="rounded-md bg-gray-100 w-full p-2 font-mono text-gray-700 focus:outline-none tracking-wide"
                            placeholder="dark-elon@spacex.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            ref={passwordRef}
                            className="rounded-md bg-gray-100 w-full p-2 font-mono text-gray-700 focus:outline-none tracking-wide"
                            placeholder="*********"
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button onClick={login} className="w-1/2 px-2 py-1 rounded-md bg-black font-mono text-gray-200 focus:outline-none">Login</button>
                </div>
            </section>
            </div>
            <div className="flex justify-center font-mono hover:underline">
                <Link to="/signup">Need an account? Signup Here</Link>
            </div>
            <footer className="mt-8">
                <p className="text-sm text-center text-gray-600 font-mono">
                    &copy; vybe inc. 2021
                </p>
            </footer>
        </div>
    )
}

export default Auth