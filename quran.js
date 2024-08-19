// Fetch list of surahs
fetch('https://api.quran.com/api/v4/chapters')
.then(response => response.json())
.then(data => {
    const container = document.querySelector('.container');
    data.chapters.forEach(surah => {
        const div = document.createElement('div');
        div.className = 'surah-div';
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = surah.name_complex;
        a.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(`surah.html?number=${surah.id}`, '_self');
        });
        div.appendChild(a);
        container.appendChild(div);
    });
})
.catch(err => showModal(err.message));

