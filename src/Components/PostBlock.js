import React from "react";
import {
  createStyles,
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  Menu,
  ActionIcon,
  Container,
} from "@mantine/core";
import { IconPencil, IconTrash, IconDots } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
  card: {
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.pink[6],
        theme.colors.orange[6]
      ),
    },
  },
}));

export function PostBlock(props) {
  const { classes } = useStyles();
  console.log(props);
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Group>
          <Avatar
            src={props.post.authorImage}
            alt={props.post.authorName}
            radius="xl"
            size="lg"
          />
          <div>
            <Text size="sm">{props.post.authorName}</Text>
            <Text size="xs" color="dimmed">
              {props.post.createdAt}
            </Text>
          </div>
        </Group>
        <Group>
          <Menu transition="pop" withArrow>
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} stroke={1.5} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<IconPencil size={16} stroke={1.5} />}>
                Edit message
              </Menu.Item>
              <Menu.Item
                icon={<IconTrash size={16} stroke={1.5} />}
                color="red"
              >
                Delete message
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
      </TypographyStylesProvider>
    </Paper>
  );
}
