window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    // Load external HTML partials (static-site "includes")
    // Note: this requires serving the site over HTTP(S) (e.g., GitHub Pages). It won't work from file:// URLs.
    function loadPartial(targetId, url, label) {
        var $el = $('#' + targetId);
        if (!$el.length) return;
        // If content is already present (e.g., inlined for offline/file:// viewing), don't overwrite it.
        if ($el.children().length > 0 || $.trim($el.text()).length > 0) return;
        $.get(url)
            .done(function(html) { $el.html(html); })
            .fail(function() {
                $el.html('<div class="content"><p><strong>' + label + '</strong> failed to load.</p></div>');
            });
    }

    loadPartial('table1', 'static/table1.html', 'Table 1');
    loadPartial('table2', 'static/table2.html', 'Table 2');
    loadPartial('table3', 'static/table3.html', 'Table 3');
    loadPartial('table-leaderboard', 'static/table_leaderboard.html', 'Leaderboard Table');
    loadPartial('fig-reflexion', 'static/fig_reflexion.html', 'Figure');
    loadPartial('fig-distribution', 'static/fig_distribution.html', 'Distribution Figure');
    loadPartial('table4', 'static/table4.html', 'Table 4');
    loadPartial('table5', 'static/table5.html', 'Table 5');

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})
