# Web App Code Base

This project is used as an base code platform for web system applications.

## Environments

### Frontend Main Libraries

- [TypeScript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
  - [concurrent mode(experimental)](https://reactjs.org/docs/concurrent-mode-intro.html)
  - [hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Router](https://github.com/remix-run/react-router)(v6 experimental)
- [Semantic UI React](https://react.semantic-ui.com/)
- [Yup](https://github.com/jquense/yup)

### Backend Main Libraries

- [Firebase](https://firebase.google.com/)
  - [Firebase Auth](https://firebase.google.com/docs/auth)
  - [Firebase Cloud Firestore](https://firebase.google.com/docs/firestore)
  - [Firebase Cloud Functions](https://firebase.google.com/docs/functions)
  - [Firebase Storage](https://firebase.google.com/docs/storage)
  - [Firebase Hosting](https://firebase.google.com/docs/hosting)

### Main Dev Tools

- [Storybook](https://storybook.js.org/)
- [Chromatic](https://www.chromatic.com/)
- [Cypress](https://www.cypress.io/)
- Linters
  - [Prettier](https://prettier.io/)
  - [ESLint](https://eslint.org/)
  - [stylelint](https://stylelint.io/)
- [Github Actions](https://github.com/actions)

## Installation

### Preparation

Before installing the App development environment, check if you already have these.

#### Install [nodenv](https://github.com/nodenv/nodenv)

[How to Install](https://github.com/nodenv/nodenv#installation)

#### Install [VS Code](https://code.visualstudio.com/) (Not required but recommended)

### Install Develop Environment

This step is required only for your first settings.

Once you finish this, You may skip this flow.

#### Clone this repository

```sh
git clone https://github.com/ikaipu/code-base.git
```

go to the project root folder

```sh
cd code-base
```

#### Set desired npm version

```sh
nodenv install
```

```sh
nodenv local
```

```sh
node -v
```

Check if the node version is the same with [.node-version](.node-version)

#### Create your Firebase Project

This needs your own firebase project.
Please refer [this](https://cloud.google.com/firestore/docs/client/get-firebase) to know how to create Firebase project.

#### Login to your Firebase Project from CLI

Check if your are on the project root folder.

```sh
firebase login
```

#### Initialize Firebase Project

Make `.firebaserc` file and put it under the project root folder. You can copy [.firebaserc.sample](.firebaserc.sample) to get the format and change <your-firebase-project-id> to your Firebase Project ID.

Set your Firebase Project ID to Firebase Cil.

```sh
yarn firebase use
```

#### Set up Dependencies for the Frontend App

```sh
yarn
```

#### Put Environment Configuration Files

Make `.env` file and put it under the project root folder. You can copy [.env.sample](.env.sample) to get the format and change it to your own values.

You can set Firebase related values from [Firebase config object can be referred from your Firebase console](https://support.google.com/firebase/answer/7015592#zippy=%2Cin-this-article).

#### Set up Dependencies for the Backend App

```sh
cd functions
```

```sh
yarn
```

#### Put Firebase Admin Configuration files

Generate and download a firebase admin private key json file.
Refer to [this flow](https://firebase.google.com/docs/admin/setup#initialize-sdk).
You may get the json file with like this name.

```file
<your-project-id>-firebase-adminsdk-XXXXX-XXXXXXXXXX.json
```

Change fhe file name to

```file
code-base-firebase-adminsdk.json
```

Put it under `functions/src` folder

#### Build the Backend App

```sh
yarn build
```

Go back to your project root folder

```sh
cd ..
```

## Let's Run the App Locally

Check if you're already on the project root folder.

Run

```sh
yarn emulate
```

Open new terminal window and Run

```sh
yarn start
```

You can browse the App to visit `http://localhost:3000` on your browser.

## Advanced Dev Settings

This is not required to start your development your project.

But it provides CI Automated environment by using [Github Actions](https://github.com/actions) and help you a lot.

### Create Chromatic Project

Refer to [this](https://www.chromatic.com/docs/setup) to set up Chromatic.

### Create Cypress Project

Refer to [this](https://dashboard.cypress.io/signup) to set up Cypress dashboard.

### Set Secret Keys to Your Github Repository

Set these secret keys to your Github Repository. Refer to [this](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)
 to set.

| Key                             | Value                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BASE64_FIREBASE_SERVICE_ACCOUNT | Your [Firebase Admin service account](https://firebase.google.com/docs/admin/setup#initialize-sdk) private key json file encoded by base64                                |
| CHROMATIC_TOKEN                 | Your [Chromatic project token](https://www.chromatic.com/docs/cli#required-options)                                                                                       |
| CYPRESS_PROJECT_ID              | Your [Cypress Project ID](https://firebase.google.com/docs/cli#cli-ci-systems)                                                                                            |
| CYPRESS_RECORD_KEY              | Your [Cypress record key](https://firebase.google.com/docs/cli#cli-ci-systems)                                                                                            |
| FIREBASE_SERVICE_ACCOUNT        | Your [Firebase Admin service account](https://firebase.google.com/docs/admin/setup#initialize-sdk)  private key json file                                                 |
| FIREBASE_TOKEN                  | Your [Firebase CI token](https://firebase.google.com/docs/cli#cli-ci-systems)                                                                                             |
| REACT_APP_FIREBASE_API_KEY      | API key in [Firebase config object can be referred from your Firebase console](https://support.google.com/firebase/answer/7015592#zippy=%2Cin-this-article)               |
| REACT_APP_FIREBASE_APP_ID       | APP ID in [Firebase config object can be referred from your Firebase console](https://support.google.com/firebase/answer/7015592#zippy=%2Cin-this-article)                |
| REACT_APP_FIREBASE_AUTH_DOMAIN  | Auth Domain in [Firebase config object can be referred from your Firebase console](https://support.google.com/firebase/answer/7015592#zippy=%2Cin-this-article)           |
| REACT_APP_FIREBASE_DATABASE_URL | Firebase Database URL in [Firebase config object can be referred from your Firebase console](https://support.google.com/firebase/answer/7015592#zippy=%2Cin-this-article) |
| REACT_APP_FIREBASE_PROJECT_ID   | Firebase Project ID in [Firebase config object can be referred from your Firebase console](https://support.google.com/firebase/answer/7015592#zippy=%2Cin-this-article)   |
