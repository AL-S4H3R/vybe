import React from 'react'
import { skyClient } from '../../config/skynet'

const InputForm: React.FC = () => {

    const [currentFile, setCurrentFile] = React.useState<any>()

    const onFileUpload = (event:React.ChangeEvent<HTMLInputElement>) => {
        //@ts-expect-error
        const file = event.target.files[0]
        console.log(file)
        setCurrentFile(file)
    }

    const uploadToSkynet = async (file: File) => {
        const { skylink } = await skyClient.uploadFile(file)
        const skyUrl = await skyClient.getSkylinkUrl(skylink)
        console.log(skyUrl)
    }

    return(
        <section className="font-mono space-y-16">
            <div>
                <h1 className="font-semibold text-gray-500 text-center text-3xl">
                    Create your super rare token.
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="space-y-4">
                    <div className="space-y-4">
                        <label htmlFor="">Name your token:</label>
                        <div>
                            <input 
                                type="text" 
                                className="bg-gray-100 px-2 py-1"
                                placeholder="My Mona Lisa"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label htmlFor="">Royalties:</label>
                        <div>
                            <input 
                                type="number" 
                                className="bg-gray-100 px-2 py-1"
                                placeholder="10%, 20% etc."
                            />
                        </div>
                    </div>
                    <div>
                        <input 
                            type="file" 
                            name="nft" 
                            id="nft"
                            onChange={(e) => onFileUpload(e)}
                        />
                    </div>
                    <div>
                        <button onClick={() => uploadToSkynet(currentFile)} className="p-1 bg-gray-800 text-gray-200">Create Token</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InputForm