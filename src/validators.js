module.exports = {
  alphaNumeric: require('./basicValidators/alphaNumeric'),
  anArray: require('./basicValidators/array'),
  between: require('./basicValidators/between'),
  blank: require('./basicValidators/blank'),
  boolean: require('./basicValidators/boolean'),
  cc: require('./basicValidators/creditCard'),
  date: require('./basicValidators/date'),
  decimal: require('./basicValidators/decimal'),
  email: require('./basicValidators/email'),
  empty: require('./basicValidators/empty'),
  equal: require('./basicValidators/equal'),
  extension: require('./basicValidators/extended'),
  fileExtension: require('./basicValidators/fileExtension'),
  fileExtensionAudio: require('./basicValidators/fileExtensionAudio'),
  fileExtensionImage: require('./basicValidators/fileExtensionImage'),
  fileExtensionVideo: require('./basicValidators/fileExtensionVideo'),
  inArray: require('./basicValidators/inArray'),
  int: require('./basicValidators/int'),
  ip: require('./basicValidators/IP'),
  maxLength: require('./basicValidators/maxLength'),
  minLength: require('./basicValidators/minLength'),
  multiple: require('./basicValidators/multiple'),
  number: require('./basicValidators/number'),
  ofType: require('./basicValidators/type'),
  phone: require('./basicValidators/phoneUS'),
  postal: require('./basicValidators/postalUS'),
  ssn: require('./basicValidators/SSN'),
  string: require('./basicValidators/string'),
};
