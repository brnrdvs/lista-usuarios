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
		name: "bulbasaur",
		sprites: {
			other: {
				"official-artwork": {
					front_default: "",
				},
			},
		},
	},
];

describe("List component", () => {
	it("should render correctly", () => {
		cy.mount(<List />);
		cy.get("[data-testid='list'").should("be.visible");
	});

	it("should render items correctly", () => {
		cy.mount(<List items={mockedItems}/>);
		cy.get("[data-testid='list-item-1'").should("be.visible");
		cy.get("[data-testid='list-item-2'").should("be.visible");
	});
});
