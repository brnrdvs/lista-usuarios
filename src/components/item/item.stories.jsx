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

export default {
	title: "Components/Item",
	component: Item,
	argTypes: {
		item: {
			control: "object",
			defaultValue: mockedItem,
			description: "Item exibido"
		},
		isFavorite: {
			control: "boolean",
			defaultValue: false,
			description: "Indica se o elemento está selecionado"
		},
		marcar: {
			action: "onAddItem",
			description: "Chamada quando o botão para adicionar favorito é acionado"
		}
	}
};

const Template = (args) => {
	return (
		<div>
			<Item {...args} />
		</div>
	);
};

export const Default = Template.bind({});
