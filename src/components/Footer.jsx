import { motion } from "framer-motion";
import { ReactComponent as SlackSvg } from "../assets/svgs/slack-icon.svg";
import { ReactComponent as PrivacySvg } from "../assets/svgs/privacy-icon.svg";
import {
	RiDownloadCloudLine,
	RiFacebookBoxFill,
	RiLinkedinBoxFill,
	RiTwitterFill,
	RiYoutubeFill,
} from "react-icons/ri";
import LinkList from "./LinkList";

const linkGroups = {
	0: [
		{
			name: "lorem ipsum",
			url: "#",
		},
		{
			name: "lorem ipsum",
			url: "#",
		},
		{
			name: "lorem ipsum",
			url: "#",
		},
		{
			name: "lorem ipsum",
			url: "#",
		},
		{
			name: "lorem ipsum",
			url: "#",
		},
		{
			name: "lorem ipsum",
			url: "#",
		},
	],
	1: [
		{
			name: "lorem ipsum",
			url: "#",
		},
		{
			name: "lorem ipsum",
			url: "#",
		},
		{
			name: "lorem ipsum",
			url: "#",
		},
	],
};

const LINKS = [
	{
		title: "why slack",
		links: linkGroups[0],
	},
	{
		title: "product",
		links: linkGroups[1],
	},
	{
		title: "pricing",
		links: linkGroups[1],
	},
	{
		title: "resources",
		links: linkGroups[0],
	},
	{
		title: "company",
		links: linkGroups[1],
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
			duration: 0.3,
			ease: "easeOut",
		},
	}),
};

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__top">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "300px 0px 0px 0px" }}
					className="footer__logo"
				>
					<SlackSvg />
				</motion.div>
				<div className="footer__links">
					<motion.div
						initial="hide"
						whileInView="show"
						variants={fadeIn}
						viewport={{ once: true, margin: "300px 0px 0px 0px" }}
					>
						{LINKS.map((linkGroup) => {
							return (
								<LinkList
									key={linkGroup.title}
									title={linkGroup.title}
									links={linkGroup.links}
								/>
							);
						})}
					</motion.div>
				</div>
			</div>

			<div className="footer__bottom">
				<motion.div
					initial="hide"
					whileInView="show"
					variants={fadeIn}
					viewport={{ once: true, margin: "300px 0px 0px 0px" }}
					className="footer__links2"
				>
					<a href="#">status</a>
					<a href="#" aria-name="privacy">
						<PrivacySvg />
						<span>privacy</span>
					</a>
					<a href="#">Terms</a>
					<a href="#">your privacy choices</a>
					<a href="#">contact us</a>
					<a href="#">cookies prefernces</a>
				</motion.div>
				<motion.div
					initial="hide"
					whileInView="show"
					variants={fadeIn}
					viewport={{ once: true, margin: "300px 0px 0px 0px" }}
				>
					<a href="#">
						<RiDownloadCloudLine />
						<span>Downlaod Slack</span>
					</a>
					<div className="footer__social-links">
						<a href="#">
							<RiFacebookBoxFill />
						</a>
						<a href="#">
							<RiTwitterFill />
						</a>
						<a href="#">
							<RiYoutubeFill />
						</a>
						<a href="#">
							<RiLinkedinBoxFill />
						</a>
					</div>
				</motion.div>
			</div>

			<aside>
				©2023 Slack Technologies, LLC, a Salesforce company. All rights
				reserved. Various trademarks held by their respective owners.
			</aside>
		</footer>
	);
};

export default Footer;
