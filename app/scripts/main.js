// GOOGLE MAPS

var locations = [];
function initMap() {
  locations.push(["Where I live", "50.833822", "4.524999"]);
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    scrollwheel: false,
    center: new google.maps.LatLng(50.8501138, 4.3672145),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var house = {
    path: 'M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z',
  };

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    var b = function () {
      if (locations[i][1] != "50.833822") {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });
      }
      else {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: {
            url: ('../images/house.svg'),
            scaledSize: new google.maps.Size(45, 45)
          }
        });
      }
    };
    b();

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

//BIO DATA
var bio = {
  name: "Helene Shaikh",
  role: "Junior Front-End & Java Developer",
  contacts: [{
    mobile: "+32 498 322 603",
    email: "helene.shaikh@gmail.com",
    github: "https://github.com/heleneshaikh",
    location: {
      street: "Oude Leuvensebaan 18",
      zip: "3080 Tervuren"
    },
    born: {
      date: "06/04/1988",
      location: "Sint-Lambrechts-Woluwe"
    }
  }],
  welcomeMessage: "Two years ago, I choose a completely different career path and have been programming ever since. I took a " +
  "Java initiation course at the VDAB, passed the Oracle certificate and started a training at RealDolmen as a Junior Software Engineer." +
  " As an eager learner, I then choose to practice Android Development and received a certificate from Udacity and Google. I am now concentrating" +
  " on what I love most: front-end development.",
  skills: [
    "HTML", "CSS", "JavaScript", "Jave EE", "Android", "Git", "English", "French", "Dutch", "Spanish"
  ],
  biopic: "", //TODO
  display: function () {
    document.getElementById("name").append(bio.name);
    document.getElementById("role").append(bio.role);
    document.getElementById("welcome").append(bio.welcomeMessage);
    document.getElementById("phone").append(bio.contacts[0].mobile);
    document.getElementById("mail").append(bio.contacts[0].email);

    $('<p class="contact--github"><a href="' + bio.contacts[0].github + '" id="github">Github</a></p>').insertAfter(".contact--address");
    document.getElementById("born-date").append(bio.contacts[0].born.date);
    document.getElementById("born-location").append(bio.contacts[0].born.location);
    document.getElementById("address").append(bio.contacts[0].location.street);
    document.getElementById("zipCode").append(bio.contacts[0].location.zip);
    for (var i = 0; i < bio.skills.length; i++) {
      $(".percentage__text").get(i).append(bio.skills[i]);
    }
  }
};
bio.display();

//WORK DATA
var work = {
  jobs: [
    {
      startDate: "02-2016",
      endDate: "04-2016",
      employer: "RealDolmen",
      title: "Acaddemict Junior Software Developer",
      description: "I was part of the '\Acaddemict\' traject for 2 months. Software developers taught and shared their expertise" +
      " on the subjects of Java EE, EJBs, JavaScript, Angular, git and XML processing",
      location: {
        title: "RealDolmen ICT consulting",
        longitude: "50.752922",
        latitude: "4.262945"
      }
    },
    {
      startDate: "09-2013",
      endDate: "02-2014",
      employer: "GroupM",
      title: "Community Manager",
      description: "At GroupM, I was responsible for the community management of brands such as Häagen-Dazs, Universal Pictures," +
      "Paramount Pictures,... This was a job with a lot of independent work and decision-making as I was the only employee responsible for the customer.",
      location: {
        title: "GroupM advertising agency",
        longitude: "50.817341",
        latitude: "4.405944"
      }
    },
    {
      startDate: "09-2011",
      endDate: "09-2012",
      employer: "Flagey",
      title: "Assistant Manager and Communications",
      description: "Flagey was my first real work experience and it was immediately a challenging one. I had the chance to have three different functions," +
      "which taught me a lot about multitasking, attention to detail and responsibility. I was the manager's assistant, communications employee and receptionist",
      location: {
        title: "Flagey concert venue",
        longitude: "50.826926",
        latitude: "4.373203"
      }
    }
  ],

  display: function () {
    for (var i = 0; i < work.jobs.length; i++) {
      $(".employer").get(i).append(work.jobs[i].employer);
      $(".startDate").get(i).append(work.jobs[i].startDate);
      $(".endDate").get(i).append(work.jobs[i].endDate);
      $(".title").get(i).append(work.jobs[i].title);
      $(".description").get(i).append(work.jobs[i].description);
      locations.push([
        work.jobs[i].location.title,
        work.jobs[i].location.longitude,
        work.jobs[i].location.latitude
      ]);
    }
  }
};
work.display();

var project = {
  projects: [
    {
      title: "BBC",
      dates: "02-2016",
      description: "I sliced the homepage of the BBC website",
      images: "" //array with string urls TODO
    }
  ],
  display: function () {
    for (var i = 0; i < project.projects.length; i++) {
      document.getElementById("title").append(project.projects[i].title);
      document.getElementById("time").append(project.projects[i].dates);
      document.getElementById("description").append(project.projects[i].description);
    }
  }
};
project.display();

//SCHOOL DATA
var education = {
  schools: [
    {
      name: "Vrije Universiteit Brussel",
      location: "Woluwe",
      degree: "Master in Taal-en Letterkunde (cum laude)",
      majors: [
        "Spanish", " Dutch", " English", " Philosophy"
      ],
      startDate: "2006",
      endDate: "2011",
      url: "https://www.vub.ac.be/"
    }
  ],
  onlineCourses: [
    {
      title: "Try Git",
      school: "CodeSchool",
      dates: "04-2015",
      url: "https://www.codeschool.com/courses/try-git"
    }
  ],
  display: function () {
    for (var i = 0; i < education.schools.length; i++) {
      document.getElementById("location").append(education.schools[i].location);
      document.getElementById("degree").append(education.schools[i].degree);
      $(".skill__date--startDate").get(i).append(education.schools[i].startDate);
      $(".skill__date--endDate").get(i).append(education.schools[i].endDate);
      $('<p class="majors">' + education.schools[i].majors + '</p>').insertAfter("#degree");
      $('<a href="' + education.schools[i].url + '" class="skill__name" id="schoolName" target="_blank">'+ education.schools[i].name + '</a>').insertAfter("#vub");
    }
    for (var j = 0; j < education.onlineCourses.length; j++) {
      document.getElementById("date").prepend(education.onlineCourses[j].dates);
      $('<li id="title"><a href="' + education.onlineCourses[j].url + '"target="_blank">' + education.onlineCourses[j].title + '</a></li>').insertAfter("#date");
      document.getElementById("school").append(education.onlineCourses[j].school);
    }
  }
};
education.display();

//CERTIFICATES DATA
var certificate = {
  certificates: [
    {
      name: "Oracle Certified Associate SE8"
    },
    {
      name: "Front-end Developer by Google"
    },
    {
      name: "Android developer by Udacity and Google"
    }
  ],
  display: function () {
    document.getElementById("oracle").append(certificate.certificates[0].name);
    document.getElementById("google").append(certificate.certificates[1].name);
    document.getElementById("udacity").append(certificate.certificates[2].name);
  }
};
certificate.display();
