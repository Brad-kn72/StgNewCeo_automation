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
    // 포인트 진입
    cy.get(".css-7t2fq0").contains("포인트관리").click();
    cy.get(".css-p8ygjr").contains("포인트 설정").click();
    cy.wait(3000);
    cy.get('input[type="radio"][value="true"]')
      .eq(0)
      .then(($true) => {
        cy.get('input[type="radio"][value="false"]')
          .eq(0)
          .then(($false) => {
            const isUseChecked = $true[0].checked;

            if (isUseChecked) {
              // 현재 '사용'이면 '미사용' 먼저 클릭
              cy.wrap($false).check({ force: true });
              cy.get(".css-10gr2c5").click();
            }

            // 무조건 마지막엔 '사용'으로 다시 클릭
            cy.wait(200);
            cy.wrap($true).check({ force: true });
            cy.get("body").then(($body) => {
              if ($body.find(".css-10gr2c5").is(":visible")) {
                cy.get(".css-10gr2c5").click();
              }
            });
          });
      });

    // 포인트 관리 활성 확인
    cy.get('[href="/point/grant"] > .css-1hxzrqq')
      .should("be.visible")
      .and("not.be.disabled")
      .and(($el) => {
        expect($el).to.have.css("pointer-events", "auto");
      });

    // 포인트 설정
    cy.get(
      ".css-1i43dhb > :nth-child(1) > .css-8nb3v0 > .css-7boy05 > .css-7yl98y"
    )
      .clear()
      .type("15");
    cy.get(
      ".css-1lxwves > :nth-child(1) > .css-8nb3v0 > .css-7boy05 > .css-7yl98y"
    )
      .clear()
      .type("1000");
    cy.get(".css-1xtw0ps").click();

    // 포인트 미사용 전환
    cy.get(".css-y9f9p2").click();
    cy.get(".css-10gr2c5").click();
  });
});
