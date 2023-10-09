const AvatarShape = {
	Circle: "circle",
	Square: "square",
	Custom: "custom",
};

type AvatarShapeType = (typeof AvatarShape)[keyof typeof AvatarShape];

const AVATAR_SHAPE_SEGMENTED_OPTIONS = [
	{ label: "Circle", value: AvatarShape.Circle },
	{ label: "Square", value: AvatarShape.Square },
	{ label: "Custom", value: AvatarShape.Custom },
];

const FONTS = [
	{ value: "Open Sans", label: "Open Sans" },
	{ value: "Roboto", label: "Roboto" },
	{ value: "Lato", label: "Lato" },
	{ value: "Source Sans Pro", label: "Source Sans Pro" },
	{ value: "Nunito Sans", label: "Nunito Sans" },
	{ value: "Poppins", label: "Poppins" },
	{ value: "Montserrat", label: "Montserrat" },
	{ value: "Raleway", label: "Raleway" },
	{ value: "Oswald", label: "Oswald" },
	{ value: "Merriweather", label: "Merriweather" },
	{ value: "Playfair Display", label: "Playfair Display" },
	{ value: "Dancing Script", label: "Dancing Script" },
	{ value: "Cormorant Garamond", label: "Cormorant Garamond" },
	{ value: "Fira Sans", label: "Fira Sans" },
	{ value: "Karla", label: "Karla" },
	{ value: "Ubuntu", label: "Ubuntu" },
	{ value: "Inconsolata", label: "Inconsolata" },
	{ value: "PT Sans", label: "PT Sans" },
	{ value: "Quicksand", label: "Quicksand" },
];

export type { AvatarShapeType };

export { AVATAR_SHAPE_SEGMENTED_OPTIONS, AvatarShape, FONTS };
