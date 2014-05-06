module.exports = function(config){
  config.set({

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins : [
            'karma-jasmine',
            'karma-phantomjs-launcher'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};