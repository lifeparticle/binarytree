import { Card, Spin, Tag } from "antd";
import { getTextColor } from "lib/utils/helper";
import Clipboard from "components/RenderProps/Clipboard";
import ClipboardButton from "components/General/ClipboardButton";
import { ExtendedColorsProps } from "pages/Colors/ShadesAndTints/utils/types";
import styles from "./Colors.module.scss";

const Colors: React.FC<ExtendedColorsProps> = ({ colors, isPending, type }) => {
	if (colors.length === 0) return null;

	const cardTitle = (
		<div className={styles.colors__title}>
			{`${type}`}
			{isPending && <Spin size="small" />}
		</div>
	);

	return (
		<Card className={styles.colors} title={cardTitle}>
			<div className={styles.colors__list}>
				{colors.map((color, index) => (
					<Card
						key={`${index}-${type}-${color}`}
						style={{
							backgroundColor: color,
							color: getTextColor(color),
						}}
					>
						<div className={styles.colors__list_item}>
							{index + 1}
							<Tag style={{ color: getTextColor(color) }}>
								{color}
							</Tag>
							<Clipboard
								text={color}
								clipboardComponent={ClipboardButton}
							/>
						</div>
					</Card>
				))}
			</div>
		</Card>
	);
};

export default Colors;
