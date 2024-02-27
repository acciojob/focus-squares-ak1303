//your JS code here. If required.
let squares = document.querySelectorAll('.square');

squares.forEach(box=>{
	box.addEventListener('mouseover',(e)=>{
		squares.forEach(boxes=>boxes.style.backgroundColor='#6F4E37')
		box.style.backgroundColor='#E6E6FA'; 
	})
	box.addEventListener('mouseout',(e)=>{
				squares.forEach(boxes=>boxes.style.backgroundColor='#E6E6FA') 
	})
	
});