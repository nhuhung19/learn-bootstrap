/**
 * Initializes the about form
 */
function initAboutForm() {

    let btnSubmit = document.querySelector('#submit')
    let txtEmail = document.querySelector('#email')
    let txtPassword = document.querySelector('#password')
    let txtPhone = document.querySelector('#phone')
    let cbCheckOut = document.querySelector('input[type="checkbox"]')

    const printForm = function() {
        console.log('Email:', txtEmail.value)
        console.log('Password:', txtPassword.value)
        console.log('Is checked:', cbCheckOut.checked )
    }

    printForm()

    function onSubmit () { // khai bao ham
        printForm()// goi ham (thuc thi) / call
    }


    btnSubmit.addEventListener('click', onSubmit)

    let btnReset = document.querySelector('#reset')
    function onReset () {
        txtEmail.value = ''
        txtPassword.value = ''
        printForm()
    }

    btnReset.addEventListener('click', onReset) //callback

    function onBlur(event) {
        // let tg = event.target
        console.log(event.target.name, ':', event.target.value)
    }

    // function onEmail() {
    //     console.log('Email:', txtEmail.value)
    // }
    txtEmail.addEventListener('blur', onBlur)

    // function onPassword () {
    //     console.log('Password:', txtPassword.value)
    // }
    txtPassword.addEventListener('blur', onBlur)

    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
          textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
              this.oldValue = this.value;
              this.oldSelectionStart = this.selectionStart;
              this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
              this.value = this.oldValue;
              this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
          });
        });
      }
      
      // Restrict input to digits and '.' by using a regular expression filter.
      setInputFilter(txtPhone, function(value) {
          // regular expression (bieu thuc quy tac trong javascript)
        return /^\d*\.?\d*$/.test(value);
      });
}