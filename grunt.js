module.exports = function (grunt) {

	grunt.initConfig({

		mocha: {
			all: {
				src: 'spec/index.html',
				run: true
			}
		},

	});

	grunt.loadNpmTasks('grunt-mocha');

	grunt.registerTask('test', 'mocha');
	grunt.registerTask('default', 'test');

};