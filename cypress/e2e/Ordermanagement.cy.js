const { loginModule } = require("./module/manager.module.js");

describe("주문정보 관리", () => {
  beforeEach(() => {
    loginModule.login({
      Site: Cypress.env("stgNewCeo"),
      Id: Cypress.env("stgID2"),
      Password: Cypress.env("stgPW2"),
    });
    // 주문정보 관리 진입
    cy.wait(1000);
    cy.get(".css-7t2fq0").contains("매장관리").click();
    cy.get(".css-p8ygjr").contains("주문정보 관리").click();
    cy.wait(3000);
  });

  it("주문정보 관리", () => {
    // 테이블오더 주문설정
    // 방문인원 확인가능
    cy.get('input[type="radio"][value="unused"]')
      .eq(0)
      .then(($el) => {
        const isChecked = $el[0].checked;
        const toggleValue = isChecked ? "use" : "unused";

        // 반대값 클릭
        cy.get(`input[type="radio"][value="${toggleValue}"]`)
          .eq(0)
          .check({ force: true });

        // 마지막엔 항상 '미사용'으로 (즉, unused)
        if (toggleValue !== "unused") {
          cy.wait(200);
          cy.get('input[type="radio"][value="unused"]')
            .eq(0)
            .check({ force: true });
        }
      });

    // 주류(성인인증) 확인
    cy.get('input[type="radio"][value="unused"]')
      .eq(1)
      .then(($el) => {
        const isChecked = $el[0].checked;
        const toggleValue = isChecked ? "use" : "unused";

        // 반대값 클릭
        cy.get(`input[type="radio"][value="${toggleValue}"]`)
          .eq(1)
          .check({ force: true });

        // 마지막엔 항상 '미사용'으로 (즉, unused)
        if (toggleValue !== "unused") {
          cy.wait(200);
          cy.get('input[type="radio"][value="unused"]')
            .eq(1)
            .check({ force: true });
        }
      });
    cy.get(':nth-child(1) > .css-8lphu9 > .css-pbs2wt > .css-ahx0et > .css-1xtw0ps').contains('저장').click();
    cy.wait(1000);
    

    // KDS 설정
    // KDS 사용 여부
    cy.get(
      ":nth-child(2) > .css-8lphu9 > .css-1i43dhb > .css-1pk539k > .css-yvfkka > .css-df7w99"
    ).click();
    cy.get('.css-3psm4p').click();
    cy.get('.css-1lsr9y1').type("테스트");
    cy.get(':nth-child(2) > .css-8lphu9 > .css-pbs2wt > .css-ahx0et > .css-1xtw0ps').contains('저장').click();
    cy.wait(1000);
    cy.get('.css-116vx8j').click();
    cy.get('.css-y9f9p2').click();
    cy.get(':nth-child(2) > .css-8lphu9 > .css-pbs2wt > .css-ahx0et > .css-1xtw0ps').contains('저장').click();
    cy.wait(1000);
  });
});
