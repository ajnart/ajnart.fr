import { Text } from "@mantine/core";
import { NextPage } from "next";
import { Head } from "next/document";
import { BrandGithub, BrandLinkedin, Link } from "tabler-icons-react";
import InfoCard from "../components/InfoCard";
import { WhoAmI } from "../data/constants";

const About: NextPage = (props) => {
	return (
		<InfoCard {...WhoAmI} />

	);
}

export default About;