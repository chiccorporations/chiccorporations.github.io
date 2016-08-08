var email, firstName, lastName, description, textArea;
var emailLabel, firstNameLabel, lastNameLabel;

function setup(){
  firstNameLabel = createElement('label', 'First Name:\t');
  firstNameLabel.attribute('for', 'firstName')
  firstName = createInput();
  
  lastNameLabel = createElement('label', 'Last Name:\t');
  lastNameLabel.attribute('for', 'lastName')
  lastName = createInput();
  
  emailLabel = createElement('label', 'Email:\t');
  emailLabel.attribute('for', 'email');
  email = createInput();
  
  textArea = createElement('textarea');
  
  email.attribute('name', 'email');
  email.attribute('placeholder', 'eg: pillsburydoeboi43@gmail.com');
  
  firstName.attribute('name', 'email');
  firstName.attribute('placeholder', 'eg: John');
  
  lastName.attribute('name', 'email');
  lastName.attribute('placeholder', 'eg: Doe');
  
  textArea.attribute('rows', '4');
  textArea.attribute('cols', '50');
}