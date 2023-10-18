# <a name="_pbdx6w3k04"></a>**CodeceptJS Acceptance Testing Project**
This repository contains an acceptance testing project created using[ ](https://codecept.io/)[CodeceptJS](https://codecept.io/), a popular JavaScript testing framework that allows you to write end-to-end tests in a simple and efficient manner.
## <a name="_ipqxyr2l12ys"></a>**Getting Started**
Follow these instructions to set up the project and run the acceptance tests locally.
### <a name="_lwv8t8s4x1az"></a>**Prerequisites**
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)
- [nvm](https://github.com/nvm-sh/nvm)
### <a name="_rphizysdxd75"></a>**Installation**
Clone the repository to your local machine.

https://github.com/sandsmedia/end-to-end-tests-redsys.git



Navigate to the project folder.

```bash
cd your-codeceptjs-project
```


Install project dependencies using npm.

```bash
npm install
```

### <a name="_flfakmdg7lwm"></a>**Configuration**
Configure your test environments by editing codecept.conf.js. Make sure you have the required WebDriver helper set up. You can use[ ](https://codecept.io/helpers/Playwright)[Playwright](https://codecept.io/helpers/Playwright) or[ ](https://codecept.io/helpers/Puppeteer)[Puppeteer](https://codecept.io/helpers/Puppeteer) as WebDriver helpers. Puppeteer was used for this project.

If you want to use any additional helpers (e.g.,[ ](https://codecept.io/helpers/REST)[REST](https://codecept.io/helpers/REST)), add them to the configuration file and install them using npm. For example:

```bash
npm install @codeceptjs/rest
```


Define your test scenarios in the \*\_test.js files under the tests directory. Modify these files according to your application's test cases.
### <a name="_m5sv4om2gowd"></a>**Running Tests**
Before running the tests, please make sure you are using the latest version of Node. Version used for this project is version 20.6.0.

```bash
nvm use 20.6.0
```


To run the acceptance tests, execute the following command:

```bash
npx codeceptjs run --steps --verbose
```


This command will execute all the test scenarios defined in your project. The --steps flag will display detailed steps of the test execution.
### <a name="_c1cycoai8yn9"></a>**Test Reports**
After running the tests, you can find the test report in the output directory. This directory will contain screenshots and HTML reports for failed tests, making it easy to identify issues.
### <a name="_ahaedqgtee60"></a>**Customization**
Feel free to customize the testing framework and helpers to fit your project's needs. You can add new test scenarios and helpers as your application evolves.
## <a name="_xklcqk5b7ef6"></a>**Known Issue**
When executing the file, the script sometimes freezes right before the authentication process. No fix has been implemented and you should just retry running the application.
## <a name="_3kp220cjs6be"></a>**Acknowledgments**
- [CodeceptJS Documentation](https://codecept.io/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- nvm
