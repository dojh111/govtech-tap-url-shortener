import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import { render, screen } from "@testing-library/react";

test("Header component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header title={"TEST COMPONENT"} />, div);
});

test("Header renders with correct prop passed in", () => {
  render(<Header title={"TEST COMPONENT"} />);
  const projectTitle = screen.getByText("TEST COMPONENT");
  expect(projectTitle).toBeDefined();
});
