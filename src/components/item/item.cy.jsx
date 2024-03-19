import Item from "./item";

const mockedItem = {
	id: 1,
	name: "bulbasaur",
	sprites: {
		other: {
			"official-artwork": {
				front_default: "",
			},
		},
	},
};

describe("Item component", () => {
	it("should render correctly", () => {
		cy.mount(<Item item={mockedItem}/>);
		cy.get("[data-testid='list-item-1'").should("be.visible");
	});
});
