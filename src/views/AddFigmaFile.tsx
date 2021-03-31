import React from 'react'
import Add from '../components/addFigma/Add'
import Topbar from '../components/addFigma/Topbar'

const AddFigmaFile: React.FC = () => {
    return(
        <div className="font-mono">
            <Topbar />
            <Add/>
        </div>
    )
}

export default AddFigmaFile