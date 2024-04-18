Feature: testing checkout plant feature


    Scenario: validating checkout plant feature with valid credential
        Given i open web application
        When i choose plant
        And i fill the form
        Then i should see the success result