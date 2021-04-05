import chileanBirdsService from './chilean-birds'

const birdService = {}

birdService.all = function () {
  return chileanBirdsService.get('/').then((res) => res.data)
}

birdService.detail = function (q) {
  return chileanBirdsService.get(`/${q}`).then((res) => res.data)
}

export default birdService
