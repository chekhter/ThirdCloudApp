# ThirdCloudApp

User roles and authorizations added. Authorizations can in principle be added to `xs-app.json` but we perform authorization check in
the backend Node.js module instead. Roles are defined in `xs-security.json`

## Installation
Create an instance of xsuaa service out of the project root folder with

`cf cs xsuaa application mythird-uaa -c ./xs-security.json`

Install npm dependencies with npm install in both `web` adn `app` folders

Return to root and deploy app via `cf push`
