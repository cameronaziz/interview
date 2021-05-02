# TKMP Interview
Take a moment to familiarize yourself with the application. The goal of the application is to have a consent pop up from the bottom. If the user selects 'Allow', they will be able to randomly assigned into an A/B test. If they select 'Deny', they should not be assigned a test group.

There are many parts of this exercise. It is completely okay if we don't finish. We are not only watching you work through the problem, but **how** you work through the problem.

---
Each component of the application is wrapped in an `errorBoundary` higher order component. These will help you with debugging. If you notice them in the UI, you may click them to see both the component stack and the call stack of the error. The developer tools console and network tab may also be helpful.

All code changes will be within the `packages/app/src` folder. All other directories can be ignored.

---
This exercise requires both `node` and `yarn` to be installed.
## Node Install
### macOS
&nbsp;&nbsp;&nbsp;&nbsp;**HomeBrew**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`brew install node`\
&nbsp;&nbsp;&nbsp;&nbsp;**cURL**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`\
&nbsp;&nbsp;&nbsp;&nbsp;**Web** 
-  Navigate to the Node install website [here](https://nodejs.org/en/download/).
-  Click the macOS Installer icon to begin the download.
-  Install the `.pkg`.

### Windows
- Navigate to the Node install website [here](https://nodejs.org/en/download/).
- Click the Windows Installer icon to begin the download.
- Install the `.msi`.
  
## Yarn Install
- Open a terminal window
- Execute `npm install --global yarn`
---

To run the application, clone this repository and run the following from the root of the application.
```
> yarn
> yarn all:start
```
---
---
## Part 1
The application seems to have a few bugs. It doesn't look like users are able to confirm to allow cookies. Remember, fixing one problem might show another.

---
## Part 2
Your project manager just reported another bug! It seems that every user that clicks to allow cookies keeps getting the same prompt when they come back to our site. We should be able to remember the selection for a year.
> ### Solution
> - The `cookie.write` function is setting the expiry time to current time.
> ### What to look for
> This part of the exercise is to watch the candidate investigate problems that don't show errors.
> - Did they navigate the component tree logically to find the problem service?
> - Were they able to read confusing code and understand how it works?
> - If they don't know exact cookie logic (COMPLETELY OK!!), do they know what resources to look at (MDN, W3Schools)?
> - **Nice to have:** Does the candidate already know cookie syntax or can read MDN and understand immediately?
---
## Part 3
Great! It looks like all the bugs are fixed, but every user that comes to our site still gets a new assignment. Your PM created the following Jira issue:
```
Our policy at The Knot is anyone that denies cookies should be assigned to the `original` group.
As a user who denies cookies
  They should not request an assignment from the API and see the `original` view.
As a user who accepts cookies
  They should should request an assignment from the API and see the assigned view.
```
---
## Part 4
It looks done right? Do you see any issues? Talk one of them out and we will fix one now.
> ### Solution
> If they are struggling with issues to solve, suggest the issues below.\
> *Do not expect the candidate to find these specific problems*
>
> 1. Remember Assignments
>    - **Prompt**
>       - It seems like you are getting new assignments each time the user comes back to your page. How can we remember what assignment the user got the last time?
>    - **Implementation**
>       - In the `Hero` component's `useEffect` hook, create a call to `cookies.write` once the assignment is returned.
>    - **What to look for**
>      - Does the candidate save the cookie with `JSON.stringify` and use `JSON.parse` after reading it?
> ### What to look for
> This part of the exercise is to watch the candidate investigate problems and find solutions.
> - Does the candidate see the difference each time he refreshes?
> - How does the candidate view issues with the application? Do they view everything as ok?
> - Does the candidate find issues and come up with ways to fix them?

---
## Part 5
Great work, ready to ship! Do you see any more problems? Our PM loves when we show him the issues so that he can allocate the time to fix it. Don't worry, this part is no coding. We just want to know what problems you might bring up to our PM.
