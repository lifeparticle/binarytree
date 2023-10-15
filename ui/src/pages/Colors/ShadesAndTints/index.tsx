import { useState, useEffect, useTransition } from "react";
import styles from "./ShadesAndTints.module.scss";
import useCombinedKeyPress from "hooks/useCombinedKeyPress";
import {
	DEFAULT_COLOR,
	DEFAULT_NUM_SHADES,
	OUTPUT_FORMAT,
} from "./utils/constants";
import { generateShadesForColor } from "./utils/helper";
import PageGrid from "components/Layouts/PageGrid";
import Colors from "./components/Colors";
import ColorInputs from "./components/ColorInputs";
import useParamsValue from "hooks/useParamsValue";
import { useDebounce } from "hooks/useDebounce";

interface SelectOption {
	value: string;
	label: string;
	func?: (shades: string[]) => string;
}

const ShadesAndTints: React.FC = () => {
	const { searchParams, updateParamsValue } = useParamsValue({
		color: DEFAULT_COLOR,
		percentage: DEFAULT_NUM_SHADES.toString(),
	});

	const [color, setColor] = useState(String(searchParams.get("color")));

	const debouncedSearchTerm = useDebounce(color);

	const percentage = String(searchParams.get("percentage"));

	const [shades, setShades] = useState<string[]>([]);
	const [tints, setTints] = useState<string[]>([]);

	const [option, setOption] = useState<SelectOption>(OUTPUT_FORMAT[0]);
	const [isPending, startTransition] = useTransition();

	const resetInputs = () => {
		updateParamsValue("color", DEFAULT_COLOR);
		updateParamsValue("percentage", DEFAULT_NUM_SHADES.toString());
	};

	const clearInputs = () => {
		updateParamsValue("color", "");
		updateParamsValue("percentage", "");
	};

	useCombinedKeyPress(resetInputs, "KeyE");
	useCombinedKeyPress(clearInputs, "KeyR");

	useCombinedKeyPress(resetInputs, "KeyE");

	useEffect(() => {
		updateParamsValue("color", debouncedSearchTerm);
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
					num && updateParamsValue("percentage", num.toString())
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
