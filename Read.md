Deploy Backend and Frontend to Heroku



#########check heroku logs
heroku logs --tail


#########check heroku bash
heroku login
heroku run bash -a APPNAME
$ cd app



######### problem with react app?
$ cd client
$ rm -r node_modules
$ npm install
$ npm start   # works!