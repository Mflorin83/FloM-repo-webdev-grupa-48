document.addEventListener('DOMContentLoaded', function () {
  innitialFlag();
  document.getElementById('usaFlag').addEventListener('click', function () {
    loadTranslations();
    switchFlags();
  });
  document.getElementById('roflag').addEventListener('click', function () {
    location.reload();
  });


  function innitialFlag() {
    document.getElementById('usaflag').style.display = 'inline';  // Show US flag because text is in romanian.
    document.getElementById('roflag').style.display = 'none';    
  }

  function switchFlags() {
    // Accesează elementele pentru steaguri
    const usaFlag = document.getElementById('usaflag');
    const roFlag = document.getElementById('roflag');

    // Verifică dacă steagul SUA este ascuns
    if (usaFlag.style.display === 'none') {
        // Dacă steagul SUA este ascuns, îl afișează
        usaFlag.style.display = 'inline';
        // Ascunde steagul României
        roFlag.style.display = 'none';
    } else {
        // Dacă steagul SUA nu este ascuns, îl ascunde
        usaFlag.style.display = 'none';
        // Afișează steagul României
        roFlag.style.display = 'inline';
    }
}
  function loadTranslations() {
    const apiUrlEn = "http://localhost:5500/translateEn";
    fetch(apiUrlEn)
      .then(response => response.json())
      .then(data => {

        const translations = data[0];

        const styleOnline = translations.ctaOneHeading.replace('online', `<span style="background: linear-gradient(to right, var(--accent-dark-color), var(--background-color)); font-weight: bold; -webkit-background-clip: text; background-clip: text; color: transparent; display: inline;">online</span>`);
        const quickly = translations.increaseChancesTitle.replace('quickly', `<span style="background: linear-gradient(to right, var(--accent-dark-color), var(--background-color)); font-weight: bold; -webkit-background-clip: text; background-clip: text; color: transparent; display: inline;">quickly</span>`);
        const personalInfoStyle = translations.personalInfo.replace('Personal Informations', '<strong>Personal Informations</strong>');
        const professionalExperienceStyle = translations.professionalExperience.replace('Professional Experience', '<strong>Professional Experience</strong>');
        const studiesStyle = translations.studies.replace('Studies', '<strong>Studies</strong>');
        const studiesDetails2Style = translations.studiesDetails2.replace('These essential details should be included in the CV for each application. However, to distinguish yourself from other candidates, it is recommended to make additional efforts. If you want to convince potential employers that you are the ideal candidate for the position, consider adding extra sections to your CV.', '<strong>These essential details should be included in the CV for each application. However, to distinguish yourself from other candidates, it is recommended to make additional efforts. If you want to convince potential employers that you are the ideal candidate for the position, consider adding extra sections to your CV.</strong>');
        const skillsStyle = translations.skills.replace('Skills and Competencies', '<strong>Skills and Competencies</strong>');
        const coursesStyle = translations.courses.replace('Courses and Training', '<strong>Courses and Training</strong>');
        const personalActivitiesStyle = translations.personalActivities.replace('Personal Sphere Activities', '<strong>Personal Sphere Activities</strong>');
        const priceArgument5Style = translations.priceArgument5.replace('19.9 RON per download', '<span style="color: var(--accent-dark-color); font-weight: bold ;">19.9 RON per download</span>');
        const tryUsOutStyle = translations.tryUsOut.replace('ready', `<span style="background: linear-gradient(to right, var(--accent-dark-color), var(--background-color)); font-weight: bold; -webkit-background-clip: text; background-clip: text; color: transparent; display: inline;">ready</span>`);

        document.getElementById('genCv').innerHTML = translations.genCv;
        document.getElementById('price').innerHTML = translations.price;
        document.getElementById('ctaOneHeading').innerHTML = styleOnline;
        document.getElementById('ctaOneSubFirst').innerHTML = translations.ctaOneSubFirst;
        document.getElementById('mainCallToAction').innerHTML = translations.mainCallToAction;
        document.getElementById('mainSaveTime').innerHTML = translations.mainSaveTime;
        document.getElementById('passportForJobTitle').innerHTML = translations.passportForJobTitle;
        document.getElementById('passportForJobDesc').innerHTML = translations.passportForJobDesc;
        document.getElementById('outshineOthersTitle').innerHTML = translations.outshineOthersTitle;
        document.getElementById('outshineOthersDesc').innerHTML = translations.outshineOthersDesc;
        document.getElementById('quickAndEasyTitle').innerHTML = translations.quickAndEasyTitle;
        document.getElementById('quickAndEasyDesc').innerHTML = translations.quickAndEasyDesc;
        document.getElementById('premiumServiceTitle').innerHTML = translations.premiumServiceTitle;
        document.getElementById('premiumServiceDesc').innerHTML = translations.premiumServiceDesc;
        document.getElementById('testimonialHeading').innerHTML = translations.testimonialHeading;
        document.getElementById('testimonialIntro').innerHTML = translations.testimonialIntro;
        document.getElementById('testimonial1').innerHTML = translations.testimonial1;
        document.getElementById('testimonial2').innerHTML = translations.testimonial2;
        document.getElementById('testimonial3').innerHTML = translations.testimonial3;
        document.getElementById('testimonial4').innerHTML = translations.testimonial4;
        document.getElementById('increaseChancesTitle').innerHTML = quickly;
        document.getElementById('attractAttention').innerHTML = translations.attractAttention;
        document.getElementById('newCta').innerHTML = translations.newCta;
        document.getElementById('timeEconomy').innerHTML = translations.timeEconomy;
        document.getElementById('cvTipsTitle').innerHTML = translations.cvTipsTitle;
        document.getElementById('cvTipsIntro').innerHTML = translations.cvTipsIntro;
        document.getElementById('whatIsCV').innerHTML = translations.whatIsCV;
        document.getElementById('cvDescription').innerHTML = translations.cvDescription;
        document.getElementById('howToWriteCV').innerHTML = translations.howToWriteCV;
        document.getElementById('cvWritingTips').innerHTML = translations.cvWritingTips;
        document.getElementById('personalInfo').innerHTML = personalInfoStyle;
        document.getElementById('personalInfoDetail').innerHTML = translations.personalInfoDetail;
        document.getElementById('professionalExperience').innerHTML = professionalExperienceStyle;
        document.getElementById('professionalExpDetails').innerHTML = translations.professionalExpDetails;
        document.getElementById('studies').innerHTML = studiesStyle;
        document.getElementById('studiesDetails1').innerHTML = translations.studiesDetails1;
        document.getElementById('studiesDetails2').innerHTML = studiesDetails2Style;
        document.getElementById('skills').innerHTML = skillsStyle;
        document.getElementById('skillsDetails').innerHTML = translations.skillsDetails;
        document.getElementById('courses').innerHTML = coursesStyle;
        document.getElementById('coursesDetails').innerHTML = translations.coursesDetails;
        document.getElementById('personalActivities').innerHTML = personalActivitiesStyle;
        document.getElementById('personalActivitiesDetails').innerHTML = translations.personalActivitiesDetails;
        document.getElementById('timeSavingClaim').innerHTML = translations.timeSavingClaim;
        document.getElementById('cvAccessibility').innerHTML = translations.cvAccessibility;
        document.getElementById('buildNowPrice').innerHTML = translations.buildNowPrice;
        document.getElementById('priceArgument1').innerHTML = translations.priceArgument1;
        document.getElementById('priceArgument2').innerHTML = translations.priceArgument2;
        document.getElementById('priceArgument3').innerHTML = translations.priceArgument3;
        document.getElementById('priceArgument4').innerHTML = translations.priceArgument4;
        document.getElementById('priceArgument5').innerHTML = priceArgument5Style;
        document.getElementById('tryUsOut').innerHTML = tryUsOutStyle;
        document.getElementById('finalizeQuickly').innerHTML = translations.finalizeQuickly;
        document.getElementById('anotherCtaButton').innerHTML = translations.anotherCtaButton;
        document.getElementById('createMoreTime').innerHTML = translations.createMoreTime;
        document.getElementById('priceLink').innerHTML = translations.priceLink;
        document.getElementById('followUs').innerHTML = translations.followUs;
        document.getElementById('terms').innerHTML = translations.terms;
        document.getElementById('cookies').innerHTML = translations.cookies;


      })
      .catch(error => console.log('Error loading', error));
  }


})
