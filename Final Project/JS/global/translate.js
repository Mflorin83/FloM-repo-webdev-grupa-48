function loadEnLandingP() {
  const apiUrl = "http://localhost:5500/translateEnLandingPage";
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const translations = data[0];

      const styleOnline = translations.ctaOneHeading.replace('online', `<span style=" background: linear-gradient(to bottom, #D81159, #F5F5F5);
        background-clip: text;
        color: transparent;">online</span>`);
      const quickly = translations.increaseChancesTitle.replace('quickly', `<span style=" background: linear-gradient(to bottom, #D81159, #F5F5F5);
      background-clip: text;
      color: transparent;">online</span>`);
      const tryUsOutStyle = translations.tryUsOut.replace('ready', `<span style=" background: linear-gradient(to bottom, #D81159, #F5F5F5);
      background-clip: text;
      color: transparent;">online</span>`);

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
      document.getElementById('personalInfo').innerText = translations.personalInfo;
      document.getElementById('personalInfoDetail').innerHTML = translations.personalInfoDetail;
      document.getElementById('professionalExperience').innerHTML = translations.professionalExperience;
      document.getElementById('professionalExpDetails').innerHTML = translations.professionalExpDetails;
      document.getElementById('studies').innerHTML = translations.studies;
      document.getElementById('studiesDetails1').innerHTML = translations.studiesDetails1;
      document.getElementById('studiesDetails2').innerHTML = translations.studiesDetails2;
      document.getElementById('skills').innerHTML = translations.skills;
      document.getElementById('skillsDetails').innerHTML = translations.skillsDetails;
      document.getElementById('courses').innerHTML = translations.courses;
      document.getElementById('coursesDetails').innerHTML = translations.coursesDetails;
      document.getElementById('personalActivities').innerHTML = translations.personalActivities;
      document.getElementById('personalActivitiesDetails').innerHTML = translations.personalActivitiesDetails;
      document.getElementById('hrCheck').innerHTML = translations.hrCheck;
      document.getElementById('usingGoogle').innerHTML = translations.usingGoogle;
      document.getElementById('linkInProfile').innerHTML = translations.linkInProfile;
      document.getElementById('linkInDetail').innerHTML = translations.linkInDetail;
      document.getElementById('facebookRole').innerHTML = translations.facebookRole;
      document.getElementById('facebookDetails').innerHTML = translations.facebookDetails;
      document.getElementById('backgrodundScreening').innerHTML = translations.backgrodundScreening;
      document.getElementById('screeningMethods').innerHTML = translations.screeningMethods;
      document.getElementById('recomandationsNeeds').innerHTML = translations.recomandationsNeeds;
      document.getElementById('recommandationNeedsDetails').innerHTML = translations.recommandationNeedsDetails;
      document.getElementById('linkinInsights').innerHTML = translations.linkinInsights;
      document.getElementById('googleSearches').innerHTML = translations.googleSearches;
      document.getElementById('googleSearchesDetails').innerHTML = translations.googleSearchesDetails;
      document.getElementById('removeInfos').innerHTML = translations.removeInfos;
      document.getElementById('removeInfosDetails').innerHTML = translations.removeInfosDetails;
      document.getElementById('irrelevantExperience').innerHTML = translations.irrelevantExperience;
      document.getElementById('deleteIrrelevantJobs').innerHTML = translations.deleteIrrelevantJobs;
      document.getElementById('hobbies').innerHTML = translations.hobbies;
      document.getElementById('omitIrrelevantHobbies').innerHTML = translations.omitIrrelevantHobbies;
      document.getElementById('tooMuchText').innerHTML = translations.tooMuchText;
      document.getElementById('keepItShort').innerHTML = translations.keepItShort;
      document.getElementById('references').innerHTML = translations.references;
      document.getElementById('avoidReferencesPhrase').innerHTML = translations.avoidReferencesPhrase;
      document.getElementById('unprofessionalEmail').innerHTML = translations.unprofessionalEmail;
      document.getElementById('useProfessionalEmail').innerHTML = translations.useProfessionalEmail;
      document.getElementById('unnecessaryWords').innerHTML = translations.unnecessaryWords;
      document.getElementById('eliminateSuperfluousWords').innerHTML = translations.eliminateSuperfluousWords;
      document.getElementById('companyJargon').innerHTML = translations.companyJargon;
      document.getElementById('avoidCompanySpecificTerms').innerHTML = translations.avoidCompanySpecificTerms;
      document.getElementById('irrelevantSocialMediaLinks').innerHTML = translations.irrelevantSocialMediaLinks;
      document.getElementById('includeRelevantLinksOnly').innerHTML = translations.includeRelevantLinksOnly;
      document.getElementById('cvMistakesToAvoid').innerHTML = translations.cvMistakesToAvoid;
      document.getElementById('focusOnResponsibilities').innerHTML = translations.focusOnResponsibilities;
      document.getElementById('sameCvForAllJobs').innerHTML = translations.sameCvForAllJobs;
      document.getElementById('difficultFormatting').innerHTML = translations.difficultFormatting;
      document.getElementById('clicheExpressions').innerHTML = translations.clicheExpressions;
      document.getElementById('timeSavingClaim').innerHTML = translations.timeSavingClaim;
      document.getElementById('cvAccessibility').innerHTML = translations.cvAccessibility;
      document.getElementById('buildNowPrice').innerHTML = translations.buildNowPrice;
      document.getElementById('priceArgument1').innerHTML = translations.priceArgument1;
      document.getElementById('priceArgument2').innerHTML = translations.priceArgument2;
      document.getElementById('priceArgument3').innerHTML = translations.priceArgument3;
      document.getElementById('priceArgument4').innerHTML = translations.priceArgument4;
      document.getElementById('priceArgument5').innerText = translations.priceArgument5;
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


function loadRoLandingP() {
  const apiUrl = "http://localhost:5500/translateRoLandingPage";
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const translations = data[0];

      const styleOnline = translations.ctaOneHeading.replace('online', `<span style=" background: linear-gradient(to bottom, #D81159, #F5F5F5);
        background-clip: text;
        color: transparent;">online</span>`);
      const quickly = translations.increaseChancesTitle.replace('quickly', `<span style=" background: linear-gradient(to bottom, #D81159, #F5F5F5);
      background-clip: text;
      color: transparent;">online</span>`);
      const tryUsOutStyle = translations.tryUsOut.replace('ready', `<span style=" background: linear-gradient(to bottom, #D81159, #F5F5F5);
      background-clip: text;
      color: transparent;">online</span>`);

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
      document.getElementById('personalInfo').innerText = translations.personalInfo;
      document.getElementById('personalInfoDetail').innerHTML = translations.personalInfoDetail;
      document.getElementById('professionalExperience').innerHTML = translations.professionalExperience;
      document.getElementById('professionalExpDetails').innerHTML = translations.professionalExpDetails;
      document.getElementById('studies').innerHTML = translations.studies;
      document.getElementById('studiesDetails1').innerHTML = translations.studiesDetails1;
      document.getElementById('studiesDetails2').innerHTML = translations.studiesDetails2;
      document.getElementById('skills').innerHTML = translations.skills;
      document.getElementById('skillsDetails').innerHTML = translations.skillsDetails;
      document.getElementById('courses').innerHTML = translations.courses;
      document.getElementById('coursesDetails').innerHTML = translations.coursesDetails;
      document.getElementById('personalActivities').innerHTML = translations.personalActivities;
      document.getElementById('personalActivitiesDetails').innerHTML = translations.personalActivitiesDetails;
      document.getElementById('hrCheck').innerHTML = translations.hrCheck;
      document.getElementById('usingGoogle').innerHTML = translations.usingGoogle;
      document.getElementById('linkInProfile').innerHTML = translations.linkInProfile;
      document.getElementById('linkInDetail').innerHTML = translations.linkInDetail;
      document.getElementById('facebookRole').innerHTML = translations.facebookRole;
      document.getElementById('facebookDetails').innerHTML = translations.facebookDetails;
      document.getElementById('backgrodundScreening').innerHTML = translations.backgrodundScreening;
      document.getElementById('screeningMethods').innerHTML = translations.screeningMethods;
      document.getElementById('recomandationsNeeds').innerHTML = translations.recomandationsNeeds;
      document.getElementById('recommandationNeedsDetails').innerHTML = translations.recommandationNeedsDetails;
      document.getElementById('linkinInsights').innerHTML = translations.linkinInsights;
      document.getElementById('googleSearches').innerHTML = translations.googleSearches;
      document.getElementById('googleSearchesDetails').innerHTML = translations.googleSearchesDetails;
      document.getElementById('removeInfos').innerHTML = translations.removeInfos;
      document.getElementById('removeInfosDetails').innerHTML = translations.removeInfosDetails;
      document.getElementById('irrelevantExperience').innerHTML = translations.irrelevantExperience;
      document.getElementById('deleteIrrelevantJobs').innerHTML = translations.deleteIrrelevantJobs;
      document.getElementById('hobbies').innerHTML = translations.hobbies;
      document.getElementById('omitIrrelevantHobbies').innerHTML = translations.omitIrrelevantHobbies;
      document.getElementById('tooMuchText').innerHTML = translations.tooMuchText;
      document.getElementById('keepItShort').innerHTML = translations.keepItShort;
      document.getElementById('references').innerHTML = translations.references;
      document.getElementById('avoidReferencesPhrase').innerHTML = translations.avoidReferencesPhrase;
      document.getElementById('unprofessionalEmail').innerHTML = translations.unprofessionalEmail;
      document.getElementById('useProfessionalEmail').innerHTML = translations.useProfessionalEmail;
      document.getElementById('unnecessaryWords').innerHTML = translations.unnecessaryWords;
      document.getElementById('eliminateSuperfluousWords').innerHTML = translations.eliminateSuperfluousWords;
      document.getElementById('companyJargon').innerHTML = translations.companyJargon;
      document.getElementById('avoidCompanySpecificTerms').innerHTML = translations.avoidCompanySpecificTerms;
      document.getElementById('irrelevantSocialMediaLinks').innerHTML = translations.irrelevantSocialMediaLinks;
      document.getElementById('includeRelevantLinksOnly').innerHTML = translations.includeRelevantLinksOnly;
      document.getElementById('cvMistakesToAvoid').innerHTML = translations.cvMistakesToAvoid;
      document.getElementById('focusOnResponsibilities').innerHTML = translations.focusOnResponsibilities;
      document.getElementById('sameCvForAllJobs').innerHTML = translations.sameCvForAllJobs;
      document.getElementById('difficultFormatting').innerHTML = translations.difficultFormatting;
      document.getElementById('clicheExpressions').innerHTML = translations.clicheExpressions;
      document.getElementById('timeSavingClaim').innerHTML = translations.timeSavingClaim;
      document.getElementById('cvAccessibility').innerHTML = translations.cvAccessibility;
      document.getElementById('buildNowPrice').innerHTML = translations.buildNowPrice;
      document.getElementById('priceArgument1').innerHTML = translations.priceArgument1;
      document.getElementById('priceArgument2').innerHTML = translations.priceArgument2;
      document.getElementById('priceArgument3').innerHTML = translations.priceArgument3;
      document.getElementById('priceArgument4').innerHTML = translations.priceArgument4;
      document.getElementById('priceArgument5').innerText = translations.priceArgument5;
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

function loadEnRegister() {
  const apiUrl = "http://localhost:5500/translateEnRegister";
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const translations = data[0];

     
      document.getElementById('homeDirect').innerHTML = translations.homeDirect;
      document.getElementById('price').innerHTML = translations.price;
      document.getElementById('register').innerHTML = translations.register;
      document.getElementById('surnameID').innerHTML = translations.surnameID;
      document.getElementById('wrongSurname').innerHTML = translations.wrongSurname;
      document.getElementById('nameID').innerHTML = translations.nameID;
      document.getElementById('wrongName').innerHTML = translations.wrongName;
      document.getElementById('phoneDetails').innerHTML = translations.phoneDetails;
      document.getElementById('wrongPhone').innerHTML = translations.wrongPhone;
      document.getElementById('wrongEmail').innerHTML = translations.wrongEmail;
      document.getElementById('passEnter').innerHTML = translations.passEnter;
      document.getElementById('mustPass').innerHTML = translations.mustPass;
      document.getElementById('agreeWith').innerHTML = translations.agreeWith;
      document.getElementById('termsCondition').innerHTML = translations.termsCondition;
      document.getElementById('mustAgree').innerHTML = translations.mustAgree;
      document.getElementById('createAcc').innerHTML = translations.createAcc;
      document.getElementById('allreadyAcc').innerHTML = translations.allreadyAcc;
      document.getElementById('connect').innerHTML = translations.connect;

    })
    .catch(error => console.log('Error loading', error));

}

function loadRoRegister() {
  const apiUrl = "http://localhost:5500/translateRoRegister";
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const translations = data[0];

     
      document.getElementById('homeDirect').innerHTML = translations.homeDirect;
      document.getElementById('price').innerHTML = translations.price;
      document.getElementById('register').innerHTML = translations.register;
      document.getElementById('surnameID').innerHTML = translations.surnameID;
      document.getElementById('wrongSurname').innerHTML = translations.wrongSurname;
      document.getElementById('nameID').innerHTML = translations.nameID;
      document.getElementById('wrongName').innerHTML = translations.wrongName;
      document.getElementById('phoneDetails').innerHTML = translations.phoneDetails;
      document.getElementById('wrongPhone').innerHTML = translations.wrongPhone;
      document.getElementById('wrongEmail').innerHTML = translations.wrongEmail;
      document.getElementById('passEnter').innerHTML = translations.passEnter;
      document.getElementById('mustPass').innerHTML = translations.mustPass;
      document.getElementById('agreeWith').innerHTML = translations.agreeWith;
      document.getElementById('termsCondition').innerHTML = translations.termsCondition;
      document.getElementById('mustAgree').innerHTML = translations.mustAgree;
      document.getElementById('createAcc').innerHTML = translations.createAcc;
      document.getElementById('allreadyAcc').innerHTML = translations.allreadyAcc;
      document.getElementById('connect').innerHTML = translations.connect;      

    })
    .catch(error => console.log('Error loading', error));
}


function loadEnLogin() {
  const apiUrl = "http://localhost:5500/translateEnLogin";
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const translations = data[0];

     
      document.getElementById('homeDirect').innerHTML = translations.homeDirect;
      document.getElementById('price').innerHTML = translations.price;
      document.getElementById('tryLogin').innerHTML = translations.tryLogin;
      document.getElementById('emailNotvalid').innerHTML = translations.emailNotvalid;
      document.getElementById('passEnter').innerHTML = translations.passEnter;
      document.getElementById('mustPass').innerHTML = translations.mustPass;
      document.getElementById('forgotPass').innerHTML = translations.forgotPass;
      document.getElementById('rememberMe').innerHTML = translations.rememberMe;
      document.getElementById('connect').innerHTML = translations.connect;
      document.getElementById('notAuser').innerHTML = translations.notAuser;
      document.getElementById('tryRegister').innerHTML = translations.tryRegister;


    })
    .catch(error => console.log('Error loading', error));

}

function loadRoLogin() {
  const apiUrl = "http://localhost:5500/translateRoLogin";
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const translations = data[0];

     
      document.getElementById('homeDirect').innerHTML = translations.homeDirect;
      document.getElementById('price').innerHTML = translations.price;
      document.getElementById('tryLogin').innerHTML = translations.tryLogin;
      document.getElementById('emailNotvalid').innerHTML = translations.emailNotvalid;
      document.getElementById('passEnter').innerHTML = translations.passEnter;
      document.getElementById('mustPass').innerHTML = translations.mustPass;
      document.getElementById('forgotPass').innerHTML = translations.forgotPass;
      document.getElementById('rememberMe').innerHTML = translations.rememberMe;
      document.getElementById('connect').innerHTML = translations.connect;
      document.getElementById('notAuser').innerHTML = translations.notAuser;
      document.getElementById('tryRegister').innerHTML = translations.tryRegister;


    })
    .catch(error => console.log('Error loading', error));

}