const apiUrlEn = "http://localhost:3000/translateEn";
const translateEN = document.getElementById('usaflag').addEventListener('click', () => loadTranslations('translateEn'));
const translateRO = document.getElementById('roflag').addEventListener('click', () => resetToRomanian());

function loadTranslations(language) {
  if (language === 'translateEn') {
    fetch(apiUrlEn)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const translations = data;
      document.getElementById('genCv').textContent = translations.genCv;
      // Continue updating other text as needed
    })
    .catch(error => console.error('Error loading the translations:', error));
  }
}
