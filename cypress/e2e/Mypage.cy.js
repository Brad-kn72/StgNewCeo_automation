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

    // display: none 제거 변수 생성
    const revealHiddenInput = ($el) => $el[0].removeAttribute('style');

    //사업자등록증 변경
    cy.fixture("image/logo/0000.jpeg", "base64").then((fileContent) => {
      cy.get('input[data-testid="file-input"]')
        .should('exist')
        .then(revealHiddenInput)
        .attachFile({
          fileContent,
          fileName: "0000.jpeg",
          mimeType: "image/jpeg",
          encoding: "base64"
        });
    });

    //정보 저장
    cy.contains("button", "정보 저장").click();
  });
});