import Heart from "./Heart";

export default {
	title: "Components/Heart",
	component: Heart,
	argTypes: {
		onClick: {
			action: "clicked",
			description: "Chamada quando o elemento é clicado"
		},
		selected: {
			control: "boolean",
			defaultValue: false,
			description: "Seleciona o item"
		},
		testid: {
			control: "text",
			defaultValue: "heart",
			description: "Id de teste do item"
		}
	}
};

const Template = (args) => {
	return (
		<div>
			<Heart {...args} />
		</div>
	);
};

export const Default = Template.bind({});
