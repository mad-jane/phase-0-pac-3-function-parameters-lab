function introduction(name) {
    console.log(name);
    return `Hi, my name is ${name}.`
}


function introductionWithLanguage(name = "Aki", language = "Ember.js") {
    console.log(name);
    console.log(language);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}


function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
    console.log(name);
    console.log(language);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}