// GOOGLE MAPS

var locations = [];
function initMap() {
  locations = [
    ["RealDolmen ICT consulting", "50.752922", "4.262945"],
    ["GroupM advertising agency", "50.817341", "4.405944"],
    ["Botanique concert venue", "50.854709", "4.366243"],
    ["Flagey concert venue", "50.826926", "4.373203"],
    ["Where I live", "50.833822", "4.524999"]
  ];

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: new google.maps.LatLng(50.855171, 4.350326),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

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
  role: "Jr Front-End Developer",
  contacts: [{
    mobile: "+32 498 322 603",
    email: "helene.shaikh@gmail.com",
    github: "https://github.com/heleneshaikh",
    location: {
      street: "Oude Leuvensebaan 18",
      zip: "3080 Tervuren"
    },
    born: "06/04/1988 Sint-Lambrechts-Woluwe"
  }],
  welcomeMessage: "Two years ago, I choose a completely different career path and have been programming ever since. I took a " +
  "Java initiation course at the VDAB, passed the Oracle certificate and started a training at RealDolmen as a Junior Software Engineer." +
  " As an eager learner, I then choose to practice Android Development and received a certificate from Udacity and Google. I am now concentrating" +
  " on what I love most: front-end development.",
  skills: [
    "HTML", "CSS", "JavaScript", "Jave EE", "Android", "Git", "English", "French", "Dutch", "Spanish"
  ],
  display: function () {
    document.getElementById("name").append(bio.name);
    document.getElementById("role").append(bio.role);
    document.getElementById("welcome").append(bio.welcomeMessage);
    document.getElementById("phone").append(bio.contacts[0].mobile);
    document.getElementById("mail").append(bio.contacts[0].email);
    document.getElementById("github").append(bio.contacts[0].github);
    document.getElementById("born").append(bio.contacts[0].born);
    document.getElementById("address").append(bio.contacts[0].location.street + bio.contacts[0].location.zip);
    for (var i = 0; i < bio.skills.length; i++) {
      $(".text").get(i).append(bio.skills[i]);
    }
  }
};
bio.display();
// biopic: string url


//WORK DATA
var work = {
  jobs: [
    {
      startDate: "2013-2013",
      endDate: "2013-2013",
      employer: "RealDolmen",
      title: "Trainee Junior Software Developer",
      description: "Bla bla bla bla bla",
      location: {
        longitude: "50.752922",
        latitude: "4.262945"
      }
    },
    {
      startDate: "2013-2013",
      endDate: "2013-2013",
      employer: "GroupM",
      title: "Community Manager",
      description: "Bla bla bla bla bla",
      location: {
        longitude: "50.817341",
        latitude: "4.405944"
      }
    },
    {
      startDate: "2013-2013",
      endDate: "2013-2013",
      employer: "Botanique",
      title: "Internship Press and Communications",
      description: "Bla bla bla bla bla",
      location: {
        longitude: "50.854709",
        latitude: "4.366243"
      }
    },
    {
      startDate: "2013-2013",
      endDate: "2013-2013",
      employer: "Flagey",
      title: "Assistant Manager and Communications",
      description: "Bla bla bla bla bla",
      location: {
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
    }
  }
};
work.display();

//SCHOOL DATA

var school = {
  schools: [
    {
      name: "Vrije Universiteit Brussel",
      location: "Woluwe",
      degree: "Master in Taal-en Letterkunde (cum laude)",
      majors: [
        "spanish", "dutch", "english", "philosophy"
      ],
      startDate: "2006",
      endDate: "2011",
      url: "https://www.vub.ac.be/"
    }
  ],
  onlineCourses: [ //
    {
      title: "bla",
      school: "bla",
      dates: "bla",
      url: "bla"
    }
  ],
  display: function () {
    for (var i = 0; i < school.schools.length; i++) {
      document.getElementById("schoolName").append(school.schools[i].name);
      document.getElementById("location").append(school.schools[i].location);
      document.getElementById("degree").append(school.schools[i].degree);
      $(".skill__date--startDate").get(i).append(school.schools[i].startDate);
      $(".skill__date--endDate").get(i).append(school.schools[i].endDate);
      //add url to school name
    }
  }
};

school.display();

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
