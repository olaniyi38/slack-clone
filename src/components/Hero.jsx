import { ReactComponent as GoogleSvg } from '../assets/svgs/google.svg'

import Button from "./Button"


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container">
                <div className="hero__section1">
                    <hgroup>

                        <h1 className="hero__title">Made for people.
                            <span className="hero__sub-title">Built for productivity.</span>
                        </h1>
                    </hgroup>
                    <p className="hero__text">Connect the right people, find anything you need and automate the rest.That’s work in Slack, your productivity platform.</p>
                    <div className="hero__actions">
                        <Button variant='inverted'>sign up with email</Button>
                        <Button variant='google'>
                            <span className='svg'>
                                <GoogleSvg className="google-svg" />
                            </span>
                            <span>sign up with google</span>
                        </Button>
                    </div>
                    <p className='hero__text-aside'>Slack is free to try for as long as you’d like</p>
                </div>
                <div className="hero__section2">
                    <div className="hero__video">
                        <video loop autoPlay muted   poster="https://a.slack-edge.com/2951054/marketing/img/homepage/e2e-prospects/animations/static/hero-product-ui.jpg">
                            <source src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" type="video/webm" />

                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero