import React from 'react'
import { getImageUrl } from '../api/figma'

interface IFigma {
    imageUrl: string | null;
}

const initState: IFigma = {
    imageUrl: ''
}

const FigmaContext = React.createContext(initState)

export const useFigma = () => {
    return React.useContext(FigmaContext)
}

const FigmaContextProvider: React.FC = ({children}) => {
    
    const [imgUrl, setImgUrl] = React.useState<string | null>(null)
   
    const setImage = async (url: string) => {
        var images = await getImageUrl(url)
        var _url = images["0:1"]
        setImgUrl(_url)
    }

    const values: IFigma = {
        imageUrl: imgUrl
    }
   
    return(
        <FigmaContext.Provider value={values}>
            {children}
        </FigmaContext.Provider>
    )
}

export default FigmaContextProvider