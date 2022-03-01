export const contractExplain = `An admin resource can be created and used as a way to only give access to certain key functions to specific accounts. In this instance our Admin resource contains the ability to create a series and the ability to borrow and return a Series resource.

Additionaly, this admin resource can create a new admin resource and give somebody else the ability to have access to this resource in their account.

At the end, when you are initializing your contract you are creating the Admin resource and saving it into the deployer of the smart contracts account. You would also create a private capability to the Admin account for a reference to all of the functions.

`