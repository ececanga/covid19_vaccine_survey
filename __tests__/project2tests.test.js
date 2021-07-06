import { remote } from "webdriverio";

// eslint-disable-next-line no-undef
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const deviceOrientation = process.env.KOBITON_SESSION_DEVICE_ORIENTATION || 'portrait'


let driver;

beforeAll(async () => {
    driver = await remote({
        path: "/wd/hub",
        host: "localhost",
        port: 4723,
        capabilities: {
            platformName: "Android",
            platformVersion: "14.5", // must correct the stimuator
            deviceName: 'Pixel XL API 29',
            appium: { connectHardwareKeyboard: true }
        }
        // logLevel: "silent"
    });
});

afterAll(async () => {
    if (driver) {
        await driver.deleteSession();
    }
});
test("Submit test", async () => {
    await driver.pause(2000);

    const nameInput = await driver.$("~nameInput");
    await nameInput.clearValue();
    await nameInput.setValue("John Doe");
    await driver.hideKeyboard("pressKey", "next");

    const submitSurveyButton = await driver.$("~submitSurvey");
    await submitSurveyButton.waitForExist();
    submitSurvey.click();
    await driver.pause(3000);

});
test('appium renders', async () => {
    expect(await driver.hasElementByAccessibilityId('submitSurvey')).toBe(true);
    const element = await driver.elementByAccessibilityId('submitSurvey')
    await element.click()
    expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
});

/*
import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
//const PORT = 'http://[::1]:8000';

const config = {
    platformName: 'Android',
    //deviceName: '243bac6ca50d7ece',
    //deviceName: 'Android Emulator',
    deviceName: 'Pixel XL API 29',
app: 'Users/user/yourProjectName/android/app/build/outputs/apk/app-debug.apk'};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(3000);
}) // Sometime for the app to load
test('my first appium test', async () => {
    expect(await driver.hasElementByAccessibilityId('name')).toBe(true);
    const element = await driver.elementByAccessibilityId('name')
    await element.click()
    expect(await driver.hasElementByAccessibilityId('name')).toBe(false);
});

*/
