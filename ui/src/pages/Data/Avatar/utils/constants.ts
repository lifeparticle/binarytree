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

export type { AvatarShapeType };

export { AVATAR_SHAPE_SEGMENTED_OPTIONS, AvatarShape };
