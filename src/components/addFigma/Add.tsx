import React from 'react'

const Add: React.FC = () => {
    return(
        <section className="px-8 py-4 lg:px-16 space-y-4">
            <div className="flex justify-center">
                <input 
                    type="text" 
                    className="bg-gray-200 w-full px-2 py-1 rounded-md lg:w-1/2 text-center"
                    placeholder="https://www.figma.com/file/7cXwmEAZhV2fJWctEreWTZ/Untitled"
                />
            </div>
            <div className="flex justify-center">
                <button className="px-2 py-1 rounded bg-gray-900 text-gray-200">Check Preview</button>
            </div>
        </section>
    )
}

export default Add