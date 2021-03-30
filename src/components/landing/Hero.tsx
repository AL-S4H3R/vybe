import React from 'react'
import { useHistory } from 'react-router'
import art from '../../assets/art.svg'

const Hero: React.FC = () => {

    const msg = `Vybe is a community owned platform for everyone to express themselves through NFT's`
    const history = useHistory()

    return(
        <section className="px-8 py-4">
            <div className="lg:flex space-y-4">
                <div className="font-mono space-y-4">
                    <h1 className="font-semibold text-3xl text-center">Vybe For Artists.</h1> 
                    <img src={art} alt=""/>
                </div>
                <div className="lg:flex">
                    <div className="font-mono space-y-4">
                        <p className="lg:mt-24 lg:px-4 text-center text-gray-800 lg:text-3xl">{msg}</p>
                        <div className="flex justify-center font-mono">
                            <button onClick={() => history.push('/dashboard')} className="bg-gray-800 text-gray-200 px-3 py-2">Start Vybing</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero