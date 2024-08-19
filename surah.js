// Global variables to store the Surah and its translation
let surah = [];
let surahTranslation = [];

// Modified fetchSurahText
function fetchSurahText(number) {
    fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_id=${number}`)
    .then(response => response.json())
    .then(data => {
        surah = data.verses;  // Save the Surah
        fetch(`https://api.quran.com/api/v4/chapters/${number}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#surahTitle').textContent = data.chapter.name_complex;
            displayText();  // Display the Surah and its translation
        })
        .catch(err => showModal(err.message));
    })
    .catch(err => showModal(err.message));
}

// Modified fetchTranslation
function fetchTranslation(number) {
    fetch(`http://api.alquran.cloud/v1/surah/${number}/en.asad`)
    .then(response => response.json())
    .then(data => {
        surahTranslation = data.data.ayahs;  // Save the translation
        displayText();  // Display the Surah and its translation
    })
    .catch(err => showModal(err.message));
}

// New function to display the Surah and its translation
function displayText() {
    const surahTextContainer = document.querySelector('#surahText');
    surahTextContainer.innerHTML = '';  // Clear old surah text
    surah.forEach((ayah, index) => {
        // Display the Arabic text
        let p = document.createElement('p');
        p.textContent = ayah.text_uthmani;
        p.className = 'ayah';  // Assign 'ayah' class to the paragraph
        surahTextContainer.appendChild(p);

        // Display the English translation if it has been fetched
        if (surahTranslation.length > 0) {
            p = document.createElement('p');
            p.textContent = surahTranslation[index].text;
            p.className = 'ayah translation';  // Assign 'ayah translation' class to the paragraph
            surahTextContainer.appendChild(p);
        }
    });
}

window.onload = function() {
    // Get surah number from URL
    const urlParams = new URLSearchParams(window.location.search);
    let surahNumber = urlParams.get('number'); 
    console.log(surahNumber);  // Log the surah number
    fetchSurahText(surahNumber);

    // Translation toggle button functionality
    let showTranslation = false;
    document.querySelector('#toggleTranslation').addEventListener('click', function() {
        showTranslation = !showTranslation;  // Toggle showTranslation
        if(showTranslation) {
            fetchTranslation(surahNumber);  // Fetch the English translation
        } else {
            surahTranslation = [];
            displayText();
        }
    });

    // Back button functionality
    document.querySelector('#backButton').addEventListener('click', function() {
        window.history.back();
    });

    // Next button functionality
    document.querySelector('#nextButton').addEventListener('click', function() {
        surahNumber = parseInt(surahNumber);
        // Change the URL to the next Surah's number, assuming that the next Surah exists.
        if (surahNumber < 114) { // 114 is the last Surah number
            surahNumber += 1;
            window.location.search = `?number=${surahNumber}`;
        } else {
            showModal("This is the last Surah.");
        }
    });
}