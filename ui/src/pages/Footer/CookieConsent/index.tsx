import React, { useCallback, useEffect } from "react";
import CookiConsent, {
	Cookies,
	getCookieConsentValue,
} from "react-cookie-consent";
import ReactGA from "react-ga4";
import { usePageTitle } from "components/Hoc";
import {
	BUTTON_STYLES,
	COOKIE_CONSENT_STYLES,
	GOOGLE_ANALYTICS_COOKIES,
	GOOGLE_ANALYTICS_ID,
	HIT_TYPE,
	DECLINE_BUTTON_STYLES,
} from "./utils/constants";
import CookieConsentText from "./components/CookieConsentText";

const CookieConsent: React.FC = () => {
	const { title, url } = usePageTitle();

	const handleAcceptCookie = useCallback(() => {
		if (!ReactGA.isInitialized) {
			ReactGA.initialize(GOOGLE_ANALYTICS_ID);
		}
		ReactGA.send({
			hitType: HIT_TYPE,
			page: url,
			title,
		});
	}, [title, url]);

	const handleDeclineCookie = () => {
		GOOGLE_ANALYTICS_COOKIES.forEach((cookie) => Cookies.remove(cookie));
	};

	useEffect(() => {
		const isConsent = getCookieConsentValue();
		if (isConsent === "true") {
			handleAcceptCookie();
		}
	}, [handleAcceptCookie]);

	return (
		<CookiConsent
			onAccept={handleAcceptCookie}
			onDecline={handleDeclineCookie}
			enableDeclineButton
			flipButtons={false}
			style={COOKIE_CONSENT_STYLES}
			buttonStyle={BUTTON_STYLES}
			declineButtonStyle={DECLINE_BUTTON_STYLES}
			declineButtonClasses=""
			declineButtonText="Decline"
			buttonText="Accept"
		>
			<CookieConsentText />
		</CookiConsent>
	);
};

export default CookieConsent;
