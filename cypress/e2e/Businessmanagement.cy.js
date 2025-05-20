const { loginModule } = require("./module/manager.module.js");

describe("영업시간 관리", () => {
  beforeEach(() => {
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

  //   it("실시간 영업상태", () => {
  //     // 일시정지
  //     cy.get(':nth-child(1) > .css-1lvyaox').click();
  //     cy.wait(1000);
  //     cy.get(':nth-child(1) > .css-be38qz').click();
  //     cy.get('.css-11veo1s').click();
  //     cy.get('.css-1ikh012 > :nth-child(2)').contains("1시간").click();
  //     cy.wait(2000);
  //     cy.get('.css-1vm9lbk').click();
  //     cy.wait(2000);
  //     cy.get('.css-y5zi5h').contains('확인').click();
  //     cy.wait(3000);

  //     cy.get('.css-cz4akz > .css-70qvj9 > .css-zb4xkd').contains('일시 정지');

  //     cy.get('.css-1vm9lbk').click();
  //     cy.wait(1000);

  //     cy.get('.css-y5zi5h').click();

  //     cy.get('.css-cz4akz > .css-70qvj9 > .css-16ki5qa').contains('정상');
  //     cy.get('.css-1buvqaz').click();

  //     // 주문지연
  //     cy.get(':nth-child(2) > .css-1lvyaox').click();
  //     cy.wait(1000);
  //     cy.get(':nth-child(1) > .css-be38qz').click();
  //     cy.get('.css-11veo1s').click();
  //     cy.get('.css-1ikh012 > :nth-child(2)').contains("1시간").click();
  //     cy.wait(2000);
  //     cy.get('.css-1vm9lbk').click();
  //     cy.wait(2000);
  //     cy.get('.css-y5zi5h').contains('확인').click();
  //     cy.wait(3000);

  //     cy.get('.css-cz4akz > .css-70qvj9 > .css-zb4xkd').contains('주문 지연');

  //     cy.get('.css-1vm9lbk').click();
  //     cy.wait(1000);

  //     cy.get('.css-y5zi5h').click();

  //     cy.get('.css-cz4akz > .css-70qvj9 > .css-16ki5qa').contains('정상');
  //     cy.get('.css-1buvqaz').click();
  //   });

  //   it("영업시간 설정", () => {
  //     // 영업시간 설정
  //     cy.get(":nth-child(2) > .css-69i1ev > .css-ahx0et > .css-18uwtlr").click();
  //     cy.get(":nth-child(1) > .css-1l30qys > .css-dka6pf").click();
  //     cy.get(".css-7rx8u8")
  //       .invoke("show")
  //       .click({ force: true });

  //     // 평일/주말 선택
  //     cy.get(".css-ff9tpi > .css-1l30qys > .css-dka6pf").click();
  //     cy.get(".css-8j1pe6 > :nth-child(2)").click();

  //     // 월~금 시간 선택
  //     cy.get(
  //       ":nth-child(1) > .css-yd8sa2 > :nth-child(1) > .css-1i7y4xy > :nth-child(1) > .css-dka6pf"
  //     ).click();
  //     cy.get(".css-8j1pe6 > :nth-child(7)").contains("06시").click();
  //     cy.get(
  //       ":nth-child(1) > .css-yd8sa2 > :nth-child(1) > .css-1i7y4xy > :nth-child(2) > .css-dka6pf"
  //     ).click();
  //     cy.get(".css-8j1pe6 > :nth-child(1)").contains("00분").click();

  //     cy.get(
  //       ":nth-child(1) > .css-yd8sa2 > :nth-child(2) > .css-1i7y4xy > :nth-child(1) > .css-dka6pf"
  //     ).click();
  //     cy.get(".css-8j1pe6 > :nth-child(24)").contains("23시").click();
  //     cy.get(
  //       ":nth-child(1) > .css-yd8sa2 > :nth-child(2) > .css-1i7y4xy > :nth-child(2) > .css-dka6pf"
  //     ).click();
  //     cy.get(".css-4hl3xb").contains("30분").click();

  //     // 토 시간 선택
  //     cy.get(
  //       ":nth-child(2) > .css-yd8sa2 > :nth-child(1) > .css-1i7y4xy > :nth-child(1) > .css-dka6pf"
  //     ).click();
  //     cy.get(".css-8j1pe6 > :nth-child(13)").contains("12시").click();
  //     cy.get(
  //       ":nth-child(2) > .css-yd8sa2 > :nth-child(1) > .css-1i7y4xy > :nth-child(2) > .css-dka6pf"
  //     ).click();
  //     cy.get(":nth-child(41)").contains("40분").click();

  //     cy.get(
  //       ":nth-child(2) > .css-yd8sa2 > :nth-child(2) > .css-1i7y4xy > :nth-child(1) > .css-dka6pf"
  //     ).click();
  //     cy.get(".css-8j1pe6 > :nth-child(21)").contains("20시").click();
  //     cy.get(
  //       ":nth-child(2) > .css-yd8sa2 > :nth-child(2) > .css-1i7y4xy > :nth-child(2) > .css-dka6pf"
  //     ).click();
  //     cy.get(".css-8j1pe6 > :nth-child(1)").contains("00분").click();
  //     // 일 시간 선택
  //     cy.get(':nth-child(3) input[type="checkbox"]')
  //       .eq(2)
  //       .then(($el) => {
  //         return Cypress.$($el).prop("checked");
  //       })
  //       .then((isChecked) => {
  //         if (isChecked) {
  //           cy.get(':nth-child(3) input[type="checkbox"]')
  //             .eq(2)
  //             .click({ force: true });
  //           cy.get(':nth-child(3) input[type="checkbox"]')
  //             .eq(2)
  //             .click({ force: true });
  //         } else {
  //           cy.get(':nth-child(3) input[type="checkbox"]')
  //             .eq(2)
  //             .click({ force: true });
  //         }
  //       });

  //     // 저장 선택
  //     cy.get(".css-1xtw0ps").contains("저장").click();
  //     cy.wait(3000);
  //     cy.get(".css-1buvqaz").click();
  //   });

  //   it("주방마감 설정", () => {
  //     // 주방마감 진입
  //     cy.get(':nth-child(3) > .css-69i1ev > .css-ahx0et > .css-18uwtlr').click();

  //     // 테이블오더 주방마감 사용
  //     cy.get(':nth-child(2) > .css-k5rr6j > .css-yvfkka > .css-df7w99').click();

  //     // 평일/주말 선택
  //     cy.get('.css-5qwq8n > .css-1l30qys > .css-dka6pf').click();
  //     cy.get('.css-8j1pe6 > :nth-child(2)').click();

  //     // 월-금 시간 선택
  //     cy.get(':nth-child(1) > .css-cmc34r > :nth-child(1) > .css-dka6pf').click();
  //     cy.get('.css-8j1pe6 > :nth-child(7)').click();
  //     cy.get(':nth-child(1) > .css-cmc34r > :nth-child(2) > .css-dka6pf').click();
  //     cy.get(':nth-child(56)').click();

  //     // 토 시간 선택
  //     cy.get(':nth-child(2) > .css-cmc34r > :nth-child(1) > .css-dka6pf').click();
  //     cy.get('.css-8j1pe6 > :nth-child(15)').click();
  //     cy.get(':nth-child(2) > .css-cmc34r > :nth-child(2) > .css-dka6pf').click();
  //     cy.get('.css-8j1pe6 > :nth-child(11)').click();

  //     // 일 시간 선택
  //     cy.get(':nth-child(3) > .css-cmc34r > :nth-child(1) > .css-dka6pf').click();
  //     cy.get(':nth-child(3) > .css-cmc34r > :nth-child(2) > .css-dka6pf').click();

  //     // 마감 안내시간 설정
  //     cy.get('.css-df7w99').click();
  //     cy.wait(500);
  //     cy.get('.css-k5rr6j > .css-1l30qys > .css-dka6pf').click();
  //     cy.get('.css-4hl3xb').click();

  //     cy.get(':nth-child(3) > .css-j7qwjs > .css-5qwq8n > .css-1l30qys > .css-dka6pf').click();
  //     cy.get('.css-4hl3xb').click();
  //     cy.get(':nth-child(3) > .css-j7qwjs > .css-yd8sa2 > .css-70qvj9 > .css-cmc34r > .css-1l30qys > .css-dka6pf > .css-1440tk4').click();
  //     cy.get('.css-8j1pe6 > :nth-child(11)').click();

  //     // 저장, 돌아가기
  //     cy.get('.css-6kaosg').contains("저장").click();
  //     cy.wait(2000);
  //     cy.get('.css-1buvqaz').click();
  //   });

  it("브레이크타임 설정", () => {
    // 브레이크타임 진입
    cy.get(":nth-child(4) > .css-69i1ev > .css-ahx0et > .css-18uwtlr").click();

    // 브레이크타임 사용
    cy.get('input[type="radio"][value="use"]').then(($el) => {
      const isChecked = $el[0].checked;

      const toggleValue = isChecked ? "unused" : "use";

      // 반대값 먼저 선택
      cy.get(`input[type="radio"][value="${toggleValue}"]`).check({
        force: true,
      });

      // 마지막에 항상 'use'로 다시 선택
      if (toggleValue !== "use") {
        cy.wait(200);
        cy.get('input[type="radio"][value="use"]').check({ force: true });
      }
    });

    cy.get(':nth-child(1) > .css-1l30qys > .css-dka6pf').click();
    cy.get(".css-4hl3xb").click();

    // 매일 선택
    cy.get(".css-ff9tpi > .css-1l30qys > .css-dka6pf").click();
    cy.get(".css-4hl3xb").click();

    // 종료시간만 설정
    cy.get(
      ":nth-child(2) > .css-1i7y4xy > :nth-child(1) > .css-dka6pf"
    ).click();
    cy.get(".css-8j1pe6 > :nth-child(23)").click();
    cy.get(
      ":nth-child(2) > .css-1i7y4xy > :nth-child(2) > .css-dka6pf"
    ).click();
    cy.get(".css-8j1pe6 > :nth-child(60)").click();
    cy.wait(3000);

    // 저장, 돌아가기
    cy.get('.css-1xtw0ps > .css-epvm6').contains("저장").click();
    // cy.get(".css-1buvqaz").click();
  });

  //   it("휴무일 설정", () => {
  //     // 휴무일설정 진입

  //   });
});
