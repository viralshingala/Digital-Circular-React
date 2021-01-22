var chalk = require("chalk");
// Simple comment
var chalkProcessing = chalk.green.bold;

module.exports = env => {
  console.log(chalkProcessing("$env=", env));
  console.log(chalkProcessing("===============================\n"));
switch (env) {
    case "prod":
      console.log(chalkProcessing("==============================="));
      console.log(chalkProcessing("=  PetSmart Production Build  ="));
      console.log(chalkProcessing("===============================\n"));
      console.log(
        chalkProcessing(`🎬  ${env} build started, Please wait...🐶 🐱 🐰 🐹\n`)
      );
      console.log(chalkProcessing("===============================\n\n"));
      mode: `${env}`;
      process.env.NODE_ENV = "production";
      return require("./config/webpack.prod");
      break;

    case "server":
      console.log(chalkProcessing("================================"));
      console.log(chalkProcessing("=  PetSmart SSR Build  ="));
      console.log(chalkProcessing("================================\n"));
      console.log(
        chalkProcessing(`🌋 ${env} SSR started, Please wait...🐶 🐱 🐰 🐹\n`)
      );
      console.log(chalkProcessing("===============================\n\n"));
      mode: `${env}`;
      return require("./config/webpack.server");
      break;

    case "dev":
    default:
      console.log(chalkProcessing("================================"));
      console.log(chalkProcessing("=  PetSmart Development Build  ="));
      console.log(chalkProcessing("================================\n"));
      console.log(
        chalkProcessing(`🎨  ${env} build started, Please wait...🐶 🐱 🐰 🐹\n`)
      );
      console.log(chalkProcessing("===============================\n\n"));
      mode: `${env}`;
      process.env.NODE_ENV = "development";
      return require("./config/webpack.dev");
      break;
  }
};
