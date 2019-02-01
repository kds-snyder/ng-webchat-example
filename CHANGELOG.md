# Changelog


## v2.0.0
### Supports (Botframework 4.2.*). Some points to note are:
- `noImplicitAny` is set to false in the `tsconfig.json` file.
- The explicit path to the widget styling css file is removed. `"../node_modules/botframework-webchat/botchat.css"` was removed from the `.angular-cli.json` file.
- The API that interfaces with the webchat widget differed in the `app.component.ts`. For more information all the APIS available, refer to the [BotFramework WebChat documentation.](https://github.com/Microsoft/BotFramework-WebChat)
