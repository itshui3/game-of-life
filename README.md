Deployed Link: https://game-of-life-b7812.web.app/

Conway's Game of Life. 

In this project, I developed a greater understanding towards react lifted state's mutability and how in projects with many small components not handling the state changes and letting them re-render freely will kill performance. I realized early on that I could fix the problem simply by just using Immer & having it deal with the minute changes in cell components but I wanted to understand how to control these changes frame by frame so instead built the app with useCallbacks and useRefs such that only the affected cells are actually re-rendered. It was very satisfying to reach that point of completion for this game of life implementation. 
