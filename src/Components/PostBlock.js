import { createStyles, Text, Avatar, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  body: {
    paddingLeft: 54,
    paddingTop: theme.spacing.sm,
  },
}));

export function PostBlock(post) {
  const { classes } = useStyles();
  return (
    <div>
      <Group>
        <Avatar src={post.image} alt={post.name} radius="xl" />
        <div>
          <Text size="sm">{post.name}</Text>
          <Text size="xs" color="dimmed">
            {post.createdAt}
          </Text>
        </div>
      </Group>
      <Text className={classes.body} size="sm">
        {post.message}
      </Text>
    </div>
  );
}
