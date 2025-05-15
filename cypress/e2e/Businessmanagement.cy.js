const { loginModule } = require("./module/manager.module.js");

describe("Basicmanagement", () => {
  before(() => {
    loginModule.login({
      Site: Cypress.env("stgNewCeo"),
      Id: Cypress.env("stgID2"),
      Password: Cypress.env("stgPW2"),
    });
    // 영업시간 관리 진입
    cy.wait(1000);
    cy.get(".css-7t2fq0").contains("매장관리").click();
    cy.get(".css-p8ygjr").contains("영업시간 관리").click();
    cy.wait(3000);
  });

  it("Businessmanagement", () => {
    // // 일시정지
    // cy.get(':nth-child(1) > .css-1lvyaox').click();
    // cy.wait(1000);
    // cy.get(':nth-child(1) > .css-be38qz').click();
    // cy.get('.css-11veo1s').click();
    // cy.get('.css-1ikh012 > :nth-child(2)').contains("1시간").click();
    // cy.wait(2000);
    // cy.get('.css-1vm9lbk').click();
    // cy.wait(2000);
    // cy.get('.css-y5zi5h').contains('확인').click();
    // cy.wait(3000);

    // cy.get('.css-cz4akz > .css-70qvj9 > .css-zb4xkd').contains('일시 정지');

    // cy.get('.css-1vm9lbk').click();
    // cy.wait(1000);

    // cy.get('.css-y5zi5h').click();

    // cy.get('.css-cz4akz > .css-70qvj9 > .css-16ki5qa').contains('정상');
    // cy.get('.css-1buvqaz').click();

    // // 주문지연
    // cy.get(':nth-child(2) > .css-1lvyaox').click();
    // cy.wait(1000);
    // cy.get(':nth-child(1) > .css-be38qz').click();
    // cy.get('.css-11veo1s').click();
    // cy.get('.css-1ikh012 > :nth-child(2)').contains("1시간").click();
    // cy.wait(2000);
    // cy.get('.css-1vm9lbk').click();
    // cy.wait(2000);
    // cy.get('.css-y5zi5h').contains('확인').click();
    // cy.wait(3000);

    // cy.get('.css-cz4akz > .css-70qvj9 > .css-zb4xkd').contains('주문 지연');

    // cy.get('.css-1vm9lbk').click();
    // cy.wait(1000);

    // cy.get('.css-y5zi5h').click();

    // cy.get('.css-cz4akz > .css-70qvj9 > .css-16ki5qa').contains('정상');
    // cy.get('.css-1buvqaz').click();


    // 영업시간 설정
    cy.get(':nth-child(2) > .css-69i1ev > .css-ahx0et > .css-18uwtlr').click();
    cy.get(':nth-child(1) > .css-1l30qys > .css-dka6pf').click();
    cy.get('.css-4hl3xb').contains('플랫폼별 설정').click();

    // 요일 선택
    cy.get('.css-ff9tpi > .css-1l30qys > .css-dka6pf').click();
    cy.get('.css-8j1pe6 > :nth-child(2)').click();

    // 시작시간
    cy.get(':nth-child(1) > .css-yd8sa2 > :nth-child(1) > .css-1i7y4xy > :nth-child(1) > .css-dka6pf').click();
    cy.get('.css-8j1pe6 > :nth-child(7)').contains('06시').click();
    cy.get(':nth-child(1) > .css-yd8sa2 > :nth-child(1) > .css-1i7y4xy > :nth-child(2) > .css-dka6pf').click();

    // 끝시간
    cy.get(':nth-child(1) > .css-yd8sa2 > :nth-child(2) > .css-1i7y4xy > :nth-child(1) > .css-dka6pf').click();
  });
});