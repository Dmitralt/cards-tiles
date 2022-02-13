import _ from 'lodash'
import collectionService from './collection.service.js'

(async function() {
  /*await Promise.all(
    _.range(10).map(() => collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  )*/

  await collectionService.generateCardsTiles(1, _.sample([2, 4, 8]))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  .then(async()=>await collectionService.generateCardsTiles(1, _.sample([2, 4, 8])))
  
  /*TODO:структуру ввода изменил на последовательную так как это самый простой из тех способов что пришли в голову, чтоб избежать ошибок с БД при паралельной работе функций
  остальные варианты решения(например с введением семафора) могу реализовать если необходимо сохранять структуру app.js без изменений
  */
})()
  .then(() => console.log('All done')) // eslint-disable-line no-console
  .catch(err => console.log('ERROR', err)) // eslint-disable-line no-console
  .finally(() => process.exit())
