import Timeline from "antd/lib/timeline/Timeline";
import React, { ReactElement } from "react";
import request from "request-promise-native";
import { username } from "./config";

export interface Props {
  name: string;
  url: string;
}

export type Element = ReactElement<Props>;

export const getElements = (): Promise<Element[]> =>
  requestAll().then((rs) =>
    rs.map(({ name, url }) => <Component name={name} url={url} />),
  );

export const requestAll = (): Promise<Props[]> =>
  request({
    headers: { "User-Agent": "aaronjameslang.github.io" },
    json: true,
    url: `https://api.github.com/users/${username}/repos`,
  });

export const Component = function Repo({ name, url }: Props) {
  return (
    <Timeline.Item>
      <a href={url}>{name}</a>
    </Timeline.Item>
  );
};
