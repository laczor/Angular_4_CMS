 
# **Angular_4_CMS**
This is a basic CMS system written for Angular 4. Completley open source feel free to improve it!

## Brief description

**angularcms:** Contains all of the angular 4 code for our application

**nodecmsapi:** Contains all of the code for our backend, where NodeJS is running with ExpressJS

**sampleDatabaseFiles:** Contains the exported data from my mongoDB database , so it is fast to import it and start the developement.

## Run everything at LocalHost
1. Run MongoDB server + connect a mongoDB database to it.
1. Start our nodeJS server
1. Start our Angular4
1. Summary

## 1.0 Run MongoDB server + connect a mongoDB database to it
1.0 Download the files from this git repository
1.1 Install all of the dependecies at the following folders
- angularcms/
- nodecmsapi/
```javascript
npm install
```

1.2 **Install MongoDB**server (you can download it from here [https://www.mongodb.com/](https://www.mongodb.com/))
1.3 **Start mongoDB server**

Go to the root directory of mongoDB, in this case this is my folder path: **C:\Program Files\MongoDB\Server\3.6\bin**

Open NodeJS command prompt and Run the following command at your  mongoDB root directory
```javascript
mongod
```
This will start the server at **localhost:port 27017**

1.4 **Connect to the mongoDB server:**
- Option1:
  - Open a new nodeJs command prompt at the same path as above and run
```javascript
mongo
```
This will open the mongoDB shell, where you can write all of your queries
- Option:2
  - Use mongoDB Compass ([https://www.mongodb.com/products/compass](https://www.mongodb.com/products/compass))
Simply connect to the port 27017 using the interface and it is ready!

1.5 **Import** all of the **sample codes** with this command

Open a new nodeJS command prompt at the same path like above and run the following code.
(it will import all data from the sampla database Files)
 
```javascript
mongorestore -d db_name path/
```

**Now we have a mongodb server is running and a database  with data connected to it.**

## 2.0 Start our nodeJS server
 2.1 **Inform node where is the database**
 
 At **nodecmsapi/config/database.js** there is the configuration where nodeJS is looking for data.
 So right now, since we run our mongoDB server ar 27017 everything is fine.
```javascript
 module.exports = {
    database: 'localhost:27017/Angular4CMS'
}
```
 
 2.2 **Set port for nodeJS server + set header origin**
 
 **nodecmsapi/app.js**
  Server is running at port: **3000**
```javascript
 // Start the server
var port = 3000;
app.listen(port, function () {
    console.log('Server running at ' + port);
});
```
 
 Access-Control-Allow-Origin is set to port: **4200**(this is where our angular application will be runnin)
```javascript
     // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

```

2.3 **Run NodeJS server**
Go to your folder directory where you have downloaded the project from github.
Open a new nodeJS command prompt, copy your folder path to the project and start the server.
```javascript
node app.js
```

**Now we have the nodeJS backend server up and running at port 3000.**

## 3.0 Start our Angular4

3.1 **Inform Angular where is our nodeJS server**

**angularcms/src/app/nodeServerURL.ts**
```javascript
const nodeServerURL = "http://localhost:3000";
export default nodeServerURL;
```
All of the written services which will make http request, will make it to this address.

3.2 **Start angular 4**

Open a new nodeJs command prompt, insert the path to the **angularcms/** folder and run the following command
```javascript
 ng serve
```
It will start up our angular4 application at port:**4200.**

**So our angular4 application is running as well!**

## 4.0 Summary
**MongoDB Server:** is running at **localhost:27017** -  this is where our database is connected as well
**NodeJS Server:** is running at **localhost:3000**  - this is where we are waiting for the API calls.
**Angular4:** is running at **localhost:4200** - this is what we can type in the browser and interact with it.



