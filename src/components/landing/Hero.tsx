import React from 'react'
import art from '../../assets/art.svg'

const Hero: React.FC = () => {

    const msg = `Vybe is a community owned platform for everyone to express themselves through NFT's`
    
    return(
        <section className="px-8 py-4 space-y-4">
            <div className="font-mono space-y-4">
                <h1 className="font-semibold text-3xl text-center">Vybe For Artists.</h1> 
                <img src={art} alt=""/>
            </div>
            <div className="font-mono">
                <p className="text-center text-gray-800">{msg}</p>
            </div>
            <div className="flex justify-center font-mono">
                <button className="bg-gray-800 text-gray-200 px-3 py-2">Start Vybing</button>
            </div>
        </section>
    )
}

export default Hero