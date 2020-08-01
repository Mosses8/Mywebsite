const name=document.getElementById('Username')
const password=document.getElementById('Password')
const form=document.getElementById('form')
const errorElement=document.getElementById('error')

form.addEventListener('submit', (e) =>{
	let message=[]
	if(name.value.trim()==''||password.value.trim()==''){
		message.push('Please fill all the fields')
	}

	if(message.length > 0){
		e.preventDefault()
		errorElement.innerText=messages.join(', ')
	}
  })	
