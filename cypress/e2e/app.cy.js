/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture: "url"})
    cy.visit("http://localhost:3000/")
  })

  it("should be able to view the page title", () => {
    cy.get("h1").contains("URL Shortener")
  })

  it("should be able to view existing shortened URLs", () => {
    cy.get(".url").contains("http://localhost:3001/useshorturl/1")
  })
})