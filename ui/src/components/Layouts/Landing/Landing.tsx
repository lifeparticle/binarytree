import { Layout } from "antd";

const { Content } = Layout;

type LandingProps = {
	children: React.ReactNode;
};

const Landing: React.FC<LandingProps> = ({ children }) => (
	<Layout>
		<Layout hasSider>
			<Layout>
				<Content>{children}</Content>
			</Layout>
		</Layout>
	</Layout>
);

export default Landing;
