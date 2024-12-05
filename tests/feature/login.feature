@LoginPage
Feature: Check contact me form functionality

  @SuccessfullLogin
  Scenario: Successfull submit form
    Given I am a user on login page
    When I fill all informations in the form
      | Login              | standard_user               |
      | Password                | secret_sauce                |
    When I submit the credtial
    Then I m redirected to the home page
