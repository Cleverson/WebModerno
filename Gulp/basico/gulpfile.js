const gulp = require('gulp')

gulp.task('default', () => {
  gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
  return (
    gulp
      // .src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
      // .src('pastaA/*.txt') - Incluido depois a pastaAA dentro da pastaA
      .src('pastaA/**/*.txt')
      // .pipe(tranformacao1())
      // .pipe(tranformacao2())
      .pipe(gulp.dest('pastaB'))
  )
})

gulp.task('antes1', () => {
  console.log('Antes1!!!')
})

gulp.task('antes2', () => {
  console.log('Antes2!!!')
})

gulp.task('fim', () => {
  console.log('Fim!!!!')
})
