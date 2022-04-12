import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { ExternalLink } from 'tabler-icons-react';

interface TagType {
  name: string;
  color: string;
}

export interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: TagType[];
}

export default function WorkCard(props: WorkCardProps) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ margin: 'auto', marginBottom: 40 }}>
      <Card shadow="md" p="xs" mb="xl" withBorder>
        <Card.Section>
          <Image fit="contain" src={props.image} height={160} alt={props.title} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={600}>{props.title}</Text>
          <Group>
            {props.tags && props.tags.length > 0
              ? props.tags.map((tag) => (
                  <Badge key={tag.name} color={tag.color}>
                    {tag.name}
                  </Badge>
                ))
              : null}
          </Group>
        </Group>

        <Text size="sm" style={{ minHeight: 40, color: secondaryColor, lineHeight: 1.5 }}>
          {props.description}
        </Text>

        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={props.link}
          rightIcon={<ExternalLink size={14} />}
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          View code
        </Button>
      </Card>
    </div>
  );
}
