import { Form } from "antd";
import { FC } from "react";
import { InputGrid } from "components/Layouts";
import { ResponsiveSelectWithLabel } from "components/General";
import {
	ALIGN_CONTENT,
	ALIGN_ITEM,
	AlignContent,
	AlignItems,
	FLEX_DIRECTION,
	FLEX_WRAP,
	FlexDirection,
	FlexWrap,
	JUSTIFY_CONTENT,
	JustifyContent,
} from "./constants";
type FlexboxContainerControlsProps = {
	justifyContent: JustifyContent;
	setJustifyContent: React.Dispatch<React.SetStateAction<JustifyContent>>;
	flexDirection: FlexDirection;
	setFlexDirection: React.Dispatch<React.SetStateAction<FlexDirection>>;
	alignItem: AlignItems;
	setAlignItem: React.Dispatch<React.SetStateAction<AlignItems>>;
	alignContent: AlignContent;
	setAlignContent: React.Dispatch<React.SetStateAction<AlignContent>>;
	flexWrap: FlexWrap;
	setFlexWrap: React.Dispatch<React.SetStateAction<FlexWrap>>;
};
const FParentCssGenerator: FC<FlexboxContainerControlsProps> = (props) => {
	return (
		<Form layout="vertical">
			<br />
			<InputGrid>
				<ResponsiveSelectWithLabel
					label="Justify Content"
					value={props.justifyContent}
					defaultActiveFirstOption
					onSelect={(_, option) =>
						props.setJustifyContent(option.value as JustifyContent)
					}
					options={JUSTIFY_CONTENT}
				/>
				<ResponsiveSelectWithLabel
					label="Flex Direction"
					value={props.flexDirection}
					defaultActiveFirstOption
					onSelect={(_, option) =>
						props.setFlexDirection(option.value as FlexDirection)
					}
					options={FLEX_DIRECTION}
				/>
			</InputGrid>
			<InputGrid>
				<ResponsiveSelectWithLabel
					label="Align Item"
					value={props.alignItem}
					defaultActiveFirstOption
					onSelect={(_, option) =>
						props.setAlignItem(option.value as AlignItems)
					}
					options={ALIGN_ITEM}
				/>
				<ResponsiveSelectWithLabel
					label="Align Content"
					value={props.alignContent}
					defaultActiveFirstOption
					onSelect={(_, option) =>
						props.setAlignContent(option.value as AlignContent)
					}
					options={ALIGN_CONTENT}
				/>
			</InputGrid>
			<InputGrid>
				<ResponsiveSelectWithLabel
					label="Flex Wrap"
					value={props.flexWrap}
					defaultActiveFirstOption
					onSelect={(_, option) =>
						props.setFlexWrap(option.value as FlexWrap)
					}
					options={FLEX_WRAP}
				/>
			</InputGrid>
		</Form>
	);
};

export default FParentCssGenerator;
