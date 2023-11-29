import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import GithubIssue from "./Automation";

describe(`#GithubIssue`, () => {
	test("render component without a crash", () => {
		render(<GithubIssue />);
	});

	test("Saved Issue", async () => {
		render(<GithubIssue />);

		const exists = await screen.findByText("Saved Issue");
		expect(exists).toBeInTheDocument();

		const downloadButton = screen.getByText(/Download csv/i);

		expect(downloadButton).toBeInTheDocument();
		expect(downloadButton).not.toBeDisabled();
	});
});
