import React from 'react'
import { useFigma } from '../../context/FigmaContext'

const CheckPreview: React.FC = () => {
    const { imageUrl } = useFigma()
    if(imageUrl){
        return(
            <section className="px-8 py-4 lg:px-16 space-y-4">
                <div className="flex justify-center">
                    <img src={imageUrl} alt="" className="h-max w-max"/>
                </div>
                <div className="justify-center flex">
                    <button className="px-2 py-1 bg-gray-900 text-gray-200">Save </button>
                </div>
            </section>
        )
    }
    else {
        return(<></>)
    }
}

export default CheckPreview