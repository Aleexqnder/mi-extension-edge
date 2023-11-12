document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('searchForm');
    var searchInput = document.getElementById('searchInput');

    // script.js
    function showDateTime() {
        var now = new Date();
        var dateTime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        document.getElementById('dateTime').textContent = dateTime;
    }

    showDateTime();
    setInterval(showDateTime, 1000); // Actualiza cada segundo

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var query = searchInput.value;
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    });
});