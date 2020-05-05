package com.stepdef;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class AuctionStepDef {
	
	WebDriver driver;

	@Before
	public void initiateBrowser() throws Throwable
	{
		System.setProperty("webdriver.chrome.driver", ".//chromedriver.exe");
		 driver = new ChromeDriver();
		 Thread.sleep(2000);
	}
	

@Given("^seller is  on homepage$")
public void seller_is_on_homepage() throws Throwable {
	driver.get("http://localhost:8081/OnlineBidding/");
	String pageTitle=driver.getTitle();
	System.out.println(pageTitle);
	Assert.assertEquals("Welcome To OnlineBidding Application", pageTitle);	
	 Thread.sleep(2000);
}

@When("^user clicks on Seller link$")
public void user_clicks_on_Seller_link() throws Throwable {
	WebElement sellerLink = driver.findElement(By.xpath("/html/body/a[2]"));
	sellerLink.click();
	 Thread.sleep(2000);
}

@Then("^user navigates to Login page$")
public void user_navigates_to_Login_page() throws Throwable {
	String loginPageTitle = driver.getTitle();
    System.out.println(loginPageTitle);
    Assert.assertEquals("Login Page", loginPageTitle);
    Thread.sleep(2000);
}

@When("^user enters \"([^\"]*)\" and \"([^\"]*)\" and clicks login button$")
public void user_enters_and_and_clicks_login_button(String arg1, String arg2) throws Throwable {
	WebElement sellerPhone = driver.findElement(By.name("user.name"));
	sellerPhone.sendKeys(arg1);
	
	WebElement sellerAddress = driver.findElement(By.name("user.password"));
	sellerAddress.sendKeys(arg2);
	
	WebElement LoginSubmit = driver.findElement(By.name("submit"));
	LoginSubmit.click();
	 Thread.sleep(2000);
}

@Then("^user navigates to Seller page where he can see the bidders list$")
public void user_navigates_to_Seller_page_where_he_can_see_the_bidders_list() throws Throwable {
	String SelleropenPageTitle = driver.getTitle();
	  System.out.println(SelleropenPageTitle);
	  Assert.assertEquals("Seller OpenPage", SelleropenPageTitle);
	  Thread.sleep(2000);
}

@And("^user will click on CloseBid button$")
public void user_will_click_on_CloseBid_button() throws Throwable {
	driver.findElement(By.name("button")).click();
	 Thread.sleep(2000);
}

@Then("^bidding will be closed for that item and winner is displayed if there are items added before by that seller$")
public void bidding_will_be_closed_for_that_item_and_winner_is_displayed_if_there_are_items_added_before_by_that_seller() throws Throwable {
	 String AddItemPageTitle = driver.getTitle();
	  System.out.println(AddItemPageTitle);	  
	  Assert.assertEquals("Add Item", AddItemPageTitle);
	
	/*  List<WebElement> list = driver.findElements(By.xpath("//body[contains[(text(),'Winner is a a']"));
	 // Assert.assertTrue("Text not found!", list.size() > 0);
	  if(list.size()>0)
	  {
		 System.out.println(list.get(0).getText());
	  }
	  
	  List<WebElement> list1 = driver.findElements(By.xpath("//body[contains[(text(),'You do not have any items added yet! Add item !!!!!']"));
	//  Assert.assertTrue("Text not found!", list1.size() > 0);
	  if(list1.size()>0)
	  {
		 System.out.println(list1.get(0).getText());
	  }*/
	  
		 
}

@Then("^seller can add new \"([^\"]*)\" and \"([^\"]*)\" for sale$")
public void seller_can_add_new_and_for_sale(String arg1, String arg2) throws Throwable {
	 Thread.sleep(2000);
	WebElement itemname = driver.findElement(By.name("item.itemname"));
	itemname.sendKeys(arg1);
	
	WebElement itemprice = driver.findElement(By.name("item.itemprice"));
	itemprice.sendKeys(arg2);
	
	WebElement Submit = driver.findElement(By.name("go"));
	Submit.click();
	
String successPageTitle	= driver.getTitle();
Thread.sleep(2000);
Assert.assertEquals("success Page", successPageTitle);

 String successMsg = driver.findElement(By.xpath("/html/body/h1")).getText();
 System.out.println(successMsg);

driver.findElement(By.xpath("/html/body/a")).click();  // returns to home page
}

@And("^user clicks on Bidder link$")
public void user_clicks_on_Bidder_link() throws Throwable {
	 Thread.sleep(2000);
	WebElement bidderLink = driver.findElement(By.xpath("/html/body/a[1]"));
	bidderLink.click();
	
}

@Then("^user navigates to contact page$")
public void user_navigates_to_contact_page() throws Throwable {
	 Thread.sleep(2000);
	 String contactPageTitle = driver.getTitle();
	    System.out.println(contactPageTitle);
	    Assert.assertEquals("Bidder Entry page", contactPageTitle);
}

@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_and_and_and(String username, String email, String phone, String addresss) throws Throwable {
	 Thread.sleep(2000);
	WebElement bidderName = driver.findElement(By.name("userBean.name"));
	bidderName.sendKeys(username);
	
	WebElement bidderEmail = driver.findElement(By.name("userBean.email"));
	bidderEmail.sendKeys(email);
	
	WebElement bidderPhone = driver.findElement(By.name("userBean.phone"));
	bidderPhone.sendKeys(phone);
	
	WebElement bidderAddress = driver.findElement(By.name("userBean.address"));
	bidderAddress.sendKeys(addresss);
	
	WebElement Submit = driver.findElement(By.name("submit"));
	Submit.click();
	
}

@Then("^user navigates to item page$")
public void user_navigates_to_item_page() throws Throwable {
	 Thread.sleep(2000);
	 String ItemPageTitle = driver.getTitle();
	  System.out.println(ItemPageTitle);
	  Assert.assertEquals("Item page", ItemPageTitle);
}

@Then("^user will enter the bid \"([^\"]*)\" for an item$")
public void user_will_enter_the_bid_for_an_item(String arg1) throws Throwable {
	 Thread.sleep(2000);
	WebElement bidderPrice  = driver.findElement(By.name("bid.bidderprice"));
	bidderPrice.sendKeys(arg1);
	
	WebElement BidButton = driver.findElement(By.name("addbid"));
	BidButton.click();
}

@Then("^user navigates to Success page$")
public void user_navigates_to_Success_page() throws Throwable {
	 Thread.sleep(2000);
	 String SuccessTitle = driver.getTitle();
	  System.out.println(SuccessTitle);
	  Assert.assertEquals("Bid Success", SuccessTitle);
	  
	 String successMsg = driver.findElement(By.xpath("/html/body/h1")).getText();
    System.out.println(successMsg);
    
    
    driver.findElement(By.xpath("/html/body/a")).click(); // click on homepage link
}

@After
public void exit()
{
	driver.close();
}

}
