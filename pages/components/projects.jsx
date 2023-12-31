import React, { useRef } from "react";

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
					<div className="project1-card"></div>
					<div className="project1-desc">
						<div className="project1-title">BetterMessages</div>
						<div className="project1-text">
							<p>
								An alternative iMessage client. macOS native and enables message
								and user analytics along with other QoL improvements. <br />{" "}
								Currently in development.
							</p>
						</div>
					</div>
				</div>
				<div className="project2-wrapper">
					<div className="project1-card"></div>
					<div className="project2-desc">
						<div className="project2-title">WalletWatchers</div>
						<div className="project2-text">
							<p>
								A webapp that allows users to track their spending across all
								bank accounts.
							</p>
						</div>
					</div>
				</div>
				<div className="project1-wrapper">
					<div className="project1-card"></div>
					<div className="project1-desc">
						<div className="project1-title">HackDuke</div>
						<div className="project1-text">
							<p>A 300 person hackathon hosted at Duke University.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
