/*
website used : https://www.flipkart.com/search?q=motorola+mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&as-pos=1&as-type=RECENT&suggestionId=motorola+mobile+5g%7CMobiles&requestId=647a3790-4c51-4507-9a97-7aa6f51662fa&as-backfill=on
Element: Page 2
selector: a.i2eZXn[href*="page=2"]
*/

/*
website used : https://www.amazon.in/gp/bestsellers/shoes/ref=zg_bs_shoes_sm
Element: Next Page 
selector: .a-last > a[href*= "shoes"]
*/

/*
website used : https://www.amazon.in/gp/bestsellers/shoes/ref=zg_bs_shoes_sm
Element: Page 1
selector: li[aria-label="Page 1"]
*/

/*
website used : https://www.amazon.in/gp/bestsellers/shoes/ref=zg_bs_shoes_sm
Element: Page 2
selector: ul.a-pagination li:first-child a
*/
/*
Dynamic CSS Selector for Pagination
Element: Page numbers
const pageNumber = 3; 
Using standard CSS with Playwright's text matching
const cssLocator = page.locator(`ol.pagination__items a[type="page"]:has-text("${pageNumber}")`);
*/

