// Combinators are used to combine multiple selectors into a single selector. They define the relationship between two selectors

//1. Descendant selector(space) - The descendant selector selects all elements that are descendants of a specified element. 
// div p : Find all the <p> elements inside a <div>

/*
website used : https://in.bookmyshow.com/explore/home/kanpur
Element: Sign In button
descendent combinator: button[aria-label="Sign in"] div
*/

/*
website used : https://www.amazon.in/
Element: search box
child combinator: .nav-search-field > #twotabsearchtextbox
*/

/*
website used : https://www.amazon.in/
Element: cart icon
child combinator: #nav-cart-count-container > .nav-cart-icon
adjecent sibling combinator: #nav-cart-count + .nav-cart-icon
general sibling combinator: #nav-cart-count ~ .nav-cart-icon
*/

/*
website used: https://www.makemytrip.com/
Element: My Trips
child cobinator: .quickAccessText > p[data-cy="MyTripsWidgetText"]
descendent combinator: .quickAccessText p[data-cy="MyTripsWidgetText"]
*/ 

/*
website used: https://www.makemytrip.com/
Element: 'Search' button
combinator: p[data-cy="submit"] > .widgetSearchBtn
*/





