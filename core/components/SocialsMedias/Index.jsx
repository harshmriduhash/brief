
//components
import SocialMediaItem from "./SocialMediaItem"
import Icons from "../Icons"

const SocialMedias = ({ spacing, className }) => {

    return (
        <>
            <ul className={`d-flex socials-medias ${className}`}>
                <li className="text-primary socials-medias-item">
                    <a href="/">
                        <SocialMediaItem icon={<Icons.GitHub size="3rem" />} />
                    </a>
                </li>
                <li className="text-primary socials-medias-item">
                    <a href="/">
                        <SocialMediaItem icon={<Icons.Twitter size="3rem" />} />
                    </a>
                </li>
                <li className="text-primary socials-medias-item">
                    <a href="/">
                        <SocialMediaItem icon={<Icons.Word size="3rem" />} />
                    </a>
                </li>
            </ul>
            <style jsx>{`
                
                .socials-medias{
                    position: relative;
                    margin-top: ${spacing ? '16rem' : '0'};
                
                    z-index: 100;
                }
                .socials-medias-item{
                    margin-right: 3rem;
                }
            
            `}</style>
        </>
    )
}


export default SocialMedias