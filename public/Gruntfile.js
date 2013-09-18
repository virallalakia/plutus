module.exports = function(grunt) {
    'use strict';
    //All grunt related functions

    grunt.initConfig({
        jshint: {
            files: ['gruntfile.js', 'app/modules/**/*.js', 'app/*.js'],
            options: {
                eqeqeq: true,
                eqnull: true,
                latedef: true,
                undef: true,
                globalstrict:true,
                force:true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    Ember: true,
                    $: true,
                    App: true
                }
            }
        },
        concat: {
            vendor: {
                src: ['app/lib/jquery-1.9.1.js', 'app/lib/bootstrap.js',
                      'app/lib/handlebars-1.0.0.js', 'app/lib/ember-1.0.0.js',
                      'app/lib/ember-data.js'],
                dest:'debug/lib.js'
            },
            app: {
                src: ['app/app.js', 'debug/templates.js', 'app/modules/**/*.js'],
                dest:'debug/app.js'
            },
            test: {
                src: ['app/tests/**/*.js', 'app/tests/*.js'],
                dest: 'qunit/tests.js'
            },
            testLib: {
                src:'debug/lib.js',
                dest:'qunit/lib.js'
            },
            testApp: {
                src:'debug/app.js',
                dest:'qunit/app.js'
            }
        },
        cssmin: {
            debug: {
                files: {
                    'debug/app.css': ['app/css/app.css', 'app/css/bootstrap.css']
                }
            },
            release: {
                files: {
                    'release/app.css.min': ['app/css/app.css', 'app/css/bootstrap.css']
                }  
            }
        },
        ember_handlebars: {
            compile: {
                options: {
                    processName: function(fileName) {
                        var arr = fileName.split("."),
                            path = arr[arr.length - 2].split("/"),
                            name = path[path.length - 1];
                        name = name.replace(/-/g, "/");
                        return name;
                    }
                },
                files: {
                    "debug/templates.js": "app/modules/**/*.hbs"
                }
            }
        },
        clean: ["debug/images/", "release/images/"],
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'app/images/',
                    src: ['**'],
                    dest: 'debug/images/'
                }, {
                    expand: true,
                    cwd: 'app/images/',
                    src: ['**'],
                    dest: 'release/images/'
                }]
            }
        },
        uglify: {
            build: {
                src: ['debug/lib.js','debug/app.js'],
                dest: 'release/app.min.js'
            }
        },
        qunit: {
            all: {
                options: {
                    urls: [
                        'http://localhost:3002/index.html'
                    ],
                    force:true
                }
            }
        },
        watch: {
            scripts: {
                files: ['app/lib/*.js', 'app/*.js', 'app/modules/**/*.js', 'app/css/*.css',
                        'app/modules/**/*.hbs', 'app/tests/**/*.js', 'app/tests/*.js'],
                tasks: ['ember_handlebars','concat', 'cssmin'],
                options: {
                    debounceDelay: 100
                }
            },
            tests: {
                files: ['app/tests/*.js'],
                tasks: ['qunit'],
                options: {
                    debounceDelay: 100
                }
            },
            images: {
                files: ['app/images/*'],
                tasks: ['clean', 'copy'],
                options: {
                    debounceDelay: 100
                }
            }
        },
        connect: {
            debug: {
                options: {
                    port: 3001,
                    base: 'debug'
                }
            },
            release: {
                options: {
                    port: 3000,
                    base: 'release'
                }
            },
            test: {
                options: {
                    port: 3002,
                    base: 'qunit'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ember-handlebars');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-qunit');

    grunt.registerTask('default', ['ember_handlebars', 'concat', 'cssmin', 'clean', 'copy',
                                   'connect', 'watch']);
    grunt.registerTask('release', ['jshint','uglify', 'cssmin', 'clean', 'copy']);
};
