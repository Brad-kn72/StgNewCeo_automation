const { loginModule } = require('./module/manager.module.js');

describe('GNB,LNB Test', () => {

    it('GNB', () => {
        loginModule.login({
            Site: `${Cypress.env('stgNewCeo')}`,
            Id: `${Cypress.env('stgID')}`,
            Password: `${Cypress.env('stgPW')}`,
        });

        cy.contains('전체 브랜드').click();
        cy.wait(1 * 1000);
        cy.contains('관리 전환').click();
        cy.contains('내정보');
        cy.contains('로그아웃');
    });

    it('LNB', () => {
        loginModule.login({
            Site: `${Cypress.env('stgNewCeo')}`,
            Id: `${Cypress.env('stgID')}`,
            Password: `${Cypress.env('stgPW')}`,
        });

        /* 매출분석 */
        cy.contains('매출분석').click();
        cy.wait(1 * 1000);
        cy.contains('매장별 매출').click();
        cy.contains('기간별 매출').click();
        cy.contains('플랫폼별 매출').click();
        cy.contains('메뉴그룹별 매출').click();
        cy.contains('상품별 매출').click();
        /* 매장관리 */
        cy.contains('매장관리').click();
        cy.wait(1 * 1000);
        cy.contains('연동정보 관리').click();
        cy.contains('기본정보 관리').click();
        cy.contains('영업시간 관리').click();
        cy.contains('주문정보 관리').click();
        /* 메뉴 관리 */
        cy.contains('메뉴관리').click();
        cy.wait(1 * 1000);
        cy.contains('상품관리').click();
        cy.contains('카테고리 관리').click();
        cy.contains('메뉴판 관리').click();
        cy.contains('옵션 관리').click();
        /* 주문관리 */
        cy.contains('주문관리').click();
        cy.wait(1 * 1000);
        cy.contains('주문내역').click();

        /* 고객관리 */
        // cy.contains('고객관리').click();
        // cy.contains('쿠폰관리').click();
        // cy.contains('리뷰관리').click();
        /* 권한관리 */
        cy.contains('권한관리').click();
        cy.wait(1 * 1000);
        cy.contains('요청관리').click();
    });
});
