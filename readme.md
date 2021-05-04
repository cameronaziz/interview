# TKMP Interview

Take a moment to familiarize yourself with the application.

The goal of the application is to have a consent pop up from the bottom.
When a user selects 'Allow', they will be able to randomly assigned into an A/B test.
If they select 'Deny', they should not be assigned a test group.

There are many parts of this exercise. It is completely okay if we don't finish. We are not only watching you work through the problem, but **how** you work through the problem.

---
See see your work, we will be checking out a branch titled `FIRSTNAME_LASTNAME`. Once complete, we will commit your code and then pushed to origin. Although this work is a part of this exercise, I'll make sure to remind you when we are done.

---
Each component of the application is wrapped in an `displayErrorWrapper` higher order component. These will help you with debugging. If you notice them in the UI, you may click them to see both the component stack and the call stack of the error. The developer tools console and network tab may also be helpful.

All code changes will be within the `packages/app/src` folder. All other directories can be ignored.

---
## Exercise
To run the application, clone this repository and run the following from the root of the application.
```
> yarn
> yarn all:start
```
---
## Requirements
This exercise requires both `node` and `yarn` to be installed on your local machine.
### Node Install
#### **macOS**
- HomeBrew
  1. `brew install node`
- cURL
  1. `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
- Web
  1.  Navigate to the Node install website [here](https://nodejs.org/en/download/).
  2.  Click the macOS Installer icon to begin the download.
  3.  Install the `.pkg`.

#### **Windows**
1.  Navigate to the Node install website [here](https://nodejs.org/en/download/).
2.  Click the Windows Installer icon to begin the download.
3.  Install the `.msi`.
  
### Yarn Install
- Ensure that Node is [installed](#node-install).
- Open a terminal window.
- Execute `npm install --global yarn`.
