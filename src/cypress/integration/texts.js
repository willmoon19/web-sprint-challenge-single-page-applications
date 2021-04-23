describe('pizza app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    });
    
    const nameInput = () => cy.get("input[name='name']")
    const pepperoniInput = () => cy.get("[type='checkbox']")
    const olivesInput = () => cy.get("[type='checkbox']")
    const sausageInput = () => cy.get("[type='checkbox']")
    const pepperInput = () => cy.get("[type='checkbox']")
    const specialReqInput = () => cy.get("input[name='specialRequest']")
    const submitButton = () => cy.get("button['#order-button']")


        it("can type inputs", () => {
            nameInput()
            .should("have.value", "")
            .type("Will")
            .should("have.value", "Will");

            specialReqInput()
            .should("have.value", "")
            .type("special request")
            .should("have.value", "special request");

            
            pepperoniInput()
            .check()
            .uncheck();

            olivesInput()
            .check()
            .uncheck();
            
            sausageInput()
            .check()
            .uncheck();

            pepperInput()
            .check()
            .uncheck();

            it("check submit button", () => {
                submitButton().should("be.disabled");
                nameInput().type("William");
                submitButton().should("be.disabled");
                specialReqInput().type("willthemoon is so cool");
                submitButton().should("not.be.disabled");
 
            });
        
        })
});