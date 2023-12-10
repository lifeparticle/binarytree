import { Card, Spin, Tag } from "antd";
import { getTextColor } from "utils/helper-functions/color";
import { Clipboard } from "components/ComponentInjector";
import { ClipboardButton } from "components/InjectedComponent";
import styles from "pages/Colors/ShadesAndTints/ShadesAndTints.module.scss";
import { FC } from "react";

interface ColorsProps {
	colors: string[];
}

interface ExtendedColorsProps extends ColorsProps {
	isPending: boolean;
	type: string;
}

const Colors: FC<ExtendedColorsProps> = ({ colors, isPending, type }) => {
	if (colors.length === 0) return null;

	const cardTitle = (
		<div className={styles.colors__title}>
			{`${type}`}
			{isPending && <Spin size="small" />}
		</div>
	);

	return (
		<Card className={styles.colors} title={cardTitle} extra={colors.length}>
			<div className={styles.colors__list}>
				{colors.map((color, index) => (
					<Card
						key={crypto.randomUUID()}
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
