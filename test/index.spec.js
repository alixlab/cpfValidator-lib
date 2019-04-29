/* eslint-disable no-undef */
let chai = require('chai');
let expect = chai.expect;
let cpfValidator = require('../lib/index');

describe('cpf lib', () => {
  describe('cpfValidator', () => {
    it('It should be true for pattern cpf', () => {
      expect(cpfValidator.cpfValidator('30300697880')).to.equal(true);
    });
    it('It should be false for cpf with invalid digit', () => {
      expect(cpfValidator.cpfValidator('30300697888')).to.equal(false);
    });
    it('It should be false for repeated numbers', () => {
      expect(cpfValidator.cpfValidator('11111111111')).to.equal(false);
    });
    it('It should be false for known invalid cpf', () => {
      expect(cpfValidator.cpfValidator('01234567890')).to.equal(false);
    });
    it('It should be false for empty string', () => {
      expect(cpfValidator.cpfValidator('')).to.equal(false);
    });
    it('It should be true for cpf with . and -', () => {
      expect(cpfValidator.cpfValidator('303.006.978-80')).to.equal(true);
    });
    it('It should be false for boolean', () => {
      expect(cpfValidator.cpfValidator(true)).to.equal(false);
    });
    it('It should be false for non-digits', () => {
      expect(cpfValidator.cpfValidator('Alice Labar')).to.equal(false);
    });
    it('It should be false for inputs with length different from 11', () => {
      expect(cpfValidator.cpfValidator('730418820')).to.equal(false);
    });
    it('It should be true for cpf beginning with 0', () => {
      expect(cpfValidator.cpfValidator('00730418820')).to.equal(true);
    });
  });
});