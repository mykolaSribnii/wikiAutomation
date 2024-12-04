# AUTOMATION TESTS FOR WIKI

This framework was created to cover the important functionality of the wiki page.

## Structure
___ GitHub/workflows 
## Purpose:
   - Store the main logic to launch tests in the CI/CD environment.
   - Contains custom steps to generate live reports on Github Pages.

___ src/ 
## Purpose: 
 - Contain the main logic for testing INFRA

- data/ -> contains objects with the test data for the data-driven tests 
- fixtures/ -> used to initiate pages in one place and avoid declarations in the tests
- pages/ -> folder to store the POM implementation, main idea is to use a MainPage as a manager to other pages.
- tests/ -> contain test suites split by logic functionality

___ playwright.config.ts 

- Source of a global test configuring, used to create projects etc.


## Main test cases list:

| Functionality       | Case                                                     |
| ------------------- | -------------------------------------------------------- |
| Sidebar             | User can navigate through all links                      |
| Search              | User should be able to find article according to request |
| Create account link | User should be redirected to create account page         |
| Log in link         | User should be redirected to login page                  |

# Watch reports of test runs

Please, navigate to "Actions" => Select the Playwright tests for WIKI workflow and start it.

When the workflow will be finished - the link to report will be automatically generated in the summary.

Thanks <3
