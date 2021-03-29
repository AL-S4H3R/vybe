import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard: React.FC = () => {

    const { user } = useAuth()
    return(
        <div>
            <nav className="px-8 py-4">
                <h1 className="text-2xl text-center font-mono text-gray-700">welcome to vybe</h1>
            </nav>
        </div>
    )
}

export default Dashboard