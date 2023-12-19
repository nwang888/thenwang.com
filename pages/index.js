import Head from "next/head";
import React, { useState, useEffect } from "react";

// TODO: FIX ANIMATION TIMING
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
								<div className="title">Reality Architect</div>
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
								<li>
									<a
										href="https://github.com/nwang888"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src="/GithubButton.svg" alt="Github" />
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/nwang888/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src="/LinkedinButton.svg" alt="LinkedIn" />
									</a>
								</li>
								<li>
									<a
										href="https://twitter.com/nwang888"
										target="_blank"
										rel="noopener noreferrer"
									>
										<img src="/TwitterButton.svg" alt="Twitter" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
