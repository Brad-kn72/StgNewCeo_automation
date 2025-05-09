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
    // 기본정보 관리 진입
    cy.get(".css-7t2fq0").contains("매장관리").click();
    cy.get(".css-p8ygjr").contains("기본정보 관리").click();

    // 매장정보 수정
    cy.get('.css-1bq4gr1').type("기남자동화테스트용");
    cy.get('input[name="address"]').then(($input) => {
        $input[0].value = '서울 강남구 영동대로 312 (대치동, 엘엔티렉서스(주)LEXUS전시장)';
        $input[0].dispatchEvent(new Event('input', { bubbles: true }));
        $input[0].dispatchEvent(new Event('change', { bubbles: true }));
      });

      cy.get('.css-hztyyu').type("6층 전체");
      cy.get(':nth-child(5) > .css-8nb3v0 > .css-7boy05 > .css-1accc49').clear();
      cy.get(':nth-child(5) > .css-8nb3v0 > .css-7boy05 > .css-1accc49').type("1234567890");

  });
});
