/* eslint-disable no-undef */
const chai = require('chai');
const expect = chai.expect;
const cpfValidator = require('../lib/index');

describe('cpf lib', () => {
  describe('when it is pattern cpf', () => {
    it('It should be true', () => {
      expect(cpfValidator.cpfValidator('48474253322')).to.equal(true);
    });
    it('It should be true', () => {
      expect(cpfValidator.cpfValidator('47048021080')).to.equal(true);
    });
    it('It should be true with special characters', () => {
      expect(cpfValidator.cpfValidator('458.112-445/09')).to.equal(true);
    });
    describe('when cpf has invalid digit', () => {
      it('It should be false', () => {
        expect(cpfValidator.cpfValidator('48474253321')).to.equal(false);
      });
      it('It should be false', () => {
        expect(cpfValidator.cpfValidator('48474253311')).to.equal(false);
      });
    });
    describe('when it is known invalid cpf', () => {
      it('It should be false', () => {
        expect(cpfValidator.cpfValidator('11111111111')).to.equal(false);
      });
      it('It should be false', () => {
        expect(cpfValidator.cpfValidator('01234567890')).to.equal(false);
      });
    });
    describe('when it does not have a number', () => {
      it('It should be false for empty string', () => {
        expect(cpfValidator.cpfValidator('')).to.equal(false);
      });
      it('It should be false with letters', () => {
        expect(cpfValidator.cpfValidator('Alice Labar')).to.equal(false);
      });
      it('It should be false for boolean', () => {
        expect(cpfValidator.cpfValidator(true)).to.equal(false);
      });
    });
    describe('when its length is different from 11', () => {
      it('It should be false', () => {
        expect(cpfValidator.cpfValidator('5418432753')).to.equal(false);
      });
    });
    describe('when pattern cpf begins with 0 and has 11 digits', () => {
      it('It should be true', () => {
        expect(cpfValidator.cpfValidator('04411353822')).to.equal(true);
      });
    });
  });
});