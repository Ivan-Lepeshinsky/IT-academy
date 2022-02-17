"use strict";
// Проверка заполнения поля
let devdiv = document.getElementById("devdiv");
let devspan = document.getElementById("devspan");
let siteDameDiv = document.getElementById("siteDameDiv");
let siteNameSpan = document.getElementById("siteNameSpan");

// проверка заполнения и наличия http
let siteUrlDiv = document.getElementById("siteUrlDiv");
let siteUrlSpan = document.getElementById("siteUrlSpan");

// проверка заполнения и дата недолжна быть больше текущей
let siteStratDiv = document.getElementById("siteStratDiv");
let siteStratSpan = document.getElementById("siteStratSpan");

// проверка заполнения и представления числом
let visitorsDiv = document.getElementById("visitorsDiv");
let visitorsSpan = document.getElementById("visitorsSpan");

// проверка заполнения и наличия @
let emailDiv = document.getElementById("emailDiv");
let emailSpan = document.getElementById("emailSpan");

// Проверка рубрик и размещения
let department = document.getElementById("department");
let departmentSpan = document.getElementById("departmentSpan");
let plasementDiv = document.getElementsByName("publish");
let plasementSpan = document.getElementById("plasementSpan");

// проверка отзывов
let reviews = document.getElementById("reviews");
let reviewstextspan = document.getElementById("reviewstextspan");
let reviewstext = document.getElementById("reviewstext");

// финальная проверка
let sbmt = document.getElementById("regform");

devdiv.addEventListener("blur", (EO) => checkEmptyDev(false));
siteDameDiv.addEventListener("blur", (EO) => checkEmptySiteName(false));
siteUrlDiv.addEventListener("blur", (EO) => checkSiteUrl(false));
siteStratDiv.addEventListener("blur", (EO) => checksiteStrat(false));
visitorsDiv.addEventListener("blur", (EO) => checksitevisitors(false));
emailDiv.addEventListener("blur", (EO) => checkEmail(false));
department.addEventListener("change", (EO) => departmentCheck(false));
for (let i = 0; i < plasementDiv.length; i++) {
  plasementDiv[i].addEventListener("change", (EO) => plasementCheck(false));
}
reviews.addEventListener("change", (EO) => reviewstextCheck(false));
reviewstext.addEventListener("blur", (EO) => reviewstextCheck(false));

sbmt.addEventListener("submit", (EO) => finalCheck(EO));

function checkEmptyDev(ef) {
  if (!devdiv.value) {
    devspan.innerHTML = "Поле не может быть пустым";
    if (ef) {
      devdiv.focus();
    }
    return 1;
  } else {
    devspan.innerHTML = "";
    return 0;
  }
}
function checkEmptySiteName(ef) {
  if (!siteDameDiv.value) {
    siteNameSpan.innerHTML = "Поле не может быть пустым";
    if (ef) {
      siteDameDiv.focus();
    }
    return 1;
  } else {
    siteNameSpan.innerHTML = "";
    return 0;
  }
}
function checkSiteUrl(ef) {
  if (!siteUrlDiv.value) {
    siteUrlSpan.innerHTML = "Поле не может быть пустым";
    if (ef) {
      siteUrlDiv.focus();
    }
    return 1;
  } else if (siteUrlDiv.value.indexOf("http")) {
    siteUrlSpan.innerHTML = "проверьте правильность адреса";
    if (ef) {
      siteUrlDiv.focus();
    }
    return 1;
  } else {
    siteUrlSpan.innerHTML = "";
    return 0;
  }
}
function checksiteStrat(ef) {
  let now = new Date();
  let date =
    now.getFullYear() + "-" + "0" + (now.getMonth() + 1) + "-" + now.getDate();

  if (!siteStratDiv.value) {
    siteStratSpan.innerHTML = "Укажите дату запуска сайта";
    if (ef) {
      siteStratDiv.focus();
    }
    return 1;
  } else if (siteStratDiv.value > date) {
    siteStratSpan.innerHTML = "Проверьте дату запуска сайта";
    if (ef) {
      siteStratDiv.focus();
    }
    return 1;
  } else {
    siteStratSpan.innerHTML = "";
    return 0;
  }
}

function checksitevisitors(ef) {
  if (!visitorsDiv.value) {
    visitorsSpan.innerHTML = "Поле не может быть пустым";
    if (ef) {
      visitorsDiv.focus();
    }
    return 1;
  } else if (isNaN(parseInt(visitorsDiv.value))) {
    visitorsSpan.innerHTML = "Должно быть указано цифровое значение";
    if (ef) {
      visitorsDiv.focus();
    }
    return 1;
  } else {
    visitorsSpan.innerHTML = "";
    return 0;
  }
}

function checkEmail(ef) {
  if (!emailDiv.value) {
    emailSpan.innerHTML = "Поле не может быть пустым";
    if (ef) {
      emailDiv.focus();
    }
    return 1;
  } else if (emailDiv.value.indexOf("@") === false) {
    emailSpan.innerHTML = "проверьте правильность почты";
    if (ef) {
      emailDiv.focus();
    }
    return 1;
  } else {
    emailSpan.innerHTML = "";
    return 0;
  }
}

function departmentCheck(ef) {
  if (department.value < 1) {
    departmentSpan.innerHTML = "Выберите рубрику";
    if (ef) {
      department.focus();
    }
    return 1;
  } else {
    departmentSpan.innerHTML = "";
    return 0;
  }
}

function plasementCheck(ef) {
  let checkedCount = 0;
  for (let i = 0; i < plasementDiv.length; i++) {
    if (!plasementDiv[i].checked) {
      checkedCount++;
    }
  }
  if (plasementDiv.length === checkedCount) {
    plasementSpan.innerHTML = "Выберите рубрику";
    if (ef) {
      plasementDiv.focus();
    }
    return 1;
  } else {
    plasementSpan.innerHTML = "";
    return 0;
  }
}

function reviewstextCheck(ef) {
  if (reviews.checked && !reviewstext.value) {
    reviewstextspan.innerHTML = "Необходимо заполнить поле";
    if (ef) {
      reviewstext.focus();
    }
    return 1;
  } else if (!reviews.checked && reviewstext.value) {
    reviewstextspan.innerHTML = "Опция отправки отзывов не выбрана";
    if (ef) {
      reviewstext.focus();
    }
    return 1;
  } else {
    reviewstextspan.innerHTML = "";
    return 0;
  }
}

function finalCheck(EO) {
  let errCount = 0;

  errCount += checkEmptyDev(!errCount);
  errCount += checkEmptySiteName(!errCount);
  errCount += checkSiteUrl(!errCount);
  errCount += checksiteStrat(!errCount);
  errCount += checksitevisitors(!errCount);
  errCount += checkEmail(!errCount);
  errCount += departmentCheck(!errCount);
  errCount += plasementCheck(!errCount);
  errCount += reviewstextCheck(!errCount);

  if (errCount) EO.preventDefault();
}
