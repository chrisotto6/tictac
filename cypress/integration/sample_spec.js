describe("Winning", function() {
  it("X Wins", function() {
    cy.visit("http://localhost:3000");

    cy.get("#0").click();
    cy.get("#3").click();
    cy.get("#1").click();
    cy.get("#6").click();
    cy.get("#2").click();

    cy.get("#move1").should("contain", "Go to move #1");
    cy.get("#move2").should("contain", "Go to move #2");
    cy.get("#move3").should("contain", "Go to move #3");
    cy.get("#move4").should("contain", "Go to move #4");
    cy.get("#move5").should("contain", "Go to move #5");

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

    cy.get("#move1").should("contain", "Go to move #1");
    cy.get("#move2").should("contain", "Go to move #2");
    cy.get("#move3").should("contain", "Go to move #3");
    cy.get("#move4").should("contain", "Go to move #4");
    cy.get("#move5").should("contain", "Go to move #5");
    cy.get("#move6").should("contain", "Go to move #6");

    cy.contains("Winner: O");
  });
});
