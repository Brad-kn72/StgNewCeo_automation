const { loginModule } = require("./module/manager.module.js");

describe("Linkmanagement", () => {
  beforeEach(() => {
    loginModule.login({
      Site: Cypress.env("stgNewCeo"),
      Id: Cypress.env("stgID2"),
      Password: Cypress.env("stgPW2"),
    });
  });

  it("Linkmanagement", () => {
    // 연동정보 관리 진입
    cy.get(".css-7t2fq0").contains("매장관리").click();
    cy.get(".css-p8ygjr").contains("연동정보 관리").click();

    //체크박스 확인
    cy.get(".css-2lxsj0").each(($el) => {
      cy.wrap($el).click({ force: true });
    });
    cy.get(".css-1ge7gyb").click();

    //매장 선택
    cy.wait(1000);
    cy.get("tr.css-19gf6ck a.css-1bnh1qj").first().click();
    cy.wait(1000);

    //연동 솔루션 수정
    cy.get(
      ".css-a8ltw4 > .css-69i1ev > a > .css-ahx0et > .css-1xtw0ps"
    ).click();

    cy.get(".css-yvfkka")
      .eq(0)
      .within(() => {
        cy.get('input[type="radio"]:checked')
          .invoke("val")
          .then((currentValue) => {
            // 현재 선택된 값의 반대값 계산
            const toggleValue = currentValue === "use" ? "unused" : "use";

            // 반대값 클릭
            cy.get(`input[type="radio"][value="${toggleValue}"]`).check({
              force: true,
            });

            // 마지막엔 항상 'unused'로
            if (toggleValue !== "unused") {
              cy.wait(200);
              cy.get('input[type="radio"][value="unused"]').check({
                force: true,
              });
            }
          });
      });

    cy.get(".css-yvfkka")
      .eq(1)
      .within(() => {
        cy.get('input[type="radio"]:checked')
          .invoke("val")
          .then((currentValue) => {
            // 현재 선택된 값의 반대값 계산
            const toggleValue = currentValue === "use" ? "unused" : "use";

            // 반대값 클릭
            cy.get(`input[type="radio"][value="${toggleValue}"]`).check({
              force: true,
            });

            // 마지막엔 항상 'use'로
            if (toggleValue !== "use") {
              cy.wait(200);
              cy.get('input[type="radio"][value="use"]').check({ force: true });
            }
          });
      });

    cy.get(".css-dka6pf").eq(0).click();
    cy.get(".css-8j1pe6 > :nth-child(2)").contains("후불요금제").click();

    cy.get(".css-dka6pf").eq(1).click();
    cy.get(".css-7rx8u8").contains("OKPOS(공용)").click();
    cy.get(".css-dka6pf").eq(1).click();
    cy.get('.css-8j1pe6').contains('미연동').click();

    cy.get('.css-1xtw0ps').click();

  });
});
