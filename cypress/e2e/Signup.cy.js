const { loginModule } = require("./module/manager.module.js")

describe("Signup", () => {
    it("Signup", () => {
        // 대리점 권한 로그인
        loginModule.login({
            Site: Cypress.env("stgNewCeo"),
            Id: Cypress.env("stgID1"),
            Password: Cypress.env("stgPW1"),
          });


        // 권한 부여
        cy.get('.css-7t2fq0').contains("권한관리").click();
        cy.get('.css-1xxcdjc').contains("요청관리").click();
        cy.get('.css-ejb887').contains("가입링크 생성").click();
        cy.get('[for="UT_201"] > .css-1oj99jf').click();
        cy.get('.css-epvm6').contains("링크 생성하기").click();

        // 회원가입 진입
        cy.get('input.css-1bq4gr1').invoke('val').then((url) => {
            cy.visit(url)
        });

        // 정보입력
        cy.get('#userId').type(Cypress.env('stgID3'));
        cy.get('#userPwd').type(Cypress.env('stgPW2'));
        cy.get('#passwordConfirm').type(Cypress.env('stgPW2'));
        cy.get('#branchName').type("회원가입테스트매장");
        cy.get('#bizNumber').type("1234567890");

        // display: none 제거 변수 생성
        const revealHiddenInput = ($el) => $el[0].removeAttribute('style');

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

        cy.get('#userName').type("회원가입테스트매장");
        cy.get('#userTel').type(Cypress.env('stgTel'));
        cy.get('.css-1el2a41').click();
        cy.get('#verificationCode').type("0000");
        cy.get(':nth-child(9) > .css-ahx0et > .css-1xtw0ps').click();
        cy.get('#userEmail').type(Cypress.env('stgEmail'));
        cy.get('.css-1odyjk2 > .css-v7chbp').click();
        cy.get('.css-1s90lkc').eq(0).click();
        cy.get('.css-1s90lkc').eq(1).click();
        cy.get('.css-t7680b').click();
      });
});