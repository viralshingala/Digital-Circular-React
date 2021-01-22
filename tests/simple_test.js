Feature('SignUp');

Scenario('Go to sign up page', (I) => {
  I.amOnPage('https://www.petsmart.com/');
  I.moveCursorTo('.header-signin');
  I.click('sign up', '._UT_login__link');
  I.wait(3);
  I.click('learn more', '#modal-init');
  I.wait(3);
  I.click('X', '._UT_quadModal__closebtn');
  I.saveScreenshot('debug.png');
});
