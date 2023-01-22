import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails"

describe("ForecastDetails", () => {

  const validProps = {
   forecast: {
    date: 1111111,
    humidity: 20,
    temperature: {
      min: 10,
      max: 19,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
   },
  };

  it("render correctly", () => {
    const { asFragment } = render(
      <ForecastDetails forecast={validProps.forecast} />
    );

    expect(asFragment()).toMatchSnapshot();
  })
})