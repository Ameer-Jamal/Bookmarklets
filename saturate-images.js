javascript: (function() {
    // Get all image elements in the page
    var images = document.querySelectorAll('img');

    // Loop through all images
    for (var i = 0; i < images.length; i++) {
        // Check if the current image style filter includes 'saturate(1.7)'
        if (images[i].style.filter.includes('saturate(1.7)')) {
            // If it does, clear the filter style
            images[i].style.filter = '';
        } else {
            // If it doesn't, set the filter style to 'saturate(1.7)'
            images[i].style.filter = 'saturate(1.7)';
        }
    }
})();