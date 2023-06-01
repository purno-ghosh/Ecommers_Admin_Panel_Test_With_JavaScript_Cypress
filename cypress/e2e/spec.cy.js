describe('Page_Wize_Atomation', () => {
  beforeEach(() => {
    cy.visit('https://6ammart.sixamtech.com/dev/login/admin');
    cy.get('#signinSrEmail').type('6amtest23@gmail.com');
    cy.wait(2000);
    cy.get('#signupSrPassword').type('6Am@1234');
    cy.wait(2000);
    cy.get('button[type="submit"]').click();
    cy.contains('button', 'End tour').click();
    cy.wait(2000);
  });

  it('Landing_Page_test', () => {
    cy.contains('a', 'Users').click();
    cy.wait(2000);

    // User Overview Page Verify
    cy.contains('h1', 'User Overview').then(($element) => {
      const userOverview = $element.text();
      cy.log(`TEST 01 DONE ${userOverview}`);
    });

    // Vehicles category Page Verify
    cy.get('span.navbar-vertical-aside-mini-mode-hidden-elements.text-truncate')
      .contains('Vehicles category')
      .then(($element) => {
        cy.wrap($element).trigger('mousedown', { which: 1 }).trigger('mouseup', { which: 1, force: true });
      });

    cy.window().then((win) => {
      const newTabHandle = Array.from(win.windowHandles).find((handle) => handle !== win.parentHandle);
      cy.wrap(newTabHandle).then((tabHandle) => {
        cy.wrap(tabHandle).then(() => {
          cy.wait(5000);
          cy.wrap(tabHandle).then((newTabHandle) => {
            cy.window({ log: false, timeout: 15000 }).should('have.property', 'windowHandle', newTabHandle);
            cy.document({ log: false }).its('title').should('contain', 'Vehicles category list 2');
            cy.log('TEST 02 DONE');
          });
          cy.wrap(tabHandle).then(() => {
            cy.window({ log: false }).then((win) => {
              win.close();
            });
          });
          cy.wait(5000);
          cy.wrap(win.parentHandle).then((parentTabHandle) => {
            cy.window({ log: false }).should('have.property', 'windowHandle', parentTabHandle);
          });
        });
      });
    });

    // Add Delivery Man Page Verify
    cy.get('span.navbar-vertical-aside-mini-mode-hidden-elements.text-truncate')
      .contains('Add Delivery Man')
      .then(($element) => {
        cy.wrap($element).trigger('mousedown', { which: 1 }).trigger('mouseup', { which: 1, force: true });
      });

    cy.window().then((win) => {
      const newTabHandle = Array.from(win.windowHandles).find((handle) => handle !== win.parentHandle);
      cy.wrap(newTabHandle).then((tabHandle) => {
        cy.wrap(tabHandle).then(() => {
          cy.wait(5000);
          cy.wrap(tabHandle).then((newTabHandle) => {
            cy.window({ log: false, timeout: 15000 }).should('have.property', 'windowHandle', newTabHandle);
            cy.contains('span', 'Add New Delivery Man').then(($element) => {
              const addDeliveryMan = $element.text();
              cy.log(`TEST 03 DONE ${addDeliveryMan}`);
            });
          });
          cy.wrap(tabHandle).then(() => {
            cy.window({ log: false }).then((win) => {
              win.close();
            });
          });
          cy.wait(5000);
          cy.wrap(win.parentHandle).then((parentTabHandle) => {
            cy.window({ log: false }).should('have.property', 'windowHandle', parentTabHandle);
          });
        });
      });
    });

    // New Delivery Man Page Verify
    cy.get('span.navbar-vertical-aside-mini-mode-hidden-elements.text-truncate')
      .contains('New delivery man')
      .then(($element) => {
        cy.wrap($element).trigger('mousedown', { which: 1 }).trigger('mouseup', { which: 1, force: true });
      });

    cy.window().then((win) => {
      const newTabHandle = Array.from(win.windowHandles).find((handle) => handle !== win.parentHandle);
      cy.wrap(newTabHandle).then((tabHandle) => {
        cy.wrap(tabHandle).then(() => {
          cy.wait(5000);
          cy.wrap(tabHandle).then((newTabHandle) => {
            cy.window({ log: false, timeout: 15000 }).should('have.property', 'windowHandle', newTabHandle);
            cy.contains('h1', 'New joining requests').then(($element) => {
              const newDeliveryMan = $element.text();
              cy.log(`TEST 04 DONE ${newDeliveryMan}`);
            });
          });
          cy.wrap(tabHandle).then(() => {
            cy.window({ log: false }).then((win) => {
              win.close();
            });
          });
          cy.wait(5000);
          cy.wrap(win.parentHandle).then((parentTabHandle) => {
            cy.window({ log: false }).should('have.property', 'windowHandle', parentTabHandle);
          });
        });
      });
    });

    // Delivery Man List Page Verify
    cy.get('span.navbar-vertical-aside-mini-mode-hidden-elements.text-truncate')
      .contains('Deliveryman List')
      .then(($element) => {
        cy.wrap($element).trigger('mousedown', { which: 1 }).trigger('mouseup', { which: 1, force: true });
      });

    cy.window().then((win) => {
      const newTabHandle = Array.from(win.windowHandles).find((handle) => handle !== win.parentHandle);
      cy.wrap(newTabHandle).then((tabHandle) => {
        cy.wrap(tabHandle).then(() => {
          cy.wait(5000);
          cy.wrap(tabHandle).then((newTabHandle) => {
            cy.window({ log: false, timeout: 15000 }).should('have.property', 'windowHandle', newTabHandle);
            cy.contains('span', 'Delivery Man').eq(1).then(($element) => {
              const deliveryManList = $element.text();
              cy.log(`TEST 05 DONE ${deliveryManList}`);
            });
          });
          cy.wrap(tabHandle).then(() => {
            cy.window({ log: false }).then((win) => {
              win.close();
            });
          });
          cy.wait(5000);
          cy.wrap(win.parentHandle).then((parentTabHandle) => {
            cy.window({ log: false }).should('have.property', 'windowHandle', parentTabHandle);
          });
        });
      });
    });

    // Reviews Page Verify
    cy.get('span.navbar-vertical-aside-mini-mode-hidden-elements.text-truncate')
      .contains('Reviews')
      .then(($element) => {
        cy.wrap($element).trigger('mousedown', { which: 1 }).trigger('mouseup', { which: 1, force: true });
      });

    cy.window().then((win) => {
      const newTabHandle = Array.from(win.windowHandles).find((handle) => handle !== win.parentHandle);
      cy.wrap(newTabHandle).then((tabHandle) => {
        cy.wrap(tabHandle).then(() => {
          cy.wait(5000);
          cy.wrap(tabHandle).then((newTabHandle) => {
            cy.window({ log: false, timeout: 15000 }).should('have.property', 'windowHandle', newTabHandle);
            cy.contains('span', 'Delivery Man Reviews3').then(($element) => {
              const reviewsPage = $element.text();
              cy.log(`TEST 06 DONE ${reviewsPage}`);
            });
          });
          cy.wrap(tabHandle).then(() => {
            cy.window({ log: false }).then((win) => {
              win.close();
            });
          });
          cy.wait(5000);
          cy.wrap(win.parentHandle).then((parentTabHandle) => {
            cy.window({ log: false }).should('have.property', 'windowHandle', parentTabHandle);
          });
        });
      });
    });
  });

});
