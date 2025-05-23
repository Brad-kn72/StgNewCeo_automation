const { loginModule } = require("./module/manager.module.js");

describe("주문정보 관리", () => {
  beforeEach(() => {
    loginModule.login({
      Site: Cypress.env("stgNewCeo"),
      Id: Cypress.env("stgID2"),
      Password: Cypress.env("stgPW2"),
    });
    cy.wait(3000);
  });

  it("포인트 설정", () => {
    // 포인트 설정
    cy.get(".css-7t2fq0").contains("포인트관리").click();
    cy.get(".css-p8ygjr").contains("포인트 설정").click();
    
    
  });
});