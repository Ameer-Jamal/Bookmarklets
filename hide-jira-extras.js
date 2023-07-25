javascript:(function() { 
  var elements = document.querySelectorAll('div[data-testid="issue.views.issue-details.issue-layout.container-right"]'); 
  var button = document.querySelector('button[data-testid="ContextualNavigation-grab-area"]'); 
  var divToClick = document.querySelector('div.css-1x67wrc'); 
  var header = document.querySelector('.css-1r5q3td');
  
  // Toggle the header if it exists
  if(header) {
    header.style.display = (header.style.display != 'none' ? 'none' : '');
  }

  for(var i = 0; i < elements.length; i++){ 
    var styleDisplay = elements[i].style.display; 
    var ariaExpanded = button.getAttribute('aria-expanded');

    if(styleDisplay != 'none' && ariaExpanded === 'true') { 
      elements[i].style.display = 'none'; 
      divToClick.click(); 
    } else if(styleDisplay === 'none' && ariaExpanded === 'false') { 
      elements[i].style.display = ''; 
      divToClick.click(); 
    } else if(styleDisplay != 'none' && ariaExpanded === 'false') { 
      elements[i].style.display = 'none'; 
    } 
  }
})();