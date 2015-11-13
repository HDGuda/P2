
var skills = ["Analytical mind", "Creative thinker", "Handsome guy", "Clever rhetorician", "Unfortunately dead"];
var bio = {
	"name": "John M. Keynes",
	"role": "Dead Economist",
	"contact": ["Downs above Tilton", "Please don't call", "Surely no email", "Who needs Twitter?", "Github?", "Read my books!"],
	"pictureURL": "https://de.wikipedia.org/wiki/John_Maynard_Keynes#/media/File:Keynes_1933.jpg",
	"welcome-msg": "In the long run we are all dead.",
	"skills": skills,
	"biodates": ["5 June 1883", "21 April 1946"]
};

var work = {
	"career": [
		{"employer": "British government",
	 	"title": "Financial represantive of the Treasury",
	 	"dates": "1915 - 1919",
	 	"location": "London",
	 	"description": "Participated in the Versailles peace conference."
		},
		{"employer": "Self-employed writer",
	 	"title": "Author",
	 	"dates": "1919 - 1924",
	 	"location": "Cambridge",
	 	"description": "Published 'The economic consequences of the Peace', 'A Treatise on Probability' and other well-received books."
		},
		{"employer": "University of Cambridge",
		 "title": "Professor",
		 "dates": "1924 - 1938",
		 "location": "Cambridge",
		 "description": "Had to deal with too many stupid, bored students."
		}
	]
};

var education = {
	"schools": [
	{"name": "Cambridge College",
	 "city": "Cambridge, UK",
	 "degree": "B.A.",
	 "majors": ["Fine Arts", "Macroeconomics"],
	 "yearsattended": "1901 - 1903"

	},
	{"name": "Cambridge University",
	 "city": "Cambridge, UK",
	 "degree": "M.Sc. in Economics",
	 "majors": "Monetary theory and policy",
     "yearsattended": "1903 - 1904"
	}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
if (typeof(bio.skills) !== "undefined") {
	$("#header").append(HTMLskillsStart);

};


var formattedMobile = HTMLmobile.replace("%data%", bio.contact[1]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact[0]);
var formattedEmail = HTMLemail.replace("%data%", bio.contact[2]);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact[3]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact[4]);
var formattedBlog = HTMLblog.replace("%data%", bio.contact[5]);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);

for (job in work.career) {
	var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", work.career[job].employer) + HTMLworkTitle.replace("%data%", work.career[job].title);
	var formattedworkDates = HTMLworkDates.replace("%data%", work.career[job].dates);
	var formattedworkLocation = HTMLworkLocation.replace("%data%", work.career[job].location);
	var formattedworkDescription = HTMLworkDescription.replace("%data%", work.career[job].description);
	$("#workExperience").append(HTMLworkStart);
	$("#work-entry").append(formattedEmployerTitle);
	$("#work-entry").append(formattedworkDates);
	$("#work-entry").append(formattedworkLocation);
	$("#work-entry").append(formattedworkDescription);
};


$("#education").append(HTMLschoolStart);
$("#education-entry").append(formattedEducation);
$("#education-entry").append(formattedDegree);

$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedBlog);
$("#footerContacts").append(formattedLocation);