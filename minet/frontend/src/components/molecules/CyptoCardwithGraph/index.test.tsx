import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/react";
import CyptoCardGraph from ".";
import React from "react";
import { CyptoProps } from "../../../interface";
import BitcoinImage from "../../../../public/images/bitcoinicon.svg";

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));

describe("CyptoCardGraph", () => {
  test("renders the component with correct data", async () => {
    const props: CyptoProps = {
      profitOrLossPercentage: 1.4,
      name: "Bitcion",
      valuePerOneCoin: 300439.93,
      icon:BitcoinImage
    };
    render(<CyptoCardGraph {...props} />);
    const bitcoinLabel = "Bitcion"; // Note the updated label to match the component
    await waitFor(() => {
      expect(screen.getByText(bitcoinLabel)).toBeInTheDocument();
    });
    const valueLabel = "$300,439.93"; // Update this label as well
    expect(screen.getByText(valueLabel)).toBeInTheDocument();
    const timeGap = "24h";
    expect(screen.getByText(timeGap)).toBeInTheDocument();
  });
  test("renders the component with correct data", async () => {
    const props: CyptoProps = {
      profitOrLossPercentage: -1,
      name: "Bitcion",
      valuePerOneCoin: 300439.93,
      icon:BitcoinImage
    };
    render(<CyptoCardGraph {...props} />);
    const bitcoinLabel = "Bitcion"; // Note the updated label to match the component
    await waitFor(() => {
      expect(screen.getByText(bitcoinLabel)).toBeInTheDocument();
    });
  });
});
