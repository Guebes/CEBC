// Config inicial da ferramenta 
module.exports = function (ArgGrunt) {

    ArgGrunt.initConfig({

        pkg: ArgGrunt.file.readJSON('package.json'), // atributo de configuração.
        less: {
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.css': 'main.less'
                }
            }
        },
        concurrent: {
            target: ['less','Saudacao']
        }
    })

    // nome da tarefa.
    ArgGrunt.registerTask('Saudacao', function () {
        const pronto = this.async() // async() é uma função-callback que espera o término do processamento de uma tarefa.

        setTimeout(function () {

            console.log('Olá')
            pronto()
        }, 5000)
    })

    ArgGrunt.loadNpmTasks('grunt-contrib-less')
    ArgGrunt.loadNpmTasks('grunt-concurrent')

    // vetor de todas as funções que serão executadas nessa tarefa. 
    ArgGrunt.registerTask('default', 'concurrent')
}