import httpServer from './api/httpServer';
import mongoose from 'mongoose';
import { configuration } from './configuration';
import { Context } from './infra/logging/Context';
import { emoji } from 'node-emoji';

const PORT = 4003;

const emojiToShow =
  configuration.ENVIRONMENT === 'prod' ? emoji.coffee : emoji.gear;

//Configure Mongoose
mongoose.connect(configuration.MONGODB.MONGODB_URI, { useNewUrlParser: true });
mongoose.set('debug', true);

const rootContext = new Context();

/*
 ** Handle exceptions and rejections
 */
process.on('uncaughtException', (error: Error) => {
  rootContext.logger.error(error);
  process.exit(1);
});

process.on('unhandledRejection', (error: Error) => {
  rootContext.logger.error(error);
  process.exit(1);
});

httpServer.listen(PORT, () => {
  console.log(`${emojiToShow}  Thullo backend is running at port ${PORT}`);
});
