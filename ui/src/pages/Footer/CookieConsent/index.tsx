import React, { useEffect } from "react";
import CookiConsent, {
	Cookies,
	getCookieConsentValue,
} from "react-cookie-consent";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

const CookieConsent: React.FC = () => {
	const handleAcceptCookie = () => {
		const GOOGLE_ANALYTICS_ID = "G-9K8N22TZZS";
		if (GOOGLE_ANALYTICS_ID) {
			ReactGA.initialize(GOOGLE_ANALYTICS_ID);
			ReactGA.send({
				hitType: "pageview",
				page: window.location.pathname,
				title: "Custom Title",
			});
		}
	};

	const handleDeclineCookie = () => {
		Cookies.remove("_ga");
		Cookies.remove("_gat");
		Cookies.remove("_gid");
	};

	useEffect(() => {
		const isConsent = getCookieConsentValue();
		if (isConsent === "true") {
			handleAcceptCookie();
		}
	}, []);
	return (
		<CookiConsent
			onAccept={handleAcceptCookie}
			onDecline={handleDeclineCookie}
			enableDeclineButton
			flipButtons={true}
			style={{
				maxWidth: "350px",
				margin: "20px",
				borderRadius: "10px",
				fontSize: "17px",
			}}
			buttonStyle={{
				padding: "8px 20px",
				fontSize: "17px",
				borderRadius: "2px",
			}}
			declineButtonStyle={{
				padding: "8px 20px",
				fontSize: "17px",
				borderRadius: "2px",
			}}
			declineButtonClasses=""
			declineButtonText="Decline"
			buttonText="Accept"
		>
			<div>
				This website uses cookies to enhance the user experience. if you
				are interested to know about our cookie policy then{" "}
				<Link to={"/cookie-policy"} style={{ color: "white" }}>
					check out
				</Link>{" "}
				here
			</div>
		</CookiConsent>
	);
};

export default CookieConsent;
