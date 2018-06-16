import Timeline from "antd/lib/Timeline";
import "antd/lib/Timeline/style/css";
import React, { ReactElement } from "react";
import * as Repo from "./Repo";

type Props = never;
interface State {
  items: Repo.Element[];
}

export default class App extends React.Component<Props, State> {
  public componentDidMount() {
    Repo.getElements().then((items: Repo.Element[]) =>
      this.setState({ items }),
    );
  }
  public render() {
    return <Timeline children={this.state ? this.state.items : []} />;
  }
}
