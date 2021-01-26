<h2>Conway's Game of Life</h2>
<ins>Client Deploy:</ins> <b>https://game-of-life-b7812.web.app/</b>

Conway's game of life is a set of rules that can be applied on a grid of data wherein cells have 2 states and the states of neighboring cells determine cell state each proceeding turn. 

<h2>What I learned</h2>

In this project, I developed a greater understanding towards react lifted state's mutability and how in projects with many small components not handling the state changes and letting them re-render freely will kill performance. Although I solved the problem, it's not something I feel completely comfortable yet but I think if I run up against it again I'll be able to figure it out deeper because of having built this project. 

https://www.youtube.com/watch?v=gKtr7I1PNIg
This video explains the problem at a deeper level and was instrumental in helping me arrive at my own solution. 

By building this project from spec(reading the description of how game of life operates and coming up with an implementation as opposed to following a guide/tutorial) this project gave me additional practice coming up with an idea and implementing which I believe will come in handy when I'm solving unique problems hereonout. 

In addition to usual game of life rules, I built a population mechanic where by selecting pre-built creatures and selecting a cell, the grid will traverse and populate that creature. 

Also practiced CSS(my weakness, aaa!) and built custom select drop-up divs as well as playing around with coloring cells by mathmatically generating colors depending on cell position. 

This was the first project where I strayed from the comfort of using redux to manage state. Instead I built a system of custom hooks that consume and depend on one another and organized an api that only exposes the exact methods and properties a component requires. I package these dependencies into objects so that components that have them drilled through don't need to 'unpack' them or worry about their details. This allowed me to manage a grid, grid mechanics, creature mechanics, while keeping things readable for myself. I had to re-factor code whenever the mechanics got complicated and found it instrumental to manipulating a grid and not overwhelming myself. 

Another interesting lesson I learned from this project was that performing incremental updates in react with either setTimeout or setInterval creates this issue where attempting to close state will retrieve a stale state. So it never really updates. To solve this, we use setState's provided state argument which then retrieves up-to-date state to perform our side-effects with. 

<h2>Technologies Used</h2>
<ins>Client:</ins> <br />
"react": "^16.13.1",<br/>
"styled-components": "^5.1.1"<br/>
