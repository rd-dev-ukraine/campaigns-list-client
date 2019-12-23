import * as React from "react";
import "./LinkButton.scss";
import { LinkProps, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

type Props = LinkProps;

export const LinkButton = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <Link {...rest} className="link-button-link">
      <Button variant="contained" color="primary" href="#contained-buttons">
        <span className="link-button-text">{children}</span>
      </Button>
    </Link>
  );
};
