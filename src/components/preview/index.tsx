import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkReact from "remark-react";
import { defaultSchema } from "hast-util-sanitize";
import "./preview.css";
import "github-markdown-css/github-markdown.css";
import RemarkCode from "../remark-code";
import { createElement } from "react";

interface Props {
  doc: string;
}

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), "className"],
  },
};

const Preview = (props: Props) => {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    // @ts-expect-error remark-react options typing issue
    .use(remarkReact, {
      createElement,
      sanitize: schema,
      remarkReactComponents: {
        code: RemarkCode,
      },
    })
    .processSync(props.doc).result;

  // @ts-expect-error remark-react return type incompatibility
  return <div className="preview markdown-body">{md}</div>;
};

export default Preview;
