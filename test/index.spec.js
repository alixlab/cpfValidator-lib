/* eslint-disable no-undef */
let {assert} = require('chai');
let cpfValidator = require('../lib/index');

describe('cpf lib', () => {
  describe('cpfValidator', () => {
    it('Is cpf valid?', () => {
      assert.equal(cpfValidator('30300697880'), true);
    });
    it('Is cpf valid?', () => {
      assert.equal(cpfValidator('30300697888'), true);
    });
    it('Is cpf valid?', () => {
      assert.equal(cpfValidator('11111111111'), false);
    });
  });
});

// assert ou expect
