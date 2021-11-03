/**
 * 
 *Bob the builder has a task of transferring a number of boxes,
  containing construction material, to a location for    
  construction. The workers are waiting for the construction 
  material to arrive, so it is imperative that he gets the boxes
  delivered on time. His crane is designed in such a way, that he can 
  only carry 1,3 or 5 boxes at a time. Wendy is worried for him, and to 
  help him, wants to find the number of ways in which the boxes can be delievered. 
  So, she asks you for a help. Help her find out the number of ways in which the boxes 
  can be delievered.
Sample Input 1:
7
Sample Output 1
12
 */

function fun(n) {
  if (n == 1 || n == 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }
  return fun(n - 1) + fun(n - 3) + fun(n - 5);
}
console.log(fun(7));
