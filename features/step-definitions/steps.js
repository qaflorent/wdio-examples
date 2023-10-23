import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^Test the scrollIntoView$/, async () => {
    await browser.url('/');
    await $('a=Getting Started').scrollIntoView();
    await browser.pause(2000); // to have time to see the result
});
