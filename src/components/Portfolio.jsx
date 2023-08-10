import React from "react";
import Section from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import { projects } from "../helpers/Projects";

const Portfolio = () => {
	return (
		<Section
			title="Portfolio 📝"
			subtitle="These are all the projects that I have worked on"
		>
			<div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
				{projects.map(({ id, image, title, github, demo }) => (
					<div
						key={id}
						className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
					>
						<img
							src={image}
							alt=""
							className="w-2/3 h-60"
						/>
						<div className="w-1/3 flex flex-col items-center justify-evenly p-1">
							<h2>{title}</h2>
							<a
								href={github}
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl cursor-pointer duration-150 hover:scale-110"
							>
								<FaGithub /> GitHub
							</a>
							<a
								href={demo}
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl cursor-pointer duration-150 hover:scale-110"
							>
								<FaExternalLinkSquareAlt /> Demo
							</a>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Portfolio;
