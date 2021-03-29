import React from 'react'

const Auth: React.FC = () => {
    return(
        <div className="h-screen w-screen">
            <nav className="px-8 py-4 font-mono">
                <h1 className="text-center font-mono text-3xl">vybe</h1>
            </nav>
            <section className="px-8 py-4 space-y-4">
                <div className="space-y-8">
                    <div className="flex justify-center">
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            className="rounded-md bg-gray-100 w-full p-2 font-mono text-gray-700 focus:outline-none tracking-wide"
                            placeholder="dark-elon@spacex.com"
                        />
                    </div>
                    <div className="flex justify-center">
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            className="rounded-md bg-gray-100 w-full p-2 font-mono text-gray-700 focus:outline-none tracking-wide"
                            placeholder="*********"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button className="w-1/2 px-2 py-1 rounded-md bg-black font-mono text-gray-200 focus:outline-none">Login</button>
                </div>
            </section>
        </div>
    )
}

export default Auth