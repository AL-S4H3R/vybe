import axios from 'axios'
const baseUrl = 'https://api.figma.com'

export const getImageUrl = async (figmaUrl: string) => {

    var figmaId = figmaUrl.split('/')[4]
    var ids = '0:1'
    let imageResult = await axios(`${baseUrl}/v1/images/${figmaId}?scale=0.5&ids=${ids}`, {
        method: 'GET',
        headers: {'X-Figma-Token': process.env.REACT_APP_FIGMA_ACCESS_TOKEN} 
    })
    return imageResult.data.images
}