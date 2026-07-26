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
  languageOptions: document.querySelectorAll(".language-option"),
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
    footerOne: "Built for safer digital decisions in India.",
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
    pageDescription: "भारतीय नोटिस और संदेशों को आम स्कैम संकेतों के लिए जांचें।",
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
    taxRefund: "टैक्स रिफंड",
    taxRefundText: "अवांछित रिफंड अनुरोध",
    bankAlert: "बैंक अलर्ट",
    bankAlertText: "सुरक्षा कोड अनुरोध",
    screenshotsTitle: "वास्तविक स्कैम स्क्रीनशॉट",
    courierScam: "कूरियर स्कैम",
    courierScamText: "फर्जी कूरियर वितरण संदेश",
    mobileScam: "मोबाइल स्कैम",
    mobileScamText: "फर्जी मोबाइल ऑपरेटर संदेश",
    trafficScam: "ट्रैफिक चालान",
    trafficScamText: "फर्जी ई-चालान जुर्माना संदेश",
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
    footerOne: "भारत में सुरक्षित डिजिटल निर्णयों के लिए निर्मित।",
    footerTwo: "कभी भी ओटीपी, पिन, पासवर्ड या सीवीवी साझा न करें।",
    requestStartError: "ऐप अनुरोध शुरू नहीं कर सका।",
    requestReadError: "ऐप परिणाम नहीं पढ़ सका।",
    requestFailedError: "अनुरोध पूरा नहीं किया जा सका।",
    noResultError: "ऐप ने कोई परिणाम नहीं दिया।",
    analyzeError: "इस इनपुट का विश्लेषण करने में असमर्थ।",
    imageTypeError: "पीएनजी, जेपीजी, या वेबपी छवि का उपयोग करें।",
    imageSizeError: "कृपया 8 एमबी से छोटी छवि चुनें।",
    exampleImageError: "उदाहरण छवि लोड नहीं की जा सकी।",
    emptyInputError: "जारी रखने के लिए एक संदेश पेस्ट करें या स्क्रीनशॉट अपलोड करें।",
    modelSource: "तैनात किए गए Qwen3.5 4B मॉडल एंडपॉइंट द्वारा विश्लेषण किया गया।",
    cachedSource: "कैश किया गया मॉडल परिणाम",
    riskLooksNormal: "सामान्य लगता है",
    riskVerifyFirst: "सत्यापन करें",
    riskSuspicious: "संदिग्ध",
    riskLikelyScam: "संभावित स्कैम",
    riskInappropriate: "अनुचित",
  },
};

let imageDataUrl = "";
let activeMode = null;
let activeExampleId = "";
let currentLanguage = localStorage.getItem("notice-helper-language") === "hi" ? "hi" : "en";
let currentStatus = null;
let currentRiskLabel = "";

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function applyLanguage(language) {
  currentLanguage = language === "hi" ? "hi" : "en";
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
  elements.languageOptions.forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
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

elements.languageOptions.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.language));
});

applyLanguage(currentLanguage);
loadStatus();
