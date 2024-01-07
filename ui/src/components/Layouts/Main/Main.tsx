import { Layout } from "antd";
import { FloatingBar, Sidebar } from "components/Layouts";

const { Content } = Layout;

type MainProps = {
	children: React.ReactNode;
};

const Main: React.FC<MainProps> = ({ children }) => (
	<Layout>
		<Layout hasSider>
			<Sidebar />
			<Layout>
				<Content>
					<FloatingBar />
					{children}
				</Content>
			</Layout>
		</Layout>
	</Layout>
);

export default Main;
