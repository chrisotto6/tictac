describe("Winning", function() {
  it("X Wins", function() {
    cy.visit("http://localhost:3000");

    cy.get("#0").click();
    cy.get("#3").click();
    cy.get("#1").click();
    cy.get("#6").click();
    cy.get("#2").click();

    cy.contains("Winner: X");
  });

  it("O Wins", function() {
    cy.visit("http://localhost:3000");

    cy.get("#3").click();
    cy.get("#0").click();
    cy.get("#6").click();
    cy.get("#1").click();
    cy.get("#7").click();
    cy.get("#2").click();

    cy.contains("Winner: O");
  });
});
