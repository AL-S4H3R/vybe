import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { firebaseRef } from '../config/firebase'

const Signup: React.FC = () => {

    const emailRef = React.useRef<HTMLInputElement | null>(null)
    const passwordRef = React.useRef<HTMLInputElement | null>(null)
    const usernameRef = React.useRef<HTMLInputElement | null>(null)

    const { createUser } = useAuth()

    const [error, setError] = React.useState<string | null>(null)
    var history = useHistory()
    
    const signup = async () => {
        
        var email = emailRef.current?.value
        var password = passwordRef.current?.value
        var username = usernameRef.current?.value

        if(email && password && username){
            try {
                var res = await createUser(email, password) 
                console.log(res)
                if(res?.user){
                    //create a firestore collection with firebase uid & username
                    var userRef = await firebaseRef.collection('users').doc(res.user.uid).set({
                        username: username
                    })
                    history.push('/dashboard')
                }
            }
            catch(err){
                setError(err.msg)
            }
        }
        else {
            setError('You prolly dint enter all details, thats wiggity whack. ')
        }
    }
    return(
        <div className="h-screen w-screen lg:border">
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
                            ref={emailRef}
                        />
                    </div>
                    <div className="flex justify-center">
                        <input 
                            type="text" 
                            name="username" 
                            id="username"
                            className="rounded-md bg-gray-100 w-full p-2 font-mono text-gray-700 focus:outline-none tracking-wide"
                            placeholder="@elon_to_mars"
                            ref={usernameRef}
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
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button onClick={signup} className="w-1/2 px-2 py-1 rounded-md bg-black font-mono text-gray-200 focus:outline-none">
                        Signup
                    </button>
                </div>
            </section>
            </div>
            <div className="flex justify-center font-mono hover:underline">
                <Link to="/login">Have an account? Login Here</Link>
            </div>
            <footer className="mt-8">
                <p className="text-sm text-center text-gray-600 font-mono">
                    &copy; vybe inc. 2021
                </p>
            </footer>
        </div>
    )
}

export default Signup