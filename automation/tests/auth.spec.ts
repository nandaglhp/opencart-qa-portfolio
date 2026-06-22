import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
  test("admin can login with valid credentials", async ({ page }) => {
    // 1. Buka halaman admin
    await page.goto(process.env.ADMIN_URL!);

    // 2. Isi username dan password
    await page.fill("#input-username", process.env.ADMIN_USERNAME!);
    await page.fill("#input-password", process.env.ADMIN_PASSWORD!);

    // 3. Klik tombol login
    await page.click('button[type="submit"]');

    // 4. Verifikasi berhasil login
    await expect(page).toHaveURL(/.*admin\/index\.php\?route=common\/dashboard/);
    await expect(page.locator("#header")).toBeVisible();
  });
});
