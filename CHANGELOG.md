# Changelog

## ng-webchat v3.0.0

### Supports (Botframework WebChat 4.3.0) on **Angular 6+**

-   Starting from Angular 6, Angular CLI no longer shims any NodeJs module for use in the browser. [Click here for more information](https://github.com/angular/angular-cli/issues/9827). This caused us to directly use the CDN version of WebChat instead of installing the npm packages, as the npm packages depend on Node JS global packages, which causes the Angular CLI build to break.
-   The CDN link is included in the [index page](./src/index.html).
-   If you insist on using the WebChat npm packages (similar to v2.0.0), you will have to manually install shims for the `[path, stream, crypto, process, global, buffer]` Node Js constructs.
-   The way the WebChat control is attached to a `div` element in Angular remains unchanged.

---

## ng-webchat v2.0.0

### Supports (Botframework 4.2.\*) on **Angular 5**

-   `noImplicitAny` is set to false in the `tsconfig.json` file.
-   The explicit path to the widget styling css file is removed. `"../node_modules/botframework-webchat/botchat.css"` was removed from the `.angular-cli.json` file.
-   The API that interfaces with the webchat widget differed in the `app.component.ts`. For more information all the APIS available, refer to the [BotFramework WebChat documentation.](https://github.com/Microsoft/BotFramework-WebChat)

---
