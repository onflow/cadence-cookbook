export const transactionExplain = `To add a play to a set you will need to borrow a reference to the admin resource from the Auth Account.

Once you do, you will need to borrow the set that you would like access to by calling the borrowSet function. This gets whatever setID is created that you want to have access to.

When that happens you would just use the addPlay function to add whichever plays you have already created to this set.

`