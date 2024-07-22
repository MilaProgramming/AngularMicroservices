describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')
    cy.get('#usuarios').click()
    cy.get('#AgregarUsuario').click()
    //En el input agregar-nombre pon "Juan"
    cy.get('.agregar-nombre').type('Juan Prueba')
    cy.get('.agregar-email').type('juan@gmail.com')
    cy.get('.agregar-password').first().type('juan123');
    cy.get('.agregar-password').last().type('juan123');
    cy.get('.aceptar').click()
    //espera un rato a que .aceptar acabe
    cy.wait(1000)
    cy.get('#cursos').click()
    cy.get('#AgregarCurso').click()
    cy.get('.agregar-nombre').type('Estructura de Datos')
    cy.get('.aceptar').click()

    cy.get('#inscripcion').click()
    //De un combo box, selecciona la opcion que contenga el nombre de Juan
    cy.get('.combo-box').select('Juan Prueba')
    //en la tabla courses-table selecciona la fila que contenga el nombre de Estructura de Datos y da click en el boton de inscribir
    cy.get('.courses-table').contains('Estructura de Datos').parent().find('button').click()
  })
})