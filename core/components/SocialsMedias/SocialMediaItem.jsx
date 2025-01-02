

const SocialMediaItem = ({ icon }) => {

    return (
        <>
            <figure className="social-item">
                {icon && icon}
            </figure>

            <style jsx>{`
            
                .social-item{
                    display: flex ;
                    justify-content: center;
                    align-items: center;
                    width:50px;
                    height:50px;
                    border:2px solid var(--primary-color);
                    border-radius: 50%;
                    margin: 0;
                }
            `}</style>
        </>
    )

}

export default SocialMediaItem