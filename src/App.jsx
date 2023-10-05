import { useState } from "react";
import Articles from "./components/Articles";
import Button, { BUTTON_TYPES } from "./components/Button";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonial";
import { motion } from "framer-motion";

const companiesImgs = [
	"https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/airbnb-logo.png",
	"https://a.slack-edge.com/5ae14bf/marketing/img/logos/company/_color/logo-nasa.png",
	"https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/uber.png",
	"https://a.slack-edge.com/044f5db/marketing/img/logos/company/_color/nyt.png",
	"https://a.slack-edge.com/1e38e34/marketing/img/logos/company/logo-etsy.png",
];

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
			duration: 0.3,
			ease: "easeOut",
		},
	}),
};

function App() {
	const [activeDropDown, setActiveDropDown] = useState(null);

	function toggleDropDown(index) {
		index === activeDropDown
			? setActiveDropDown(null)
			: setActiveDropDown(index);
	}

	return (
		<>
			<Header toggleDropDown={toggleDropDown} activeDropDown={activeDropDown} />
			<main onClick={() => setActiveDropDown(null)}>
				<Hero />
				<section className="trusted-companies">
					<h1 className="">Trusted by companies all over the world</h1>
					<div>
						{companiesImgs.map((link) => {
							return (
								<div key={link} className="img">
									<img src={link} alt="" />
								</div>
							);
						})}
					</div>
				</section>
				<Features />
				<Stats />
				<Testimonials />
				<Articles />
				<section className="cta">
					<motion.h1
						variants={fadeIn}
						custom={0.2}
						initial="hide"
						whileInView="show"
						viewport={{ once: true, margin: "300px 0px 0px 0px" }}
						className="cta__title"
					>
						See all you can accomplish with slack
					</motion.h1>
					<motion.div
						variants={fadeIn}
						custom={0.3}
						initial="hide"
						whileInView="show"
						viewport={{ once: true, margin: "300px 0px 0px 0px" }}
						className="cta__buttons"
					>
						<Button variant={BUTTON_TYPES.inverted}>talk to sales</Button>
						<Button variant={BUTTON_TYPES.bordered}>Try for free</Button>
					</motion.div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default App;
