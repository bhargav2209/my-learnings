import {chromium, test} from '@playwright/test';

test('open a google.com', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.google.com/');

});
