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

  it("should show information reflected in the input fields when form is filled out", () => {
    cy.get(".title-input").type("Awesome Photo")
      .get(".title-input").should("have.value", "Awesome Photo")
    cy.get(".url-input").type("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
    .get(".url-input").should("have.value", "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
  })
})