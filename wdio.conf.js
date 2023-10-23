export const config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'warn',
    baseUrl: 'https://webdriver.io/',
    framework: 'cucumber',
    reporters: ['dot'],

    cucumberOpts: {
        require: ['./features/step-definitions/steps.js']
    }

}
