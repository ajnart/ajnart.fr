import { Stack } from "@chakra-ui/layout";
import { Group, Navbar, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { Logo } from "./Logo";

export function HeaderContent() {
	return (
		<Stack direction={"row"} justifyContent={'space-between'}>
			<Logo/>
			<ColorSchemeToggle />
		</Stack>
	);
}
