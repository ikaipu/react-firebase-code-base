# Web App Code Base

This project is used as an base code platform for web system applications.

## Environments

### Frontend Main Libraries

- [TypeScript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
  - concurrent mode(experimental)
  - hooks
- [React Router v6]()(experimental)
- [Semantic UI]()
- [Yup]()

### Backend Main Libraries

- [Firebase](https://firebase.google.com/)
  - Firebase Auth
  - Firebase FireStore
  - Firebase Cloud Functions
  - Firebase Storage
  - Firebase Hosting

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

- nodenv
- firebase
- VS Code (Recommended)
- Create Firebase project

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
