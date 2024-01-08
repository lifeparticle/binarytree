import { FC, useState } from "react";
import { Card, Form, Space } from "antd";
import { PageGrid, InputGrid } from "components/Layouts";
import {
	CodeHighlightWithCopy,
	ResponsiveSelectWithLabel,
	ResponsiveButton,
} from "components/General";
import {
	JUSTIFY_CONTENT,
	FLEX_DIRECTION,
	ALIGN_ITEM,
	ALIGN_CONTENT,
	FLEX_WRAP,
	JustifyContent,
	FlexDirection,
	AlignContent,
	FlexWrap,
	AlignItems,
} from "./constants";
import style from "./FlexboxGenerator.module.scss";

type ContainerStyle = {
	width: string;
	height: string;
	backgroundColor: string;
	borderRadius: string;
	display: string;
	justifyContent: JustifyContent;
	flexDirection: FlexDirection;
	alignItems: AlignItems;
	alignContent: AlignContent;
	flexWrap: FlexWrap;
};

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
	const [itemCount, setItemCount] = useState(3);

	const containerItems = Array.from(
		{ length: itemCount },
		(_, index) => index
	);

	const containerStyle: ContainerStyle = {
		width: "70dvh",
		height: "50dvh",
		backgroundColor: boxColor,
		borderRadius: ".8rem",
		display: "flex",
		justifyContent: `${justifyContent}`,
		flexDirection: `${flexDirection}`,
		alignItems: `${alignItem}`,
		alignContent: `${alignContent}`,
		flexWrap: `${flexWrap}`,
	};

	const itemStyle = {
		width: "5rem",
		height: "5rem",
		background: "whitesmoke",
		color: "black",
		margin: "10px",
		padding: "10px",
		borderRadius: ".5rem",
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

	const addItem = () => {
		setItemCount(itemCount + 1);
	};
	const removeItem = () => {
		setItemCount(itemCount - 1);
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
				</Card>

				<Card
					className={style.fg__output}
					style={{ background: bgColor }}
				>
					<Space direction="vertical">
						<div style={containerStyle}>
							{containerItems.map((index) => (
								<div key={index} style={itemStyle}>
									Item {index + 1}
								</div>
							))}
						</div>
					</Space>
				</Card>
			</PageGrid>
			<Card>
				<CodeHighlightWithCopy
					codeString={generateCSSCodeString()}
					language="css"
				/>
			</Card>
		</div>
	);
};

export default FlexboxGenerator;
