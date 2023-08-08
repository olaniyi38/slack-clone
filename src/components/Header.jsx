import { ReactComponent as SearchSvg } from "../assets/svgs/mag-glass.svg";
import { ReactComponent as BarsSvg } from "../assets/svgs/bars.svg";
import { ReactComponent as LogoSvg } from "../assets/svgs/slack.svg";


import { useState } from "react";

import Button, { BUTTON_TYPES } from "./Button";
import MobileNav from './MobileNav'
import HeaderDropDown from "./HeaderDropDown";



const Header = () => {
	const [isMobileNavActive, setMobileNavActive] = useState(false);

	const [activeDropDown, setActiveDropDown] = useState(null);

	function toggleDropDown(index) {
		index === activeDropDown
			? setActiveDropDown(null)
			: setActiveDropDown(index);
	}

	return (
		<div className="header">
			<div className="header__container">
				<div className="header__logo">
					<LogoSvg />
				</div>
				<MobileNav
					setActive={() => setMobileNavActive(false)}
					isActive={isMobileNavActive}
				/>
				<nav className="header__nav">
					<HeaderDropDown
						title={"dropdown 1"}
						index={0}
						activeIndex={activeDropDown}
						onClick={() => toggleDropDown(0)}
					/>
					<HeaderDropDown
						title={"dropdown 2"}
						index={1}
						activeIndex={activeDropDown}
						onClick={() => toggleDropDown(1)}
					/>
					<HeaderDropDown
						title={"dropdown 3"}
						index={2}
						activeIndex={activeDropDown}
						onClick={() => toggleDropDown(2)}
					/>
					<a href="">nav link</a>
					<a href="">nav link</a>
				</nav>

					<button className="header__search-btn">
						<SearchSvg />
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
					<BarsSvg />
				</div>
			</div>
		</div>
	);
};

export default Header;
