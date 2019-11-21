const puppeteer = require('puppeteer')


//Initializing browsr driver using lunch function
//Microsoft Edge
//puppeteer.launch({headless: false, executablePath: "C:\\Program Files (x86)\\Microsoft\\Edge Beta\\Application\\msedge.exe"}).then(async browser => {
//Chrome	
puppeteer.launch({headless: false, executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"}).then(async browser => {
	
//Creating object of new page
  const page = await browser.newPage();
//Setting the size for browser window  
  await page.setViewport({ width: 1920, height: 1040 })
//Launcing the URL
  await page.goto('http://10.134.153.20:3000/#');
  browser.maximize
  

  const version = await page.browser().version();
  console.log(version);
  
	// Login to Teamcenter

	//insepeting the username text box
	await page.waitForSelector("input[placeholder='User Name']")
	//Performing write operation on text box
	await page.type("input[placeholder='User Name']","ed")
  
	const [pass] = await page.$x(".//input[@type='password']");
	//Performing write operation on text box
	if(pass){
		await pass.type("ed")
	}

	//Performing click operation on button
	const [button] = await page.$x("//button[contains(., 'Sign in')]");
	if (button) {
		await button.click();
	}
  
	/*
	* Creating New Item (steps)
	* 1) Click on New Part Tile
	* 2) Storing Value of ID generated
	* 3) Providing Name of Item
	* 4) Clickon Add Button
	*/
  
	//Click on Folders Tile
	await page.waitForXPath(".//aw-tile//div[@class='aw-tile-tileName ng-binding aw-theme-tileText' and contains(text(),'Folders')]")
	const [tile] = await page.$x(".//aw-tile//div[@class='aw-tile-tileName ng-binding aw-theme-tileText' and contains(text(),'Folders')]");
	if (tile) {
		await tile.click();
	}

	const [button1] = await page.$x(".//aw-tile//div[@class='aw-commands-commandIconButton aw-commands-commandWrapperVertical aw-commandId-Awp0NewGroup' and [contains(text(), 'Add')]");
	if (button1) {
		await button1.click();
	}


});
 


	