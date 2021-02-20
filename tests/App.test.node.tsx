// jest.useFakeTimers();
import React from "react";
import { render } from "react-native-testing-library";
import TESTANDO from "../App";

describe("<App />", () => {
  it("2+2 should be 4", () => {
    expect(2 + 2).toBe(4);
  });
  it("Shold match snapshot", () => {
    const result = render(<TESTANDO />).toJSON();
    expect(result).toBeTruthy();
  });
});
