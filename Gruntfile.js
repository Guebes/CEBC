// module.exports = function(vou passar o argumento/objeto que irá carregar os valores de configuração desse arquivo)
module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //Executar a compilação do less
        less: {
            dirDesenvolvimento: {
                files: {
                    //'caminho (recebe) ponto de partida'
                    './dirDes/style/main.css': './src/style/main.less'
                }
            },
            dirProducao: {
                options: {
                    compress: true,
                    removeComments: true
                },
                files: {
                    //arq-chegada (recebe) arq-saida
                    './dirProd/style/main.css': './src/style/main.less'
                }
            }
        },
        replace: {
            // target do ambDesenv
            ambDesenv: {
                // optios desse ambiente
                options: {
                    //prefixo para a injeção do caminho real
                    prefix: "@@",
                    patterns: [{ //vetor que vai conter o placeholder que será substituido na "injeção" do caminho real CSS
                        // match = Pelo o que o plugin irá buscar
                        match: 'enderecoCSS',
                        //replacement = Caminho real-css
                        replacement: '../style/main.css'
                    },
                    {
                        match: 'enderecoJS',
                        replacement: 'sort.js'
                    }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['src/index.html'],
                    dest: 'dirDes/index.html'
                }]
            },
            ambProd: {
                // optios desse ambiente
                options: {
                    //prefixo para a injeção do caminho real
                    prefix: "@@",
                    patterns: [{ //vetor que vai conter o placeholder que será substituido na "injeção" do caminho real CSS
                        // match = Pelo o que o plugin irá buscar
                        match: 'enderecoCSS',
                        //replacement = Caminho real-css
                        replacement: '../style/main.css'
                    },
                    {
                        match: 'enderecoJS',
                        replacement: 'sort.js'
                    }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['src/index.html'],
                    dest: 'dirProd/index.html'
                }]
            },
        },
        watch: {
            less: {
                files: ['src/style/main.less'],
                tasks: ['less:dirDesenvolvimento', 'less:dirProducao']
            },
            // replace:{
            //     files: ['src/index.html'],
            //     tasks: ['replace:ambDesenv', 'replace:ambProd']
            // }
        },
        uglify: {
            target: {
                files: {
                    'dirProd/script/sort.js': 'src/sort.js'
                }
            }
        }
    })
    //carregar o plugin de tradução less -> css
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('lessParaCss', ['watch'])
    grunt.registerTask('minJS', ['uglify'])
    grunt.registerTask('substituir', ['replace'])
}