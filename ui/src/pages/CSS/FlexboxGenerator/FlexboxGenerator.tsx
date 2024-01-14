import { FC, useState } from "react";
import { Card, Space } from "antd";
import { PageGrid } from "components/Layouts";
import { CodeHighlightWithCopy, ResponsiveButton } from "components/General";
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
	bgColor,
	boxColor,
} from "./constants";
import style from "./FlexboxGenerator.module.scss";
import FChildCssGenerator from "./FChildCssGenerator";
import FParentCssGenerator from "./FParentCssGenerator";

const FlexboxGenerator: FC = () => {
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

	const containerItems = Array.from({ length: itemCount }, (_, index) => ({
		label: "item" + (index + 1),
		value: "item" + (index + 1),
		index: index,
	}));
	const [itemClass, setItemClass] = useState(containerItems[0].value);
	const [currentIndex, setCurrentIndex] = useState<number | null>(0);
	const [flexGrow, setFlexGrow] = useState(0);
	const [flexShrink, setFlexShrink] = useState(0);
	const [flexBasis, setFlexBasis] = useState("auto");
	const [order, setOrder] = useState(0);
	const [itemsStyles, setItemsStyles] = useState<ItemStyle[]>(
		Array.from({ length: itemCount }, (_, index) => ({
			...ItemStyleIntialvalue,
			index,
		}))
	);

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

	const generateCSSStringFromItemsStyles = (styles: ItemStyle[]) => {
		return styles
			?.map((itemStyle: ItemStyle) => {
				const cssCode = `
	item${itemStyle.index + 1} {
	order: ${itemStyle.order};
	flex-grow: ${itemStyle.flexGrow};
	flex-shrink: ${itemStyle.flexShrink};
	flex-basis: ${itemStyle.flexBasis};
	align-self: ${itemStyle.alignSelf};
}`;
				return cssCode.trim();
			})
			.join("\n");
	};

	const addItem = () => {
		setItemCount(itemCount + 1);
		setItemsStyles((prevItems) => [
			...(prevItems ?? []),
			{ ...ItemStyleIntialvalue, index: itemCount },
		]);
	};

	const removeItem = () => {
		if (itemCount > 1) {
			setItemCount(itemCount - 1);
			setItemsStyles((prevItems) => prevItems?.slice(0, -1));
		}
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
						<FParentCssGenerator
							justifyContent={justifyContent}
							setJustifyContent={setJustifyContent}
							flexDirection={flexDirection}
							setFlexDirection={setFlexDirection}
							alignItem={alignItem}
							setAlignItem={setAlignItem}
							alignContent={alignContent}
							setAlignContent={setAlignContent}
							flexWrap={flexWrap}
							setFlexWrap={setFlexWrap}
						/>
					</Card>
					<br />
					Items
					<Card>
						<FChildCssGenerator
							itemClass={itemClass}
							setItemClass={setItemClass}
							currentIndex={currentIndex}
							setCurrentIndex={setCurrentIndex}
							setAlignSelf={setAlignSelf}
							setFlexGrow={setFlexGrow}
							setFlexShrink={setFlexShrink}
							setFlexBasis={setFlexBasis}
							setOrder={setOrder}
							alignSelf={alignSelf}
							flexGrow={flexGrow}
							flexShrink={flexShrink}
							flexBasis={flexBasis}
							order={order}
							itemsStyles={
								itemsStyles !== undefined ? itemsStyles : []
							}
							containerItems={containerItems}
						/>
					</Card>
				</Card>

				<Card
					className={style.fg__output}
					style={{ background: bgColor }}
				>
					<Space direction="vertical">
						<div style={containerStyle} id="itemsContainer">
							{itemsStyles ? (
								containerItems.map((item) => (
									<div
										key={item.index}
										className={"item" + item.index}
										style={itemsStyles[item.index]}
									>
										Item {item.index + 1}
									</div>
								))
							) : (
								<p>Loading...</p>
							)}
						</div>
					</Space>
				</Card>
			</PageGrid>
			<Card>
				<div className={style.fg__snippet}>
					<div className={style.fg__snippet__item}>
						<CodeHighlightWithCopy
							codeString={generateCSSCodeString()}
							language="css"
						/>
					</div>
					<div className={style.fg__snippet__item}>
						<CodeHighlightWithCopy
							codeString={
								itemsStyles
									? generateCSSStringFromItemsStyles(
											itemsStyles
									  )
									: ""
							}
							language="css"
						/>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default FlexboxGenerator;
