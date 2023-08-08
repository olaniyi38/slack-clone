import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks"
import { useState } from "react"
import { useEffect } from "react"

const FlexItem = ({ data }) => {
    const { vidSrc, title, text, link } = data

    const isTablet = useMediaQuery('(min-width:768px)')

   
       

    return (
        <div className="feature">
            <div className="feature__video">
                {
                    isTablet ? (
                        <video loop autoPlay key={ vidSrc.desk } >
                            <source
                                src={ vidSrc.desk }
                                type="video/webm"
                            />
                        </video>

                    ) :
                        (
                            <video loop autoPlay key={ vidSrc.mobile }>
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
                <a href={ link.url }>{ link.title }</a>
            </div>
        </div>
    )
}

export default FlexItem

// Bring your team together

// At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.
// Learn more about channels