import React from 'react'

const InputForm: React.FC = () => {

    const [currentFile, setCurrentFile] = React.useState<any>()

    const onFileUpload = (event:React.ChangeEvent<HTMLInputElement>) => {
        //@ts-expect-error
        const file = event.target.files[0]
        console.log(file)
        setCurrentFile(file)
    }

    return(
        <section className="font-mono space-y-16">
            <div>
                <h1 className="font-semibold text-gray-500 text-center text-3xl">Create your super rare token.</h1>
            </div>
            <div>
                <label htmlFor="">Add File:</label>
                <div>
                    <input 
                        type="file" 
                        name="file"
                        id="file"
                        onChange={(e) => onFileUpload(e)}    
                    />
                </div>
            </div>
        </section>
    )
}

export default InputForm