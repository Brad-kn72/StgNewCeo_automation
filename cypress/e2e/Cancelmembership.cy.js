const { loginModule } = require("./module/manager.module.js");

describe("Mypage", () => {
  beforeEach(() => {
    loginModule.login({
      Site: Cypress.env("stgNewCeo"),
      Id: Cypress.env('stgID3'),
      Password: Cypress.env('stgPW2'),
    });
  });


  it("Mypage", () => {
    // 내정보 선택
    cy.contains("내정보").click();
    cy.wait(1 * 1000);

    //비밀번호 입력
    cy.get(".css-1bq4gr1").type(Cypress.env("stgPW2"));
    cy.get(".css-1fndwrv").contains("확인").click();

    // 탈퇴하기 선택
    cy.get('.css-sobigf').contains("탈퇴하기").click();
    cy.get('.css-y5zi5h').contains("확인").click();
  });
});