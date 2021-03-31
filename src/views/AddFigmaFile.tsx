import React from 'react'
import Add from '../components/addFigma/Add'
import CheckPreview from '../components/addFigma/CheckPreview'
import Topbar from '../components/addFigma/Topbar'

const AddFigmaFile: React.FC = () => {
    return(
        <div className="font-mono">
            <Topbar />
            <Add/>
            <CheckPreview />
        </div>
    )
}

export default AddFigmaFile