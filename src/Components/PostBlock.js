import React from "react";
import {
  createStyles,
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

export function PostBlock(props) {
  const { classes } = useStyles();
  console.log(props);
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
      <TypographyStylesProvider className={classes.body}>
        <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
      </TypographyStylesProvider>
    </div>
  );
}
