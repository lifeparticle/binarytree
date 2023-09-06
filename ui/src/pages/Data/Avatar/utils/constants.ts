enum AvatarShape {
	Circle = "circle",
	Square = "square",
	Custom = "custom",
}

const AVATAR_SHAPE_SEGMENTED_OPTIONS = [
	{ label: "Circle", value: AvatarShape.Circle },
	{ label: "Square", value: AvatarShape.Square },
	{ label: "Custom", value: AvatarShape.Custom },
];

export { AVATAR_SHAPE_SEGMENTED_OPTIONS, AvatarShape };
