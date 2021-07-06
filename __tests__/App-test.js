/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
/*

import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
const PORT = 4723;

const config = {
  platformName: "Android",
  platformVersion: "8",
  deviceName: "Android Emulator",
  app: "/path/to/the/downloaded/app.apk",
  automationName: "UiAutomator2"
}

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
})


test('Test Accessibilty Id', async () => {
  expect(await driver.hasElementByAccessibilityId('name')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('birthday')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('city')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('gender')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('vaccineType')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('sideEffect')).toBe(true);


});
*/
