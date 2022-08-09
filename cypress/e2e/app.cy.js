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
    cy.get(".url a").should("have.text", "http://localhost:3001/useshorturl/1")
  })

  it("should be able to view the Form with the proper inputs", () => {
    cy.get(".title-input").invoke("attr", "placeholder").should("contain", "Title...")
    cy.get(".url-input").invoke("attr", "name").should("contain", "urlToShorten")
  })

  it("should show information reflected in the input fields when form is filled out", () => {
    cy.get(".title-input").type("My Vacation Picture")
      .get(".title-input").should("have.value", "My Vacation Picture")
    cy.get(".url-input").type("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=79")
    .get(".url-input").should("have.value", "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=79")
  })

  it("should be able to submit form, and new shortened URL is rendered", () => {
    cy.intercept("GET", "http://localhost:3001/api/v1/urls", {fixture: "addurl"})
    cy.intercept("POST", "http://localhost:3001/api/v1/urls", {fixture: "addurl"})
    cy.get(".title-input").type("My Vacation Picture")
    cy.get(".url-input").type("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=79")
    cy.get(".form-submit-btn").click()
    cy.get("h3").last().should("have.text","My Vacation Picture")
    cy.get(".url a").last().should("have.text", "http://localhost:3001/useshorturl/2")
  })
})