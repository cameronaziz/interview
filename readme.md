# TKMP Interview
Take a moment to familiarize yourself with the application. The goal of the application is to have a consent pop up from the bottom and if the user selects 'Allow', they will be able to randomly assigned into an A/B test. If they select 'Deny', they should not be assigned a test group.

There are many parts of this exercise. It is completely okay if we don't finish. We are not only watching you work through the problem, but **how** you work through the problem.

---
Each component of the application is wrapped in an `errorBoundary` higher order component. These will help you with debugging. If you notice them in the UI, you may click them to see both the component stack and the call stack of the error.

---
All code changes will be within the `packages/app/src` folder. All other directories can be ignored.

---
To run the application, clone this repository and run the following from the root of the application
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
Your project manager just reported another bug! It seems that every user that clicks to allow cookies keeps getting the same prompt when they come back to our page. We should be able to remember the selection for a year.

---
## Part 3
Great! It looks like all the bugs are fixed, but every user that comes to our site still gets an assignment. Your PM created the following Jira issue:
```
Our policy at The Knot is anyone that denies cookies should be assigned to the `original` group.
As a user who denies cookies
  They should not request an assignment from the API and see the `original` view.
As a user who accepts cookies
  They should should request an assignment from the API and see the assigned view.
```
---
## Part 4
It looks done right? Do you see any issues? Talk one of them out and we will fix it now.

---
## Part 5
Great work, ready to ship! Do you see any more problems? Our PM loves when we show him the issues so that he can allocate the time to fix it. Don't worry, this part is no coding. We just want to know what problems you might bring up to our PM.
