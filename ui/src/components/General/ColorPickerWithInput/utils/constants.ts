interface ColorPickerWithInputProps {
	value: string;
	label: string;
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	setColor: (color: string) => void;
}

export type { ColorPickerWithInputProps };
