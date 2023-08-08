import { ReactComponent as ChevronDownSvg } from "../assets/svgs/chevron-down.svg";

const HeaderDropDown = ({ children, title, index, activeIndex, onClick }) => {
    
	function toggleDropDown() {
		onClick();
	}

	return (
		<div
			className={`header-dropdown  ${index === activeIndex ? "active" : ""}
        `}
		>
			<div onClick={toggleDropDown} className="header-dropdown__toggle">
				<span>{title} </span>
				<ChevronDownSvg />
			</div>
			<div className="header-dropdown__container">
				<div className="header-dropdown__main">
					<h1>Main</h1>
					<div>{children}</div>
				</div>
				<aside className="header-dropdown__aside">
					<h1>Aside</h1>
				</aside>
			</div>
		</div>
	);
};

export default HeaderDropDown;
