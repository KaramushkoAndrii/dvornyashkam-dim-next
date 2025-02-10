"use client";

import { Link } from "@/i18n/routing";

import "./button.scss";

const Button = ({ text, href, onClick, disabled }) => {
  return (
    <>
      {href && (
        // TO DO: Replace all <Link href={path}><Button>Text</Button></Link> in project with <Button href={path}>Text</Button>
        <Link href={href} className="mainButton">
          {text}
        </Link>
      )}

      {!href && (
        <button className="mainButton" onClick={onClick} disabled={disabled}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
