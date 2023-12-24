import Head from "next/head";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// TODO: FIX ANIMATION TIMING - mostly fine unless js desyncs
// TODO: Make font size rescale with screen size
// TODO: Make the action item clickable with email
// TODO: Make hover effect on social media buttons
// TODO: Add email and CV buttons to the bottom

export default function Home() {
	const [verb, setVerb] = useState("build");
	useEffect(() => {
		const verbs = ["imagine", "design", "build"];
		let index = 0;

		const intervalId = setInterval(() => {
			index = index + 1 === verbs.length ? 0 : index + 1;
			setVerb(verbs[index]);
		}, 10000); // Change text every 10 seconds

		return () => clearInterval(intervalId); // Clear interval on component unmount
	}, []);

	return (
		<>
			<div className="home-bg">
				<div className="home-wrapper">
					<div className="home-outer">
						<div className="home-inner">
							<div className="home-nameplate">
								<div className="name">N Wang</div>
								<div className="title">Strategist | Builder | Orchestrator</div>
							</div>
							<hr className="home-hr" />
							<p>
								I’m currently a junior at Duke University studying Computer
								Science and Economics. I aim to find a way to the world where
								individuals can self-identify and improve their own habits and
								behaviors through novel and user-friendly development.
							</p>
							<div>
								<p>
									Let's <span className="animated-text">{verb}</span> together!
								</p>
							</div>
							<ul className="home-links">
								<motion.a
									href="https://github.com/nwang888"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{
										scale: 1.3
										// rotate: 360,
									}}
									transition={{ type: "spring", stiffness: 400, damping: 20 }}
								>
									<img src="/GithubButton.svg" alt="Github" />
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/nwang888/"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{
										scale: 1.3
										// rotate: 360,
									}}
									transition={{ type: "spring", stiffness: 400, damping: 20 }}
								>
									<img src="/LinkedinButton.svg" alt="LinkedIn" />
								</motion.a>
								<motion.a
									href="https://www.twitter.com/nwang888/"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{
										scale: 1.3
										// rotate: 360,
									}}
									transition={{ type: "spring", stiffness: 400, damping: 20 }}
								>
									<img src="/TwitterButton.svg" alt="LinkedIn" />
								</motion.a>
							</ul>
						</div>
					</div>
				</div>
				<div className="menu-container">
					<div className="menu">
						<motion.a
							href="#home"
							whileHover={{ scale: 1.05 }}
							transition={{
								type: "spring",
								duration: 0.3
							}}
						>
							Home
						</motion.a>

						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{
								type: "spring",
								duration: 0.3
							}}
						>
							<a href="#blog">Blog</a>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{
								type: "spring",
								duration: 0.3
							}}
						>
							<a href="#projects">Projects</a>
						</motion.div>

						<motion.div
							whileHover={{ scale: 1.05 }}
							transition={{
								type: "spring",
								duration: 0.3
							}}
						>
							<a href="#resume">Resume</a>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
}
