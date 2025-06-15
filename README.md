I made this project to improve my javascript logic building skills and i must say i have learnt a lot from this.

Some of the things i learnt are : 
1. After any alert, if i am doing something on the frontend, i should put the alert on a timeout of at least 50ms to allow the DOM to execute the other tasks. The alert was rendering too fast thereby not allowing the browser to render the final key so i delayed it by 100ms.
2. I also learnt about how event listeners have to be properly removed otherwise they can stack and cause problems.
3. I also learnt that event listeners use references to the callbacks and therefore we can only remove a listener if it is named.
4. While comparing arrays inside the checkWinner() function, i compared the arrays by reference, so while it may seem like JS does not return true for different arrays having all exactly same values, I compared the memory address of the arrays.
