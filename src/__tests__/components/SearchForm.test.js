import React, { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "Manchester",
    setSearchText: jest.fn(),
    onSubmit: jest.fn(),
  };

    it("renders correctly", () => {
        const { asFragment } = render(
          <SearchForm 
             searchText={validProps.searchText} 
             setSearchText={validProps.setSearchText}
             onSubmit={validProps.onSubmit}
          />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("button displays the correct text", () => {
        render(
          <SearchForm 
            searchText={validProps.searchText} 
            setSearchText={validProps.setSearchText}
            onSubmit={validProps.onSubmit}
          />
        );
        const button = screen.getAllByRole("button");

        expect(button[0]).toHaveClass("search__button")
        expect(button).toHaveLength(1);
    });

    it("calls correct function by clicking button", () => {
        render(
            <SearchForm 
              searchText={validProps.searchText} 
              setSearchText={validProps.setSearchText}
              onSubmit={validProps.onSubmit}
            />
          );
        fireEvent.click(screen.getByRole("button"));
        expect(validProps.onSubmit).toHaveBeenCalled();
    });
})