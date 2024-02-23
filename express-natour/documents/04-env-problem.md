Hello, this is Copilot. I can help you with your code. blush

The error you are getting is because you are trying to set the NODE_ENV environment variable in a way that is not compatible with Windows PowerShell. Windows PowerShell does not use the = sign to assign environment variables, but rather the $ sign. For example, you should write:

$NODE_ENV=development

Also, Windows PowerShell does not use the && operator to run multiple commands in one line, but rather the ; operator. For example, you should write:

'$NODE_ENV=development; nodemon server.js'

Alternatively, you can use a package like cross-envhttps://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman to set environment variables in a cross-platform way. You can install it globally with:

npm install -g cross-env

And then use it in your command like:

'cross-env NODE_ENV=development nodemon server.js'

I hope this solves your problem. If you want to learn more about setting environment variables in Windows PowerShell, you can check out this web pagehttps://stackoverflow.com/questions/69333957/the-term-node-env-development-is-not-recognized-as-the-name-of-a-cmdlet-funct.
