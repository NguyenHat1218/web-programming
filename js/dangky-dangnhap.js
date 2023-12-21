// error function
function error({ title , message , duration }) {
    const main = document.getElementById("error");
    if (main) {
      const error = document.createElement("div");
  
      // Auto remove error
      const autoRemoveId = setTimeout(function () {
        main.removeChild(error);
      }, duration + 1000);
  
      // Remove error when clicked
      error.onclick = function (e) {
        if (e.target.closest(".icon-close")) {
          main.removeChild(error);
          clearTimeout(autoRemoveId);
        }
      };
  
      
      const delay = (duration / 1000).toFixed(2);
  
      error.classList.add("error");
      error.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
  
      error.innerHTML = `
            <div class="icon-error" >
                 <i class="fas fa-exclamation-circle "></i>
            </div>
            <div class="error-body" >
                <h3 class="error-title">${title}</h3>
                <p class="msg">${message}</p>
            </div>
            <div>
                <i class="fas fa-times icon-close"></i>
            </div>
                  `;
      main.appendChild(error);
    }
  }