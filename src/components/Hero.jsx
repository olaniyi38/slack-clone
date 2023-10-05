import { ReactComponent as GoogleSvg } from "../assets/svgs/google.svg";

import Button from "./Button";

import { motion } from "framer-motion";

const fadeIn = {
    hide: {
        opacity: 0,
        y: 30,
    },
    show: (i = 0) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: i,
            duration: .3,
            ease:"easeOut" 
        },
    }),
};

const Hero = () => {

	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__section1">
					<motion.hgroup custom={.4} variants={fadeIn} initial="hide" animate="show">
						<h1 className="hero__title">
							Made for people.
							<span className="hero__sub-title">Built for productivity.</span>
						</h1>
					</motion.hgroup>
					<motion.p
						custom={0.5}
						variants={fadeIn}
						initial="hide"
						animate="show"
						className="hero__text"
					>
						Connect the right people, find anything you need and automate the
						rest.That’s work in Slack, your productivity platform.
					</motion.p>
					<motion.div
						custom={0.5}
						variants={fadeIn}
						initial="hide"
						animate="show"
						className="hero__actions"
					>
						<Button variant="inverted">sign up with email</Button>
						<Button variant="google">
							<span className="svg">
								<GoogleSvg className="google-svg" />
							</span>
							<span>sign up with google</span>
						</Button>
					</motion.div>
					<motion.p
						custom={0.2}
						variants={fadeIn}
						initial="hide"
						animate="show"
						className="hero__text-aside"
					>
						Slack is free to try for as long as you’d like
					</motion.p>
				</div>
				<div className="hero__section2">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className="hero__video"
					>
						<video
							loop
							autoPlay={true}
                            muted
							poster="https://a.slack-edge.com/2951054/marketing/img/homepage/e2e-prospects/animations/static/hero-product-ui.jpg"
						>
							<source
								src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm"
								type="video/webm"
							/>
						</video>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
