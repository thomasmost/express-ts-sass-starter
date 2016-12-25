# express-ts-sass-starter
Ready to deploy starter-app configured for webpack, typescript, and sass

## Features

###WebPack preconfigured

Once you've forked the repository and installed dependencies, run `webpack --watch`

Client/server typescript and SASS will be compiled, as well as custom fonts, sass-loaded image assets, and index.html, all from `src`

Currently the server is located in `\dist` and all compiled client files are built to `\public`

###heroku-ready
cd to repository after cloning. Make sure you have the heroku CLI and toolbelt installed. 

Run:

`heroku create`

`git push -u heroku master`

The app will build and deploy to a heroku dyno.


###Framework Agnostic
I purposefully haven't included Angular 2, React, or another javascript framework in this project. 
It grew out of an InfernoJS project, which is fairly light-weight, and I wanted to keep it that way.
This project is intended to help set up a new project up for success with a full-featured code-to-deploy build process than it is about showcasing a particular JS framework.

###Known Issues
The server is currently being compiled with a tsc command, while the client is compiled by webpack. Need to investigate if this can be simplified.
It's a little annoying that certain files in the public directory are built, and others need to start there. It would be nice if the entire public directory could be built from source
I'll be making improvements as I go, feel free to post suggestions in Issues.
