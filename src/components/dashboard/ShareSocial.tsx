import React from 'react'
import { FacebookShareButton } from 'react-share'

const ShareSocial: React.FC = () => {

    const quote = `Turn your designs into digital art. Start Vybing Now!`
    return(
        <section className="px-8 py-4">
            {
                //@ts-ignore
                <FacebookShareButton 
                    url="http://localhost:3000"
                    quote={quote}
                    hashtag="#nfts"
                    color="blue"
                />
            }
        </section>
    )
}

export default ShareSocial