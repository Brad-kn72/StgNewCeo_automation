const { loginModule } = require("./module/manager.module.js");

describe("Basicmanagement", () => {
  beforeEach(() => {
    loginModule.login({
      Site: Cypress.env("stgNewCeo"),
      Id: Cypress.env("stgID2"),
      Password: Cypress.env("stgPW2"),
    });
  });

  it("Basicmanagement", () => {
    // 연동정보 관리 진입
    cy.get(".css-7t2fq0").contains("매장관리").click();
    cy.get(".css-p8ygjr").contains("기본정보 관리").click();

    
  });
});
