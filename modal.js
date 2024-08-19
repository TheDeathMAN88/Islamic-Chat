function showModal(message, redirect, closeRedirect) {
    var modal = document.getElementById("modal");
    var span = document.getElementById("closeModal");
    document.getElementById("modalText").innerText = message;
  
    modal.style.display = "block";
  
    span.onclick = function() {
      modal.style.display = "none";
      if(closeRedirect) {
        window.location.href = "index.html"; // Redirect to index.html if closeRedirect is true
      }
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        if(closeRedirect) {
          window.location.href = "index.html"; // Redirect to index.html if closeRedirect is true
        }
      }
    }
  
    if (redirect) {
      setTimeout(function(){ 
        modal.style.display = "none"; 
        window.location.href = 'index.html';
      }, 2000); // Redirect to index.html after 2 seconds
    }
  }