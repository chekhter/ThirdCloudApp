# ThirdCloudApp

User roles and authorizations added. Authorizations can in principle be added to `xs-app.json` but we perform authorization check in
the backend Node.js module instead. Roles are defined in `xs-security.json`

Roles are then added in CF cockpit: 

1. Go to selected Subaccount and click on Security --> Role Collections
2. Add a new role collection (select a name and description of your choice)
3. Click on the newly created role collection link and Add necessary roles by pressing the corresponding button
   Application Identifiers and role IDs appear as dropdown controls.
4. Go to Security --> Trust Configuration, select the default id provider and add the new role collection to your email.


## Installation
Create an instance of xsuaa service out of the project root folder with

`cf cs xsuaa application mythird-uaa -c ./xs-security.json`

Install npm dependencies with npm install in both `web` adn `app` folders

Return to root and deploy app via `cf push`
