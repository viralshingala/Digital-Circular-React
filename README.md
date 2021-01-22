
## Development Preparation

### Local Installation

1. Download [Node](https://nodejs.org/en/) version 10.15+
   > You can also download and setup [NVM](https://github.com/creationix/nvm) if you want to manage multiple versions of node.
2. Download [GitKraken](https://www.gitkraken.com/download)
3. Recommended to use [VSCode](https://code.visualstudio.com/) but use your own code editor

   > If you use VSCode download/install a plugin call [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) and add once installed Press Shift + Alt + D, it will ask for:

   > GitHub Token: 261675ac8a9ee3821688608b1db3d76662464883
   > GitHub Gist: bc421ef018f20ae086e5bd2fe1ae379a

### Getting the files

1. Login to [Azure Repo](https://dev.azure.com/petm-webdev/_git/WebDev)
2. Click on your Avatar icon on the top right and click Security ![Security Logo](/config/images/security_settings.png)
3. Create a Personal Access Token by clicking New Token, give it Full access and change the date to as far out as you can. ![Personal Token](/config/images/personal_token.png)
4. Copy and save the token somewhere safe
5. Open GitKraken click on the Folder icon top left
6. Click on Clone > Clone with URL
7. Select the folder to determine where to clone the files
8. The URL will be the master Repo https://petm-webdev@dev.azure.com/petm-webdev/WebDev/_git/WebDev
9. Clone the repo!
10. Open the repo in GitKraken
11. Go to preferences by click on the top right burger menu
12. Click on Git Flow and make sure that develop is set to development and click Init Git Flow button
13. Open up VSCode or your editor and open the directory where you clone the files to
14. Open your terminal and run the commands below

## Run The Commands

Start your Setup
`npm run setup`

Run Development
`npm start`

Build for Production
`npm run build`

## Understanding folder structure

The entry point for the build is the "index.js" at the root of the src folder in client.

1. Pages

All page builds can be found under client -> src -> views.
Choose US for a US page and then LandingPages.
All new pages should be created here.

2. Components 

All components are found in client -> src -> components
@TODO organize them atomically


## Creating your first test

## Creating your first presentation component

## Creating your first storybook story

## Creating you first git feature with Git Flow from start to finish
