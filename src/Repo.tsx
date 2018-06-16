import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { ReactElement } from "react";
import request from "request-promise-native";
import { username } from "./config";

export interface Props {
  name: string;
  url: string;
}

export type Element = ReactElement<Props>;

export const getElements = (): Promise<Element[]> =>
  requestAll().then((rs: Props[]) =>
    rs.map(({ name, url }) => <Component name={name} url={url} />),
  );

export const requestAll = () =>
  request({
    headers: { "User-Agent": "aaronjameslang.github.io" },
    json: true,
    url: `https://api.github.com/users/${username}/repos`,
  });

export const Component = function Repo({ name, url }: Props) {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <a href={url}>{name}</a>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>Summary</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
