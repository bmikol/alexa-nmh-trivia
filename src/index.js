'use strict'
var Alexa = require('alexa-sdk')

let SKILL_ID
var APP_ID = SKILL_ID

var languageStrings = {
  'en': {
    'translation': {
      'FACTS': [
        'Mountain Day is an annual tradition when classes are cancelled by surprise the day before and students and faculty hike Northfield Mountain. and as seniors. Mount Monadnock.',
        'The school was a merger in 1972 of two schools founded by Protestant evangelist Dwight Lyman Moody as the Northfield Seminary for Young Ladies. and the Mount Hermon School for Boys. The Northfield Seminary was founded in 1879, the Mount Hermon School in 1881.',
        'Famous actress alumni include Bette Davis, Elizabeth Perkins, Laura Linney, and Uma Thurman. Although neither Davis nor Thurman graduated from the school.',
        "The school's team name is The Hoggers, named after the student athletes who worked on the school's working farm.",
        'An extracurricular job working at the school - called workjob - is a requirement for every semester, ranging in all aspects of running a boarding school. from kitchen duties to working on the farm, to tutoring.',
        'The annual 4.5 mile Bemis-Forslund Pie Race is one of the oldest foot races in the United States. It rewards the top 200 runners with a handmade apple pie.',
        "One of the school's many traditions includes rope pull, a giant tug-of-war held over Shadow Lake between the senior and junior classes.",
        "When exiting Sage Chapel on the Northfield campus, students would rub the nose of the founder's bust located in the front foyer for luck."
      ],
      'SKILL_NAME': 'Northfield Mount Hermon Facts',
      'GET_FACT_MESSAGE': "Here's your fact: ",
      'HELP_MESSAGE': 'You can say tell me a NMH fact, or, you can say exit... What can I help you with?',
      'HELP_REPROMPT': 'What can I help you with?',
      'STOP_MESSAGE': 'Goodbye!'
    }
  },
  'en-US': {
    'translation': {
      'FACTS': [
        'Mountain Day is an annual tradition when classes are cancelled by surprise the day before and students and faculty hike Northfield Mountain. and as seniors. Mount Monadnock.',
        'The school was a merger in 1972 of two schools founded by Protestant evangelist Dwight Lyman Moody as the Northfield Seminary for Young Ladies. and the Mount Hermon School for Boys. The Northfield Seminary was founded in 1879, the Mount Hermon School in 1881.',
        'Famous actress alumni include Bette Davis, Elizabeth Perkins, Laura Linney, and Uma Thurman. Although neither Davis nor Thurman graduated from the school.',
        "The school's team name is The Hoggers, named after the student athletes who worked on the school's working farm.",
        'An extracurricular job working at the school - called workjob - is a requirement for every semester, ranging in all aspects of running a boarding school. from kitchen duties to working on the farm, to tutoring.',
        'The annual 4.5 mile Bemis-Forslund Pie Race is one of the oldest foot races in the United States. It rewards the top 200 runners with a handmade apple pie.',
        "One of the school's many traditions includes rope pull, a giant tug-of-war held over Shadow Lake between the senior and junior classes.",
        "When exiting Sage Chapel on the Northfield campus, students would rub the nose of the founder's bust located in the front foyer for luck."
      ],
      'SKILL_NAME': 'Northfield Mount Hermon Facts'
    }
  }
}

exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context)
  alexa.APP_ID = APP_ID
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings
  alexa.registerHandlers(handlers)
  alexa.execute()
}

var handlers = {
  'LaunchRequest': function () {
    this.emit('GetFact')
  },
  'GetNewFactIntent': function () {
    this.emit('GetFact')
  },
  'GetFact': function () {
    // Get a random space fact from the space facts list
    // Use this.t() to get corresponding language data
    var factArr = this.t('FACTS')
    var factIndex = Math.floor(Math.random() * factArr.length)
    var randomFact = factArr[factIndex]

    // Create speech output
    var speechOutput = this.t('GET_FACT_MESSAGE') + randomFact
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact)
  },
  'AMAZON.HelpIntent': function () {
    var speechOutput = this.t('HELP_MESSAGE')
    var reprompt = this.t('HELP_MESSAGE')
    this.emit(':ask', speechOutput, reprompt)
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  }
}
