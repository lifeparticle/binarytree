import { Form } from "antd";
import { InputGrid } from "components/Layouts";
import {
	ResponsiveSelectWithLabel
} from "components/General";
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
const FParentCssGenerator = ({
    justifyContent,
    setJustifyContent,
    flexDirection,
    setFlexDirection,
    alignItem,
    setAlignItem,
    alignContent,
    setAlignContent,
    flexWrap,
    setFlexWrap,
  }:FlexboxContainerControlsProps) => {
    return (
      <Form layout="vertical">
        <br />
        <InputGrid>
          <ResponsiveSelectWithLabel
            label="Justify Content"
            value={justifyContent}
            defaultActiveFirstOption
            onSelect={(_, option) => setJustifyContent(option.value as JustifyContent)}
            options={JUSTIFY_CONTENT}
          />
          <ResponsiveSelectWithLabel
            label="Flex Direction"
            value={flexDirection}
            defaultActiveFirstOption
            onSelect={(_, option) => setFlexDirection(option.value as FlexDirection)}
            options={FLEX_DIRECTION}
          />
        </InputGrid>
        <InputGrid>
          <ResponsiveSelectWithLabel
            label="Align Item"
            value={alignItem}
            defaultActiveFirstOption
            onSelect={(_, option) => setAlignItem(option.value as AlignItems)}
            options={ALIGN_ITEM}
          />
          <ResponsiveSelectWithLabel
            label="Align Content"
            value={alignContent}
            defaultActiveFirstOption
            onSelect={(_, option) => setAlignContent(option.value as AlignContent)}
            options={ALIGN_CONTENT}
          />
        </InputGrid>
        <InputGrid>
          <ResponsiveSelectWithLabel
            label="Flex Wrap"
            value={flexWrap}
            defaultActiveFirstOption
            onSelect={(_, option) => setFlexWrap(option.value as FlexWrap)}
            options={FLEX_WRAP}
          />
        </InputGrid>
      </Form>
    );
  };

export default FParentCssGenerator