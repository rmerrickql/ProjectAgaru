import AddRmElementsPage from "../Integration/PageObject/addRemoveElementsPage";
import Base from "../Integration/PageObject/base";

const addRemoveElement = new AddRmElementsPage()
const base = new Base()

describe('Tests the Add and Remove Elements Page', () => {
    it('Should only have one Button Element On First visit', () =>{
        base.visitAddRemoveTesting()
        addRemoveElement.numberOfExpectedButtons(1) //Check to see that there is only one button
    })
    it('Should add a Button if I click Add Element', () =>{
        cy.get('button').contains('Add Element')
            .click()
        addRemoveElement.numberOfExpectedButtons(2) //We are expecting 2 buttons to be on the page at this point
    })
    it('Should add an element I click each time. Random from 1-20', ()=>{
        let previousAmount = Cypress.$('button').length
        for(let i = 0; i < Math.random() * 20; i++) { //Click the Add Element button a random number of times
            cy.get('button').contains('Add Element')
                .click()
            addRemoveElement.numberOfExpectedButtons(previousAmount + 1) //We expect another button to display after each click
            previousAmount++
        }
        })
    it('Should remove a button if I click delete. Delete all buttons.', () => {
        //Find How many Buttons there are
        let OriginalAmount = Cypress.$('button').length
        let newAmount = OriginalAmount
        for(let i = 0; OriginalAmount - 1 > i; i++){ //Click the Delete button however many times there are delete buttons
            cy.get('Button').contains('Delete')
                .click()
            addRemoveElement.numberOfExpectedButtons(newAmount - 1) //We are expecting 1 less button every time we click
            newAmount--
        }
        //For each button, click delete button - 1
    })
})