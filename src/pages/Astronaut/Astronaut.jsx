import React from "react";
import Today from "../../components/today/Today";
import Week from "../../components/week/Week";
import {
	Astronauttodaypics,
	Astronautweekpics,
} from "../../assets/images";
import "./astronaut.css";

const Astronaut = () => {
	return (
		<div className="Astronaut">
			<Today images={Astronauttodaypics} />
			<Week images={Astronautweekpics} />
		</div>
	);
};

export default Astronaut;
