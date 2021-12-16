("use strict");

let errors = [];

function GuiaValidators() {
  errors = [];
}

GuiaValidators.prototype.isRequired = (value, message) => {
  if (!value || value.length <= 0) errors.push({ message: message });
};

GuiaValidators.prototype.isEmail = (value, message) => {
  var reg = new RegExp(/^\w+([-+.']\w+)@\w+([-.]\w+)\.\w+([-.]\w+)*$/);
  if (!reg.test(value)) errors.push({ message: message });
};

GuiaValidators.prototype.hasMinLen = (value, min, message) => {
  if (!value || value.length < min) errors.push({ message: message });
};

GuiaValidators.prototype.hasMaxLen = (value, max, message) => {
  if (!value || value.length > max) errors.push({ message: message });
};

GuiaValidators.prototype.errors = () => {
  return errors;
};

GuiaValidators.prototype.clear = () => {
  errors = [];
};

GuiaValidators.prototype.isValid = () => {
  return errors.length === 0;
};

module.exports = GuiaValidators;