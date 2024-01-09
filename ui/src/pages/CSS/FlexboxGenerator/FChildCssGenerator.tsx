import {  Form } from "antd";
import { InputGrid } from "components/Layouts";
import {
    ResponsiveSelectWithLabel,
    ResponsiveInputWithLabel
} from "components/General";
import {
    ALIGN_SELF,
    AlignSelf,
    ItemStyle,
} from "./constants";

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
    containerItemsClass: {label:string,value:string, index:number}[]; 
  };

const FChildCssGenerator = ({
    itemClass,
    setItemClass,
    currentIndex,
    setCurrentIndex,
    setAlignSelf,
    setFlexGrow,
    setFlexShrink,
    setFlexBasis,
    setOrder,
    alignSelf,
    flexGrow,
    flexShrink,
    flexBasis,
    order,
    itemsStyles,
    containerItemsClass,
}:FlexboxControlsProps) => {
    return (
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
                        if (currentIndex !== null && currentIndex !== undefined && itemsStyles !== undefined)
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
                        if (currentIndex !== null && currentIndex !== undefined && itemsStyles !== undefined && val !== null) {
                            setFlexGrow(val);
                            itemsStyles[currentIndex] = { ...itemsStyles[currentIndex], flexGrow: val };
                        }
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
                        if (currentIndex !== null && currentIndex !== undefined && itemsStyles !== undefined && val !== null) {
                            setFlexShrink(val);
                            itemsStyles[currentIndex] = { ...itemsStyles[currentIndex], flexShrink: val };
                        }
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
                        if (currentIndex !== null && currentIndex !== undefined && itemsStyles !== undefined)
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
                        if (currentIndex !== null && currentIndex !== undefined && itemsStyles !== undefined && val !== null) {
                            setOrder(val);
                            itemsStyles[currentIndex] = { ...itemsStyles[currentIndex], order: val };
                        }
                    }}
                    type="number"
                />
            </InputGrid>
        </Form>
    )
}

export default FChildCssGenerator