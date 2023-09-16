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
		numShades: DEFAULT_NUM_SHADES,
	});

	const [color, setColor] = useState(
		searchParams.get("color") || (params.color as string)
	);
	const [shades, setShades] = useState<string[]>([]);
	const [tints, setTints] = useState<string[]>([]);
	const [numberOfShades, setNumberOfShades] = useState(
		Number(searchParams.get("numShades")) || Number(params.numShades)
	);

	const [option, setOption] = useState<SelectOption>(OUTPUT_FORMAT[0]);
	const [isPending, startTransition] = useTransition();

	const resetInputs = () => {
		setColor(DEFAULT_COLOR);
		setNumberOfShades(DEFAULT_NUM_SHADES);
	};

	useCombinedKeyPress(resetInputs, ["ControlLeft", "KeyE"]);
	useCombinedKeyPress(resetInputs, ["ControlLeft", "KeyR"]);

	useEffect(() => {
		startTransition(() => {
			const { shades, tints } = generateShadesForColor(
				color,
				numberOfShades
			);
			setShades(shades);
			setTints(tints);
		});
	}, [color, numberOfShades]);

	useEffect(() => {
		updateUrlParam("color", color);
		updateUrlParam("numShades", String(numberOfShades));
	}, [color, numberOfShades]);

	return (
		<div className={styles.st}>
			<ColorInputs
				color={color}
				handleColorChange={(e) => setColor(e.target.value)}
				handleNumberOfShadesChange={(num) =>
					num && setNumberOfShades(num)
				}
				setColor={setColor}
				numberOfShades={numberOfShades}
				handleOutputFormatChange={setOption}
				option={option}
				shades={shades}
				tints={tints}
			/>
			<PageGrid>
				<Colors
					colors={shades}
					isPending={isPending}
					title="Generating shades..."
					type="Shades"
				/>
				<Colors
					colors={tints}
					isPending={isPending}
					title="Generating tints..."
					type="Tints"
				/>
			</PageGrid>
		</div>
	);
};

export default ShadesAndTints;
