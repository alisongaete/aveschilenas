import trae from 'trae'
import configService from './config'

const chileanBirdsService = trae.create({
  baseUrl: configService.apiUrl
})

export default chileanBirdsService
