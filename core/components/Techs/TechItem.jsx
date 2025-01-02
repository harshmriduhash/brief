

const TechItem = ({ title, icon }) => {

    return (
        <>
            <article className="tech-card w-100">
                <div className="tech-card-wrapper d-flex justify-content-center align-items-center">
                    {/* <h4 className="tech-card-title">{title}</h4> */}
                    {icon}
                </div>
            </article>
            <style jsx>{`
            .tech-card{
                position: relative;
            }
                .tech-card-wrapper{
                    position: relative;
                    padding: .3rem 2rem ;
                    height:40px;
                    background-color: white;
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                    z-index: 2;
                }
                .tech-card-title{
                    font-weight: bold;
                    font-size: 1.5rem;
                    margin:0;
                }
                .tech-card::after{
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 8%;
                    left: 5%;
                    background-color: var(--primary-color);
                    z-index: 1;
                }
                
                `}</style>
        </>
    )

}

export default TechItem