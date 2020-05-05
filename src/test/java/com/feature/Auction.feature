Feature: Auction online application
  where seller is able to sell his item and bidder's can bid for the item 

Scenario Outline: Seller will login and add the item for sale and Bidder will bid on that item
    Given seller is  on homepage
    When user clicks on Seller link
    Then user navigates to Login page
    When user enters "<name>" and "<password>" and clicks login button
    Then user navigates to Seller page where he can see the bidders list
     And user will click on CloseBid button 
    Then bidding will be closed for that item and winner is displayed if there are items added before by that seller
    Then seller can add new "<itemname>" and "<itemprice>" for sale
    And user clicks on Bidder link
    Then user navigates to contact page
    And user enters "<username>" and "<email>" and "<phone>" and "<address>"
    Then user navigates to item page
    And user will enter the bid "<price>" for an item
    Then user navigates to Success page 
    Examples:
    |name    |password|itemname|itemprice|username|email|phone|address|price|
    |admin	 |admin   |toy     |100      | a	 |a    |a    |a      |101  |


  Scenario Outline: Seller will check the bidder list and find the winner and close the bid
    Given seller is  on homepage
    When user clicks on Seller link
    Then user navigates to Login page
    When user enters "<name>" and "<password>" and clicks login button
    Then user navigates to Seller page where he can see the bidders list
     And user will click on CloseBid button 
    Then bidding will be closed for that item and winner is displayed if there are items added before by that seller
    
    Examples:
    |name    |password|
    |admin	 |admin   |
    

   
   
  
    
   