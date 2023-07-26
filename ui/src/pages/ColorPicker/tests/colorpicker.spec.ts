import { test } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("https://binarytree.dev/");
	await page.getByText("Colors").click();
	await page.getByText("Color Picker").click();
	await page.getByText("HEX").click();
	await page.getByRole("main").getByRole("button").click();
	await page.getByText("RGBA", { exact: true }).click();
	await page.getByRole("main").getByRole("button").click();
	await page.getByText("HSL", { exact: true }).click();
	await page.getByRole("main").getByRole("button").click();
	await page.getByText("HSLA").click();
	await page.locator(".mantine-10bfk5a > div:nth-child(3)").click();
	await page.getByRole("main").getByRole("button").click();
});
