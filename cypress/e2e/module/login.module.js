function login({ Site, Id, Password }) {
  if (Site === Cypress.env('stgNewCeo')) {
    return cy.visit(Site).then(() => {
      cy.get(":nth-child(1) > .css-7boy05 > .css-1ajjw8p", { timeout: 30 * 1000 }).clear().type(Id);
      cy.get(":nth-child(2) > .css-7boy05 > .css-1ajjw8p", { timeout: 30 * 1000 }).clear().type(Password);
      cy.get(".css-2ptubj", { timeout: 30 * 1000 }).click();
    });
  }
}
  
  module.exports = {
    login,
  };