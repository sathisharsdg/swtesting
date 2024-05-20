describe("API First",()=>{
    beforeEach("Sample Repeat Login",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
        cy.get('[placeholder="Username"]').type("Admin");
        cy.get('[placeholder="Password"]').type("admin123");
        cy.get("[type='submit']").click()
    })
    it("Sample Login", ()=>{
        cy.viewport(1920,1080)
        cy.get("input[placeholder='Search']").type("sample")
    })
    it("Sampe two", ()=>{
        cy.viewport(1920,1080)
        cy.get("button[title='Timesheets']").click()
         
    })
})