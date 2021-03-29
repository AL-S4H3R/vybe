import React from 'react'
import Hero from '../components/landing/Hero'
import Navbar from '../components/landing/Navbar'

const Landing: React.FC = () => {
    return(
        <div className="h-screen w-screen bg-gray-100 space-y-4 overflow-hidden">
            <Navbar />
            <Hero />
        </div>
    )
}

export default Landing