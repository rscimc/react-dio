import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app with a button, a quote and a button", () => {
  render(<App />);

  const buttonEl = screen.getByText(/Change quote/i);
  // const textEl = screen.getByRole("p");
  const imageEl = screen.getByRole("img");

  expect(buttonEl).toBeInTheDocument();
  //expect(textEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
});
