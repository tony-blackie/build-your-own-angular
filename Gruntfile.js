module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['src/**/*.js', 'test/**/*.js'],
			options: {
				globals: {
					_: false,
					$: false,
					jasmine: false,
					describe: false,
					it: false,
					expect: false,
					beforeEach: false,
					afterEach: false,
					sinon: false
				},
				browser: true,
				devel: true,
				jasmine: false
			}
		},
		testem: {
			unit: {
				options: {
					framework: 'jasmine2',
					launch_in_dev: ['PhantomJS'],
					before_tests: 'grunt jshint',
					serve_files: [
						'src/**/*.js',
						'test/**/*.js',
						'node_modules/sinon/pkg/sinon.js'
					],
					watch_files: [
						'src/**/*.js',
						'test/**/*.js'
					] }
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-testem');
	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('default', ['karma']);

};