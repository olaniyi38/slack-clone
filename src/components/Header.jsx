import { useState } from "react";

import { ReactComponent as LogoSvg } from "../assets/svgs/slack.svg";
import { HiOutlineBars3, HiOutlineMagnifyingGlass } from "react-icons/hi2";

import Button, { BUTTON_TYPES } from "./Button";
import MobileNav from "./MobileNav";
import HeaderDropDown from "./HeaderDropDown";

const Header = ({ toggleDropDown, activeDropDown }) => {
	const [isMobileNavActive, setMobileNavActive] = useState(false);

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
	);
};

export default Header;
