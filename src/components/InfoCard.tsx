import { Box, Anchor, Avatar, Card, createStyles, Group, Image, Text } from "@mantine/core";
import { MdOutlineLocationOn } from "react-icons/md";
import { Icon, Link, Location } from "tabler-icons-react";

export interface InfoCardProps {
	title: string;
	description: string;
	imageUrl?: string;
	location?: string;
	links?: { link: string; label: string, icon?: Icon }[];
}

export default function InfoCard(props: InfoCardProps) {
	return (
		<Box
			sx={(theme) => ({
				backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
				padding: theme.spacing.md,
				borderRadius: theme.radius.md,
				boxShadow: theme.shadows.md,
			})}>
			<Group noWrap align={"start"} direction="row">

				{/* Profile picture if it exists*/}
				{props.imageUrl && (
					<Avatar
						alt="it's me"
						src={props.imageUrl}
						style=
						{{
							width: 'auto',
							height: 'auto',
							marginBottom: 10,
						}} />
				)}
				<Group direction="row">
					<Group>

						<Group direction="column" spacing={0}>
							<Text weight={600} size="lg">
								{props.title}
							</Text>
							<Text color="dimmed">{props.description}</Text>
							{props.location &&
								<Group spacing={0}>
									<MdOutlineLocationOn size={25} />
									<Text>{props.location}</Text>
								</Group>
							}
						</Group>
					</Group>
					{props.links && props.links.map((link) => (
						<Anchor target="_blank" href={link.link}>
							<Group spacing={0}>
								{link.icon ? <link.icon size={30} /> : <Link size={30} />}
								<Text size={'lg'} >{link.label}</Text>
							</Group>
						</Anchor>
					))}
				</Group>
			</Group>

		</Box >

	);
}