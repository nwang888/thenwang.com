import Head from "next/head";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Home from "./components/home";
import Projects from "./components/projects";
import Footer from "./components/footer";

// TODO: FIX ANIMATION TIMING - mostly fine unless js desyncs
// TODO: Make font size rescale with screen size
// TODO: Make the action item clickable with email
// TODO: Add email and CV buttons to the bottom

export default function Dash() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Home />
			<Projects />
			<Footer />
		</>
	);
}
