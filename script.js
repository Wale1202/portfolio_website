educationSection = [
  {
    nameOfSchool: "SpringField",
    graduationYear: "2008",
    location: "Ketu",
  },

  {
    nameOfSchool: "Ronik Comprehensive",
    graduationYear: "2014",
    location: "Ejigbo",
  },

  {
    nameOfSchool: "Afebabalola",
    graduationYear: "2019",
    location: "Ekiti",
  },
];

portfolioData = [
  {
    title: "Project1",
    duration: "2019",
    location: "Lagos",
    imageSrc: "../assets/images/portfolio1.png",
    summary: "A final year project on Automated bottle plant",
    description: "This is a simulation of a conveyor belt with a sensor that detects defective bottles on the conveyor belt and pushes it aside without too much hastle. It uses technologies by simens and Scada",
  },

  {
    title: "Project2",
    duration: "2023",
    location: "Limerick",
    imageSrc: "../assets/images/portfolio2.png",
    summary: "A website to purchase Manchester United Jerseys",
    description: "This website was a project given as an assignment. It uses technologies like Html, Css and Bootstrap to Make the website. The website simply sells Manchester United Jerseys",
  },

  {
    title: "Project3",
    duration: "2023",
    location: "Limerick",
    imageSrc: "../assets/images/portfolio3.png",
    summary: "A Portfolio Website that showcases various projects you have done ",
    description: "The portfolio website gives a detailed history on Work experience, Education and Projects done. It also uses this following technologies like HTML and CSS, Bootstrap, JavaScript to add interactive elements to a page and lastly JSON strings to store data",
  },
];

workExperienceData = [
  {
    nameOfCompany: "GreenTech Limited",
    endDateYear: "June 2016 - June 2016",
    location: "Ogun State",
  },

  {
    nameOfCompany: "Mobil Oil Plc",
    endDateYear: "June 2017 - Aug 2017 ",
    location: "Apapa",
  },

  {
    nameOfCompany: "11Plc",
    endDateYear: "Jan 2018- Jul 2018",
    location: "Ketu",
  },
];

// The below function defines a JavaScript function called checkCookie() that checks for the presence of two cookies named username and Organization. If both cookies exist, it displays a welcome message to the user. If one or both cookies do not exist, the function prompts the user to enter their name and organization. If the user enters valid input for both prompts, the function sets the cookies to expire after a certain period of time (365 days for username and 30 days for Organization) and redirects the user to the home.html page.
function checkCookie() {
  var user = getCookie("username");
  var organization = getCookie("Organization");

  if (user != "" && organization != "") {
    alert("Welcome back " + user);
    window.location.href = "pages/home.html";
  } else {
    user = prompt("Please enter your name:");
    organization = prompt("Please enter your Organization:");

    if (
      user != "" &&
      user != null &&
      organization != "" &&
      organization != null
    ) {
      setCookie("username", user, 365);
      setCookie("Organization", organization, 30);
      window.location.href = "pages/home.html";
    }
  }
}

// The function below defines a JavaScript function called getCookie() that takes a parameter cname which represents the name of the cookie that needs to be retrieved. The function uses the document.cookie property to retrieve all the cookies stored for the current document and then loops through them to find the cookie with the specified name.

// The function first creates a variable name that stores the name of the cookie followed by an equal sign. It then splits the document.cookie string into an array of strings using semicolons as the delimiter.

// The function then loops through each element in the array using a for loop and removes any leading whitespace from each element using a while loop. It then checks if the element starts with the name string using the indexOf() method. If it does, the function returns the substring that follows the name string, which represents the value of the cookie.

// If the function does not find a cookie with the specified name, it returns an empty string.
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//   The function below defines a JavaScript function called setCookie() that takes three parameters: cname which represents the name of the cookie, cvalue which represents the value of the cookie, and exdays which represents the number of days that the cookie should be valid for.

// The function first creates a new Date object and sets it to the current time using the getTime() method. It then adds the specified number of days to the time using the setTime() method and stores the result in the variable d.

// The function then creates a string variable called expires that is formatted to include the expiration date of the cookie in UTC format. This variable is used to set the expires attribute of the cookie.

// Finally, the function sets the document.cookie property to a string that includes the cname, cvalue, and expires variables. It also includes a path attribute that specifies the path on the server where the cookie is valid.

// The function also logs the expires string to the console for debugging purposes.
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

  console.log("expires=" + d.toUTCString());
}

// The above code defines a function named "deleteCookie", which is used to delete two cookies named "username" and "Organization".

// The function achieves this by calling the "setCookie" function with the name of the cookie to be deleted, an empty string as the value, and a negative value for the "expires" parameter. When a negative value is passed as the "expires" parameter, it instructs the browser to immediately remove the cookie.

// After deleting the cookies, the code redirects the user to the "index.html" page using the "window.location.href" property.

// Overall, this function can be used to delete specific cookies and redirect the user to a different page after the deletion.
function deleteCookie() {
  setCookie("username", "", -1);
  setCookie("Organization", "", -1);
  window.location.href = "../index.html";
}

// The below block of code is using a for...of loop to iterate through an array of objects called "educationSection". The code creates three new HTML elements (paragraph elements) for each object in the array to display the name of the school, the graduation year, and the location of the school.

// For each object, the code sets the innerHTML of the "nameElement" to the "nameOfSchool" property of that object, sets the "id" attribute of the "nameElement" to the "nameOfSchool" property, and appends the "nameElement" to an HTML element with an "id" of "education-details".

// Similarly, the code sets the innerHTML of the "yearElement" to the "graduationYear" property of that object, sets the "id" attribute of the "yearElement" to the "graduationYear" property, and appends the "yearElement" to the same HTML element ("education-details").

// Finally, the code sets the innerHTML of the "locationElement" to the "location" property of that object, sets the "id" attribute of the "locationElement" to the "location" property, and appends the "locationElement" to the same HTML element ("education-details").
// Education section
const educationCardContainer = document.getElementById(
  "education-card-container"
);

for (const data of educationSection) {
  // Create the card element
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("col-md-4");

  // Create the card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create the card title element and set the text
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.nameOfSchool;
  cardBody.appendChild(cardTitle);

  const cardYear = document.createElement("p");
  cardYear.classList.add("card-text");
  cardYear.textContent = data.graduationYear;
  cardBody.appendChild(cardYear);

  // Create the card text element and set the text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = data.location;
  cardBody.appendChild(cardText);

  // Append the card body to the card element
  card.appendChild(cardBody);

  // Append the card to the card container element
  educationCardContainer.appendChild(card);
}

// Portfolio Data
const portfolioCardContainer = document.getElementById(
  "portfolio-card-container"
);

for (const data of portfolioData) {
  // Create the card element
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("col-md-4");

  // Create the image element and set the source
  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.setAttribute("src", data.imageSrc);
  card.appendChild(cardImage);

  // Create the card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create the card title element and set the text
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.title;
  cardBody.appendChild(cardTitle);

  const cardDuration = document.createElement("h5");
  cardDuration.classList.add("card-title");
  cardDuration.textContent = data.duration;
  cardBody.appendChild(cardDuration);

  // Create the card text element and set the text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = data.location;
  cardBody.appendChild(cardText);

  // Create the card text element and set the text
  const cardSummary = document.createElement("p");
  cardSummary.classList.add("card-text");
  cardSummary.textContent = data.summary;
  cardBody.appendChild(cardSummary);

  card.setAttribute("title", data.description);

  // Append the card body to the card element
  card.appendChild(cardBody);

  // Append the card to the card container element
  portfolioCardContainer.appendChild(card);
}

// Work Experience
const workExperienceCardContainer = document.getElementById(
  "work-experience-card-container"
);

for (const data of workExperienceData) {
  // Create the card element
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("col-md-4");

  // Create the card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create the card title element and set the text
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.nameOfCompany;
  cardBody.appendChild(cardTitle);

   // Create the card title element and set the text
   const cardYear = document.createElement("p");
   cardYear.classList.add("card-title");
   cardYear.textContent = data.endDateYear;
   cardBody.appendChild(cardYear);

  // Create the card text element and set the text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = data.location;
  cardBody.appendChild(cardText);

  // Append the card body to the card element
  card.appendChild(cardBody);

  // Append the card to the card container element
  workExperienceCardContainer.appendChild(card);
}

// The code blocks below add an event listener to an HTML element with an ID. When the button is clicked, the function defined inside the event listener is executed.

// The function starts by getting the HTML element with the ID and storing it in a variable.

// The code then checks the current value of the "display" style property of the element. If the value is "none", meaning the element is not currently displayed, the code changes the "display" property to "block", making the element visible.

// If the value of the "display" property is not "none", meaning the element is currently displayed, the code changes the "display" property to "none", hiding the element.

// Overall, this code provides a toggle functionality for displaying and hiding the HTML element when the button is clicked.
document
  .getElementById("work-experience-button")
  .addEventListener("click", function () {
    var workExperienceDetails = document.getElementById(
      "work-experience-card-container"
    );
    if (workExperienceDetails.style.display === "none") {
      workExperienceDetails.style.display = "block";
    } else {
      workExperienceDetails.style.display = "none";
    }
  });

document
  .getElementById("portfolio-button")
  .addEventListener("click", function () {
    var overallPortfolio = document.getElementById("portfolio-card-container");
    if (overallPortfolio.style.display === "none") {
      overallPortfolio.style.display = "block";
    } else {
      overallPortfolio.style.display = "none";
    }
  });

document
  .getElementById("education-button")
  .addEventListener("click", function () {
    var educationDetails = document.getElementById("education-card-container");
    if (educationDetails.style.display === "none") {
      educationDetails.style.display = "block";
    } else {
      educationDetails.style.display = "none";
    }
  });

// Surprise Me code
document.getElementById("stop-button").addEventListener("click", function () {
  toggleStopBtnVisibility();
  toggleSurpriseMeBtnVisibility();
  toggleSurpriseMeCardVisibility();
});

document
  .getElementById("surprise-button")
  .addEventListener("click", function () {
    toggleStopBtnVisibility();
    toggleSurpriseMeBtnVisibility();
    toggleSurpriseMeCardVisibility();
  });

function toggleStopBtnVisibility() {
  var stopBtn = document.getElementById("stop-button");
  if (stopBtn.style.display === "none") {
    stopBtn.style.display = "block";
  } else {
    stopBtn.style.display = "none";
  }
}

function toggleSurpriseMeBtnVisibility() {
  var surpriseBtn = document.getElementById("surprise-button");
  if (surpriseBtn.style.display === "none") {
    surpriseBtn.style.display = "block";
  } else {
    surpriseBtn.style.display = "none";
  }
}

function toggleSurpriseMeCardVisibility() {
  var surpriseMeCard = document.getElementById("surprise-me-card");
  if (surpriseMeCard.style.display === "none") {
    surpriseMeCard.style.display = "block";
  } else {
    surpriseMeCard.style.display = "none";
  }
}

// Function to select a random object from the array
function selectRandomData() {
  const randomIndex = Math.floor(Math.random() * portfolioData.length);
  return portfolioData[randomIndex];
}

// Function to update the output element with the selected data
function updateOutput(data) {
  const cardContainer = document.getElementById("surprise-me-card");
  cardContainer.innerHTML = "";

  // Create the card element
  const card = document.createElement("div");
  card.classList.add("card");
  // Create the image element and set the source
  const cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.setAttribute("src", data.imageSrc);
  card.appendChild(cardImage);

  // Create the card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create the card title element and set the text
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.title;
  cardBody.appendChild(cardTitle);


  // Create the card text element and set the text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = data.location;
  cardBody.appendChild(cardText);

  // Create the card text element and set the text
  const cardSummary = document.createElement("p");
  cardSummary.classList.add("card-text");
  cardSummary.textContent = data.summary;
  cardBody.appendChild(cardSummary);

  card.setAttribute("title", data.description);

  // Append the card body to the card element
  card.appendChild(cardBody);

  // Append the card to the card container element
  cardContainer.appendChild(card);
}

// A random project is selected upon load of the page. The same thing is done below 
// when the button is clicked
const selectedData = selectRandomData();
updateOutput(selectedData);

// Shuffle and update data every 10 seconds
setInterval(function () {
  const selectedData = selectRandomData();
  updateOutput(selectedData);
}, 30000);
