import React from 'react'
import bldg from '../assets/building.jpg'
import { Link } from 'react-router-dom'
import InputForm from '../components/createnft/InputForm'

const CreateNFT: React.FC = () => {
    return(
        <div className="h-screen w-screen">
            <div className="flex">
                <div className="w-1/3" >
                    <img src={bldg} alt="royalty free img" className="h-screen w-full object-fill"/>
                </div>
                <div className="px-8 py-4 space-y-4">
                    <nav>
                        <Link to="/dashboard">
                            <p className="text-2xl font-mono">vybe</p>
                        </Link>
                    </nav>
                    <InputForm />
                </div>
            </div>
        </div>
    )
}

export default CreateNFT