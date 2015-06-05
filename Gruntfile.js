/*!
sonar.css - http://urbanoalvarez.es/sonar.css/
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Alejandro U. Alvarez
*/

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        tag: {
            banner: '/*!\n' +
                ' * <%= pkg.name %>\n' +
                ' * <%= pkg.homepage %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @version <%= pkg.version %>\n' +
                ' * Released under the <%= pkg.license %> license.\n' +
                ' */\n'
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/sonar.css': 'sass/sonar.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'file'
                },
                files: {
                    'css/sonar.min.css': 'sass/sonar.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'sass/**',
                tasks: ['sass:dev', 'sass:dist']
            }
        },
        clean: {
          build: {
            src: ["build"]
          }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: [
                            'css/sonar.css',
                            'index.html'
                        ],
                        dest: 'build/'
                    }
                ],
            },
        },
        'gh-pages': {
            options: {
                base: 'build'
            },
            src: ['**']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass:dev', 'sass:dist', 'copy']);
    grunt.registerTask('deploy', ['build','gh-pages']);
};
