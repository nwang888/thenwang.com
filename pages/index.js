import Head from "next/head";

export default function Home() {
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
								I’m currently a freshman at Duke University majoring in Computer
								Science and Finance. I aim to find a way to the world where ESG,
								computer science, behavioral science and policy come together to
								identify and invest in technologies and policies that will
								create lasting sustainable investments that better humanity.
							</p>
							<ul className="home-links">
								<li>
									<a href="https://github.com/nwang888">Github</a>
								</li>
								<li>
									<a href="https://github.com/nwang888">Github</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
