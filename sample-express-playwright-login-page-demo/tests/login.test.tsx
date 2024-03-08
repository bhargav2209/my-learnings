import {chromium, test} from '@playwright/test';

test('open a login page', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://localhost:3000/login.html');
    await page.fill('#userName', 'admin');
    await page.fill('#password', 'admin');
    await page.click('button:text("login")');
});
