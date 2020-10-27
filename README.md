Mi Contabilidad App
===================

Mi Contabilidad: An easy app that manage your day to day expenses.

## Requirements

* cordova `^10.0.0`
* gradle `^6.7.0`

To build and run apps, you need to install SDKs for each platform you wish to target.  
To check if you satisfy requirements for building the platform:

``` bash
$ cordova requirements

Requirements check results for android:
Java JDK: installed 1.8.0
Android SDK: installed true
Android target: installed android-30,android-29
Gradle: installed /usr/local/Cellar/gradle/6.7/bin/gradle

```

## Dependencies

Mi Contabilidad use `npm` to manage third-party packages now.

Then install all dependencies, in repo's root:

```
$ npm install 
```

## Cordova App Guides

Install the cordova as globally.

```
$ npm install cordova -g
```

### 1. Create App

Go to the directory where you maintain your source code, and run a command such as the following:

```
$ cordova create micontabilidad mx.ninacode.micontabilidad MiContabilidad
```

### 2. Check out source code

Because the Cordova app directory should not already exist, so check out the Mi Contabilidad source code in this step.

```
$ cd micontabilidad  
$ git init   
$ git remote add origin https://github.com/germanngc/micontabilidad_app.git
$ git fetch  
$ git reset --hard origin/main  
```

### 3. Add Platforms

Before you can build the project, you need to specify a set of target platforms.

```
$ cordova platform add android --save
$ cordova platform add browser --save
```

### 4. Add Plugins

You need to add plugins that provide access to core Cordova APIs.

```
$ cordova plugin add cordova-plugin-whitelist cordova-plugin-spinner
```

### 5. Build the App

Run the following command to iteratively build the project:

```
$ npm run build
$ cordova build android
```

### 6. Test the App on an Android Device with Android Studio

* Using the command

```
$ cordova run android
```

## Web App Guides

### 1. Preview

Mi Contabilidad use webpack browser sync server to develop, Just run it in repo's root:

```
$ npm run serve
```

Web app will be available on `http://localhost:3000/`

### 2. Release

```
$ npm run build
```

The result is available in `www/` folder.

## Demo

[https://ninacode.mx/]

## License

Copyright (c) 2018 - 2020 Nina Code. MIT Licensed, see [LICENSE] for details.

[https://ninacode.mx/]: https://ninacode.mx/
[LICENSE]:https://github.com/germanngc/micontabilidad_app/blob/main/LICENSE.md