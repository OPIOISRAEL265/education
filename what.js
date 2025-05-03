document.getElementById('moreInfoBtn').addEventListener('click', function() {  
  const extraInfoDiv = document.getElementById('extraInfo');  
  if (extraInfoDiv.style.display === 'none') {  
    extraInfoDiv.style.display = 'block';  
    this.textContent = 'Hide Details';  
  } else {  
    extraInfoDiv.style.display = 'none';  
    this.textContent = 'Learn More';  
  }  
});  