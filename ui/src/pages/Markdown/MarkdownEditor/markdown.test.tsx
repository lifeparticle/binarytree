import { describe, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import MarkdownEditor from ".";
import { ButtonProps } from "antd/lib/button";
import { DarkModeContext } from "Provider";

// Define TypeScript types for the mocked components
type MockButtonProps = {
	children: React.ReactNode;
} & ButtonProps; // Use ButtonProps to extend the mock component's props

type MockSpaceProps = {
	children: React.ReactNode;
};

type MockMDEditorProps = {
	value: string;
	onChange: (value: string) => void;
};

// Mock the DarkModeContext
const mockDarkModeContext = {
	isDarkMode: false,
};

describe("Markdown Component", () => {
	vi.mock("@uiw/react-md-editor", () => ({
		default: {
			MDEditor: ({ value, onChange }: MockMDEditorProps) => (
				<textarea
					value={value}
					onChange={(e) => onChange(e.target.value)}
					data-testid="mock-md-editor"
					style={{ fontSize: "52" }}
				/>
			),
		},
	}));

	vi.mock("antd", () => ({
		Button: ({ children }: MockButtonProps) => <button>{children}</button>,
		Space: ({ children }: MockSpaceProps) => (
			<div data-testid="mock-antd-space">{children}</div>
		),
	}));

	vi.mock("@mantine/hooks", () => ({
		useClipboard: () => ({
			copy: vi.fn(),
			copied: false,
		}),
	}));

	vi.mock("lib/utils/files", () => ({
		downloadPDFFile: vi.fn(),
		downloadTextFile: vi.fn(),
	}));

	vi.mock("Provider", () => ({
		DarkModeContext: {
			...mockDarkModeContext, // Spread the mock context directly
		},
	}));

	test("render component without crashing", () => {
		render(<MarkdownEditor />);
	});

	test("render buttons correctly", () => {
		screen.debug();
		render(<MarkdownEditor />);
		const clearButtonElement = screen.getByRole("button", {
			name: /clear/i,
		});

		const downloadMarkdownElement = screen.getByRole("button", {
			name: /download markdown/i,
		});

		const downloadMarkdownPdfElement = screen.getByRole("button", {
			name: /download pdf/i,
		});

		const copyButtonElement = screen.getByRole("button", {
			name: /copy/i,
		});

		expect(downloadMarkdownPdfElement).toBeInTheDocument();

		expect(downloadMarkdownElement).toBeInTheDocument();
		expect(copyButtonElement).toBeInTheDocument();

		expect(clearButtonElement).toBeInTheDocument();
	});
});
