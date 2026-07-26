const elements = {
  form: document.querySelector("#noticeForm"),
  text: document.querySelector("#noticeText"),
  image: document.querySelector("#imageInput"),
  preview: document.querySelector("#imagePreview"),
  removeImage: document.querySelector("#removeImage"),
  dropZone: document.querySelector("#dropZone"),
  charCount: document.querySelector("#charCount"),
  button: document.querySelector("#analyzeButton"),
  resetButton: document.querySelector("#resetButton"),
  error: document.querySelector("#formError"),
  status: document.querySelector("#modelStatus"),
  results: document.querySelector("#results"),
  risk: document.querySelector("#riskBadge"),
  source: document.querySelector("#resultSource"),
  uploadHint: document.querySelector("#uploadHint"),
  textHint: document.querySelector("#textHint"),
  saveTrace: document.querySelector("#saveTrace"),
  statusText: document.querySelector(".status-text"),
  languageSelect: document.querySelector("#languageSelect"),
};

const translations = {
  en: {
    pageTitle: "India Notice Helper",
    pageDescription: "Check Indian notices and messages for common scam signals.",
    statusChecking: "Checking model",
    statusReady: "Modal model ready",
    statusCredentials: "Modal credentials required",
    statusUnavailable: "Modal model unavailable",
    heroEyebrow: "Understand before you act",
    heroTitle: "Does this notice look",
    heroSafe: "safe?",
    heroText: "Check suspicious bills, bank alerts, Income Tax/GST-style messages, challans, courier notices, and SMS screenshots for common scam signals.",
    trustTitle: "AI-assisted safety check",
    trustText: "The AI reads the notice, identifies scam signals, and returns a structured risk assessment with safer next steps.",
    checkerEyebrow: "Free safety check",
    checkerTitle: "Check a notice or message",
    modelDescription: "Analysis runs on the deployed Qwen3.5 4B multimodal model.",
    uploadLabel: "Upload a screenshot",
    dropImage: "Drop an image here",
    browseImage: "or tap to browse PNG, JPG, or WebP",
    previewAlt: "Selected notice preview",
    removeImage: "Remove image",
    imageMode: "Screenshot mode active — text input is locked",
    pasteLabel: "Or paste the message",
    textPlaceholder: "Paste the SMS, email, bill text, or notice here...",
    languageSupport: "English and Hindi supported",
    textMode: "Text mode active — image upload is locked",
    traceTitle: "Publish privacy-safe trace",
    traceText: "Stores automated redacted text or an image description. Raw text, screenshots, links, identifiers, and model text are not stored.",
    checkButton: "Check this notice",
    checkingButton: "Checking safely...",
    startOver: "Start over",
    examplesEyebrow: "Try an example",
    examplesTitle: "Common messages in India",
    courierFee: "Courier fee",
    courierFeeText: "Urgent parcel payment link",
    taxRefund: "Tax refund",
    taxRefundText: "Unexpected refund request",
    bankAlert: "Bank alert",
    bankAlertText: "Security code request",
    screenshotsTitle: "Real scam screenshots",
    courierScam: "Courier scam",
    courierScamText: "Fake delivery fee message",
    mobileScam: "Mobile scam",
    mobileScamText: "Fake mobile operator message",
    trafficScam: "Traffic challan",
    trafficScamText: "Fake e-challan fine message",
    resultsEyebrow: "Safety assessment",
    resultsTitle: "What we found",
    explanationTitle: "Simple explanation",
    redFlagsTitle: "Red flags found",
    nextStepsTitle: "Safe next steps",
    replyTitle: "Polite reply draft",
    copy: "Copy",
    copied: "Copied",
    disclaimerTitle: "Important safety note",
    disclaimerText: "India Notice Helper does not provide official verification. It checks common scam signals and gives safe next steps. Always verify through official websites or helplines before making payments or sharing personal information.",
    footerOne: "Built for safer digital decisions in India. Built by Santhosh Kannan.",
    footerTwo: "Never share OTPs, PINs, passwords, or CVVs.",
    requestStartError: "The app could not start the request.",
    requestReadError: "The app could not read the result.",
    requestFailedError: "The request could not be completed.",
    noResultError: "The app returned no result.",
    analyzeError: "Unable to analyze this input.",
    imageTypeError: "Use a PNG, JPG, or WebP image.",
    imageSizeError: "Please choose an image smaller than 8 MB.",
    exampleImageError: "Could not load the example image.",
    emptyInputError: "Paste a message or upload a screenshot to continue.",
    modelSource: "Analyzed by the deployed Qwen3.5 4B model endpoint.",
    cachedSource: "Cached model result",
    riskLooksNormal: "Looks normal",
    riskVerifyFirst: "Verify first",
    riskSuspicious: "Suspicious",
    riskLikelyScam: "Likely scam",
    riskInappropriate: "Inappropriate",
  },
  hi: {
    pageTitle: "इंडिया नोटिस हेल्पर",
    pageDescription: "भारतीय नोटिस and संदेशों को आम स्कैम संकेतों के लिए जांचें।",
    statusChecking: "मॉडल की जांच की जा रही है",
    statusReady: "मॉडल तैयार है",
    statusCredentials: "मॉडल क्रेडेंशियल आवश्यक हैं",
    statusUnavailable: "मॉडल अनुपलब्ध है",
    heroEyebrow: "कार्रवाई करने से पहले समझें",
    heroTitle: "क्या यह नोटिस",
    heroSafe: "सुरक्षित है?",
    heroText: "संदिग्ध बिल, बैंक अलर्ट, आयकर/जीएसटी जैसे संदेश, चालान, कूरियर नोटिस और एसएमएस स्क्रीनशॉट को आम स्कैम संकेतों के लिए जांचें।",
    trustTitle: "एआई-सहायता प्राप्त सुरक्षा जांच",
    trustText: "एआई नोटिस को पढ़ता है, स्कैम संकेतों की पहचान करता है, और सुरक्षित अगले कदमों के साथ एक संरचित जोखिम मूल्यांकन प्रदान करता है।",
    checkerEyebrow: "मुफ़्त सुरक्षा जांच",
    checkerTitle: "नोटिस या संदेश की जांच करें",
    modelDescription: "विश्लेषण तैनात किए गए Qwen3.5 4B मल्टीमॉडल मॉडल पर चलता है।",
    uploadLabel: "स्क्रीनशॉट अपलोड करें",
    dropImage: "छवि यहाँ छोड़ें",
    browseImage: "या पीएनजी, जेपीजी, या वेबपी ब्राउज़ करने के लिए टैप करें",
    previewAlt: "चयनित नोटिस का पूर्वावलोकन",
    removeImage: "छवि हटाएं",
    imageMode: "स्क्रीनशॉट मोड सक्रिय — टेक्स्ट इनपुट लॉक है",
    pasteLabel: "या संदेश पेस्ट करें",
    textPlaceholder: "एसएमएस, ईमेल, बिल टेक्स्ट या नोटिस यहाँ पेस्ट करें...",
    languageSupport: "अंग्रेजी और हिंदी समर्थित हैं",
    textMode: "टेक्स्ट मोड सक्रिय — छवि अपलोड लॉक है",
    traceTitle: "गोपनीयता-सुरक्षित ट्रेस प्रकाशित करें",
    traceText: "स्वचालित रूप से संपादित टेक्स्ट या छवि विवरण संग्रहीत करता है। मूल टेक्स्ट, स्क्रीनशॉट, लिंक, पहचानकर्ता और मॉडल टेक्स्ट संग्रहीत नहीं किए जाते हैं।",
    checkButton: "इस नोटिस की जांच करें",
    checkingButton: "सुरक्षित रूप से जांच की जा रही है...",
    startOver: "फिर से शुरू करें",
    examplesEyebrow: "एक उदाहरण आज़माएं",
    examplesTitle: "भारत में आम संदेश",
    courierFee: "कूरियर शुल्क",
    courierFeeText: "तत्काल पार्सल भुगतान लिंक",
    taxRefund: "Tax refund",
    taxRefundText: "Unexpected refund request",
    bankAlert: "Bank alert",
    bankAlertText: "Security code request",
    screenshotsTitle: "Real scam screenshots",
    courierScam: "Courier scam",
    courierScamText: "Fake delivery fee message",
    mobileScam: "Mobile scam",
    mobileScamText: "Fake mobile operator message",
    trafficScam: "Traffic challan",
    trafficScamText: "Fake e-challan fine message",
    resultsEyebrow: "सुरक्षा मूल्यांकन",
    resultsTitle: "हमें क्या मिला",
    explanationTitle: "सरल स्पष्टीकरण",
    redFlagsTitle: "जोखिम के संकेत",
    nextStepsTitle: "सुरक्षित अगले कदम",
    replyTitle: "विनम्र प्रतिक्रिया मसौदा",
    copy: "कॉपी करें",
    copied: "कॉपी हो गया",
    disclaimerTitle: "महत्वपूर्ण सुरक्षा नोट",
    disclaimerText: "इंडिया नोटिस हेल्पर आधिकारिक सत्यापन प्रदान नहीं करता है। यह आम स्कैम संकेतों की जांच करता है और सुरक्षित अगले कदम देता है। भुगतान करने या व्यक्तिगत जानकारी साझा करने से पहले हमेशा आधिकारिक वेबसाइटों या हेल्पलाइन के माध्यम से सत्यापित करें।",
    footerOne: "भारत में सुरक्षित डिजिटल निर्णयों के लिए निर्मित। संतोष कन्नन द्वारा निर्मित।",
    footerTwo: "कभी भी ओटीपी, पिन, पासवर्ड या सीवीवी साझा न करें।",
    riskLooksNormal: "सामान्य लगता है",
    riskVerifyFirst: "सत्यापन करें",
    riskSuspicious: "संदिग्ध",
    riskLikelyScam: "संभावित स्कैम",
    riskInappropriate: "अनुचित",
  },
  ta: {
    pageTitle: "இந்தியா நோட்டீஸ் ஹெல்பர்",
    pageDescription: "இந்திய நோட்டீஸ்கள் மற்றும் செய்திகளை ஸ்கேம் அறிகுறிகளுக்கு சரிபார்க்கவும்.",
    heroTitle: "இந்த நோட்டீஸ்",
    heroSafe: "பாதுகாப்பானதா?",
    heroText: "சந்தேகத்திற்குரிய பில்கள், வங்கி எச்சரிக்கைகள், வருமான வரி/ஜிஎஸ்டி செய்திகள், சலான்கள் மற்றும் எஸ்எம்எஸ் செய்திகளை சரிபார்க்கவும்.",
    checkerTitle: "நோட்டீஸ் அல்லது செய்தியைச் சரிபார்க்கவும்",
    uploadLabel: "ஸ்கிரீன்ஷாட்டைப் பதிவேற்றவும்",
    pasteLabel: "அல்லது செய்தியை ஒட்டவும்",
    checkButton: "இந்த நோட்டீஸை சரிபார்க்கவும்",
    checkingButton: "பாதுகாப்பாக சரிபார்க்கப்படுகிறது...",
    disclaimerText: "இந்தியா நோட்டீஸ் ஹெல்பர் அதிகாரப்பூர்வ சரிபார்ப்பை வழங்காது. இது பொதுவான மோசடி சமிக்ஞைகளைச் சரிபார்த்து, பாதுகாப்பான அடுத்த படிகளை வழங்குகிறது. பணம் செலுத்துவதற்கு அல்லது தனிப்பட்ட தகவல்களைப் பகிர்வதற்கு முன் எப்போதும் சரிபார்க்கவும்.",
    footerOne: "இந்தியாவில் பாதுகாப்பான டிஜிட்டൽ முடிவுகளுக்காக உருவாக்கப்பட்டது. சந்தோஷ் கண்ணன் தயாரிப்பு.",
    footerTwo: "ஓடிபி, பின், கடவுச்சொல் அல்லது சிவிவி எண்களை யாരുடனும் பகிர வேண்டாம்.",
  },
  te: {
    pageTitle: "ఇండియా నోటీస్ హెల్పర్",
    pageDescription: "భారతీయ నోటీసులు మరియు సందేశాలలో స్కామ్ సంకేతాలను తనిఖీ చేయండి.",
    heroTitle: "ఈ నోటీసు",
    heroSafe: "సురક્ષితమేనా?",
    heroText: "అనుమానాస్పద బిల్లులు, బ్యాంక్ హెచ్చరికలు, ఆదాయపు పన్ను/జీఎస్టీ సందేశాలు, చలాన్లు మరియు ఎస్ఎంఎస్ స్క్రీన్ షాట్లను తనిਖీ చేయండి.",
    checkerTitle: "నోటీసు లేదా సందేశాన్ని తనిਖీ చేయండి",
    uploadLabel: "سک్రీన్‌షాట్ అప్‌లోడ్ చేయండి",
    pasteLabel: "లేదా సందేశాన్ని పేస్ట్ చేయండి",
    checkButton: "ఈ నోటీసును తనిਖీ చేయండి",
    checkingButton: "సురक्षितంగా తనిਖీ చేస్తోంది...",
    disclaimerText: "ఇండియా నోటీస్ హెల్పర్ అధికారిక ధృవీకరణను అందించదు. ఇది సాధారణ స్కామ్ సిగ్నల్స్ తనిਖీ చేసి తదుపరి సూచనలు ఇస్తుంది. చెల్లింపులు చేసే ముందు ఎల్లప్పుడూ ధృవీకరించుకోండి.",
    footerOne: "భారతదేశంలో సురక్షితమైన డిజిటల్ నిర్ణయాల కోసం నిర్మించబడింది. సంతోష్ కన్నన్ చేత నిర్మించబడింది.",
    footerTwo: "OTPలు, PINలు, పాస్‌వర్డ్‌లు లేదా CVVలను ఎప్పుడੂ షੇർ చేయవద్దు.",
  },
  kn: {
    pageTitle: "ಇಂಡಿಯಾ ನೋಟಿಸ್ ಹೆಲ್ಪರ್",
    pageDescription: "ಭಾರತೀಯ ನೋಟಿಸ್‌ಗಳು ಮತ್ತು ಸಂದೇಶಗಳಲ್ಲಿ ವಂಚನೆ ಸಂಕೇतಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    heroTitle: "ಈ ನೋಟಿಸ್",
    heroSafe: "ಸುರಕ್ಷಿತವೇ?",
    heroText: "ಸಂದೇಹಾಸ್ಪದ ಬಿಲ್ಲುಗಳು, ಬ್ಯಾಂಕ್ ಎಚ್ಚರಿಕೆಗಳು, ಆದಾಯ ತೆರಿಗೆ/ಜಿಎಸ್‌ಟಿ ಸಂದೇಶಗಳು, ಚಲನ್ ಮತ್ತು ಎಸ್‌ಎಂಎಸ್ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    checkerTitle: "ನೋಟಿಸ್ ಅಥವಾ ಸಂದೇಶವನ್ನು ಪರಿಶೀಲಿಸಿ",
    uploadLabel: "ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
    pasteLabel: "ಅಥವಾ ಸಂದೇಶವನ್ನು ಪೇಸ್ಟ್ ಮಾಡಿ",
    checkButton: "ಈ ನೋಟಿಸ್ ಪರಿಶೀಲಿಸಿ",
    checkingButton: "ಸುರಕ್ಷಿತವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ...",
    disclaimerText: "ಇಂಡಿಯಾ ನೋಟಿಸ್ ಹೆಲ್ಪರ್ ಅಧಿಕೃತ ಪರಿಶೀಲನೆ ಒದಗಿಸುವುದಿಲ್ಲ. ಇದು ವಂಚನೆ ಸಂಕೇತಗಳನ್ನು ಗುರುತಿಸಿ ಸುರಕ್ಷಿತ ಕ್ರಮಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಪಾವತಿಸುವ ಮುನ್ನ ಅಧಿಕೃತ ಸೈಟ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.",
    footerOne: "ಭಾರತದಲ್ಲಿ ಸುರಕ್ಷಿತ ಡಿಜಿಟൽ ನಿರ್ಧಾರಗಳಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ಸಂತೋಷ್ ಕಣ್ಣನ್ ಅವರಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
    footerTwo: "ಒಟಿಪಿ, ಪಿನ್, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಸಿವಿವಿಗಳನ್ನು ಎಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.",
  },
  bn: {
    pageTitle: "ইন্ডিয়া নোটিস হেল্পার",
    pageDescription: "ভারতীয় নোটিশ এবং বার্তাগুলিতে স্ক্যামের লক্ষণগুলি পরীক্ষা করুন।",
    heroTitle: "এই নোটিশটি কি",
    heroSafe: "নিরাপদ?",
    heroText: "সন্দেহজনক বিল, ব্যাঙ্ক অ্যালার্ট, আয়কর/জিএসটি বার্তা, চালান এবং এসএমএস স্ক্রিনশট পরীক্ষা করুন।",
    checkerTitle: "একটি নোটিশ বা বার্তা পরীক্ষা করুন",
    uploadLabel: "স্ক্রিনশট আপলোড করুন",
    pasteLabel: "অথবা বার্তাটি পেস্ট করুন",
    checkButton: "এই নোটিশ পরীক্ষা করুন",
    checkingButton: "নিরাপদে পরীক্ষা করা হচ্ছে...",
    disclaimerText: "ইন্ডিয়া নোটিস হেল্পার অফিসিয়াল ভেরিফিকেশন প্রদান করে না। এটি সাধারণ স্ক্যামের লক্ষণ পরীক্ষা করে পরবর্তী পদক্ষেপের পরামর্শ দেয়। অর্থ প্রদানের আগে সর্বদা ভেরিফাই করুন।",
    footerOne: "ভারতে নিরাপদ ডিজিটাল সিদ্ধান্তের জন্য নির্মিত। সন্তোষ কান্নান দ্বারা নির্মিত।",
    footerTwo: "ওটিপি, পিন, পাসওয়ার্ড বা সিভিভি শেয়ার করবেন না।",
  },
  mr: {
    pageTitle: "इंडिया नोटीस हेल्पर",
    pageDescription: "भारतीय नोटीस आणि संदेशांमधील स्कॅम संकेत तपासा.",
    heroTitle: "ही नोटीस",
    heroSafe: "सुरक्षित आहे का?",
    heroText: "संशयास्पद बिले, बँक अलर्ट, आयकर/जीएसटी संदेश, चलन आणि एसएमएस स्क्रीनशॉट तपासा.",
    checkerTitle: "नोटीस किंवा संदेश तपासा",
    uploadLabel: "स्क्रीनशॉट अपलोड करा",
    pasteLabel: "किंवा संदेश पेस्ट करा",
    checkButton: "ही नोटीस तपासा",
    checkingButton: "सुरक्षितपणे तपासत आहे...",
    disclaimerText: "इंडिया नोटीस हेल्पर अधिकृत पडताळणी प्रदान करत नाही. हे स्कॅम संकेत शोधून सुरक्षित पावले सुचवते. व्यवहार करण्यापूर्वी नेहमी अधिकृत साइटवर खात्री करा.",
    footerOne: "भारतात सुरक्षित डिजिटल निर्णयांसाठी विकसित. संतोष कन्नन यांनी बनवले.",
    footerTwo: "ओटीपी, पिन, पासवर्ड किंवा सीवीव्ही कधीही शेअर करू नका.",
  },
  gu: {
    pageTitle: "ઇન્ડિયા નોટિસ હેલ્પર",
    pageDescription: "ભારતીય નોટિસ અને સંદેશાઓમાં સ્કેમ સંકેતો તપાસો.",
    heroTitle: "આ નોટિસ",
    heroSafe: "સુરક્ષિત છે?",
    heroText: "શંકાસ્પદ બિલ, બેંક એલર્ટ, આવકવેરા/જીએસટી સંદેશાઓ, ચલણ અને એસએમએસ સ્ક્રીનશોટ તપાસો.",
    checkerTitle: "નોટિસ અથવા સંદેશ તપાસો",
    uploadLabel: "સ્ક્રીનશોટ અપલોડ કરો",
    pasteLabel: "અથવા સંદેશ પેસ્ટ કરો",
    checkButton: "આ નોટિસ તપાસો",
    checkingButton: "સુરક્ષિત રીતે તપાસ ચાલુ છે...",
    disclaimerText: "ઇન્ડિયા નોટિસ હેલ્પર સત્તાવાર ચકાસણી પ્રદાન કરતું નથી. તે સ્કેમ સંકેતો શોધીને સુરક્ષિત પગલાં સૂચવે છે. કોઈ પણ વ્યવહાર પહેલાં ચકાસણી કરો.",
    footerOne: "ભારતમાં સુરક્ષિત ડિજิตલ નિર્ણયો માટે નિર્મિત. સંતોષ કન્નન દ્વારા નિર્મિત.",
    footerTwo: "OTP, PIN, પાસવર્ડ કે CVV ક્યારેય શેર કરશો નહીં.",
  },
  ml: {
    pageTitle: "ഇന്ത്യ നോട്ടീസ് ഹെൽപ്പർ",
    pageDescription: "ഇന്ത്യൻ നോട്ടീസുകളിലും സന്ദേശങ്ങളിലും തട്ടിപ്പ് അടയാളങ്ങൾ പരിശോധിക്കുക.",
    heroTitle: "ഈ നോട്ടീസ്",
    heroSafe: "സുരക്ഷിതമാണോ?",
    heroText: "സംശയകരമായ ബില്ലുകൾ, ബാങ്ക് അലേർട്ടുകൾ, ആദായനികുതി/ജിഎസ്ടി സന്ദേശങ്ങൾ, ചലാനുകൾ, എസ്എംഎസ് സ്ക്രീൻഷോട്ടുകൾ പരിശോധിക്കുക.",
    checkerTitle: "നോട്ടീസ് അല്ലെങ്കിൽ സന്ദേശം പരിശോധിക്കുക",
    uploadLabel: "സ്ക്രീൻഷോട്ട് അപ്‌ലോഡ് ചെയ്യുക",
    pasteLabel: "അല്ലെങ്കിൽ സന്ദേശം പേസ്റ്റ് ചെയ്യുക",
    checkButton: "ഈ നോട്ടീസ് പരിശോധിക്കുക",
    checkingButton: "സുരക്ഷിതമായി പരിശോധിക്കുന്നു...",
    disclaimerText: "ഇന്ത്യ നോട്ടീസ് ഹെൽപ്പർ ഔദ്യോഗിക പരിശോധന നൽകുന്നില്ല. ഇത് തട്ടിപ്പ് അടയാളങ്ങൾ കണ്ടെത്തി സുരക്ഷിത മാർഗ്ഗങ്ങൾ നിർദ്ദേശിക്കുന്നു. പണം നൽകുന്നതിന് മുമ്പ് പരിശോധിക്കുക.",
    footerOne: "ഇന്ത്യയിൽ സുരക്ഷിതമായ ഡിജിറ്റൽ തീരുമാനങ്ങൾക്കായി നിർമ്മിച്ചത്. സന്തോഷ് കണ്ണൻ നിർമ്മിച്ചത്.",
    footerTwo: "ഒടിപി, പിൻ, പാസ്‌വേഡ് അല്ലെങ്കിൽ സിവിവി എന്നിവ ഒരിക്കലും പങ്കിടരുത്.",
  },
  pa: {
    pageTitle: "ਇੰਡੀਆ ਨੋਟਿਸ ਹੈਲਪਰ",
    pageDescription: "ਭਾਰਤੀ ਨੋਟਿਸਾਂ ਅਤੇ ਸੁਨੇਹਿਆਂ ਵਿੱਚ ਸਕੈਮ ਦੇ ਸੰਕੇਤਾਂ ਦੀ ਜਾਂਚ ਕਰੋ।",
    heroTitle: "ਕੀ ਇਹ ਨੋਟਿਸ",
    heroSafe: "ਸੁਰੱਖਿਅਤ ਹੈ?",
    heroText: "ਸ਼ੱਕੀ ਬਿੱਲ, ਬੈਂਕ ਅਲਰਟ, ਇਨਕਮ ਟੈਕਸ/ਜੀਐਸਟੀ ਸੁਨੇਹੇ, ਚਲਾਨ ਅਤੇ ਐਸਐਮਐਸ ਸਕ੍ਰੀਨਸ਼ਾਟ ਦੀ ਜਾਂਚ ਕਰੋ।",
    checkerTitle: "ਨੋਟਿਸ ਜਾਂ ਸੁਨੇਹੇ ਦੀ ਜਾਂਚ ਕਰੋ",
    uploadLabel: "ਸਕ੍ਰੀਨਸ਼ਾਟ ਅਪਲੋਡ ਕਰੋ",
    pasteLabel: "ਜਾਂ ਸੁਨੇਹਾ ਪੇਸਟ ਕਰੋ",
    checkButton: "ਇਸ ਨੋਟਿਸ ਦੀ ਜਾਂਚ ਕਰੋ",
    checkingButton: "ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਜਾਂਚ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ...",
    disclaimerText: "ਇੰਡੀਆ ਨੋਟਿਸ ਹੈਲਪਰ ਅਧਿਕਾਰਤ ਪੁਸ਼ਟੀ ਨਹੀਂ ਕਰਦਾ। ਇਹ ਸਿਰਫ਼ ਆਮ ਸਕੈਮ ਸੰਕੇਤਾਂ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ। ਭੁਗਤਾਨ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਹਮੇਸ਼ਾ ਪੁਸ਼ਟੀ ਕਰੋ।",
    footerOne: "ਭਾਰਤ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਡਿਜੀਟਲ ਫੈਸਲਿਆਂ ਲਈ ਬਣਾਇਆ ਗਿਆ। ਸੰਤੋਸ਼ ਕੰਨਨ ਦੁਆਰਾ ਨਿਰਮਿਤ।",
    footerTwo: "ਓਟੀਪੀ, ਪਿੰਨ, ਪਾਸਵਰਡ ਜਾਂ ਸੀਵੀਵੀ ਕਦੇ ਵੀ ਸਾਂਝਾ ਨਾ ਕਰੋ।",
  }
};

let imageDataUrl = "";
let activeMode = null;
let activeExampleId = "";
const supportedLangs = ["en", "hi", "ta", "te", "kn", "bn", "mr", "gu", "ml", "pa"];
let currentLanguage = supportedLangs.includes(localStorage.getItem("notice-helper-language")) ? localStorage.getItem("notice-helper-language") : "en";
let currentStatus = null;
let currentRiskLabel = "";

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function applyLanguage(language) {
  currentLanguage = supportedLangs.includes(language) ? language : "en";
  localStorage.setItem("notice-helper-language", currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = "ltr";
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').content = t("pageDescription");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
  if (elements.languageSelect) {
    elements.languageSelect.value = currentLanguage;
  }
  setStatus(currentStatus);
  if (currentRiskLabel) setRiskLabel(currentRiskLabel);
  if (elements.button.classList.contains("loading")) {
    elements.button.querySelector(".button-label").textContent = t("checkingButton");
  }
}

function setRiskLabel(label) {
  currentRiskLabel = label;
  const keys = {
    "Looks normal": "riskLooksNormal",
    "Verify first": "riskVerifyFirst",
    Suspicious: "riskSuspicious",
    "Likely scam": "riskLikelyScam",
    Inappropriate: "riskInappropriate",
  };
  elements.risk.textContent = t(keys[label] || label);
}

async function callGradioApi(name, data) {
  const response = await fetch(`/gradio_api/call/${name}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  if (!response.ok) throw new Error(t("requestStartError"));
  const { event_id: eventId } = await response.json();
  const stream = await fetch(`/gradio_api/call/${name}/${eventId}`);
  if (!stream.ok || !stream.body) throw new Error(t("requestReadError"));

  const reader = stream.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const chunks = buffer.split("\n\n");
    buffer = chunks.pop() || "";
    for (const chunk of chunks) {
      const event = chunk.match(/^event:\s*(.+)$/m)?.[1];
      const raw = chunk.match(/^data:\s*(.+)$/m)?.[1];
      if (event === "error") throw new Error(t("requestFailedError"));
      if (event === "complete" && raw) {
        const values = JSON.parse(raw);
        return values[0];
      }
    }
  }
  throw new Error(t("noResultError"));
}

function setStatus(status) {
  if (!status) {
    elements.statusText.textContent = t("statusChecking");
    return;
  }
  currentStatus = status;
  const modelName = status.label?.match(/:\s*(.+)$/)?.[1] || "";
  elements.statusText.textContent = status.connected
    ? `${t("statusReady")}${currentLanguage === "en" && modelName ? `: ${modelName}` : ""}`
    : status.label?.toLowerCase().includes("credentials")
      ? t("statusCredentials")
      : t("statusUnavailable");
  elements.status.classList.toggle("connected", Boolean(status.connected));
}

async function loadStatus() {
  try {
    setStatus(await callGradioApi("status", []));
  } catch {
    setStatus({ connected: false, label: "Modal model unavailable" });
  }
}

function showError(message = "") {
  elements.error.textContent = message;
  elements.error.classList.toggle("visible", Boolean(message));
}

function setMode(mode) {
  activeMode = mode;
  const isImage = mode === "image";
  const isText = mode === "text";

  elements.text.disabled = isImage;
  elements.dropZone.classList.toggle("disabled", isText);
  elements.image.disabled = isText;

  elements.uploadHint.classList.toggle("visible", isImage);
  elements.textHint.classList.toggle("visible", isText);
  elements.resetButton.classList.toggle("visible", Boolean(mode));
}

function setLoading(loading) {
  elements.button.disabled = loading;
  elements.button.classList.toggle("loading", loading);
  elements.button.querySelector(".button-label").textContent =
    loading ? t("checkingButton") : t("checkButton");
}

function renderList(selector, items) {
  const list = document.querySelector(selector);
  list.replaceChildren(...items.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  }));
}

function renderResult(payload) {
  if (!payload.ok) throw new Error(t("analyzeError"));
  const result = payload.assessment;
  setStatus(payload.status);
  elements.risk.className = `risk-badge risk-${result.risk_label.toLowerCase().replaceAll(" ", "-")}`;
  setRiskLabel(result.risk_label);
  document.querySelector("#explanationText").textContent = result.simple_explanation;
  renderList("#redFlagsList", result.red_flags);
  renderList("#nextStepsList", result.safe_next_steps);

  const replyCard = document.querySelector("#replyCard");
  const replyText = document.querySelector("#replyText");
  const replyAllowed = ["Verify first", "Suspicious"].includes(result.risk_label);
  if (replyAllowed && result.reply_draft && result.reply_draft.trim()) {
    replyText.textContent = result.reply_draft;
    replyCard.hidden = false;
  } else {
    replyCard.hidden = true;
  }

  elements.source.textContent = payload.source === "model"
    ? t("modelSource")
    : payload.source === "cached_modal_example"
      ? t("cachedSource")
      : "";
  elements.source.classList.toggle(
    "cached-result",
    payload.source === "cached_modal_example",
  );
  elements.results.hidden = false;
  elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useImage(file) {
  if (!file) return;
  activeExampleId = "";
  const allowed = ["image/png", "image/jpeg", "image/webp"];
  if (!allowed.includes(file.type)) return showError(t("imageTypeError"));
  if (file.size > 8 * 1024 * 1024) return showError(t("imageSizeError"));
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageDataUrl = String(reader.result);
    elements.preview.src = imageDataUrl;
    elements.dropZone.classList.add("has-image");
    showError();
    setMode("image");
  });
  reader.readAsDataURL(file);
}

elements.image.addEventListener("change", () => useImage(elements.image.files[0]));
elements.removeImage.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  imageDataUrl = "";
  activeExampleId = "";
  elements.image.value = "";
  elements.preview.removeAttribute("src");
  elements.dropZone.classList.remove("has-image");
  setMode(null);
});
["dragenter", "dragover"].forEach((name) => elements.dropZone.addEventListener(name, (event) => {
  event.preventDefault();
  elements.dropZone.classList.add("dragging");
}));
["dragleave", "drop"].forEach((name) => elements.dropZone.addEventListener(name, (event) => {
  event.preventDefault();
  elements.dropZone.classList.remove("dragging");
}));
elements.dropZone.addEventListener("drop", (event) => useImage(event.dataTransfer.files[0]));
elements.text.addEventListener("input", () => {
  activeExampleId = "";
  elements.charCount.textContent = `${elements.text.value.length.toLocaleString()} / 12,000`;
  if (elements.text.value.trim().length === 1) {
    setMode("text");
  }
  if (elements.text.value.trim().length === 0 && activeMode === "text") {
    setMode(null);
  }
});

document.querySelectorAll(".example-card").forEach((button) => {
  button.addEventListener("click", async () => {
    if (button.dataset.image) {
      try {
        const response = await fetch(button.dataset.image);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          imageDataUrl = String(reader.result);
          activeExampleId = button.dataset.exampleId || "";
          elements.preview.src = imageDataUrl;
          elements.dropZone.classList.add("has-image");
          showError();
          setMode("image");
          document.querySelector(".workspace").scrollIntoView({ behavior: "smooth" });
        });
        reader.readAsDataURL(blob);
      } catch {
        showError(t("exampleImageError"));
      }
    } else if (button.dataset.example) {
      elements.text.value = button.dataset.example;
      elements.text.dispatchEvent(new Event("input"));
      activeExampleId = button.dataset.exampleId || "";
      elements.text.focus();
      setMode("text");
      document.querySelector(".workspace").scrollIntoView({ behavior: "smooth" });
    }
  });
});

elements.resetButton.addEventListener("click", () => {
  imageDataUrl = "";
  activeExampleId = "";
  elements.image.value = "";
  elements.preview.removeAttribute("src");
  elements.dropZone.classList.remove("has-image");
  elements.text.value = "";
  elements.charCount.textContent = "0 / 12,000";
  elements.results.hidden = true;
  showError();
  setMode(null);
});

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  showError();
  if (!elements.text.value.trim() && !imageDataUrl) {
    return showError(t("emptyInputError"));
  }

  if (activeMode === "image") {
    elements.text.value = "";
    elements.charCount.textContent = "0 / 12,000";
  } else if (activeMode === "text") {
    imageDataUrl = "";
    elements.image.value = "";
    elements.preview.removeAttribute("src");
    elements.dropZone.classList.remove("has-image");
  }

  setLoading(true);
  try {
    const useCachedExample = currentLanguage === "en" && Boolean(activeExampleId);
    const submittedImage = useCachedExample ? "" : imageDataUrl;
    renderResult(await callGradioApi(
      "analyze",
      [
        elements.text.value,
        submittedImage,
        useCachedExample ? activeExampleId : "",
        elements.saveTrace.checked,
        currentLanguage,
      ],
    ));
  } catch (error) {
    showError(error.message || t("requestFailedError"));
  } finally {
    setLoading(false);
  }
});

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.querySelector(`#${button.dataset.copy}`);
    await navigator.clipboard.writeText(target.innerText);
    button.textContent = t("copied");
    setTimeout(() => { button.textContent = t("copy"); }, 1200);
  });
});

if (elements.languageSelect) {
  elements.languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

applyLanguage(currentLanguage);
loadStatus();
