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

  it("should be able to view the Form with the proper inputs", () => {
    cy.get(".title-input").invoke("attr", "placeholder").should("contain", "Title...")
    cy.get(".url-input").invoke("attr", "name").should("contain", "urlToShorten")
  })
})