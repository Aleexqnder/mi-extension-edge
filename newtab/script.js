// script.js
document.addEventListener('DOMContentLoaded', function() {
    function showDateTime() {
        var now = new Date();
        var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        var date = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
        document.getElementById('time').textContent = time;
        document.getElementById('date').textContent = date;
    }

    showDateTime();
    setInterval(showDateTime, 1000); // Actualiza cada segundo

    var searchForm = document.getElementById('searchForm');
    var searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var query = searchInput.value;
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    });
});