const { loginModule } = require("./module/manager.module.js");

describe("Mypage", () => {
  beforeEach(() => {
    loginModule.login({
      Site: Cypress.env("stgNewCeo"),
      Id: Cypress.env("stgID2"),
      Password: Cypress.env("stgPW2"),
    });
  });


  it("Mypage", () => {
    // 내정보 선택
    cy.contains("내정보").click();
    cy.wait(1 * 1000);

    //비밀번호 입력
    cy.get(".css-1bq4gr1").type(Cypress.env("stgPW2"));
    cy.get(".css-1fndwrv").contains("확인").click();

    //정보 수정 진입
    cy.get(".css-18uwtlr").contains("정보 수정").click();

    //PW 수정
    cy.get(".css-17tvlxz").contains("비밀번호 변경").click();
    cy.get("#password").clear().type(Cypress.env("stgPW2"));
    cy.get("#passwordConfirm").clear().type(Cypress.env("stgPW2"));
    cy.get(".css-2ptubj").contains("button", "확인").click();

    //Email 변경
    cy.get("#userEmail").clear().type(Cypress.env("stgEmail"));

    //대표자 변경
    cy.get("#userName").clear().type("방기남");

    //사업자등록증 변경
    cy.fixture("image/로고이미지/0000.png", "base64").then((fileContent) => {
      cy.get('.css-11juqnx')
        .should('exist')
        .attachFile({
          fileContent,
          fileName: "0000.png",
          mimeType: "image/png"
        });
    });

    //정보 저장
    cy.contains("button", "정보 저장").click();
  });
});