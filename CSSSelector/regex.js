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
Please Loginkh huss
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

/*
* — Zero or More - The preceding character can occur zero or more times.
regex: ab*
matches: a
ab
abb
abbb
*/

/*
+ — One or More - The preceding character must occur one or more times
regex - ab+
matches:
ab
abb
abbb
*/

/*
? — Zero or One - The preceding character is optional
regex: colou?r
playwright Ex: page.getByText(/colou?r/)
*/

/*
Grouping ( ) - Parentheses group parts of a regex.
regex: (Login|Sign in)
means:
Login
OR
Sign in
*/

/*
OR | - The pipe symbol means OR.
regex: Login|Sign in
means:
Login
Sign in
page.getByText(/Login|Sign in/)
*/

/*
{n,m} - Range
regex: \d{3,5}
*/

/*
\d - represents a digit.
regex: User\d
matches:
User1
User2
User9
*/

/*
\s — Whitespace
matches whitespace such as spaces.
regex: \d+
matches:
Order 12345
Order 67890
*/

/*
{n} — Exact Number of Occurrences
regex: \d{5}
page.getByText(/\d{5}/)
*/