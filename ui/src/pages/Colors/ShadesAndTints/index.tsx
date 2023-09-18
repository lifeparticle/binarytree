import { useState, useEffect, useTransition } from "react";
import styles from "./ShadesAndTints.module.scss";
import useCombinedKeyPress from "lib/utils/hooks/useCombinedKeyPress";
import {
	DEFAULT_COLOR,
	DEFAULT_NUM_SHADES,
	OUTPUT_FORMAT,
} from "./utils/constants";
import { generateShadesForColor } from "./utils/helper";
import { SelectOption } from "./utils/types";
import PageGrid from "components/Layouts/PageGrid";
import Colors from "./components/Colors";
import ColorInputs from "./components/ColorInputs";
import useUrlParams from "lib/utils/hooks/useUrlParams";

const ShadesAndTints: React.FC = () => {
	const [params, updateUrlParam, searchParams] = useUrlParams({
		color: DEFAULT_COLOR,
		percentage: DEFAULT_NUM_SHADES,
	});

	const [color, setColor] = useState(
		searchParams.get("color") || (params.color as string)
	);
	const [shades, setShades] = useState<string[]>([]);
	const [tints, setTints] = useState<string[]>([]);
	const [percentage, setPercentage] = useState(
		Number(searchParams.get("percentage")) || Number(params.percentage)
	);

	const [option, setOption] = useState<SelectOption>(OUTPUT_FORMAT[0]);
	const [isPending, startTransition] = useTransition();

	const resetInputs = () => {
		setColor(DEFAULT_COLOR);
		setPercentage(DEFAULT_NUM_SHADES);
	};

	useCombinedKeyPress(resetInputs, ["ControlLeft", "KeyE"]);
	useCombinedKeyPress(resetInputs, ["ControlLeft", "KeyR"]);

	useEffect(() => {
		startTransition(() => {
			const { shades, tints } = generateShadesForColor(color, percentage);
			setShades(shades);
			setTints(tints);
		});
	}, [color, percentage]);

	useEffect(() => {
		updateUrlParam("color", color);
		updateUrlParam("percentage", String(percentage));
	}, [color, percentage]);

	return (
		<div className={styles.st}>
			<ColorInputs
				color={color}
				handleColorChange={(e) => setColor(e.target.value)}
				handlePercentageChange={(num) => num && setPercentage(num)}
				setColor={setColor}
				percentage={percentage}
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
