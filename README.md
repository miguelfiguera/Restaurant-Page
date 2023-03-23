# Restaurant Page

This is part of the ODIN PROJECT curriculum.
You can check it here [Restaurant Page](https://www.theodinproject.com/lessons/javascript-restaurant-page).

This project has only one goal, to teach students how to use webpack and work with modules through webpack.

All the html is populated using webpack and personally the styles were added using css. I wanted to use sass, but css was much more simple and sass was not asked in this project.

The modules that I write create the header, footer, main and other two sections that are menu and contact info.

The central pice is index.js where I writed the logic for the changes between all the three parts (menu, main, contacts) inside a module(pattern), also populating the dom is in another module(pattern) function.

# Bugs
I only had one, when I used `clean:true` inside the webpack.config.js it erased my index.html each time I ran webpack. My fault, I know. But it took me a while to see which was the problem.

The other complication for me was that modules need to export functions, simple functions. Anything else (factories, IIEF) broke down my code on the browser. It may be my fault, but I did not fine any answer to this bug. So I just export function declarations.

Thats All.


M. Quintero.
