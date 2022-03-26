import { NextLink } from "@mantine/next";
import { Text } from "@mantine/core";

export function Logo({style}: any) {
	return (
		<NextLink href="/">
			<Text
				sx={style}
				weight={"bold"}
				variant="gradient"
				gradient={{ from: 'indigo', to: 'purple', deg: 45 }}>
				ajnart.fr
			</Text>
		</NextLink>
	)
}