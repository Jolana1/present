    window.onscroll = function() {
            myFunction()
        };

        var ele = document.body;

        function myFunction() {
            if (window.pageYOffset > 100) {
                ele.classList.add("sticky-nav")
            } else {
                ele.classList.remove("sticky-nav");
            }
        }
