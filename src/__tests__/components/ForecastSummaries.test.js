import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 11100011,
      description: "Stub description 1",
      icon: "stubIcon1",
      temperature: {
        min: 12,
        max: 22,
      },
    },
    {
      date: 22200011,
      description: "Stub description 2",
      icon: "stubIcon2",
      temperature: {
        min: 15,
        max: 27,
      },
    },
  ]; 

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
        <ForecastSummaries forecasts={validProps} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  })
})