// slide display-table
$(document).ready(function () {

    if ($('.pauseDashboard').length) {
        let displayTables = $('.slider .display-table');
        let circle = $('.slider .circle');
        let indexDisplayTables = displayTables.length - 1;
        let i = 0;
        let currentDisplayTables = displayTables.eq(i);
        let currentCircle = circle.eq(i);

        displayTables.css('display', 'none');
        currentDisplayTables.css('display', 'flex');
        currentCircle.addClass("active-circle");

        function slideDisplayTables()
        {
            setTimeout(function () {
                if (i < indexDisplayTables) {
                    i++;
                } else {
                    i = 0;
                }

                displayTables.hide();
                currentDisplayTables = displayTables.eq(i);
                currentDisplayTables.show();
                circle.removeClass("active-circle");
                currentCircle = circle.eq(i);
                currentCircle.addClass("active-circle");

                slideDisplayTables();
            }, 6000);
        }

        slideDisplayTables();
    }
});