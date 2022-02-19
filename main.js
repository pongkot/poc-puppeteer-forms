import puppeteer from 'puppeteer'

const main = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    // TODO replace with your google form url
    await page.goto('https://forms.gle/4e6htVvLa5WhtMaS7');
    await page.waitForNetworkIdle()
    const noteInput = await page.$('textarea.quantumWizTextinputPapertextareaInput.exportTextarea')
    await noteInput.type(`uuid: ${new Date().getTime()}`)
    await page.waitForTimeout(3000)
    // TODO click submit button
    await page.evaluate(() => {
        const submitButton = document.querySelector('div[role=button]')
        submitButton.click()
    })
    await page.waitForNetworkIdle()
    await browser.close();
}

main()
