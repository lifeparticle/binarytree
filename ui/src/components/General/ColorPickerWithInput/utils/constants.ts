interface ColorPickerWithInputProps {
	value: string;
	setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	setColor: (color: string) => void;
}

export type { ColorPickerWithInputProps };
