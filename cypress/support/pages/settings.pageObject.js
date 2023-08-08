import PageObject from '../PageObject';

class SettingsPageObject extends PageObject {
  url = '/#/settings';

  addNewUsername(username) {
    cy.findByPlaceholder('Your username')
      .clear()
      .type(username);
  }

  addNewBio(testbio) {
    cy.findByPlaceholder('Short bio about you')
      .clear()
      .type(testbio);
  }

  addNewEmail(email) {
    cy.findByPlaceholder('Email')
      .clear()
      .type(email);
  }

  addNewPassword(password) {
    cy.findByPlaceholder('Password')
      .clear()
      .type(password);
  }

  clickUpdateBtn() {
    cy.contains('.btn', 'Update Settings').click();
  }

  clickLogoutBtn() {
    cy.contains('.btn', 'Or click here to logout.').click();
  }

  popWindow() {
    cy.get('.swal-modal').should('contain', 'Update successful!');
    cy.get('.swal-button.swal-button--confirm')
      .click();
  }

  assertBio(bio) {
    cy.get('p').should('contain', bio);
  }
};

export default SettingsPageObject;
