$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/Auction.feature");
formatter.feature({
  "line": 1,
  "name": "Auction online application",
  "description": "where seller is able to sell his item and bidder\u0027s can bid for the item",
  "id": "auction-online-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Seller will login and add the item for sale and Bidder will bid on that item",
  "description": "",
  "id": "auction-online-application;seller-will-login-and-add-the-item-for-sale-and-bidder-will-bid-on-that-item",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "seller is  on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Seller link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user navigates to Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cname\u003e\" and \"\u003cpassword\u003e\" and clicks login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user navigates to Seller page where he can see the bidders list",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will click on CloseBid button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "bidding will be closed for that item and winner is displayed if there are items added before by that seller",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "seller can add new \"\u003citemname\u003e\" and \"\u003citemprice\u003e\" for sale",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Bidder link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user navigates to contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cemail\u003e\" and \"\u003cphone\u003e\" and \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user navigates to item page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user will enter the bid \"\u003cprice\u003e\" for an item",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user navigates to Success page",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "auction-online-application;seller-will-login-and-add-the-item-for-sale-and-bidder-will-bid-on-that-item;",
  "rows": [
    {
      "cells": [
        "name",
        "password",
        "itemname",
        "itemprice",
        "username",
        "email",
        "phone",
        "address",
        "price"
      ],
      "line": 20,
      "id": "auction-online-application;seller-will-login-and-add-the-item-for-sale-and-bidder-will-bid-on-that-item;;1"
    },
    {
      "cells": [
        "admin",
        "admin",
        "toy",
        "100",
        "a",
        "a",
        "a",
        "a",
        "101"
      ],
      "line": 21,
      "id": "auction-online-application;seller-will-login-and-add-the-item-for-sale-and-bidder-will-bid-on-that-item;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15518813800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Seller will login and add the item for sale and Bidder will bid on that item",
  "description": "",
  "id": "auction-online-application;seller-will-login-and-add-the-item-for-sale-and-bidder-will-bid-on-that-item;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "seller is  on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Seller link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user navigates to Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters \"admin\" and \"admin\" and clicks login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user navigates to Seller page where he can see the bidders list",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user will click on CloseBid button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "bidding will be closed for that item and winner is displayed if there are items added before by that seller",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "seller can add new \"toy\" and \"100\" for sale",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on Bidder link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user navigates to contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user enters \"a\" and \"a\" and \"a\" and \"a\"",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user navigates to item page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user will enter the bid \"101\" for an item",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user navigates to Success page",
  "keyword": "Then "
});
formatter.match({
  "location": "AuctionStepDef.seller_is_on_homepage()"
});
formatter.result({
  "duration": 3028414100,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_clicks_on_Seller_link()"
});
formatter.result({
  "duration": 2854962500,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_navigates_to_Login_page()"
});
formatter.result({
  "duration": 2010617500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin",
      "offset": 25
    }
  ],
  "location": "AuctionStepDef.user_enters_and_and_clicks_login_button(String,String)"
});
formatter.result({
  "duration": 3848059000,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_navigates_to_Seller_page_where_he_can_see_the_bidders_list()"
});
formatter.result({
  "duration": 2033990900,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_will_click_on_CloseBid_button()"
});
formatter.result({
  "duration": 2657889800,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.bidding_will_be_closed_for_that_item_and_winner_is_displayed_if_there_are_items_added_before_by_that_seller()"
});
formatter.result({
  "duration": 8064500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toy",
      "offset": 20
    },
    {
      "val": "100",
      "offset": 30
    }
  ],
  "location": "AuctionStepDef.seller_can_add_new_and_for_sale(String,String)"
});
formatter.result({
  "duration": 12606354000,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_clicks_on_Bidder_link()"
});
formatter.result({
  "duration": 3087999100,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_navigates_to_contact_page()"
});
formatter.result({
  "duration": 2007401300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 13
    },
    {
      "val": "a",
      "offset": 21
    },
    {
      "val": "a",
      "offset": 29
    },
    {
      "val": "a",
      "offset": 37
    }
  ],
  "location": "AuctionStepDef.user_enters_and_and_and(String,String,String,String)"
});
formatter.result({
  "duration": 4156962100,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_navigates_to_item_page()"
});
formatter.result({
  "duration": 2012668600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 25
    }
  ],
  "location": "AuctionStepDef.user_will_enter_the_bid_for_an_item(String)"
});
formatter.result({
  "duration": 3618304000,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_navigates_to_Success_page()"
});
formatter.result({
  "duration": 2251193700,
  "status": "passed"
});
formatter.after({
  "duration": 412844900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Seller will check the bidder list and find the winner and close the bid",
  "description": "",
  "id": "auction-online-application;seller-will-check-the-bidder-list-and-find-the-winner-and-close-the-bid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "seller is  on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Seller link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user navigates to Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters \"\u003cname\u003e\" and \"\u003cpassword\u003e\" and clicks login button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user navigates to Seller page where he can see the bidders list",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user will click on CloseBid button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "bidding will be closed for that item and winner is displayed if there are items added before by that seller",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "auction-online-application;seller-will-check-the-bidder-list-and-find-the-winner-and-close-the-bid;",
  "rows": [
    {
      "cells": [
        "name",
        "password"
      ],
      "line": 34,
      "id": "auction-online-application;seller-will-check-the-bidder-list-and-find-the-winner-and-close-the-bid;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 35,
      "id": "auction-online-application;seller-will-check-the-bidder-list-and-find-the-winner-and-close-the-bid;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6842168600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Seller will check the bidder list and find the winner and close the bid",
  "description": "",
  "id": "auction-online-application;seller-will-check-the-bidder-list-and-find-the-winner-and-close-the-bid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "seller is  on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Seller link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user navigates to Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enters \"admin\" and \"admin\" and clicks login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user navigates to Seller page where he can see the bidders list",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user will click on CloseBid button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "bidding will be closed for that item and winner is displayed if there are items added before by that seller",
  "keyword": "Then "
});
formatter.match({
  "location": "AuctionStepDef.seller_is_on_homepage()"
});
formatter.result({
  "duration": 2377682100,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_clicks_on_Seller_link()"
});
formatter.result({
  "duration": 2418660300,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_navigates_to_Login_page()"
});
formatter.result({
  "duration": 2020214900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin",
      "offset": 25
    }
  ],
  "location": "AuctionStepDef.user_enters_and_and_clicks_login_button(String,String)"
});
formatter.result({
  "duration": 2809800300,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_navigates_to_Seller_page_where_he_can_see_the_bidders_list()"
});
formatter.result({
  "duration": 2015095000,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.user_will_click_on_CloseBid_button()"
});
formatter.result({
  "duration": 5658955200,
  "status": "passed"
});
formatter.match({
  "location": "AuctionStepDef.bidding_will_be_closed_for_that_item_and_winner_is_displayed_if_there_are_items_added_before_by_that_seller()"
});
formatter.result({
  "duration": 8307800,
  "status": "passed"
});
formatter.after({
  "duration": 276888800,
  "status": "passed"
});
});