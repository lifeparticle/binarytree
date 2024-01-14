import { Form } from "antd";
import { InputGrid } from "components/Layouts";
import {
	ResponsiveSelectWithLabel,
	ResponsiveInputWithLabel,
} from "components/General";
import { ALIGN_SELF, AlignSelf, ItemStyle } from "./constants";
import { FC } from "react";

type FlexboxControlsProps = {
	itemClass: string;
	setItemClass: React.Dispatch<React.SetStateAction<string>>;
	currentIndex: number | null;
	setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
	setAlignSelf: React.Dispatch<React.SetStateAction<AlignSelf>>;
	setFlexGrow: React.Dispatch<React.SetStateAction<number>>;
	setFlexShrink: React.Dispatch<React.SetStateAction<number>>;
	setFlexBasis: React.Dispatch<React.SetStateAction<string>>;
	setOrder: React.Dispatch<React.SetStateAction<number>>;
	alignSelf: AlignSelf;
	flexGrow: number;
	flexShrink: number;
	flexBasis: string;
	order: number;
	itemsStyles: ItemStyle[];
	containerItems: { label: string; value: string; index: number }[];
};

const FChildCssGenerator: FC<FlexboxControlsProps> = (props) => {
	return (
		<Form layout="vertical">
			<InputGrid>
				<ResponsiveSelectWithLabel
					label="Item Class"
					value={props.itemClass}
					defaultActiveFirstOption
					onSelect={(_, option) => {
						props.setItemClass(option.value);
						props.setCurrentIndex(
							option.index !== undefined ? option.index : 0
						);
						props.setAlignSelf(ALIGN_SELF[0].value);
						props.setFlexGrow(0);
						props.setFlexShrink(0);
						props.setFlexBasis("");
						props.setOrder(0);
					}}
					options={props.containerItems}
				/>
				<ResponsiveSelectWithLabel
					label="Align Self"
					value={props.alignSelf}
					defaultActiveFirstOption
					onSelect={(_, option) => {
						props.setAlignSelf(option.value as AlignSelf);
						if (
							props.currentIndex !== null &&
							props.currentIndex !== undefined &&
							props.itemsStyles !== undefined
						)
							props.itemsStyles[props.currentIndex] = {
								...props.itemsStyles[props.currentIndex],
								alignSelf: option.value,
							};
					}}
					options={ALIGN_SELF}
				/>
			</InputGrid>
			<InputGrid>
				<ResponsiveInputWithLabel
					label="Flex Grow"
					placeholder="flex-grow"
					value={props.flexGrow}
					min={0}
					onChange={(val) => {
						if (
							props.currentIndex !== null &&
							props.currentIndex !== undefined &&
							props.itemsStyles !== undefined &&
							val !== null
						) {
							props.setFlexGrow(val);
							props.itemsStyles[props.currentIndex] = {
								...props.itemsStyles[props.currentIndex],
								flexGrow: val,
							};
						}
					}}
					type="number"
				/>
				<ResponsiveInputWithLabel
					label="Flex Shrink"
					placeholder="flex-shrink"
					value={props.flexShrink}
					min={0}
					onChange={(val) => {
						if (
							props.currentIndex !== null &&
							props.currentIndex !== undefined &&
							props.itemsStyles !== undefined &&
							val !== null
						) {
							props.setFlexShrink(val);
							props.itemsStyles[props.currentIndex] = {
								...props.itemsStyles[props.currentIndex],
								flexShrink: val,
							};
						}
					}}
					type="number"
				/>
			</InputGrid>
			<InputGrid>
				<ResponsiveInputWithLabel
					label="Flex Basis"
					placeholder="flex-basis"
					value={props.flexBasis}
					onChange={(event) => {
						props.setFlexBasis(event.currentTarget.value);
						if (
							props.currentIndex !== null &&
							props.currentIndex !== undefined &&
							props.itemsStyles !== undefined
						)
							props.itemsStyles[props.currentIndex] = {
								...props.itemsStyles[props.currentIndex],
								flexBasis: event.currentTarget.value,
							};
					}}
					type="text"
				/>
				<ResponsiveInputWithLabel
					label="Order"
					placeholder="order"
					value={props.order}
					min={0}
					onChange={(val) => {
						if (
							props.currentIndex !== null &&
							props.currentIndex !== undefined &&
							props.itemsStyles !== undefined &&
							val !== null
						) {
							props.setOrder(val);
							props.itemsStyles[props.currentIndex] = {
								...props.itemsStyles[props.currentIndex],
								order: val,
							};
						}
					}}
					type="number"
				/>
			</InputGrid>
		</Form>
	);
};

export default FChildCssGenerator;
