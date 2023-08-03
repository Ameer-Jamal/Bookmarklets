javascript:(function() {
  var elements = document.querySelectorAll('div[data-testid="issue.views.issue-details.issue-layout.container-right"]');
  var button = document.querySelector('button[data-testid="ContextualNavigation-grab-area"]');
  var divToClick = document.querySelector('div.css-1x67wrc');
  var header = document.querySelector('.css-1r5q3td');
  var leftElement = document.querySelector('div[data-testid="issue.views.issue-details.issue-layout.container-left"]');
  if (header) {
      header.style.display = (header.style.display != 'none' ? 'none' : '');
  }
  if (leftElement) {
      leftElement.style.padding = (leftElement.style.padding != '0px' ? '0px' : '');
  }
  for (var i = 0; i < elements.length; i++) {
      var styleDisplay = elements[i].style.display;
      var ariaExpanded = button.getAttribute('aria-expanded');
      if (styleDisplay != 'none' && ariaExpanded === 'true') {
          elements[i].style.display = 'none';
          divToClick.click();
      } else if (styleDisplay === 'none' && ariaExpanded === 'false') {
          elements[i].style.display = '';
          divToClick.click();
      } else if (styleDisplay != 'none' && ariaExpanded === 'false') {
          elements[i].style.display = 'none';
      }
  }
})();