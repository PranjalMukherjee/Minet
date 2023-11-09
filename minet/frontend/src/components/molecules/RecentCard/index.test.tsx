import { render } from "@testing-library/react";
import RecentCard from ".";
import React from "react";

test("render sold component", () => {
  const element = render(
    <RecentCard
      sold={true}
      date={"23-12-2022"}
      name={"Bitcoin"}
      symbol={"BTC"}
      quantity={"22200"}
      cost={"122.87"}
      type={"Sold"}
      status={"SUCCESS"}
    />
  );
  expect(element).toBeDefined();
});

test("render purchase component", () => {
  const element = render(
    <RecentCard
      sold={false}
      date={"23-12-2022"}
      name={"Bitcoin"}
      symbol={"BTC"}
      quantity={"22200"}
      cost={"122.87"}
      type={"BUY"}
      status={"PENDING"}
    />
  );
  expect(element).toBeDefined();
});
