function isString(strCpf) {
  if (typeof strCpf === 'string') {
    return true;
  }
  return false;
}

function hasLength(strCpf) {
  if (strCpf.length === 11) {
    return true;
  }
  return false;
}

function checkInvalidCpf(strCpf) {
  const invalidCpf = ['01234567890', '00000000000', '11111111111',
    '22222222222', '33333333333', '44444444444',
    '55555555555', '66666666666', '77777777777',
    '88888888888', '99999999999'];
  if (invalidCpf.indexOf(strCpf) !== -1) {
    return true;
  }
  return false;
}

function calcSum(strCpf, slice) {
  let arrayNum = strCpf.slice(0, slice).map((value, index) => {
    return parseInt(value * ((slice + 1) - index));
  });
  return arrayNum.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function cpfValidator(strCpf) {
  if (!isString(strCpf)) {
    return false;
  }
  strCpf = strCpf.replace(/[^0-9]/g, '');
  if (!hasLength(strCpf)) {
    return false;
  }
  if (checkInvalidCpf(strCpf)) {
    return false;
  }
  strCpf = strCpf.split('');
  let sum = calcSum(strCpf, 9);
  let digit = ((sum) % 11) < 2 ? 0 : 11 - (sum % 11);
  if (parseInt(strCpf[9]) !== digit) {
    return false;
  }
  sum = calcSum(strCpf, 10);
  digit = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
  if (parseInt(strCpf[10]) !== digit) {
    return false;
  }
  return true;
}

module.exports.cpfValidator = cpfValidator;