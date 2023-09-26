import { Space, Table, Typography } from "antd";
import Footer from "components/Layouts/Footer";
import style from "./CookiePolicy.module.scss";
import { TABLE_COLUMNS, TABLE_DATA } from "./utils/constants";

const PrivacyPolicy = () => {
	return (
		<>
			<Space direction="vertical" className={style.privacypolicy}>
				<div className={style.privacypolicy__header}>
					<Typography.Title level={1}>COOKIE POLICY</Typography.Title>
				</div>
				<Typography.Paragraph>
					This Cookie Policy explains how BinaryTree
					(&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, and
					&quot;our&quot;) uses cookies and similar technologies to
					recognize you when you visit our website at
					https://www.binarytree.dev (&quot;Platform&quot;). It
					explains what these technologies are and why we use them, as
					well as your rights to control our use of them. In some
					cases, we may use cookies to collect personal information,
					or that becomes personal information if we combine it with
					other information.
					<br />
					<b>Data Controller: </b>BinaryTree
					<br />
					<b>Contact information: e-mail address: </b>
					hello@binarytree.dev
				</Typography.Paragraph>
				<Typography.Title level={5}>
					1. WHAT ARE COOKIES?
				</Typography.Title>
				<Typography.Paragraph>
					Cookies are small data files that are placed on your
					computer or mobile device when you visit a website. Cookies
					are widely used by website owners in order to make their
					websites work, or to work more efficiently, as well as to
					provide reporting information. When we talk about cookies in
					this section, this term includes technologies that we are
					using which serve a similar purpose, for example, web
					beacons, tags and tracking pixels or software development
					kits (SDKs) in our mobile apps. Cookies set by the Platform
					owner (in this case, BinaryTree) are called &quot;first
					party cookies&quot;. Cookies set by parties other than the
					Platform owner are called &quot;third party cookies&quot;.
					Third party cookies enable third party features or
					functionality to be provided on or through the Platform
					(e.g. like advertising, interactive content and analytics).
					Our Services use some cookies that are not controlled by us.
					You should review the privacy and cookie policies of these
					parties to find out how they use cookies and the information
					they collect through cookies.
				</Typography.Paragraph>
				<Typography.Paragraph>
					The parties that set these third party cookies can recognize
					your computer both when it visits the Platform in question
					and also when it visits certain other Platforms. BinaryTree
					is not responsible how third parties use cookies and user
					must visit third party privacy policies for specific
					information regarding use of cookies. There are the
					following types of cookies:
				</Typography.Paragraph>
				<Typography.Paragraph>
					Essential cookies - These cookies are essential for our
					Platforms and services to perform basic functions and are
					necessary for us to operate certain features. These include
					those required to allow registered users to authenticate and
					perform account- related functions, preferences set by users
					such as account name, language, and location, and ensure our
					services are operating properly. Without these cookies, the
					services that you have asked for cannot be provided.
				</Typography.Paragraph>
				<Typography.Paragraph>
					Analytics and Performance cookies - To analyse the use,
					performance and design of our Services, detect errors and
					improve user experience. For example, this type of cookie
					enables us to understand how often you are using our
					Services, to recognize that you have visited our websites
					before and to identify which parts of our Services and which
					sections of our website are most popular, for example by
					allowing us to see which pages visitors access most
					frequently and how much time visitors spend on each page. We
					use these details to improve how our Platform function and
					to understand how users interact with them.
				</Typography.Paragraph>
				<Typography.Paragraph>
					Functional Cookies - To deliver a better user experience,
					and build up customer usage patterns and profiles. For
					example, this type of cookie ensures that the information
					displayed when you use our Services (e.g. on your next visit
					to our website) will match up with your user preferences
					(such as language preferences, font size or auto-fill
					options).
				</Typography.Paragraph>
				<Typography.Paragraph>
					Advertising cookies - These cookies are set by us and our
					advertising partners to provide you with relevant content
					and to understand that content’s effectiveness. They may be
					used to collect information about your online activities
					over time and across different Platforms to predict your
					preferences and to display more relevant advertisements to
					you. These cookies also allow a profile to be built about
					you and your interests and enable personalized ads to be
					shown to you based on your profile.
				</Typography.Paragraph>
				<Typography.Title level={5}>
					2. WHY DO WE USE COOKIES?
				</Typography.Title>
				<Typography.Paragraph>
					We use first and third party cookies for several reasons.
					Cookies in this Platform are required for technical reasons
					in order for our Platform to operate, and we refer to these
					as &quot;essential&quot; or &quot;strictly necessary&quot;
					cookies.
				</Typography.Paragraph>
				<Typography.Paragraph>
					We use essential cookies by default, but we rely on your
					consent to use cookies that are not essential. Note that by
					disabling essential cookies, you will not be able to use our
					Services; by disabling functional or performance cookies
					your user experience may be disrupted but you will still be
					able to use our Services.
				</Typography.Paragraph>
				<Typography.Paragraph>
					We use third party cookies such as Google Analytics. Google
					Analytics gathers information about the use of our Website
					by means of cookies. The information gathered is used to
					create reports about the use of our Website. You can find
					out more about Google&#39;s use of information by visiting
					https://www.google.com/policies/privacy/partners/ and you
					can review Google&#39;s privacy policy at
					https://policies.google.com/privacy.
				</Typography.Paragraph>
				<Typography.Title level={5}>
					3. WHAT KIND OF COOKIES DO WE USE?
				</Typography.Title>
				<Typography.Paragraph>
					The specific types of first and third party cookies served
					through our Platform and the purposes they perform are
					described in the table below (please note that the specific
					cookies served may vary depending on the specific Platform
					Properties you visit):
				</Typography.Paragraph>
				<Table
					columns={TABLE_COLUMNS}
					dataSource={TABLE_DATA}
					pagination={false}
					bordered
					scroll={{ x: "calc(50%)" }}
				/>
				<Typography.Title level={5}>
					4. HOW CAN I CONTROL COOKIES?
				</Typography.Title>
				<Typography.Paragraph>
					You have the right to decide whether to accept or reject
					cookies. Necessary cookies cannot be rejected as they are
					strictly necessary to provide you with services.
				</Typography.Paragraph>
				<Typography.Paragraph>
					You may set or amend your web browser controls to accept or
					refuse cookies or use our Platform cookie tool to remove
					unwanted cookies. As the means by which you can refuse
					cookies through your web browser controls vary from
					browser-to-browser, you should visit your browser&#39;s help
					menu for more information.
				</Typography.Paragraph>
				<Typography.Paragraph>
					If you would like to find out more information, please visit
					http://www.aboutads.info/choices/ or
					http://www.youronlinechoices.com.
				</Typography.Paragraph>
				<Typography.Title level={5}>
					5. WHAT ABOUT OTHER TRACKING TECHNOLOGIES, LIKE WEB BEACONS?
				</Typography.Title>
				<Typography.Paragraph>
					Cookies are not the only way to recognize or track visitors
					to a website. We may use other, similar technologies from
					time to time, like web beacons (sometimes called
					&quot;tracking pixels&quot; or &quot;clear gifs&quot;).
					These are tiny graphics files that contain a unique
					identifier that enable us to recognize when someone has
					visited our Platform or opened an e-mail including them.
					This allows us, for example, to monitor the traffic patterns
					of users from one page within a website to another, to
					deliver or communicate with cookies, to understand whether
					you have come to the website from an online advertisement
					displayed on a third-party website, to improve site
					performance, and to measure the success of e-mail marketing
					campaigns. In many instances, these technologies are reliant
					on cookies to function properly, and so declining cookies
					will impair their functioning.
				</Typography.Paragraph>
				<Typography.Title level={5}>
					6. HOW OFTEN IS THIS COOKIE POLICY UPDATED?
				</Typography.Title>
				<Typography.Paragraph>
					We may update this Cookie Policy from time to time in order
					to reflect, for example, changes to the cookies we use or
					for other operational, legal or regulatory reasons. Please
					therefore re-visit this Cookie Policy regularly to stay
					informed about our use of cookies and related technologies.
					The date at the bottom of this Cookie Policy indicates when
					it was last updated.
				</Typography.Paragraph>
				<Typography.Title level={5}>
					7. WHERE CAN I GET FURTHER INFORMATION?
				</Typography.Title>
				<Typography.Paragraph>
					If you have any questions about our use of cookies or other
					technologies, please email us at hello@binarytree.dev. Last
					updated September 26, 2023
				</Typography.Paragraph>
			</Space>

			<Footer />
		</>
	);
};

export default PrivacyPolicy;
