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
    cy.wait(1000);
    cy.get(".css-7t2fq0").contains("매장관리").click();
    cy.get(".css-p8ygjr").contains("기본정보 관리").click();
    cy.wait(3000);

    // // 매장정보 수정
    cy.get(".css-1bq4gr1").clear();
    cy.wait(500);
    cy.get(".css-1bq4gr1").type("기남자동화테스트용");
    cy.get('input[name="address"]').then(($input) => {
      $input[0].value =
        "서울 강남구 영동대로 312 (대치동, 엘엔티렉서스(주)LEXUS전시장)";
      $input[0].dispatchEvent(new Event("input", { bubbles: true }));
      $input[0].dispatchEvent(new Event("change", { bubbles: true }));
    });

    cy.wait(500);
    cy.get(".css-hztyyu").clear().type("6층 전체");
    cy.get('input[name="storeBizNumber"]').clear().type("1234567890");
    cy.get('input[name="bizOwnerName"]').clear().type("방기남");
    cy.get(":nth-child(7) > .css-1l30qys > .css-dka6pf").click();
    cy.wait(500);
    cy.get(".css-8j1pe6 > :nth-child(1)").contains("과세사업자").click();
    cy.get(".css-1g16btv > .css-dka6pf").click();
    cy.get(".css-4hl3xb").contains("국민은행").click();
    cy.get(":nth-child(8) > .css-8nb3v0 > .css-7boy05 > .css-1accc49")
      .clear()
      .type("00000000000000");
    cy.get(":nth-child(9) > .css-1l30qys > .css-dka6pf").click();
    cy.get(".css-4hl3xb").contains("영업중").click();
    cy.get(".css-6b1jks").clear().type("원산지 테스트 정보 입력");
    cy.get(".css-6b1jks").scrollIntoView();
    cy.get(
      ":nth-child(1) > .css-dg5sp2 > .css-ctnrf3 > .css-ahx0et > .css-1xtw0ps"
    )
      .eq(0)
      .contains("저장")
      .click();

    // 테이블오더 설정
    cy.get('input[name="tboAdminPwd"]').clear().type("111111");

    const revealHiddenInput = ($el) => $el[0].removeAttribute("style");

    cy.fixture("image/logo/0002.jpg", "base64").then((fileContent) => {
      cy.get('input[type="file"]')
        .eq(0)
        .should("exist")
        .then(revealHiddenInput)
        .attachFile({
          fileContent,
          fileName: "0002.jpg",
          mimeType: "image/jpg",
          encoding: "base64",
        });
    });

    cy.fixture("video/logo/0001.mp4", "base64").then((fileContent) => {
      cy.get('input[type="file"]')
        .eq(1)
        .should("exist")
        .then(revealHiddenInput)
        .attachFile({
          fileContent,
          fileName: "0001.mp4",
          mimeType: "video/mp4",
          encoding: "base64",
        });
    });

    cy.get(":nth-child(5) > .css-1l30qys > .css-dka6pf").click();
    cy.get(".css-4hl3xb").contains("30").click();

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
            const toggleValue =
              currentValue === "TSFT_001" ? "TSFT_002" : "TSFT_001";

            // 반대값 클릭
            cy.get(`input[type="radio"][value="${toggleValue}"]`).check({
              force: true,
            });

            // 마지막엔 항상 'TSFT_001'으로
            if (toggleValue !== "TSFT_001") {
              cy.wait(200);
              cy.get('input[type="radio"][value="TSFT_001"]').check({
                force: true,
              });
            }
          });
      });

    cy.get(".css-yvfkka")
      .eq(2)
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
              cy.get('input[type="radio"][value="use"]').check({
                force: true,
              });
            }
          });
      });

    cy.contains("영상 인코딩..", { timeout: 60000 }).should("not.exist");
    cy.get(
      ":nth-child(3) > :nth-child(2) > .css-1in8iz8 > .css-mehg5o > .css-yd8sa2 > .css-6tcmml > .css-1tfrujd > .css-ye8kfq"
    ).click();
    cy.get(":nth-child(4) > :nth-child(2) > .css-1in8iz8 > .css-mehg5o > .css-yd8sa2 > .css-6tcmml > .css-1tfrujd > .css-ye8kfq").click();

    // 스피너가 나타났다가 사라질 때까지 대기 → 저장 완료 기준
    cy.get('[data-testid="moon-loader"]', { timeout: 30000 }).should("exist");
    cy.get('[data-testid="moon-loader"]', { timeout: 30000 }).should(
      "not.exist"
    );
    cy.wait(1000);

    cy.get(
      ".css-u2xgta > :nth-child(2) > .css-dg5sp2 > .css-ctnrf3 > .css-ahx0et > .css-1xtw0ps"
    )
      .contains("저장")
      .click();

    cy.get(
      ":nth-child(3) > :nth-child(2) > .css-1in8iz8 > .css-mehg5o > .css-yd8sa2 > .css-6tcmml > .css-1tfrujd > .css-ye8kfq"
    ).click();
    cy.get(":nth-child(4) > :nth-child(2) > .css-1in8iz8 > .css-mehg5o > .css-yd8sa2 > .css-6tcmml > .css-1tfrujd > .css-ye8kfq").click();
  });
});
