import { motion } from "framer-motion";

export default function NavBar() {
	return (
		<div className="menu-container">
			<div className="menu">
				<motion.div
					className="menu-item"
					whileHover={{ scale: 1.5 }}
					transition={{ stiffness: 400, damping: 20, duration: 0.3 }}
				>
					<a href="#home">Home</a>
				</motion.div>

				<motion.div
					className="menu-item"
					whileHover={{ scale: 1.5 }}
					transition={{ stiffness: 400, damping: 20, duration: 0.3 }}
				>
					<a href="#blog">Blog</a>
				</motion.div>

				<motion.div
					className="menu-item"
					whileHover={{ scale: 1.3 }}
					transition={{ stiffness: 400, damping: 20, duration: 0.3 }}
				>
					<a href="#projects">Projects</a>
				</motion.div>

				<motion.div
					className="menu-item"
					whileHover={{ scale: 1.5 }}
					transition={{ stiffness: 400, damping: 20, duration: 0.3 }}
				>
					<a href="/N_Wang_Resume.pdf" target="_blank">
						Resume
					</a>
				</motion.div>
			</div>
		</div>
	);
}
