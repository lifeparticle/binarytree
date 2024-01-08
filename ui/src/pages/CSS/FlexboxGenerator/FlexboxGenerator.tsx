import { FC, useEffect, useMemo, useState } from "react";
import { Card, Form, Space } from "antd";
import { PageGrid, InputGrid } from "components/Layouts";
import {
	CodeHighlightWithCopy,
	ResponsiveSelectWithLabel,
	ResponsiveButton,
	ResponsiveInputWithLabel
} from "components/General";
import {
	ALIGN_CONTENT,
	ALIGN_ITEM,
	ALIGN_SELF,
	AlignContent,
	AlignItems,
	AlignSelf,
	FLEX_DIRECTION,
	FLEX_WRAP,
	FlexDirection,
	FlexWrap,
	JUSTIFY_CONTENT,
	JustifyContent,
	ItemStyleIntialvalue,
	ItemStyle,
	ContainerStyle,
} from "./constants";
import style from "./FlexboxGenerator.module.scss";

const FlexboxGenerator: FC = () => {
	const bgColor = "#ffffff0";
	const boxColor = "#4f5456";
	const [justifyContent, setJustifyContent] = useState<JustifyContent>(
		JUSTIFY_CONTENT[0].value
	);
	const [flexDirection, setFlexDirection] = useState<FlexDirection>(
		FLEX_DIRECTION[0].value
	);
	const [alignItem, setAlignItem] = useState<AlignItems>(ALIGN_ITEM[0].value);
	const [alignContent, setAlignContent] = useState<AlignContent>(
		ALIGN_CONTENT[0].value
	);
	const [flexWrap, setFlexWrap] = useState<FlexWrap>(FLEX_WRAP[0].value);
	const [alignSelf, setAlignSelf] = useState<AlignSelf>(ALIGN_SELF[0].value);
	const [itemCount, setItemCount] = useState(3);

	const containerItems = Array.from(
		{ length: itemCount },
		(_, index) => index
	);
	const containerItemsClass = Array.from(
		{ length: itemCount },
		(_, index) => ({
			label: 'item' + (index + 1),
			value: 'item' + (index + 1),
			index: index
		})
	);
	const [itemClass, setItemClass] = useState(containerItemsClass[0].value);
	const [currentIndex, setCurrentIndex] = useState(0);

	const [flexGrow, setFlexGrow] = useState(0);
	const [flexShrink, setFlexShrink] = useState(0);
	const [flexBasis, setFlexBasis] = useState("auto");
	const [order, setOrder] = useState(0);


	const containerStyle: ContainerStyle = {
		width: "25rem",
		height: "35rem",
		overflow: "auto",
		backgroundColor: boxColor,
		borderRadius: ".8rem",
		display: "flex",
		justifyContent: `${justifyContent}`,
		flexDirection: `${flexDirection}`,
		alignItems: `${alignItem}`,
		alignContent: `${alignContent}`,
		flexWrap: `${flexWrap}`,
	};

	const generateCSSCodeString = () => {
		const displayFlexCode = `display: flex`;
		const justifyContentCode = `justify-content: ${justifyContent};`;
		const flexDirectionCode = `flex-direction: ${flexDirection};`;
		const alignItemCode = `align-item: ${alignItem};`;
		const alignContentnCode = `align-content: ${alignContent};`;
		const flexWrapCode = `flex-wrap: ${flexWrap};`;

		return `${displayFlexCode}\n${justifyContentCode}\n${flexDirectionCode}\n${alignItemCode}\n${alignContentnCode}\n${flexWrapCode}`;
	};


	const [itemsStyles, setItemsStyles] = useState<ItemStyle[]>();

	useEffect(() => {
		const initialItemsStyles = Array.from({ length: itemCount }, (_, index) => ({
			...ItemStyleIntialvalue,
			index,
		}));
		setItemsStyles(initialItemsStyles);
	}, []);


	const generateCSSStringFromItemsStyles = (styles: ItemStyle[]) => {
		return styles?.map((itemStyle: ItemStyle) => {
			const cssCode = `
	item${itemStyle.index + 1} {
	order: ${itemStyle.order};
	flex-grow: ${itemStyle.flexGrow};
	flex-shrink: ${itemStyle.flexShrink};
	flex-basis: ${itemStyle.flexBasis};
	align-self: ${itemStyle.alignSelf};
}`;
			return cssCode.trim();
		}).join('\n');
	};


	const addItem = () => {
		setItemCount(itemCount + 1);
		setItemsStyles((prevItems) => [...prevItems, { ...ItemStyleIntialvalue, index: itemCount }]);
		console.log(itemsStyles);
	};
	const removeItem = () => {
		setItemCount(itemCount - 1);
		setItemsStyles((prevItems) => prevItems?.slice(0, -1));
	};

	return (
		<div className={style.fg}>
			<PageGrid>
				<Card className={style.fg__input}>
					Container
					<Card>
						<Space>
							<ResponsiveButton onClick={() => addItem()}>
								Add Item
							</ResponsiveButton>

							<ResponsiveButton onClick={() => removeItem()}>
								Remove Item
							</ResponsiveButton>
						</Space>
						<Form layout="vertical">
							<br />
							<InputGrid>
								<ResponsiveSelectWithLabel
									label="Justify Content"
									value={justifyContent}
									defaultActiveFirstOption
									onSelect={(_, option) =>
										setJustifyContent(
											option.value as JustifyContent
										)
									}
									options={JUSTIFY_CONTENT}
								/>
								<ResponsiveSelectWithLabel
									label="Flex Direction"
									value={flexDirection}
									defaultActiveFirstOption
									onSelect={(_, option) =>
										setFlexDirection(
											option.value as FlexDirection
										)
									}
									options={FLEX_DIRECTION}
								/>
							</InputGrid>
							<InputGrid>
								<ResponsiveSelectWithLabel
									label="Align Item"
									value={alignItem}
									defaultActiveFirstOption
									onSelect={(_, option) =>
										setAlignItem(option.value as AlignItems)
									}
									options={ALIGN_ITEM}
								/>
								<ResponsiveSelectWithLabel
									label="Align Content"
									value={alignContent}
									defaultActiveFirstOption
									onSelect={(_, option) =>
										setAlignContent(
											option.value as AlignContent
										)
									}
									options={ALIGN_CONTENT}
								/>
							</InputGrid>
							<InputGrid>
								<ResponsiveSelectWithLabel
									label="Flex Wrap"
									value={flexWrap}
									defaultActiveFirstOption
									onSelect={(_, option) =>
										setFlexWrap(option.value as FlexWrap)
									}
									options={FLEX_WRAP}
								/>
							</InputGrid>
						</Form>
					</Card>
					<br />
					Items
					<Card>
						<Form layout="vertical">
							<InputGrid>
								<ResponsiveSelectWithLabel
									label="Item Class"
									value={itemClass}
									defaultActiveFirstOption
									onSelect={(_, option) => {
										setItemClass(option.value);
										setCurrentIndex(option.index);
										setAlignSelf(ALIGN_SELF[0].value);
										setFlexGrow(0);
										setFlexShrink(0);
										setFlexBasis("");
										setOrder(0);
									}
									}
									options={containerItemsClass}
								/>
								<ResponsiveSelectWithLabel
									label="Align Self"
									value={alignSelf}
									defaultActiveFirstOption
									onSelect={(_, option) => {
										setAlignSelf(option.value as AlignSelf);
										itemsStyles[currentIndex] = { ...itemsStyles[currentIndex], alignSelf: option.value };
									}
									}
									options={ALIGN_SELF}
								/>
							</InputGrid>
							<InputGrid>
								<ResponsiveInputWithLabel
									label="Flex Grow"
									placeholder="flex-grow"
									value={flexGrow}
									min={0}
									onChange={(val) => {
										val && setFlexGrow(val);
										itemsStyles[currentIndex] = { ...itemsStyles[currentIndex], flexGrow: val };
									}
									}
									type="number"
								/>
								<ResponsiveInputWithLabel
									label="Flex Shrink"
									placeholder="flex-shrink"
									value={flexShrink}
									min={0}
									onChange={(val) => {
										val && setFlexShrink(val)
										itemsStyles[currentIndex] = { ...itemsStyles[currentIndex], flexShrink: val };
									}}
									type="number"
								/>
							</InputGrid>
							<InputGrid>
								<ResponsiveInputWithLabel
									label="Flex Basis"
									placeholder="flex-basis"
									value={flexBasis}
									onChange={(event) => {
										setFlexBasis(event.currentTarget.value)
										itemsStyles[currentIndex] = { ...itemsStyles[currentIndex], flexBasis: event.currentTarget.value };
									}}
									type="text"
								/>
								<ResponsiveInputWithLabel
									label="Order"
									placeholder="order"
									value={order}
									min={0}
									onChange={(val) => {
										val && setOrder(val);
										itemsStyles[currentIndex] = { ...itemsStyles[currentIndex], order: val };
									}}
									type="number"
								/>
							</InputGrid>
						</Form>
					</Card>
				</Card>

				<Card
					className={style.fg__output}
					style={{ background: bgColor }}
				>
					<Space direction="vertical">
						<div style={containerStyle} id="itemsContainer">
							{itemsStyles ? (
								containerItems.map((index) => (
									<div key={index} className={'item' + index} style={itemsStyles[index]}>
										Item {index + 1}
									</div>
								))
							) : (
								<p>Loading...</p>
							)}
						</div>
					</Space>
				</Card>
			</PageGrid>
			<Card >
				<div className={style.fg__snippet}>
					<div className={style.fg__snippet__item}>
						<CodeHighlightWithCopy
							codeString={generateCSSCodeString()}
							language="css"
						/>
					</div>
					<div className={style.fg__snippet__item}>
						<CodeHighlightWithCopy
							codeString={generateCSSStringFromItemsStyles(itemsStyles)}
							language="css"
						/>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default FlexboxGenerator;
