const toggleBtn = document.getElementById('toggleBtn');  
const additionalResources = document.getElementById('additionalResources');  

toggleBtn.addEventListener('click', () => {  
  if (additionalResources.style.display === 'none') {  
    additionalResources.style.display = 'block';  
    toggleBtn.textContent = 'Hide More Resources';  
  } else {  
    additionalResources.style.display = 'none';  
    toggleBtn.textContent = 'Show More Resources';  
  }  
});  