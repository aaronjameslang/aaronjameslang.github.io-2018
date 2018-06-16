import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
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
    return (
      <div>
        <CssBaseline />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              🚧 Under Construction 🚧
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state ? this.state.items : []}
      </div>
    );
  }
}
