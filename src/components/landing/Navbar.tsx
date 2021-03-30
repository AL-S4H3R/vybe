import React from 'react'
import { useHistory } from 'react-router'

const Navbar: React.FC = () => {
    
    const history = useHistory()

    const gotoDashboard = async () => { }

    return(
        <nav className="lg:px-16 px-8 py-4 flex item-center justify-between">
            <div>
                <h1 className="font-mono text-3xl">vybe</h1>
            </div>
            <div className="font-mono">
                <button 
                    className="bg-gray-900 px-3 py-2 text-gray-100"
                    onClick={gotoDashboard}
                >
                    Mint NFT
                </button>
            </div>
        </nav>
    )
}

export default Navbar