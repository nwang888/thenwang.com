import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Projects() {
	const projectsRef = useRef(null);

	return (
		<>
			<div className="project-bg" id="projects" ref={projectsRef}>
				<div className="project-header-container">
					<div className="project-header">Some Things I've Built</div>
					<hr className="project-hr" />
				</div>
				<div className="project1-wrapper">
					<a
						href="https://www.bettermessages.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="project1-card"></div>
					</a>
					<div className="project1-desc">
						<div className="project1-title">BetterMessages</div>
						<div className="project1-text">
							<p>
								An alternative iMessage client with an analytics dashboard.
								macOS native and enables message and user analytics along with
								other QoL improvements. <br /> Currently on hold.
							</p>
						</div>
						<div className="project1-tools">
							<ul className="project1-tools">
								<li>Swift</li>
								<li>SwiftUI</li>
								<li>SQLite</li>
							</ul>
						</div>
						<div className="project1-actions">
							<ul>
								<motion.a
									href="https://www.bettermessages.org/"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{
										scale: 1.3
										// rotate: 360,
									}}
									transition={{ type: "spring", stiffness: 400, damping: 20 }}
								>
									<img src="/external_link_circle.svg" alt="External Link" />
								</motion.a>
							</ul>
						</div>
					</div>
				</div>
				<div className="project2-wrapper">
					<a
						href="https://www.bettermessages.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="project2-card"></div>
					</a>
					<div className="project2-desc">
						<div className="project2-title">BetterMessages</div>
						<div className="project2-text">
							<p>
								An alternative iMessage client with an analytics dashboard.
								macOS native and enables message and user analytics along with
								other QoL improvements. <br /> Currently on hold.
							</p>
						</div>
						<div className="project2-tools">
							<ul className="project2-tools">
								<li>Swift</li>
								<li>SwiftUI</li>
								<li>SQLite</li>
							</ul>
						</div>
						<div className="project2-actions">
							<ul className="project2-actions">
								<motion.a
									href="https://www.bettermessages.org/"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{
										scale: 1.3
										// rotate: 360,
									}}
									transition={{ type: "spring", stiffness: 400, damping: 20 }}
								>
									<img src="/external_link_circle.svg" alt="External Link" />
								</motion.a>
							</ul>
						</div>
					</div>
				</div>
				<div className="project1-wrapper">
					<a
						href="https://www.bettermessages.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="project3-card"></div>
					</a>
					<div className="project1-desc">
						<div className="project1-title">BetterMessages</div>
						<div className="project1-text">
							<p>
								An alternative iMessage client with an analytics dashboard.
								macOS native and enables message and user analytics along with
								other QoL improvements. <br /> Currently on hold.
							</p>
						</div>
						<div className="project1-tools">
							<ul className="project1-tools">
								<li>Swift</li>
								<li>SwiftUI</li>
								<li>SQLite</li>
							</ul>
						</div>
						<div className="project1-actions">
							<ul>
								<motion.a
									href="https://www.bettermessages.org/"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{
										scale: 1.3
										// rotate: 360,
									}}
									transition={{ type: "spring", stiffness: 400, damping: 20 }}
								>
									<img src="/external_link_circle.svg" alt="External Link" />
								</motion.a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
