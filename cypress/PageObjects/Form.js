class commonForm{
  
      commoninput(sometext){
          cy.get("[placeholder='Username']").type(sometext)
      }
      commonpassword(sometext){
         cy.get("[placeholder='Password']").type(sometext)
     }


}


export default commonForm;