import { useEffect, useState } from "react";
import "./css/DisplayMarkdown.css";
import Markdown from "markdown-to-jsx";
import Code from "./Code";

function DisplayMarkdown() {
  const [post, setPost] = useState("");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    import("../markdown/1.2.1_ Layout - Slab.md").then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPost(response))
        .catch((err) => console.log(err));
    });
  }, []);
  return (
    <div className="DisplayMarkdown-body">
      <Markdown
        options={{
          overrides: {
            Code: {
              component: Code,
              props: {
                isDark,
                setIsDark,
              },
            },
          },
        }}
      >
        {post}
      </Markdown>
    </div>
  );
}

export default DisplayMarkdown;
