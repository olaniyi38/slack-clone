import { motion } from "framer-motion";
import Card from "./Card";

const ARTICLES = [
	{
		imgSrc:
			"https://a.slack-edge.com/68be889/marketing/img/promos/promo-state-of-work.jpg",
		title: "the state of work 2023",
		tag: "report",
		link: {
			url: "#",
			title: "Read more",
		},
	},
	{
		imgSrc:
			"https://a.slack-edge.com/6b9d9e8/marketing/img/promos/wtny-resource-tile.jpg",
		title:
			"big things are launching. relive the highlights of world tour new york",
		tag: "on-demand",
		link: {
			url: "#",
			title: "Read more",
		},
	},
	{
		imgSrc:
			"https://a.slack-edge.com/426ed86/marketing/img/promos/promo-open-ai.jpg",
		title: "the next big thing? Ai for everyone",
		tag: "customer story",
		link: {
			url: "#",
			title: "read more",
		},
	},
	{
		imgSrc:
			"https://a.slack-edge.com/426ed86/marketing/img/promos/promo-boost-productivity.jpg",
		title: "top slack tips to boost productivity",
		tag: "webinar",
		link: {
			url: "#",
			title: "Watch now",
		},
	},
];

const Articles = () => {
	return (
		<section className="articles">
			<h1 className="articles__title"></h1>
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.3 }}
				viewport={{ once: true, margin: "100px 0px 0px 0px" }}
				className="articles__container"
			>
				{ARTICLES.map((data) => {
					return <Card key={data.title} data={data} />;
				})}
			</motion.div>
		</section>
	);
};

export default Articles;
