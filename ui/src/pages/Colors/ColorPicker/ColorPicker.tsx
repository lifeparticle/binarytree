import { FC, useEffect, useMemo, useState } from "react";
import style from "./ColorPicker.module.scss";
import { Form } from "antd";
import { INITIAL_COLOR, INITIAL_FORMAT, FORMAT_LABELS } from "./constants";
import DisplayColors from "./components/DisplayColors";
import { calculateColors } from "./helper";
import { useDebounce, useParamsValue } from "hooks";
import { PARAMS } from "data/paramsData";
import ColorInputs from "./components/ColorInputs";

type FormatType = Lowercase<(typeof FORMAT_LABELS)[number]>;

const ColorPicker: FC = () => {
	const { searchParams, updateParamsValue } = useParamsValue({
		[PARAMS.color]: INITIAL_COLOR,
		[PARAMS.format]: INITIAL_FORMAT,
	});

	const [colorPickerRan, setColorPickerRan] = useState(false);
	const [formatState, setFormatState] = useState(
		searchParams.get(PARAMS.color) ?? ""
	);
	const color = String(searchParams.get(PARAMS.color));
	const format = String(searchParams.get(PARAMS.format)) as FormatType;
	const colors = useMemo(() => calculateColors(color), [color]);
	const debouncedSearchTerm = useDebounce(formatState);

	useEffect(() => {
		if (debouncedSearchTerm && !colorPickerRan) {
			updateParamsValue(PARAMS.color, debouncedSearchTerm);
		}
	}, [debouncedSearchTerm, updateParamsValue, colorPickerRan]);

	return (
		<Form layout="vertical">
			<div className={style.cp}>
				<ColorInputs
					color={color}
					format={format}
					setColorPickerRan={setColorPickerRan}
					setFormatState={setFormatState}
					updateParamsValue={updateParamsValue}
				/>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="colors"
					title="Colors"
				/>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="variables"
					title="CSS variables"
				/>
				<DisplayColors
					colors={colors}
					format={format}
					displayType="use-variables"
					title="Use CSS variables"
				/>
			</div>
		</Form>
	);
};

export default ColorPicker;
