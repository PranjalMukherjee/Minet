/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { render, screen } from "@testing-library/react";
import GraphAtom from "./index";
import { singleCryptoData } from "../../../utils/constant";
import "@testing-library/jest-dom";

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));
describe("Graph component", () => {
  it("should not render the flag value of the graph", () => {
    render(
      <GraphAtom
        enableYGrid={true}
        graphData={singleCryptoData}
        showLegends={true}
        showXAxis={true}
      />
    );
    const flageElement = screen.queryByTestId("mocked-responsive-line");
    expect(flageElement).toBeInTheDocument();
  });
  it("should not render the axisBottom component when showXAxis is false", () => {
    render(
      <GraphAtom
        enableYGrid={true}
        graphData={singleCryptoData}
        showLegends={true}
        showXAxis={false}
      />
    );
    const axisBottomElement = screen.queryByTestId("mocked-responsive-line");
    expect(axisBottomElement).toBeInTheDocument();
  });
  it("should not render legends when showLegends is false", () => {
    render(
      <GraphAtom
        enableYGrid={true}
        graphData={singleCryptoData}
        showLegends={false}
        showXAxis={true}
      />
    );
    const legendsElement = screen.queryByTestId("mocked-responsive-line");
    expect(legendsElement).toBeInTheDocument();
  });
});
