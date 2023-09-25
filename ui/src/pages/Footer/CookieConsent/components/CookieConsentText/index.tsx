import { Link } from "react-router-dom";

const CookieConsentText = () => (
	<>
		This website uses cookies to enhance the user experience. If you are
		interested to know about our cookie policy then{" "}
		<Link to="/cookie-policy" style={{ color: "white" }}>
			check out
		</Link>{" "}
		here
	</>
);

export default CookieConsentText;
