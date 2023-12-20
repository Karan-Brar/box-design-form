## Here is a quick demo of the form in action

https://github.com/Karan-Brar/box-design-form/assets/78655400/de32b348-98a8-4d5c-ab76-1ad51a02a897


## Quick for a production deployment

For security purposes instead of using a URL in the source code directly connect my MongoDB cluster with the Next.js App, I have stored the the connection URL as an environment variable.
Additionally, it is not good practice to push the .env file to a remote repository so in case this app is used in a production environment, the enviroment will need a MONGODB_URI environment variable which connects to a MongoDB cluster.

