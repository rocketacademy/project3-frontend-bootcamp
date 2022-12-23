import React from "react";
import { createStyles, Text, Avatar, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

export function PostBlock(props) {
  const { classes } = useStyles();
  
  return (
    <div>
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
      <Text className={classes.body} size="sm">
        {props.post.content}
      </Text>
    </div>
  );
}
