import utils from './utils';

describe('utils', () => {

  it('should validate an email', () => {
    let email = 'mail@mail.com';
    expect(utils.isValiedEmail(email)).toBe(true)
    email = 'mail@mailcom';
    expect(utils.isValiedEmail(email)).toBe(false)
  });

  it('should validate an password', () => {
    let password = 'test!2234E';
    expect(utils.isValidPassword(password)).toBe(true)
    password = 'test';
    expect(utils.isValidPassword(password)).toBe(false)
  });

  it('should validate an string', () => {
    let string = 'test';
    expect(utils.isEmptyString(string)).toBe(false)
    string = '';
    expect(utils.isEmptyString(string)).toBe(true)
  });

  it('should call set cookie', () => {
    const setCookie = jest.fn();
    setCookie('cookie', 'value');
    expect(setCookie).toBeCalled()
  });

  it('should check if is esc key', () => {
    const e = {
      key: 'Esc'
    };
    expect(utils.isEscKey(e)).toBe(true)
  });

});
