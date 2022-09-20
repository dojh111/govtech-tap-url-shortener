import React from "react";
import ReactDOM from "react-dom";
import UrlForm from "../UrlForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("UrlForm component renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UrlForm />, div);
});

test("UrlForm renders correctly", () => {
  render(<UrlForm />);
  const submissionForm = screen.getByText("Shorten your links");
  expect(submissionForm).toBeDefined();
});

test("Form button renders correctly", () => {
  render(<UrlForm />);
  const submissionButton = screen.getByRole("button");
  expect(submissionButton).toBeDefined();
});

test("Error shown when no url is input into textbox", () => {
  render(<UrlForm />);
  const textBox = screen.getByRole("textbox");
  const submissionButton = screen.getByRole("button");
  userEvent.type(textBox, "");
  userEvent.click(submissionButton);
  const errorMessage = screen.getByText("Please enter a link!");
  expect(errorMessage).toBeDefined();
});

test("Invalid link error is shown for invalid link", () => {
  render(<UrlForm />);
  const textBox = screen.getByRole("textbox");
  const submissionButton = screen.getByRole("button");
  userEvent.type(textBox, "invalidLink");
  userEvent.click(submissionButton);
  const errorMessage = screen.getByText(
    "Invalid link. Please enter a valid URL"
  );
  expect(errorMessage).toBeDefined();
});
