import { useMediaQuery } from "@uidotdev/usehooks";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Feature = ({ data }) => {
	const { vidSrc, title, text, link } = data;

	const isTablet = useMediaQuery("(min-width:768px)");

	return (
		<div className="feature">
			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ margin: "500px 0px 0px 0px", once: true }}
				transition={{ duration: 0.3, delay: 0.4 }}
				className="feature__video"
			>
				{isTablet ? (
					<video loop autoPlay muted key={vidSrc.desk}>
						<source src={vidSrc.desk} type="video/webm" />
					</video>
				) : (
					<video loop autoPlay muted key={vidSrc.mobile}>
						<source src={vidSrc.mobile} type="video/webm" />
					</video>
				)}
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ margin: "500px 0px 0px 0px", once: true }}
				transition={{ duration: 0.3, delay: 0.4 }}
				className="feature__about"
			>
				<h1>{title}</h1>
				<p>{text}</p>
				<a href={link.url}>
					<span>{link.title}</span>
					<HiOutlineArrowRight />
				</a>
			</motion.div>
		</div>
	);
};

export default Feature;
