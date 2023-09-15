function introduction(name) {
    return `Hello, ${name}!`;
  }
  
  function introductionWithLanguage(name, language) {
    return `Hello, my name is ${name} and I am learning ${language}.`;
  }
  
  function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hello, my name is ${name} and I am learning ${language}.`;
  }
  
  module.exports = { introduction, introductionWithLanguage, introductionWithLanguageOptional };
  