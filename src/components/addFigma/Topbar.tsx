import React from 'react'
import { Link } from 'react-router-dom'

const Topbar: React.FC = () => {
    return(
        <nav className="px-8 py-4 lg:px-16 space-y-8">
            <h1 className="text-2xl">
                <Link to="/dashboard">
                    vybe
                </Link>
            </h1>
            <h3 className="text-3xl text-center text-gray-700">
                figma -&gt; NFT
            </h3>
        </nav>
    )
}

export default Topbar