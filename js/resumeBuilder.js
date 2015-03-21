// JSON

var work = {
  "jobs": [
        {
            "employer": "Hormuud Telecom",
            "title": "Software Developer",
			"location": "Somalia",
			"dates": "May, 05-2006 - September, 20-2010",
			"description": "My responsibilities include: investigating current applications, liaising with users, producing specifications, writing new software and operating manuals, testing the product to ensure that it operates satisfactorily, training users, handling support and feedback"
        },
        {
            "employer": "SafarifoneICT",
            "title": "Technical Support Officer",
			"location": "Djibouti",
			"dates": "October, 05-2010 - Current",
			"description": "Under general supervision, in a 24/7 in-bound service support center, we provide technical and network problem resolution to end-users (customers) by performing a question diagnosis while guiding users through step-by-step solutions. Solutions include, but are not limited to, resolving any issues requested in a ticket based way, assisting with navigating around web applications and other services by clearly communicating technical solutions in a user-friendly, professional manner."
        }
  ]
};

var projects = {
  "projects": [
    {
      "title": "HTML Mockup",
      "dates": "December 2014",
      "description": "Using HTML to create the mockup for a website",
      "images": ["images/mock.png"]
    },
	{
		"title": "Remittance Management System",
		"dates": "December 2011",
		"description": "This Remittance Management System Project was designed to manage all Transactions related to Transfers (inbound/outbound).",
		"images": ["images/project1.jpg"]
	},
	{
	  "title": "Inventory and Accounting Project",
	  "dates": "September 2009",
	  "description": "This Inventory and Accounting Project was designed to manage all inventory and Accounting data for SAFA Company products.",
	  "images": [
      "images/project1.jpg"
    ]   
    }
  ]
}

var bio = {
  "name": "Ahmed Hussein",
  "role": "Front-End Web Developer",
  "welcomeMessage": "My name is Ahmed Hussein. I'm a passionate learner, trying to learn new things every time. My current work is programming, \
                    and I am currently developing my ability at front-end website development skills through Udacity's Nano-degrees program.<br/><br/>\
					I have a strong ambition to learn through consistence, discipline and hardworking, pursue a career in the field of Information Technology and computer science as a scholar.\
                    It is also my desire to develop myself as a successful and dynamic scholar where I could use my educational knowledge and skills to strengthen my future.",
  "contacts": {
    "mobile": "253-77-797956",
    "email": "haadibinali@gmail.com",
    "github": "haadibinali",
    "location": "Djibouti, Djibouti"
  },
  "skills": ["HTML/CSS", "Programming", "C#", "Database"],
  "img": "images/my.jpg"
};

var education = {
  "schools": [
    {
	"name": "Benadir University",
    "degree": "Bachelor Of Computer Science",
	"location": "Mogadisho, Somalia",
    "majors": ["CS"],
    "dates": "2004-2008",
    "url": "http://www.bu.edu.so"
    },
	{
     "name": "Open University of Malaysia",
     "location": "KL, Malaysia",
     "degree": "MBA",
     "majors": ["PM"],
     "dates": "2010-2013",
     "url": "http://www.oum.edu.my"
   }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://www.udacity.com/course/viewer#!/c-ud804"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://www.udacity.com/course/viewer#!/c-ud304"
    },
    {
      "title": "Progamming Foundations with Python",
      "school": "Udacity",
      "dates": "2014",
      "url": "https://www.udacity.com/course/viewer#!/c-ud036"
    }
  ]
};

// Function definitions

// Display bio info

bio.display = function() {
  // Display name and role
  var formattedName = HTMLheaderName.replace("%data%",bio["name"]);
  var formattedRole = HTMLheaderRole.replace("%data%",bio["role"]);

  // Display contact info
  $("#header").prepend(formattedName + formattedRole);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts["mobile"]);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts["email"]);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts["location"]);
  var contacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
  $(contacts).appendTo("#topContacts, #footerContacts");
  
  // Display image and welcome message
  var formattedImage = HTMLbioPic.replace("%data%",bio["img"]);
  var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio["welcomeMessage"]);
  $("#header").append(formattedImage + formattedMessage);

  // Display skills

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = "";
    for (var i = 0; i < bio.skills.length; i++){
      formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
      $("#skills").append(formattedSkill);
    };
  };
};

// Display jobs

work.display = function(){
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var jObj = work.jobs[job];
    var formattedEmployer = HTMLworkEmployer.replace("%data%",jObj["employer"]);
    var formattedTitle = HTMLworkTitle.replace("%data%",jObj["title"]);
    var formattedDates = HTMLworkDates.replace("%data%",jObj["dates"]);
    var formattedLocation = HTMLworkLocation.replace("%data%",jObj['location']);
    var formattedWorkDesc = HTMLworkDescription.replace("%data%",jObj['description']);
    $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedWorkDesc);
  }
};

// Display projects

projects.display = function() {
  for (var project in projects["projects"]) {
    $("#projects").append(HTMLprojectStart);
    var pr = projects["projects"][project];
    var formattedTitle = HTMLprojectTitle.replace("%data%", pr["title"]);
    var formattedDates = HTMLprojectDates.replace("%data%", pr["dates"]);
    var formattedDesc = HTMLprojectDescription.replace("%data%", pr["description"]);
    var formattedImages = "";
    if (pr["images"].length > 0){
      for (image in pr["images"]) {
        formattedImages += HTMLprojectImage.replace("%data%", pr["images"][image]);
      };
    }
    $(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc + formattedImages);
  };
}

// Display education

education.display = function() {
  // Add education entry for each school
  for (school in education["schools"]){
    $("#education").append(HTMLschoolStart);
    var sch = education["schools"][school];
    var formattedName = HTMLschoolName.replace("%data%", sch["name"]);
    var formattedDegree = HTMLschoolDegree.replace("%data%", sch["degree"]);
    var formattedDates = HTMLschoolDates.replace("%data%", sch["dates"]);
    var formattedLocation = HTMLschoolLocation.replace("%data%", sch["location"]);
    var formattedMajor = ""; 
    if (sch["majors"].length > 0){
      for (var major in sch["majors"]){
        formattedMajor += HTMLschoolMajor.replace("%data%", sch["majors"][major]);
      };
    };
    $(".education-entry:last").append(formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor);
  };
  if (education["onlineCourses"].length > 0){
    $("#education").append(HTMLonlineClasses);
    for (course in education["onlineCourses"]){
      $("#education").append(HTMLschoolStart);
      var oc = education["onlineCourses"][course];
      var formattedTitle = HTMLonlineTitle.replace("%data%", oc["title"]);
      var formattedSchool = HTMLonlineSchool.replace("%data%", oc["school"]);
      var formattedDates = HTMLonlineDates.replace("%data%", oc["dates"]);
      var formattedUrl = HTMLonlineURL.replace("%data%", oc["url"]);
      $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
    };
  };
};

// Call display functions

bio.display();
work.display();
projects.display();
education.display();

// Log clicks to console

$(document).click(function(loc){
  logClicks(loc.pageX,loc.pageY);
});

// Internationalize in the footer

$("#footer").append(internationalizeButton);


var inName = function() {
  var oldName = $("#name").text();
  var finalName = oldName.trim().split(" ");
  finalName[0] = finalName[0][0].toUpperCase() + finalName[0].slice(1).toLowerCase();
  finalName[1] = finalName[1].toUpperCase();
  finalName = finalName.join(" ");
  return finalName;
}

// Add map!

$("#mapDiv").append(googleMap);