# Node Package Manager (NPM)

NPM is a package manager for JavaScript programming language. It is the default package manager for JavaScript runtime environment Node.js. NPM hold almost half a million packages of free, reusable code. NPM is also opensource so anyone can contribute to it.

## Basic NPM
* To check version run `npm -v`
* To get specific version of npm `npm i -g npm@<version-num>`
    * `i` for install
    * `-g` for global scope

* Get initialize package.json
    * `npm init`
    * To initialize with all default values: `npm init --yes`

- `package.json` holds the build requirement of the project.
    - With `npm install` we can download all the dependencies for us.
    - `npm list` will list all dependencies and its version number.
        - `npm list --depth=0` will show the dependencies you actually use.
    - `npm view <package> [property]` will list information about the package. Including its dependencies and that depencies version.

- Updating npm packages
    - `npm outdated` will show current/wanted/latest package versions.
    - `npm update` will update the packages.
        - In `package.json`, if a package version has the `^` symbol, it will perform minor update on the package. That is, `2.2 -> 2.8` but not `2.8 -> 4.5` which is a major update.
    - Perform major update with `npm i -g npm-check-updates`
        ```
        sudo npm i -g npm-check-updates
        npm-check-updates
        ncu -u
        npm install
        ```
    - Uninstall a package with `npm un <package>`

## Adding Dev Dependencies
- These are the dependencies we want to have during development but not during deployment.
    - Running `npm i jshint --save-dev` will create a new property called _devDependencies_. Which will not be included in production.

## Publishing Npm package
1. Create a `package.json` file with `npm init --yes`
2. Define a function in `index.js` and export that function.
3. Create/login to NPM account.
    * Create account by running `npm adduser`
    * Login by running `npm login`
4. Publish using `npm publish`
5. We can now use the package in our projects using using `npm i <our-package>`

* To update our published npm package run `npm version` with the following option. (Note: We can also do this manually by editing out `package.json`)
    * `major` will change _**x**_.0.0
    * `minor` will change 0._**x**_.0
    * `patch` will change 0.0._**x**_
* `npm publish` to publish new version.
