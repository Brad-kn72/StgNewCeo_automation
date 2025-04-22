function login({ Site, Id, Password }) {
    if (Site === Cypress.env("stgNewCeo")) {
      cy.visit(Site);
  
      cy.get(":nth-child(1) > .css-7boy05 > .css-1ajjw8p", { timeout: 30 * 1000 })
        .clear()
        .type(Id); // ID 입력
  
      cy.get(":nth-child(2) > .css-7boy05 > .css-1ajjw8p", { timeout: 30 * 1000 })
        .clear()
        .type(Password); // 비밀번호 입력
  
      cy.get(".css-2ptubj", { timeout: 30 * 1000 }).click();
    }
  }
  
  module.exports = {
    login,
  };