import { HiOutlineArrowRight, HiPlay } from "react-icons/hi2";
import { motion } from "framer-motion";

const Testimonials = () => {
	return (
		<section className="testimonial">
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: "300px 0px 0px 0px" }}
				transition={{ duration: 0.3, delay: 0.4 }}
				className="testimonial__video"
			>
				<video loop muted autoPlay>
					<source
						rel="preload"
						src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/IBM_08.mp4"
						type="video/mp4"
					/>
				</video>
				<a href="#" className="play-link">
					<button className="play-btn">
						<HiPlay className="play-svg" />
					</button>
				</a>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 30 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: "300px 0px 0px 0px" }}
				transition={{ duration: 0.3, delay: 0.4 }}
				className="testimonial__container"
			>
				<p className="testimonial__quote">
					“Whether you’re a small or large organization, executing anything from
					a discrete modernization program to a digital transformation
					initiative, Slack is an incredibly powerful tool in the hybrid world.”
				</p>
				<div className="testimonial__by">
					<h1>Jennifer Quinlan</h1>
					<p>
						Managing Partner, IBM iX Americas Leader - Customer and Experience
						Transformation, IBM
					</p>
				</div>
				<a href="#" className="testimonial__link">
					<span>see more customer stories</span>
					<HiOutlineArrowRight className="arrow-right" />
				</a>
			</motion.div>
			<aside>
				Weighted average. Based on 2,707 survey responses from weekly Slack
				users in the U.S., UK, Australia and Canada with a ± 2% margin of error
				at 95% CI (December 2021).
			</aside>
		</section>
	);
};

export default Testimonials;
