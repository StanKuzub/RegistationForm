describe('Registration Form', () => {
  it('passes', () => {
    cy.visit('https://automationteststore.com/')
    cy.get ('#customer_menu_top').click();
    cy.get ('[title="Continue"]').click();
    cy.get ('#AccountFrm_firstname').type("TestFirstName");
    cy.get ('#AccountFrm_lastname').type("TestLastName");
    cy.get ('#AccountFrm_email').type("15TestEmail11@email.com");
    cy.get ('#AccountFrm_telephone').type("8881112233");
    cy.get ('#AccountFrm_fax').type("8881112232");
    cy.get ('#AccountFrm_company').type("TestName");
    cy.get ('#AccountFrm_address_1').type("123 Street");
    cy.get ('#AccountFrm_city').type("Kyiv");
    cy.get ('#AccountFrm_postcode').type("12345");
    cy.get ('#AccountFrm_country_id').select("Ukraine");
    cy.get ('#AccountFrm_zone_id').select("Kyiv");
    cy.get ('#AccountFrm_loginname').type("QALight1122");
    cy.get ('#AccountFrm_password').type("12345q!");
    cy.get ('#AccountFrm_confirm').type("12345q!");
    cy.get ('#AccountFrm_newsletter0').last().check();
    cy.get ('#AccountFrm_agree').check();
    cy.get ('.btn.btn-orange.pull-right.lock-on-click').click();
    cy.get ('div.menu_text').contains("Welcome back TestFirstName");
   
  })
})