import { FC } from "react";
import { List, Space, Tag } from "antd";
import { CREDITS_DATA } from "./creditsData";
import style from "pages/About/About.module.scss";

const Credits: FC = () => {
	return (
		<List header={<div>Credits</div>} bordered>
			<List.Item>
				<Space wrap size="middle">
					{CREDITS_DATA.map((credit) => (
						<Tag
							key={credit.key}
							onClick={() =>
								window.open(credit.url, "_blank", "noopener")
							}
							className={style.about__card__credits__tag}
						>
							{credit.name}
						</Tag>
					))}
				</Space>
			</List.Item>
		</List>
	);
};

export default Credits;
