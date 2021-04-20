import React from "react";
import { randomDate, monthEnLower } from "@site/src/scripts/utils";
import { digestLatestDate2021 as date } from "@site/src/scripts/dateVariables";
import Link from "@docusaurus/Link";
import clsx from "clsx";

interface IDigestLinkButton {
  linkType: "latest" | "random";
  isButtonOutline: boolean;
  buttonText: string;
}

export const DigestLinkButton = ({ linkType, isButtonOutline, buttonText }: IDigestLinkButton) => {
  const btnClassName: string = clsx(
    "button button--primary button--lg margin--sm",
    isButtonOutline && "button--outline"
  );

  if (linkType == "latest") {
    return (
      <Link className={btnClassName} to={`/digest/2021/${monthEnLower(date.m)}/${date.d}`}>
        {buttonText}
      </Link>
    );
  }

  if (linkType == "random") {
    const randDate = randomDate(2020, 3, 1, 2021, date.m, date.d);
    return (
      <Link className={btnClassName} to={`/digest/${randDate.y}/${monthEnLower(randDate.m)}/${randDate.d}`}>
        {buttonText}
      </Link>
    );
  }
};
