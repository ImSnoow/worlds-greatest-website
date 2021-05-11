
    function toggleTheme() {
        // Obtains an array of all <link>
        // elements.
        // Select your element using indexing.
        var theme = document.getElementsByTagName('link')[0];

        // Change the value of href attribute 
        // to change the css sheet.
        if (theme.getAttribute('href') == 'stylesheet1.css') {
            theme.setAttribute('href', 'stylesheet2.css');
        } else {
            theme.setAttribute('href', 'stylesheet1.css');
        }
    }
