// this code will console log all links in body tag that are from third party website and does not has target blank atrribute. It also change colors and increase font size.

const cssStyles = `
  /* Your CSS styles start here */
    
.spinn{
  animation: bounce 0.2s linear infinite;
}
@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0px);
  }
}


  /* Your CSS styles end here */

`;

const styleElement = document.createElement('style');
styleElement.textContent = cssStyles;

const bodyElement = document.querySelector('body');
bodyElement.appendChild(styleElement);

function getCurrentDomain() {
     return window.location.hostname;
   }
   
   const excludedString = getCurrentDomain();
   const mainLinks = document.querySelectorAll('body a');
   
   mainLinks.forEach(link => {
     const href = link.getAttribute('href');
     const startsWithSlash = href.startsWith('/');
     const isHashLink = href === '#';
     const startsWithHash = href.startsWith('#') && !isHashLink;
     const containsExcludedString = href.includes(excludedString);
     const hasTargetBlank = link.getAttribute('target') === '_blank';
     const isMailtoLink = href.startsWith('mailto:');
     const isTelLink = href.startsWith('tel:');
   
     if (!startsWithSlash && !startsWithHash && !containsExcludedString && !hasTargetBlank && !isMailtoLink && !isTelLink) {
       link.style.fontSize = '4rem';
       link.style.color = 'red';
       link.style.backgroundColor = 'green';
   
       const image = link.querySelector('img');
       if (image) {
            image.classList.add('spinn');
       }
   
       console.log(href);
     }
   });


   