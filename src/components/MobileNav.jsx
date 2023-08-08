import { ReactComponent as LogoSvg } from "../assets/svgs/slack.svg";

import { ReactComponent as CloseSvg } from "../assets/svgs/close.svg";
import LinkList from "./LinkList";
import Button, { BUTTON_TYPES } from "./Button";

const LINKS = ["solutions", "enterprise", "resources", "pricing", "sign in"];
const SUB_LINKS = {
	0: [
		{ name: "features", url: "" },
		{ name: "channels", url: "" },
		{ name: "integrations", url: "" },
		{ name: "security", url: "" },
		{ name: "slack Connect", url: "" },
		{ name: "customers", url: "" },
	],
};

const MobileNav = ({ isActive, setActive }) => {
	return (
		<div className={`mobile-nav ${isActive ? "active" : ""}`}>
			<header className="mobile-nav__header">
				<LogoSvg />
				<button onClick={setActive} className="mobile-nav__close">
					<CloseSvg className="close-svg" />
				</button>
			</header>
			<nav className="mobile-nav__nav">
				<div className="mobile-nav__nav-links">
					<LinkList title={"products"} links={SUB_LINKS[0]} />
					{LINKS.map((link) => (
						<a href="#" className="mobile-nav__nav-link">
							{link}
						</a>
					))}
				</div>
			</nav>
			<div className="mobile-nav__buttons">
				<Button variant={BUTTON_TYPES.bordered}> Sign in</Button>
				<Button>Download slack</Button>
			</div>
		</div>
	);
};

export default MobileNav;
