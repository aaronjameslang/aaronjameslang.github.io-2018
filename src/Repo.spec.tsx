import React, { ReactElement } from "react";
import TestRenderer from "react-test-renderer";
import * as Repo from "./Repo";

const render = (e: ReactElement<any>) => TestRenderer.create(e).toJSON();

describe(pithy(__filename), () => {
  test("render", () =>
    Repo.getElements().then((es) => expect(render(es[0])).toMatchSnapshot()));
  test("getElements", () =>
    expect(Repo.getElements()).resolves.toMatchSnapshot());
  test("requestAll", () =>
    expect(Repo.requestAll()).resolves.toMatchSnapshot());
});
