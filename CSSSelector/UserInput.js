/*
User Interaction Selectors

:hover – Triggers when the user rests their cursor over an element.

:focus – Triggers when an element is actively selected to receive input (e.g., clicking inside a text box or tabbing to it).

:active – Triggers for the brief moment an element is being clicked or pressed down.

Input State Selectors 

:checked – Targets radio buttons, checkboxes, or options in a dropdown that are currently ticked or selected.

:disabled – Targets input fields that are turned off and cannot be interacted with.

:enabled – Targets input fields that are active and ready for user input.

Example - .fill()
await page.locator("#name").fill("Pramit Mishra");
await page.locator("#card-number").fill("12345");

.click()
await page.locator("#login-button").click();
*/