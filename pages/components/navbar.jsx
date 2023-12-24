import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
	const [showIcons, setShowIcons] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const projectsSection = document.getElementById("projects");
			setShowIcons(window.scrollY >= projectsSection.offsetTop);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="menu-container">
			<div className="menu">
				<motion.div
					className="menu-item"
					whileHover={{ scale: 1.5 }}
					transition={{ stiffness: 400, damping: 20, duration: 0.3 }}
				>
					{showIcons ? (
						<img src="/Navbar/Home2.svg" alt="Home" />
					) : (
						<a href="#home">Home</a>
					)}
				</motion.div>

				<motion.div
					className="menu-item"
					whileHover={{ scale: 1.5 }}
					transition={{ stiffness: 400, damping: 20, duration: 0.3 }}
				>
					{showIcons ? (
						<img src="/Navbar/Blog2.svg" alt="Blog" />
					) : (
						<a href="#blog">Blog</a>
					)}
				</motion.div>

				<motion.div
					className="menu-item"
					whileHover={{ scale: 1.3 }}
					transition={{ stiffness: 400, damping: 20, duration: 0.3 }}
				>
					{showIcons ? (
						<img src="/Navbar/Projects1.svg" alt="Projects" />
					) : (
						<a href="#projects">Projects</a>
					)}
				</motion.div>

				<motion.div
					className="menu-item"
					whileHover={{ scale: 1.5 }}
					transition={{ stiffness: 400, damping: 20, duration: 0.3 }}
				>
					{showIcons ? (
						<img src="/Navbar/Resume1.svg" alt="Resume" />
					) : (
						<a href="/N_Wang_Resume.pdf" target="_blank">
							Resume
						</a>
					)}
				</motion.div>
			</div>
		</div>
	);
}
