"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chapter_3_review_1 = require("./chapter_3_review");
exports.default = () => {
    const logger = chapter_3_review_1.LoggerFactory.createLogger();
    logger.debug('Debug me');
    logger.warn('Warn me');
    logger.info('Info me');
    logger.error('Error me');
};
