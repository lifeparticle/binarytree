import { useState, useEffect, useTransition, FC } from "react";
import styles from "./ShadesAndTints.module.scss";
import { useCombinedKeyPress, useDebounce, useParamsValue } from "hooks";
import {
	DEFAULT_COLOR,
	DEFAULT_NUM_SHADES,
	OUTPUT_FORMAT,
} from "./utils/constants";
import { generateShadesForColor } from "./utils/helper";
import { PageGrid } from "components/Layouts";
import Colors from "./components/Colors";
import ColorInputs from "./components/ColorInputs";
import { PARAMS } from "data/paramsData";

interface SelectOption {
	value: string;
	label: string;
	func?: (shades: string[]) => string;
}

const ShadesAndTints: FC = () => {
	const { searchParams, updateParamsValue } = useParamsValue({
		color: DEFAULT_COLOR,
		percentage: DEFAULT_NUM_SHADES.toString(),
	});

	const [color, setColor] = useState(String(searchParams.get(PARAMS.color)));

	const debouncedSearchTerm = useDebounce(color);

	const percentage = String(searchParams.get(PARAMS.percentage));

	const [shades, setShades] = useState<string[]>([]);
	const [tints, setTints] = useState<string[]>([]);

	const [option, setOption] = useState<SelectOption>(OUTPUT_FORMAT[0]);
	const [isPending, startTransition] = useTransition();

	const resetInputs = () => {
		updateParamsValue(PARAMS.color, DEFAULT_COLOR);
		updateParamsValue(PARAMS.percentage, DEFAULT_NUM_SHADES.toString());
	};

	const clearInputs = () => {
		updateParamsValue(PARAMS.color, "");
		updateParamsValue(PARAMS.percentage, "");
	};

	useCombinedKeyPress(resetInputs, "e");
	useCombinedKeyPress(clearInputs, "r");

	useEffect(() => {
		updateParamsValue(PARAMS.color, debouncedSearchTerm);
	}, [debouncedSearchTerm, updateParamsValue]);

	useEffect(() => {
		startTransition(() => {
			const { shades, tints } = generateShadesForColor(
				debouncedSearchTerm,
				Number(percentage)
			);
			setShades(shades);
			setTints(tints);
		});
	}, [debouncedSearchTerm, percentage]);

	return (
		<div className={styles.st}>
			<ColorInputs
				color={color}
				handleColorChange={(e) => setColor(e.target.value)}
				handlePercentageChange={(num) =>
					num && updateParamsValue(PARAMS.percentage, num.toString())
				}
				setColor={setColor}
				percentage={Number(percentage)}
				handleOutputFormatChange={setOption}
				option={option}
				shades={shades}
				tints={tints}
			/>
			<PageGrid>
				<Colors colors={shades} isPending={isPending} type="Shades" />
				<Colors colors={tints} isPending={isPending} type="Tints" />
			</PageGrid>
		</div>
	);
};

export default ShadesAndTints;
