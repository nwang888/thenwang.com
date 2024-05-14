import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import NavBar from "./navbar";

export default function Home() {
	const [verb, setVerb] = useState("imagine");
	const homeBgRef = useRef(null);
	useEffect(() => {
		const verbs = ["imagine", "design", "build"];
		let index = 0;

		const intervalId = setInterval(() => {
			index = index + 1 === verbs.length ? 0 : index + 1;
			setVerb(verbs[index]);
		}, 10000); // Change text every 10 seconds

		return () => clearInterval(intervalId); // Clear interval on component unmount
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const { height } = homeBgRef.current.getBoundingClientRect();
			const scrollPos = window.scrollY / (height * 0.75); // fades out at 75% of the way down the element
			homeBgRef.current.style.opacity = Math.max(1 - scrollPos, 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<div className="home-bg" ref={homeBgRef}>
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
										// rotate: 20
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
				{/* <NavBar /> */}
			</div>
		</>
	);
}
