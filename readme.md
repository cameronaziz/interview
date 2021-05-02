# TKMP Interview
Take a moment to familiarize yourself with the application. The goal of the application is to have a consent pop up from the bottom and if the user selects 'Allow', they will be able to randomly assigned into an A/B test. If they select 'Deny', they should not be assigned a test group.

There are many parts of this exercise. It is completely okay if we don't finish. We are not only watching you work through the problem, but **how** you work through the problem.

---
Each component of the application is wrapped in an `errorBoundary` higher order component. These will help you with debugging. If you notice them in the UI, you may click them to see both the component stack and the call stack of the error.

---
All code changes will be within the 

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
> ### Solution
>   - The `Button` component is calling a function that does not exist, a typo.
>   - The assignment is sending the wrong ID
>     - This can been seen in the network calls
>   - **Nice to have** The candidate may notice that the response is not being optional changed.
>     - **Note:** Fixing this will resolve the FE error, but still wont solve the problem. If the candidate catches this one first, you may have to guide them to look at the network tab to see the remaining error.
> ### What to look for
> This part of the exercise is to watch the candidate see an error message and understand how they approach the problem.
> - Do they see the errors in the application?
> - Did they intuitively look at console to see error?
> - Were they able to read and understand call stacks?
---
## Part 2
Your project manager just reported another bug! It seems that every user that clicks to allow cookies keeps getting the same prompt when they come back to our page. We should be able to remember the selection for a year.
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
Great! It looks like all the bugs are fixed, but every user that comes to our site still gets an assignment. Your PM created the following Jira issue:
```
Our policy at The Knot is anyone that denies cookies should be assigned to the `original` group.
As a user who denies cookies
  They should not request an assignment from the API and see the `original` view.
As a user who accepts cookies
  They should should request an assignment from the API and see the assigned view.
```
> ### Solution
> - The candidate needs to first check the `isConsent` state in an `useEffect` hook and only call `getExperiment` if it is true.
> - **Nice to have:** The candidate remembers to add `[isConsent]` has the second parameter of the hook with no help.
> ### What to look for
> This part of the exercise is to watch the candidate develop a new feature.
> - Has the candidate begun to understand the codebase?
> - Did the candidate write clean code?
> - Did the candidate talk out his methodology?
---
## Part 4
It looks done right? Do you see any issues? Talk one of them out and we will fix it now.
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

> ### What to look for
> Alike part 4, how does the candidate see problems?
> Is the candidate afraid of bringing up issues?
> **Nice to have:** Does the candidate see any SSR or SEO issues?