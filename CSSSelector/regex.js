/*
Basic Regex syntax -  Literal text
await page.getByText(/Login/).click();
This matches 'Login' ans well as 'Login Now'
*/

/*
^ — Starts With
JS example: await page.getByText(/^Login/).click();
This matches:
Login
Login Now
Login to your account 
*/

/*
$ — Ends With
example: await page.getByText(/Login$/).click();
This matches:
Login
User Login
Please Login
*/

/*
. — Any Character, Matches any single character
example:page.getByText(/c.t/)
This matches:
cat
cut
cot
c9t
*/

/*
+ — One or More, The preceding character must occur at least once.
ab+ matches
ab
abb
abbb
*/