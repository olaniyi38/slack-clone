import { useState } from "react";

import { ReactComponent as LogoSvg } from "../assets/svgs/slack.svg";
import { HiOutlineBars3, HiOutlineMagnifyingGlass } from "react-icons/hi2";

import Button, { BUTTON_TYPES } from "./Button";
import MobileNav from "./MobileNav";
import HeaderDropDown from "./HeaderDropDown";
import { useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";

const Header = ({ toggleDropDown, activeDropDown }) => {
	const [isMobileNavActive, setMobileNavActive] = useState(false);
	const { scrollY, scrollYProgress } = useScroll();
	const [showNav, setShowNav] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest >= 425) {
			setShowNav(true);
		} else {
			setShowNav(false);
		}
	});
	return (
		<>
			<MobileNav
				setActive={() => setMobileNavActive(false)}
				isActive={isMobileNavActive}
			/>
			<div className={`header ${showNav ? "sticky" : ""}`}>
				<div className="header__container">
					<div className="header__logo">
						<LogoSvg />
					</div>
					<nav className="header__nav">
						<HeaderDropDown
							title={"Features"}
							index={0}
							activeIndex={activeDropDown}
							onClick={() => toggleDropDown(0)}
						/>
						<HeaderDropDown
							title={"solutions"}
							index={1}
							activeIndex={activeDropDown}
							onClick={() => toggleDropDown(1)}
						/>
						<HeaderDropDown
							title={"Enterprise"}
							index={2}
							activeIndex={activeDropDown}
							onClick={() => toggleDropDown(2)}
						/>
						<a href="#" className="header__nav-link">
							nav link
						</a>
						<a href="#" className="header__nav-link">
							nav link
						</a>
					</nav>

					<button className="header__search-btn">
						<HiOutlineMagnifyingGlass className="glass" />
					</button>
					<div className="header__actions">
						<a href="#">Sign in</a>
						<Button variant={BUTTON_TYPES.bordered}>talk to sales</Button>
						<Button variant={BUTTON_TYPES.inverted}>try for free</Button>
					</div>
					<div
						onClick={() => setMobileNavActive(true)}
						className="header__toggle-btn"
					>
						<HiOutlineBars3 className="bars" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
