document.getElementById('moreBtn').addEventListener('click', function() {  
  const moreInfoDiv = document.getElementById('moreInfo');  
  if (moreInfoDiv.style.display === 'none') {  
    moreInfoDiv.style.display = 'block';  
    this.textContent = 'Hide Details';  
  } else {  
    moreInfoDiv.style.display = 'none';  
    this.textContent = 'Learn More';  
  }  
});  