javascript:(function () {
    var divToToggle = document.getElementById('main-panel');
    if (divToToggle) {
        divToToggle.style.display = (divToToggle.style.display === 'none') ? '' : 'none';
    }

    var contentElements = document.querySelectorAll('.content.ytmusic-player-page');
    contentElements.forEach(function(element) {
        element.style.padding = (element.style.padding === '0px') ? '' : '0px';
    });

    var queueItemElements = document.querySelectorAll('ytmusic-player-queue-item');
    queueItemElements.forEach(function(element) {
        element.style.borderTop = (element.style.borderTop === '1px dotted black') ? '' : '1px dotted black';
    });

    var ytmusicPlayerPageElements = document.getElementsByTagName('ytmusic-player-page');
    if (ytmusicPlayerPageElements.length > 0) {
        var firstElement = ytmusicPlayerPageElements[0];
        if (firstElement.classList.contains('customToggle')) {
            firstElement.classList.remove('customToggle');
        } else {
            firstElement.classList.add('customToggle');
        }
    }

    var existingStyleElement = document.getElementById('customToggleStyle');
    if (!existingStyleElement) {
        var style = document.createElement('style');
        style.id = 'customToggleStyle';
        style.innerHTML = `
            .customToggle {
                --ytmusic-player-page-content-gap: 0px !important;
                --ytmusic-player-page-side-panel-width: 100% !important;
            }
        `;
        document.head.appendChild(style);
    }
})();