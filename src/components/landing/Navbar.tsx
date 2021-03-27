import React from 'react'

const Navbar: React.FC = () => {
    return(
        <nav className="px-8 py-4 flex item-center justify-between">
            <div>
                <h1 className="font-mono text-3xl">vybe</h1>
            </div>
            <div>
                Mint
            </div>
        </nav>
    )
}

export default Navbar