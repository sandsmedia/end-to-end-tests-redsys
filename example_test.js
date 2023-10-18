Feature('RedSysTest');
Scenario('Checking Sales Tab',({ I }) => {

  I.amOnPage('https://redsys-stage.sandsmedia.com');
  I.see('S&S SIGN-IN');
  I.click('[class="jss61 jss35 jss46 jss47 jss49 jss50 button-s-and-s-sign-in btn-${service} ${service} jss34"]');
  I.switchToNextTab();
  I.waitForElement('[id="identifierId"]');
  //pause();
  // Perform Google authentication here, filling in credentials and allowing access.
  I.fillField('identifier', 'hvanheerden@sandsmedia.com');
  I.click('[class="FliLIb FmFZVc"]');
  I.fillField('Passwd', secret('hugovh123'));
  I.click('[class="FliLIb FmFZVc"]');
  I.wait(3);
  I.switchToNextTab();
  I.say("This Works");


  I.click('Sales');
  I.click('Shibboleth');
  I.wait(1);
  I.click('Domain');
  I.wait(1);
  I.click('IP');
  I.wait(1);
  I.see("Type");
  I.see("Contact");
  I.see("Status");
  I.see("Licence Id");
  I.see("NEW SUBSCRIPTION");
  I.click("New Subscription").catch((error) => {
    // Handle the error, e.g., log it
    console.error('Error: ' + error.message)});
  I.wait(2);
  I.see("New Subscription");
  I.see("General Info");
  I.see("Type");
  I.see("IP Addresses");
  I.see("Email Domains");
  I.see("Admin User");
  I.seeElement({name: 'numberOfSeats'}).catch((error) => {
    // Handle the error, e.g., log it
    console.error('Error: ' + error.message)});
  I.see("Start Date");
  I.see("Sales Force Id");
  I.see("Fullstack Id");
  I.see("Devmio");
  I.see("Contact Info");
  I.see("Company Name");
  I.see("First Name");
  I.see("Last Name");
  I.see("Company Email");
  I.see("ABBRECHEN");
  I.click('[class="jss32 jss6 jss17 jss20 cancel-button jss338"]').catch((error) => {
    // Handle the error, e.g., log it
    console.error('Error: ' + error.message)});

  I.wait(2);
  I.click("MRyQSzRskXcpbeqZV");
  I.wait(2);
  I.see("Enterprise Licence Detail");
  I.see("Type");
  I.see("Status");
  I.see("Number of seats");
  I.see("Start Date");
  I.see("End Date");
  I.see("Sales Force Id");
  I.see("Fullstack Id");
  I.see("Devmio:");
  I.see("Company Name");
  I.see("First Name");
  I.see("Last Name");
  I.see("Company Email");
  I.see("Admin");
  I.see("Orders overview");
  I.see("Invoice Id");
  I.see("SAP Id");
  I.see("EDIT");
  I.click("Edit");
  /*I.click('[class="jss32 jss6 jss17 jss20 jss1211"]').catch((error) => {
    // Handle the error, e.g., log it
    console.error('Error: ' + error.message)});*/
    I.wait(2);
    I.see("General Info");
    I.see("Type");
    I.see("IP Addresses");
    I.see("Email Domains");
    I.see("Admin User");
    I.seeElement({name: 'numberOfSeats'}).catch((error) => {
      // Handle the error, e.g., log it
      console.error('Error: ' + error.message)});
    I.see("Start Date");
    I.see("Sales Force Id");
    I.see("Fullstack Id");
    I.see("Contact Info");
    I.see("Company Name");
    I.see("First Name");
    I.see("Last Name");
    I.see("Company Email");
    I.see("SPEICHERN");
    I.see("ABBRECHEN");
    I.click("Abbrechen");
  I.wait(2);
  I.click("Sales");
  I.fillField('search', 'Domain');
  I.wait(1);
  I.fillField('search', 'IP');
  I.wait(1);
  I.fillField('search', 'Shibboleth');
  I.wait(2);


});




