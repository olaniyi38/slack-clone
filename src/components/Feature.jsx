import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks"
import { HiOutlineArrowRight } from 'react-icons/hi'


const Feature = ({ data }) => {
    const { vidSrc, title, text, link } = data

    const isTablet = useMediaQuery('(min-width:768px)')

   
       

    return (
        <div className="feature">
            <div className="feature__video">
                {
                    isTablet ? (
                        <video loop autoPlay muted key={ vidSrc.desk } >
                            <source
                                src={ vidSrc.desk }
                                type="video/webm"
                            />
                        </video>

                    ) :
                        (
                            <video loop autoPlay muted key={ vidSrc.mobile }>
                                <source
                                    src={ vidSrc.mobile }
                                    type="video/webm"
                                />
                            </video>
                        )
                }
            </div>
            <div className="feature__about">
                <h1>{ title }</h1>
                <p>{ text }</p>
                <a href={ link.url }>
                    <span>{ link.title }</span>
                    <HiOutlineArrowRight />
                </a>
            </div>
        </div>
    )
}

export default Feature

