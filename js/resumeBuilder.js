
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
	 	"title": "Financial represantative of the Treasury",
	 	"dates": "1915 - 1919",
	 	"location": "London",
	 	"description": "Participated in the Versailles peace conference."
		},
		{"employer": "Self-employed writer",
	 	"title": "Author",
	 	"dates": "1919 - 1924",
	 	"location": "Cambridge",
	 	"description": "Published 'The economic consequences of Peace', 'A Treatise on Probability' and other well-received books."
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

var projects = {
	"allproj": [
		{"title": "The economic consequences of Peace",
		 "dates": "1919 - 1921",
		 "description": "Keynes attended the Versailles Conference as a delegate of the British Treasury and argued for a much more generous peace. It was a best seller throughout the world and was critical in establishing a general opinion that the Versailles Treaty was a 'Carthaginian peace'. It helped to consolidate American public opinion against the treaty and involvement in the League of Nations.",
		 "imageURL": "http://ecx.images-amazon.com/images/I/41J4T4UdXeL.jpg"
		},
		{"title": "A Treatise on Probability",
		 "dates": "1922",
		 "description": "The Meaning Of Probability - Probability In Relation To The Theory Of Knowledge - The Measurement Of Probabilities - The Principle Of Indifference - Other Methods Of Determining Probabilities - The Weight Of Arguments",
		 "imageURL": "http://ecx.images-amazon.com/images/I/41YRrQW0yVL.jpg"
		}
	]
}

$("#main").append(internationalizeButton);

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

projects.display = function() {
	for (projs in projects.allproj) {
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.allproj[projs].title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.allproj[projs].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.allproj[projs].description);
		var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.allproj[projs].imageURL);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectDates);
		$(".project-entry:last").append(formattedprojectDescription);
		$(".project-entry:last").append(formattedprojectImage);

	}
}

projects.display();

$("#education").append(HTMLschoolStart);
$("#education-entry").append(formattedEducation);
$("#education-entry").append(formattedDegree);

$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedBlog);
$("#footerContacts").append(formattedLocation);