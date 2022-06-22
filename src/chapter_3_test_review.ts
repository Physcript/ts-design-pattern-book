
import { LoggerFactory } from './chapter_3_review'


export default () => {
  const logger = LoggerFactory.createLogger()
  
  logger.debug('Debug me')
  logger.warn('Warn me')
  logger.info('Info me')
  logger.error('Error me')
}
