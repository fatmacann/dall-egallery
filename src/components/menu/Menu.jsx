import React, { useEffect, useState, CSSProperties } from "react";
import "./menu.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = () => {
	const [scroll, setScroll] = useState(0);

	const handleActive = (e) => {
		document.querySelector(".activeMenu").classList.remove("activeMenu");
		e.target.classList.add("activeMenu");
	};

	const moveRight = () => {
		const el = document.getElementById(`hscroll`);
		setScroll((el.scrollLeft += 20));
	};

	const moveLeft = () => {
		const el = document.getElementById(`hscroll`);
		setScroll((el.scrollLeft -= 20));
	};

	return (
		<div className="menu">
			<IoIosArrowDropleft className="menuIcon" onClick={moveLeft} />
			<div className="menu-start" id={`hscroll`}>
				<div className="menu-options">
					<Link
						to="/"
						className="menu-option-item activeMenu link"
						onClick={handleActive}
					>
						All Photos
					</Link>
					<Link
						to="/Astronaut"
						className="menu-option-item link"
						onClick={handleActive}
					>
						 Astronaut
					</Link>
					<Link to="#" className="menu-option-item link" onClick={handleActive}>
						 Seaside
					</Link>

				</div>
			</div>
			<IoIosArrowDropright className="menuIcon" onClick={moveRight} />
			<div className="menu-end">+New Category</div>
		</div>
	);
};

export default Menu;
