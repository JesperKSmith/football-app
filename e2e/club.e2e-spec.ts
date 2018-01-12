import { AdminComponent } from '../src/app/components/admin/admin.component';
import { browser, element, by } from "protractor";

describe('Club component', () => {
    it('1.0: Create club successfully', () => {
        browser.get('/superligaen');

        element.all(by.css('.club-e2e')).then((elemsBefore) => { 
            browser.get('/admin/new');           
            element(by.name('name')).sendKeys('FC Jesper');
            browser.sleep(1000);
            element(by.name('matchesPlayed')).sendKeys('19');
            browser.sleep(1000);
            element(by.name('wins')).sendKeys('19');
            browser.sleep(1000);
            element(by.name('draws')).sendKeys('0');
            browser.sleep(1000);
            element(by.name('losses')).sendKeys('0');
            browser.sleep(1000);
            element(by.name('goalsFor')).sendKeys('95');
            browser.sleep(1000);
            element(by.name('goalsAgainst')).sendKeys('0');
            browser.sleep(1000);
            element(by.name('points')).sendKeys('57');
            browser.sleep(1000);
            

            element(by.id('submit-e2e')).click().then(() => {
                element.all(by.css('.club-e2e')).then((elemsAfter) => {
                    expect(elemsAfter.length - elemsBefore.length).toBe(1);
                });
            });            
        });        
    });

    it('1.1: Attempt to wrongfully fillout form', () => {           
        browser.get('/superligaen');
            element.all(by.css('.club-e2e')).then((elemsBefore) => { 
                browser.get('/admin/new');           
                element(by.name('name')).click();
                browser.sleep(1000);
                element(by.name('matchesPlayed')).sendKeys('FC Kirschberg');
                browser.sleep(1000);
                element(by.name('wins')).sendKeys('0');
                browser.sleep(1000);
                element(by.name('draws')).sendKeys('5');
                browser.sleep(1000);
                element(by.name('losses')).sendKeys('14');
                browser.sleep(1000);
                element(by.name('goalsFor')).sendKeys('0');
                browser.sleep(1000);
                element(by.name('goalsAgainst')).sendKeys('95');
                browser.sleep(1000);
                element(by.name('points')).sendKeys('0');
                browser.sleep(8000);
                
    
                element(by.id('submit-e2e')).click().then(() => {
                    browser.get('/superligaen');
                    element.all(by.css('.club-e2e')).then((elemsAfter) => {
                        expect(elemsAfter.length - elemsBefore.length).toBe(0);
                    });
                });
                    
            });
        });

        it('1.1: Attempt XSS', () => {           
            browser.get('/superligaen');
            element.all(by.css('.club-e2e')).then((elemsBefore) => { 
                browser.get('/admin/new');           
                element(by.name('name')).sendKeys('FC Hacking"><script>alert("danger")</script>');
                browser.sleep(1000);
                element(by.name('matchesPlayed')).sendKeys('19');
                browser.sleep(1000);
                element(by.name('wins')).sendKeys('0');
                browser.sleep(1000);
                element(by.name('draws')).sendKeys('5');
                browser.sleep(1000);
                element(by.name('losses')).sendKeys('14');
                browser.sleep(1000);
                element(by.name('goalsFor')).sendKeys('0');
                browser.sleep(1000);
                element(by.name('goalsAgainst')).sendKeys('95');
                browser.sleep(1000);
                element(by.name('points')).sendKeys('0');
                browser.sleep(1000);
                
    
                element(by.id('submit-e2e')).click().then(() => {
                    browser.get('/superligaen');
                    element.all(by.css('.club-e2e')).then((elemsAfter) => {
                        expect(elemsAfter.length - elemsBefore.length).toBe(1);
                    });
                });
                    
            });
        });
});
