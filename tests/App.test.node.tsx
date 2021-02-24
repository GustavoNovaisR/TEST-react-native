// jest.useFakeTimers();
import React from "react";
import { render } from "react-native-testing-library";
import App from "../App";

describe("<App />", () => {
  it("2+2 deve ser 4", () => {
    expect(2 + 2).toBe(4);
  });
  it("deve reenderizar o componente", () => {
    const result = render(<App />).toJSON();
    expect(result).toBeTruthy();
  });
});


