import Button, { BUTTON_TYPES } from "./Button";
import { motion } from "framer-motion";

const STATS = [
	{
		value: 85,
		text: "of users say Slack has improved communication*",
	},
	{
		value: 86,
		text: "feel their ability to work remotely has improved*",
	},
	{
		value: 88,
		text: "feel more connected to their teams*",
	},
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
			duration: 0.4,
			ease: "easeOut",
		},
	}),
};

const Stats = () => {
	return (
		<>
			<section className="stats">
				<div className="stats__header">
					<motion.h1
                    custom={.2}
						variants={fadeIn}
						initial="hide"
						whileInView="show"
						viewport={{ once: true, margin: "300px 0px 0px 0px" }}
                        tra
					>
						Teams large and small rely on Slack
					</motion.h1>
					<motion.p>
						Slack securely scales up to support collaboration at the world’s
						biggest companies.
					</motion.p>
				</div>
				<motion.div
                custom={.3}
					variants={fadeIn}
					initial="hide"
					whileInView="show"
					viewport={{ once: true, margin: "300px 0px 0px 0px" }}
                    tra
					className="stats__cta"
				>
					<Button>meet slack for enterprise</Button>
					<Button variant={BUTTON_TYPES.inverted}>talk to sales</Button>
				</motion.div>

				<motion.div
                custom={.4}
					variants={fadeIn}
					initial="hide"
					whileInView="show"
					viewport={{ once: true, margin: "300px 0px 0px 0px" }}
                    tra
					className="stats__values"
				>
					{STATS.map((stat) => (
						<div key={stat.value} className="stats__stat-value">
							<h1>{stat.value}%</h1>
							<p>{stat.text}</p>
						</div>
					))}
				</motion.div>
			</section>
		</>
	);
};

export default Stats;
