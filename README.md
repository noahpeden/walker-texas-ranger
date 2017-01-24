# walker-texas-ranger
An app/site that generates random Chuck Norris jokes


Iteration 1: Get Jokes
- [ ] There is an input field to set the number of jokes you want returned. When a user clicks on Get Jokes, a request is made that returns the specified number of jokes on the page, and the path is '/jokes'.
- [ ] Each joke displays the joke text (with clean data - aka no &quot; messes). The jokes automatically spread themselves out evenly based on the number of jokes requested. 
Iteration 2: Settings
- [ ] There is a Settings button, that when clicked displays a configuration page and the path is '/settings'. The user no longer sees the buttons or list of jokes when on the settings page (comp 3).
- [ ] On the settings page, there should be a field to change the name Chuck Norris.
- [ ] There should also be a Parental Controls radio button that sets the jokes to be either kid-friendly, or general audience. 
Iteration 3: Starred Jokes
- [ ] There should be a button to show “Favorites”. When clicked, the path is '/favorites' and the user sees their starred jokes.
- [ ] If there are no favorites, there should be a message indicating that there are no favorites.
- [ ] Each joke has a star icon that when clicked changes colors.
- [ ] When a joke is “starred” it gets moved to “Favorite Jokes”. 
Extensions
- [ ] Parental Controls buttons look like a toggle slider
- [ ] Data persists using Firebase, localStorage, or the database of your choice.
- [ ] Walker Texas Ranger Chuck Norris gifs with sound happen occasionally (this will mean bonus cool points.) 
￼
Rubric
Specification Adherence
* 4 - The application completes all 3 iterations above and implements one or more of the extensions.
* 3 - The application completes all 3 iterations.
* 2 - The application is in a usable state, but is missing 1 of the features outlined in the specification above.
* 1 - The application is missing multiple features essential to having a complete application.
* 0 - The application is unusable.
Code Quality
* 4 - Developer demonstrates complete understanding of React with appropriately separated components and exceptionally well refactored code.
* 3 - Developer appears comfortable in React demonstrated gaps in knowledge of how the tools should be used and/or the app contains unrefactored code.
* 2 - Developer selected appropriate libraries and frameworks to build the app but did not use them as intended. Significant refactoring necessary.
* 1 - Developer did not make any effort to use React effectively or refactor code.
Design
* 4 - Developer aligned design completely with provided comps. Zero major changes requested by evaluator.
* 3 - Developer made a strong effort to match provided comps, some changes requested by evaluator.
* 2 - Developer made a minimal attempt to style application to match provided comps. .
* 1 - There was no attempt to style this application as specified.
Testing
* 4 - Every component is tested from both a unit and acceptance standpoint, all crucial functionality is tested
* 3 - Almost all components are tested to a level that indicates developer has an understanding of testing
* 2 - A valid attempt was made to test functionality with obvious gaps where functionality is not tested
* 1 - There was little to no attempt to test this application.
