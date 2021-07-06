const form = document.getElementById('formt')
form.addEventListener('submit',function(e){e.preventDefault(); checkEmail()})

function checkEmail(){
    const email = document.getElementById('email').value
    ValidateEmail(email)
}

function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }
  errorDisplay()
}

function errorDisplay(){
    const error = document.getElementById('errors')
    error.style.visibility="visible"
    const errortext = document.getElementById('error-text')
    errortext.style.visibility = "visible"
}
