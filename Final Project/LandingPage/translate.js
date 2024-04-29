document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('usaflag').addEventListener('click', function () {
    loadTranslations();
  });
  document.getElementById('roflag').addEventListener('click', function () {
    resetToRomanian();
  });

  function loadTranslations() {
    const apiUrlEn = "http://localhost:5500/translateEn";
    fetch(apiUrlEn)
      .then(response => response.json())
      .then(data => {

        const translations = data[0];
        const spanOnline = document.getElementById('ctaOneHeading').innerHTML = translations.ctaOneHeading;
        const styleOnline = spanOnline.replace('online', '<span style="background: linear-gradient(to right, var(--accent-dark-color), var(--background-color));font-weight: bold; -webkit-background-clip: text; background-clip: text; color: transparent; display: inline;">online</span>');

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
        document.getElementById('increaseChancesTitle').innerHTML = translations.increaseChancesTitle;
        document.getElementById('attractAttention').innerHTML = translations.attractAttention;
        document.getElementById('newCta').innerHTML = translations.newCta;
        document.getElementById('timeEconomy').innerHTML = translations.timeEconomy;
        document.getElementById('cvTipsTitle').innerHTML = translations.cvTipsTitle;
        document.getElementById('cvTipsIntro').innerHTML = translations.cvTipsIntro;
        document.getElementById('whatIsCV').innerHTML = translations.whatIsCV;
        document.getElementById('cvDescription').innerHTML = translations.cvDescription;
        document.getElementById('howToWriteCV').innerHTML = translations.howToWriteCV;
        document.getElementById('cvWritingTips').innerHTML = translations.cvWritingTips;
        document.getElementById('personalInfo').innerHTML = translations.personalInfo;
        document.getElementById('personalInfoDetail').innerHTML = translations.personalInfoDetail;
        document.getElementById('professionalExperience').innerHTML = translations.professionalExperience;
        document.getElementById('professionalExpDetails').innerHTML = translations.professionalExpDetails;
        document.getElementById('studies').innerHTML = translations.studies;
        document.getElementById('studiesDetails1').innerHTML = translations.studiesDetails1;
        document.getElementById('studiesDetails2').innerHTML = translations.studiesDetails2;
        document.getElementById('skills').innerHTML = translations.skills;
        document.getElementById('skillsDetails').textContent = translations.skillsDetails;
        document.getElementById('courses').textContent = translations.courses;
        document.getElementById('coursesDetails').innerHTML = translations.coursesDetails;
        document.getElementById('personalActivities').innerHTML = translations.personalActivities;
        document.getElementById('personalActivitiesDetails').innerHTML = translations.personalActivitiesDetails;
        document.getElementById('timeSavingClaim').innerHTML = translations.timeSavingClaim;
        document.getElementById('cvAccessibility').innerHTML = translations.cvAccessibility;
        document.getElementById('buildNowPrice').innerHTML = translations.buildNowPrice;
        document.getElementById('priceArgument1').innerHTML = translations.priceArgument1;
        document.getElementById('priceArgument2').innerHTML = translations.priceArgument2;
        document.getElementById('priceArgument3').innerHTML = translations.priceArgument3;
        document.getElementById('priceArgument4').innerHTML = translations.priceArgument4;
        document.getElementById('priceArgument5').innerHTML = translations.priceArgument5;
        document.getElementById('tryUsOut').innerHTML = translations.tryUsOut;
        document.getElementById('finalizeQuickly').innerHTML = translations.finalizeQuickly;
        document.getElementById('anotherCtaButton').innerHTML = translations.anotherCtaButton;
        document.getElementById('createMoreTime').innerHTML = translations.createMoreTime;
        document.getElementById('priceLink').innerHTML = translations.priceLink;
        document.getElementById('followUs').innerHTML = translations.followUs;
        document.getElementById('terms').innerHTML = translations.terms;
        document.getElementById('cookies').innerHTML = translations.cookies;


      })
      .catch(error => console.log('Error loading the translations:', error));
  }


});
