
var skills = ["Analytical mind", "Creative thinker", "Handsome guy", "Clever rhetorician", "Unfortunately dead"];
var bio = {
	"name": "John M. Keynes",
	"role": "Dead Economist",
	"contact": ["Charleston House, Firle/East Sussex", "Please don't call", "Surely no email", "Who needs Twitter?", "Github?", "Read my books!"],
	"pictureURL": "https://upload.wikimedia.org/wikipedia/commons/0/04/Keynes_1933.jpg",
	"welcome-msg": "In the long run we are all dead.",
	"skills": skills,
	"biodates": ["5 June 1883", "21 April 1946"]
};

var work = {
	"career": [
		{"employer": "British government",
	 	"title": "Financial represantative of the Treasury",
	 	"dates": "1915 - 1919",
	 	"location": "London, UK",
	 	"description": "Participated in the Versailles peace conference."
		},
		{"employer": "Self-employed writer",
	 	"title": "Author",
	 	"dates": "1919 - 1924",
	 	"location": "Cambridge, UK",
	 	"description": "Published 'The economic consequences of Peace', 'A Treatise on Probability' and other well-received books."
		},
		{"employer": "University of Oxford",
		 "title": "Professor",
		 "dates": "1924 - 1938",
		 "location": "Oxford, UK",
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
		{"name": "Manchester University",
		 "city": "Manchester, UK",
		 "degree": "M.Sc. in Economics",
		 "majors": ["Monetary theory and policy"],
	     "yearsattended": "1903 - 1904"
		},
		{"name": "Edinburgh University",
		 "city": "Edinburgh, UK",
		 "degree": "PhD in Economics",
		 "majors": ["Doctoral thesis about Monetary Policy"],
	     "yearsattended": "1904 - 1905"
		}
	]
};

var onlineed = {
	"onlinesch": [
		{"title": "Online-Writer",
		"school": "Writing School for Economics",
		"dates": "1910 - 1911",
		"url": "http://ocw.mit.edu/courses/comparative-media-studies-writing/21w-755-writing-and-reading-short-stories-spring-2012/"
		}
	]
};


var projects = {
	"allproj": [
		{"title": "The economic consequences of the Peace",
		 "dates": "1919 - 1921",
		 "description": "Keynes attended the Versailles Conference as a delegate of the British Treasury and argued for a much more generous peace. It was a best seller throughout the world and was critical in establishing a general opinion that the Versailles Treaty was a 'Carthaginian peace'. It helped to consolidate American public opinion against the treaty and involvement in the League of Nations.",
		 "imageURL": ["http://ecx.images-amazon.com/images/I/41J4T4UdXeL.jpg", "http://ecx.images-amazon.com/images/I/51WdgpqVd2L.jpg", "https://churlsgonewild.files.wordpress.com/2012/10/economic-consequences-peace-john-maynard-keynes.jpg"]
		},
		{"title": "A Treatise on Probability",
		 "dates": "1922",
		 "description": "The Meaning Of Probability - Probability In Relation To The Theory Of Knowledge - The Measurement Of Probabilities - The Principle Of Indifference - Other Methods Of Determining Probabilities - The Weight Of Arguments",
		 "imageURL": ["http://ecx.images-amazon.com/images/I/41YRrQW0yVL.jpg"]
		}
	]
}

var footerCont = {
	"homepage": "www.maynardkeynes.org",
	"adress": "Firle/East Sussex BN8 6LL"
}

footerCont.display = function() {
	var formattedfooterAdress = HTMLfooterAdress.replace("%data%", footerCont.adress);
	var formattedfooterHomepage = HTMLfooterHomepage.replace("%data%", footerCont.homepage);
	formattedfooterHomepage = formattedfooterHomepage.replace("%url%", footerCont.homepage);
	$("#footerContacts").append(formattedfooterAdress);
	$("#footerContacts").append(formattedfooterHomepage);
}

footerCont.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio["welcome-msg"]);
	$("#header").append(formattedPic);
	$("#header").append(formattedMsg);
	if (typeof(bio.skills) !== "undefined") {
		$("#header").append(HTMLskillsStart);
		var formattedSkills = "";
		for (skill in bio.skills) {
			formattedSkills = formattedSkills + HTMLskills.replace("%data%", bio.skills[skill]);
		}
	};
	$("#skills").append(formattedSkills);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contact[0]);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contact[1]);
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

}

bio.display();

work.display = function() {
	for (job in work.career) {
		var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", work.career[job].employer) + HTMLworkTitle.replace("%data%", work.career[job].title);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.career[job].dates);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.career[job].location);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.career[job].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedworkDates);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDescription);
	};
};

work.display();

projects.display = function() {
	for (projs in projects.allproj) {
		var formattedprojectImage = "";
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.allproj[projs].title);
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.allproj[projs].dates);
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.allproj[projs].description);
		for (im in projects.allproj[projs].imageURL) {
			formattedprojectImage = formattedprojectImage + HTMLprojectImage.replace("%data%", projects.allproj[projs].imageURL[im]);
		}
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedprojectTitle);
		$(".project-entry:last").append(formattedprojectDates);
		$(".project-entry:last").append(formattedprojectDescription);
		$(".project-entry:last").append(formattedprojectImage);

	}
}

projects.display();

education.display = function() {

	for (sch in education.schools) {
		formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[sch].name) + HTMLschoolDegree.replace("%data%", education.schools[sch].degree);
		formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[sch].yearsattended);
		formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[sch].city);
		formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[sch].majors.join(separator=', '));
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajors);
	}
	for (onsch in onlineed.onlinesch) {
		formattedOnlineName = HTMLonlineTitle.replace("%data%", onlineed.onlinesch[onsch].title) + HTMLonlineSchool.replace("%data%", onlineed.onlinesch[onsch].school);
		formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineed.onlinesch[onsch].dates);
		formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineed.onlinesch[onsch].url);
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedOnlineName);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}
education.display();