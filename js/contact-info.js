var name, email, comment;
var inputs;
var message;
var button;

function setup() {
  noCanvas();

  name = createInput();
  email = createInput();
  comment = createInput();
  button = createButton('click');
  

}

function mouseClicked() {
  button.mouseClicked(emailInput);
}

function displayInputs() {
  for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i].value);
  }
}

function emailInput() {
  var counter = 0;
  message = ' ';
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length > 2) {
      message += inputs[i].value;
      message += '\n';

      counter++;
    }
  }


  if (counter == inputs.length) {
    console.log(message);
  } else {
    alert('Not all the criteria were filled out. You must finish in order to ensure the creation of your designs!');
  }
  
  
}