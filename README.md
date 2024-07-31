# Syoft-Assignment-Front-End 

Components Involved:
SignUp Component

Handles user registration.
On successful registration, redirects users to the login page.
Login Component

Handles user login.
Stores user data in local storage upon successful login.
Redirects users to the dashboard page after login.
DashBoard Component

Retrieves user data from local storage.
Displays user information on the dashboard page.
Steps and Considerations:
SignUp Component:

Ensure the API for user registration is working correctly.
Validate that registration data is correctly handled and user is redirected to the login page upon success.
Login Component:

Verify the API response includes user data and error messages if any.
Ensure user data (including user_name) is stored correctly in local storage.
Redirect to the dashboard page after successful login.
DashBoard Component:

Retrieve and parse user data from local storage.
Handle cases where user data might be missing or incorrect.
Display the username or relevant error messages as appropriate.
Troubleshooting Tips:
Verify API Responses: Ensure both registration and login APIs return data in the expected format.
Check Local Storage: Confirm that user data is correctly stored and retrieved from local storage.
Handle Errors Gracefully: Implement error handling in components to provide clear feedback and manage cases where data is not as expected.
Code Updates:
SignUp: Ensure user registration data is sent correctly and handle errors appropriately.
Login: Validate the response structure, store correct user data, and handle redirection.
DashBoard: Implement error handling for missing or incorrect user data and ensure the user’s name is displayed correctly.
