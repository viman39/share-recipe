import { Link, LinkProps } from "react-router-dom";

const LinkWrapper: React.FC<LinkProps> = (props) => (
  <Link {...props} style={{ textDecoration: "none", color: "black" }} />
);

export { LinkWrapper as Link };
