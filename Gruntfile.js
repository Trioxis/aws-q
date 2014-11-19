module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		options: {

		},
		simplemocha: {
			all: {
				src: ['test/**/*.js']
			},
		},
	});

	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('test', ['simplemocha']);
};
