// GOOGLE MAPS

var locations = [];
function initMap() {
  locations.push(["Where I live", "50.833822", "4.524999", "home"]);
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    scrollwheel: false,
    center: new google.maps.LatLng(50.8052376, 4.3691867),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    switch (locations[i][3]) {
      case "home":
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: {
            url: ('../images/house.svg'),
            scaledSize: new google.maps.Size(45, 45)
          }
        });
        break;
      case "school":
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: {
            url: ('../images/school.svg'),
            scaledSize: new google.maps.Size(45, 45)
          }
        });
        break;
      case "work":
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: {
            url: ('../images/workplace.svg'),
            scaledSize: new google.maps.Size(45, 45)
          }
        });
    }

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
    born: {
      date: "06/04/1988",
      location: "Sint-Lambrechts-Woluwe"
    }
  }],
  welcomeMessage: "Two years ago, I choose a completely different career path and have been programming ever since. I took a" +
  "Java initiation course at the VDAB, passed the Oracle certificate and started a training at RealDolmen as a Junior Software Engineer." +
  "As an eager learner, I then choose to practice Android Development and received a certificate from Udacity and Google. As a front-end and java enthousiast," +
  "I am looking for a job where I can practice my knowledge and learn a lot of new techniques.",
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
    document.getElementById("github").append(bio.contacts[0].github);
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
      "on the subjects of Java EE, EJBs, JavaScript, Angular, git and XML processing",
      location: {
        title: "RealDolmen ICT consulting",
        longitude: "50.752922",
        latitude: "4.262945",
        type: "work"
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
        latitude: "4.405944",
        type: "work"
      }
    },
    {
      startDate: "2010",
      endDate: "2015",
      employer: "Botanique",
      title: "Internship Press and Communications",
      description: "At Botanique I had the chance to learn about the workings of the press and communications within a concert venue. I stood in for the guest lists," +
      "contacting radio stations to increase our ticket sale if needed, writing biographies for the website, etc. ",
      location: {
        title: "Botanique concert venue",
        longitude: "50.854709",
        latitude: "4.366243",
        type: "work"
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
        work.jobs[i].location.latitude,
        work.jobs[i].location.type
      ]);
    }
  }
};
work.display();

// //PROJECTS
var project = {
  projects: [
    {
      title: "BBC",
      date: "01-2016",
      description: "I sliced the homepage of the BBC",
      images: [
        "../images/bbc.png"
      ]
    }
  ],
  display: function () {
    for (var i = 0; i < project.projects.length; i++) {
      document.getElementById("title").append(project.projects[i].title);
      $(".project__date").get(i).append(project.projects[i].date);
      document.getElementById("project__description").append(project.projects[i].description);
      document.getElementById("project__image").src = project.projects[i].images[0];
    }
  }
};
project.display();

//SCHOOL DATA
var education = {
  schools: [
    {
      name: "Vrije Universiteit Brussel",
      location: {
        longitude: "50.821665",
        latitude: "4.394897",
        type: "school"
      },
      degree: "Master in Taal-en Letterkunde (cum laude)",
      majors: [
        "spanish", "dutch", "english", "philosophy"
      ],
      startDate: "2006",
      endDate: "2011",
      url: "https://www.vub.ac.be/" //todo
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
      document.getElementById("schoolName").append(education.schools[i].name);
      document.getElementById("degree").append(education.schools[i].degree);
      $(".skill__date--startDate").get(i).append(education.schools[i].startDate);
      $(".skill__date--endDate").get(i).append(education.schools[i].endDate);
      locations.push([education.schools[i].name,
        education.schools[i].location.longitude,
        education.schools[i].location.latitude,
        education.schools[i].location.type]);
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
