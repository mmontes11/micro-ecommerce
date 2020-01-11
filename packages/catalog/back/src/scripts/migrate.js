import "common/config";
import { migrate, reset } from "../app/storage";
import logger from "../helpers/log";

const printUsage = () => {
  logger.info(
    `
    usage:
        babel-node src/scripts/migrate.js [opts]
    opts:
        migrate | up: Run pending migrations
        reset | down: Undo migrations
    `,
  );
};

if (process.argv.length < 3) {
  printUsage();
  process.exit(1);
}

const cmd = process.argv[2].trim().toLowerCase();

logger.info(`'${cmd}' starting... 🚀`);

let executedCmd;

switch (cmd) {
  case "migrate":
  case "up": {
    executedCmd = migrate();
    break;
  }
  case "reset":
  case "down": {
    executedCmd = reset();
    break;
  }
  default: {
    printUsage();
    process.exit(1);
  }
}

executedCmd
  .then(() => {
    logger.info(`'${cmd}' ✅`);
    process.exit(0);
  })
  .catch(err => {
    logger.error(`'${cmd}' ❌`);
    logger.error(err);
    process.exit(1);
  });
