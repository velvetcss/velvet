const velvet = {  
	init() {
		this.observeNewElements();
	}

    disableAnimations() {
        const style = document.createElement('style');
        style.id = 'velvet-disable-animations';
        style.textContent = `
          *:not(.velvet-exclude) {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        `;
        document.head.appendChild(style);
      },
      
      enableAnimations() {
        const disableStyle = document.getElementById('velvet-disable-animations');
        if (disableStyle) {
          disableStyle.remove();
        }
      },
      
      observeNewElements() {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1 && !node.classList.contains('velvet-animate-in') && !node.classList.contains('velvet-exclude')) {
                  node.classList.add('velvet-animate-in');
                  setTimeout(() => {
                    node.classList.remove('velvet-animate-in');
                  }, this.settings.duration * 1000);
                }
              });
            }
          });
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
      },
    };
    
window.Velvet = velvet;