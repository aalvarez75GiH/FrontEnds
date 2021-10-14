import React from 'react'

const HiwSection = ({ 
    id,
    imgSrc1,
    imgSrc2,
    imgSrc3,
    imgSrc4,
    imgSrc5,
    alt1,
    alt2,
    alt3,
    alt4,
    alt5

}) => {
    return (
        <>
            <div 
            id={id}
            className="hiwContainer">
                <h1 className="hiwH1">Como funciona esto...</h1>
                <div className="hiwWrapper">
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc1} alt={alt1} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <h2 className="hiwInfoH2">1.</h2>
                            <p className="hiwinfoP">
                            Escoge la ciudad donde se encuentra el producto que quieres chequear...
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc2} alt={alt2} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <h2 className="hiwInfoH2">2.</h2>
                            <p className="hiwinfoP">
                            Escoge la ciudad donde se encuentra el producto que quieres chequear...
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc3} alt={alt3} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <h2 className="hiwInfoH2">3.</h2>
                            <p className="hiwinfoP">
                            Escoge la ciudad donde se encuentra el producto que quieres chequear...
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc4} alt={alt4} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <h2 className="hiwInfoH2">4.</h2>
                            <p className="hiwinfoP">
                            Escoge la ciudad donde se encuentra el producto que quieres chequear...
                            </p>

                        </div>
                    </div>
                    <div className="hiwCard">
                        <div className="hiwImgContainer">
                            <img src={imgSrc5} alt={alt5} className="hiwImg" />
                        </div>
                        <div className="hiwInfo">
                            <h2 className="hiwInfoH2">5.</h2>
                            <p className="hiwinfoP">
                            Escoge la ciudad donde se encuentra el producto que quieres chequear...
                            </p>

                        </div>
                    </div>


                </div>
            
            </div>
        </>
        
    )
}

export default HiwSection
