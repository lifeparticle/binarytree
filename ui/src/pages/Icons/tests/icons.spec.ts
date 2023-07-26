import { test } from "@playwright/test";

test("Icon test", async ({ page }) => {
	await page.goto("https://binarytree.dev/");
	await page.getByRole("menuitem", { name: "List" }).click();
	await page.getByText("Icons").click();
	const page1Promise = page.waitForEvent("popup");
	await page.getByRole("link", { name: "Website" }).first().click();
	const page1 = await page1Promise;
	const page2Promise = page.waitForEvent("popup");
	await page.getByRole("link", { name: "GitHub" }).first().click();
	const page2 = await page2Promise;
	const page3Promise = page.waitForEvent("popup");
	await page.getByRole("link", { name: "Website" }).nth(1).click();
	const page3 = await page3Promise;
	const page4Promise = page.waitForEvent("popup");
	await page.getByRole("link", { name: "GitHub" }).nth(1).click();
	const page4 = await page4Promise;
	const page5Promise = page.waitForEvent("popup");
	await page.getByRole("link", { name: "Website" }).nth(2).click();
	const page5 = await page5Promise;
	const page6Promise = page.waitForEvent("popup");
	await page.getByRole("link", { name: "Website" }).nth(3).click();
	const page6 = await page6Promise;
});
