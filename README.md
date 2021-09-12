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
  - [Firebase FireStore](https://firebase.google.com/docs/firestore)
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

#### Install [Firebase CLI](https://firebase.google.com/docs/cli)

[How to Install](https://firebase.google.com/docs/cli#install_the_firebase_cli)

#### Install [VS Code](https://code.visualstudio.com/) (Not required but recommended)

#### Create your Firebase project

This needs your own firebase project.
Please refer [this](https://cloud.google.com/firestore/docs/client/get-firebase) to know how to create Firebase project

### Set desired npm version

```nodenv install```

```nodenv local```

```node -v```

Check if the node version is the same with [.node-version](.node-version)

## Set up Dependencies for the Frontend App

```yarn```

### Put Environment Configuration Files

Put `.env` file under the project root folder.
Refer to [.env.sample](.env.sample) to see the format.

### Set up Dependencies for the Backend App

```cd functions```

```yarn```

### Put Firebase Admin Configuration files

Generate and download a firebase admin private key json file.
Refer to [this flow](https://firebase.google.com/docs/admin/setup#initialize-sdk).
You may get the json file with like this name.

```<your-project-id>-firebase-adminsdk-XXXXX-XXXXXXXXXX.json```

Change fhe file name to `code-base-firebase-adminsdk.json`

Put it under `functions/src` folder

### Build the Backend App

```yarn build```

## Getting Started

### Please Set up These Before Running it

You don't have to do it if you already did it then skip the section.

#### Login to your firebase project from CLI

```yarn firebase login```

Choose your firebase project ID.

```yarn firebase use <your-firebase-project-id>```

### Let's Run the Apps Locally

Check if you're already on the project root folder.

Run

```yarn emulate```

Open new terminal window and Run

```yarn start```

You can browse the App to visit `http://localhost:3000` on your browser.
