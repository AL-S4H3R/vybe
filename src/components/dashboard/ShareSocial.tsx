import React from 'react'
import { FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton } from 'react-share'

const ShareSocial: React.FC = () => {

    const quote = `Turn your designs into digital art. Start Vybing Now!`
    const url = ``

    return(
        <section className="px-8 py-4 flex justify-between space-x-4">
            {
                //@ts-ignore
                <FacebookShareButton 
                    url={url}
                    quote={quote}
                    hashtag="#nfts"
                    color="black"
                >
                    <FacebookIcon size={32} round={true} color={"black"}></FacebookIcon>
                </FacebookShareButton>
            }
            {
                //@ts-ignore
                <InstapaperShareButton 
                    url={url}
                    color="black"
                >
                    <InstapaperIcon size={32} round={true} color={"black"}></InstapaperIcon>
                </InstapaperShareButton>
            }
            {
                //@ts-ignore
                <RedditShareButton 
                    url={url}
                    color="black"
                >
                    <RedditIcon size={32} round={true} color={"black"}></RedditIcon>
                </RedditShareButton>
            }
            {
                //@ts-ignore
                <TwitterShareButton 
                    url={url}
                    color="black"
                >
                    <TwitterIcon size={32} round={true} color={"black"}></TwitterIcon>
                </TwitterShareButton>
            }
        </section>
    )
}

export default ShareSocial