import { render, screen } from "@testing-library/react";
import List from "./list";

const mockedItems = [
	{
		id: 1,
		name: "bulbasaur",
		sprites: {
			other: {
				"official-artwork": {
					front_default: "",
				},
			},
		},
	},
	{
		id: 2,
		name: "ivysaur",
		sprites: {
			other: {
				"official-artwork": {
					front_default: "",
				},
			},
		},
	}
];

describe("List component", () => {
	it("should render correctly", () => {
		render(<List items={mockedItems}/>);

		expect(screen.getByTestId("list")).toBeInTheDocument;
		expect(screen.getByTestId("list-item-1")).toBeInTheDocument;
		expect(screen.getByTestId("list-item-2")).toBeInTheDocument;
	});
});
