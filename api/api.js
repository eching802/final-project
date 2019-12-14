//Eric Ching
let courses= {
Computer_Science:[
  {
    course:'CUS 1115',
    title:'COMPUTER PROG FUND I',
    credits: 3,
    seats: 5,
    type:'Lecture',
    days:'Wednesday 10:40-1:30 ',
    instructor:'Jun Wu',

  },

  {
    course:'CUS 1115',
    title:'COMPUTER PROG FUND I',
    credits: 3,
    seats: 0,
    type:'Lecture',
    days:'Monday Thursday 9:05-10:30',
    instructor:'Joan DeBello',

  },

  {
    course:'CUS 1116',
    title:'COMPUTER PROG FUND II',
    credits: 3,
    seats: 3,
    type:'Lecture',
    days:'Wednesday 1:50-4:40',
    instructor:'Jun Wu',
  },
  {
    course:'CUS 1116',
    title:'COMPUTER PROG FUND II',
    credits: 3,
    seats: 7,
    type:'Lecture',
    days:' Monday Thursday 9:05-10:30',
    instructor:' Anne Smith-Thompson',
  },
  {
    course:'CUS 1156',
    title:'SOFTWARE DESIGN METHODS',
    credits: 3,
    seats: 8,
    type:'Lecture',
    days:'Monday Thursday 10:40-12:05 ',
    instructor:'Bonnie MacKellar'

  },
  {
    course:'CUS 1156',
    title:'SOFTWARE DESIGN METHODS',
    credits: 3,
    seats: 15,
    type:'Lecture',
    days:' Tuesday Friday 1:50-3:15',
    instructor:' Syed Ahmad Chan Bukhari'

  },
  {
    course:'CUS 1166',
    title:'SOFTWARE ENGINEERING',
    credits: 3,
    seats: 4,
    type:'Lecture',
    days:'Wednesday 1:50-4:40',
    instructor:'Christoforos Christoforou',
  }],
  Computer_Security_System:[
  {
    course:'CSS 1005',
    title:'FUNDAMENTALS OF CYBER SECURITY',
    credits: 3,
    seats: 1,
    type:'Lecture',
    days:'Monday Thursday 12:15-1:40',
    instructor:'Juan Otero',
  },
  {
    course:'CSS 1006',
    title:'MGT OF INFORMATION SECURITY',
    credits: 3,
    seats: 0,
    type:'Lecture',
    days:'Wednesday 5:00-7:50',
    instructor:'Geoffrey Dick',

  },
  {
    course:'CSS 1008',
    title:'MGT OF INFORMATION SECURITY',
    credits: 3,
    seats: 4,
    type:'Lecture',
    days:'Friday 10:40-12:05',
    instructor:'Suzanna Schmeelk'

  },
  {
    course:'CSS 1032',
    title:'CYBER THREATS AND DETECTION',
    credits:3,
    seats: 7,
    type:'Lecture',
    days:'Tuesday Friday 10:40-12:05',
    instructor:'Erald Troja'

}],
Information_Technology:[
  {
    course:'IT 1011',
    title:'INFO TECHNOLOGY FOR BUSINESS',
    credits: 3,
    seats: 3,
    type:'Hybrid',
    days:'Monday Thursday 9:05-10:30',
    instructor:'Geoffry Dick'

  }
  ],
Networking:[
  {
    course:'NET 1011 ',
    title:'INTRODUCTION TO NETWORKS',
    credits: 3,
    seats: 0,
    type:'Online',
    days:'Wednesday 7:30-10:20',
    instructor:'Maxine Greenidge'

  },
  {
    course:'NET 1015 ',
    title:'ROUTING & SWITCHING ESSENTIALS',
    credits:3,
    seats: 8,
    type:'Hybrid-Classroom & Online',
    days:'Saturday 8:30-11:20',
    instructor:'John Rullan'
  },
  {
    course:'NET 1031',
    title:'WIRELESS NETWORKING',
    credits:3,
    seats: 11,
    type:'Lecture',
    days:'Saturday 12:30-15:20',
    instructor:'Feliz Fischman'
  }],
Healthcare_informatics:[
  {
    course:'HCI 1001',
    title:'INTRO HEALTHCARE INFORMATICS',
    credits:3,
    seats: 1,
    type:'Lecture',
    days:'Wednesday 10:40-1:30',
    instructor:'Syed Ahmad Chan Bukhari'


  },
  {
    course:'HCI 1021',
    title:'HEALTHCARE DATABASE MGT SYS',
    credits:3,
    seats: 5,
    type:'Lecture',
    days:'Wednesday 10:40-1:30',
    instructor:'Bonnie MacKellar'

  }],
Mathmatics:[
  {
    course:'MTH 1009',
    title:'CALCULUS I',
    credits: 3,
    seats: 5,
    type:'Lecture',
    days: 'Tuesday Friday 3:25-4:50',
    instructor:'Michael Vaisfeld'

  },
  {
    course:'MTH 1013',
    title:'PROBABILITY AND STATISTICS I',
    credits:3,
    seats: 13,
    type:'Hybrid-Classroom & Online',
    days:'Tuesday 9:05-10:30',
    instructor:'Frank Servas'

  },
  {
    course:'MTH 1010',
    title:'CALCULUS II',
    credits:3,
    seats:2,
    type:'Lecture',
    days:'Tuesday Friday ',
    instructor:'Gerald Latzman'

  },
  {
    course:'MTH 1017',
    title:'MATHMATICAL LOGIC',
    credits:3,
    seats: 4,
    type:'Hybrid-Classroom & Online',
    days:'Wednesday 5:00-6:25',
    instructor:'Ronald Fechter'

}]
};

let cusData = courses['Computer_Science'];
let cssData = courses['Computer_Security_System'];
let itData = courses['Information_Technology'];
let netData = courses['Networking'];
let hiData = courses['Healthcare_informatics'];
let mthData = courses['Mathmatics'];

function getCUS(){
  var table = document.getElementById("output");
    document.getElementById("output").innerHTML = ""
  for(i = 0, n= cusData.length; i<n; i++){
    var row = table.insertRow(0);
    var course = row.insertCell(0);
    var title = row.insertCell(1);
    var credits = row.insertCell(2);
    var seats = row.insertCell(3);
    var type = row.insertCell(4);
    var days = row.insertCell(5);
    var instructor = row.insertCell(6);
    course.innerHTML = cusData[i].course;
    title.innerHTML = cusData[i].title;
    credits.innerHTML = cusData[i].credits;
    seats.innerHTML = cusData[i].seats;
    type.innerHTML = cusData[i].type;
    days.innerHTML = cusData[i].days;
    instructor.innerHTML = cusData[i].instructor;
  }

};

function getCSS(){
    var table = document.getElementById("output");
    document.getElementById("output").innerHTML = ""
    for(i = 0, n= cssData.length; i<n; i++){
      var row = table.insertRow(0);
      var course = row.insertCell(0);
      var title = row.insertCell(1);
      var credits = row.insertCell(2);
      var seats = row.insertCell(3);
      var type = row.insertCell(4);
      var days = row.insertCell(5);
      var instructor = row.insertCell(6);
      course.innerHTML = cssData[i].course;
      title.innerHTML = cssData[i].title;
      credits.innerHTML = cssData[i].credits;
      seats.innerHTML = cssData[i].seats;
      type.innerHTML = cssData[i].type;
      days.innerHTML = cssData[i].days;
      instructor.innerHTML = cssData[i].instructor;
    }
};

function getIT(){
    var table = document.getElementById("output");
    document.getElementById("output").innerHTML = ""
    for(i = 0, n= itData.length; i<n; i++){
      var row = table.insertRow(0);
      var course = row.insertCell(0);
      var title = row.insertCell(1);
      var credits = row.insertCell(2);
      var seats = row.insertCell(3);
      var type = row.insertCell(4);
      var days = row.insertCell(5);
      var instructor = row.insertCell(6);
      course.innerHTML = itData[i].course;
      title.innerHTML = itData[i].title;
      credits.innerHTML = itData[i].credits;
      seats.innerHTML = itData[i].seats;
      type.innerHTML = itData[i].type;
      days.innerHTML = itData[i].days;
      instructor.innerHTML = itData[i].instructor;
    }
};

function getNET(){
    var table = document.getElementById("output");
    document.getElementById("output").innerHTML = ""
    for(i = 0, n= netData.length; i<n; i++){
      var row = table.insertRow(0);
      var course = row.insertCell(0);
      var title = row.insertCell(1);
      var credits = row.insertCell(2);
      var seats = row.insertCell(3);
      var type = row.insertCell(4);
      var days = row.insertCell(5);
      var instructor = row.insertCell(6);
      course.innerHTML = netData[i].course;
      title.innerHTML = netData[i].title;
      credits.innerHTML = netData[i].credits;
      seats.innerHTML = netData[i].seats;
      type.innerHTML = netData[i].type;
      days.innerHTML = netData[i].days;
      instructor.innerHTML = netData[i].instructor;
    }
};

function getHI(){
    var table = document.getElementById("output");
    document.getElementById("output").innerHTML = ""
    for(i = 0, n= hiData.length; i<n; i++){
      var row = table.insertRow(0);
      var course = row.insertCell(0);
      var title = row.insertCell(1);
      var credits = row.insertCell(2);
      var seats = row.insertCell(3);
      var type = row.insertCell(4);
      var days = row.insertCell(5);
      var instructor = row.insertCell(6);
      course.innerHTML = hiData[i].course;
      title.innerHTML = hiData[i].title;
      credits.innerHTML = hiData[i].credits;
      seats.innerHTML = hiData[i].seats;
      type.innerHTML = hiData[i].type;
      days.innerHTML = hiData[i].days;
      instructor.innerHTML = hiData[i].instructor;
    }
};

function getMTH(){
    var table = document.getElementById("output");
    document.getElementById("output").innerHTML = ""
    for(i = 0, n= mthData.length; i<n; i++){
      var row = table.insertRow(0);
      var course = row.insertCell(0);
      var title = row.insertCell(1);
      var credits = row.insertCell(2);
      var seats = row.insertCell(3);
      var type = row.insertCell(4);
      var days = row.insertCell(5);
      var instructor = row.insertCell(6);
      course.innerHTML = mthData[i].course;
      title.innerHTML = mthData[i].title;
      credits.innerHTML = mthData[i].credits;
      seats.innerHTML = mthData[i].seats;
      type.innerHTML = mthData[i].type;
      days.innerHTML = mthData[i].days;
      instructor.innerHTML = mthData[i].instructor;
    }
};

function getMon(){
document.getElementById("output").innerHTML = ""
searchDays("monday");
};
function getTue(){
document.getElementById("output").innerHTML = ""
searchDays("tuesday");
};
function getWed(){
document.getElementById("output").innerHTML = ""
searchDays("wednesday");
};
function getThurs(){
document.getElementById("output").innerHTML = ""
searchDays("thursday");
};
function getFri(){
document.getElementById("output").innerHTML = ""
searchDays("friday");
};
function getSat(){
document.getElementById("output").innerHTML = ""
searchDays("saturday");
};
function getOpen(){
document.getElementById("output").innerHTML = ""
searchSeats();
};
function getSearch(){
var query = document.getElementById("input").value.toLowerCase();
console.log(query);
document.getElementById("output").innerHTML = ""
  searchCourse(query);
  searchTitle(query);
  searchType(query);
  searchDays(query);
  searchInstructor(query);
};



//query searches

function searchCourse(query){
  var table = document.getElementById("output");
  for(i = 0, n= cusData.length; i<n; i++){
      if (cusData[i].course.toLowerCase().includes(query)) {
        var row = table.insertRow(0);
        var course = row.insertCell(0);
        var title = row.insertCell(1);
        var credits = row.insertCell(2);
        var seats = row.insertCell(3);
        var type = row.insertCell(4);
        var days = row.insertCell(5);
        var instructor = row.insertCell(6);
        course.innerHTML = cusData[i].course;
        title.innerHTML = cusData[i].title;
        credits.innerHTML = cusData[i].credits;
        seats.innerHTML = cusData[i].seats;
        type.innerHTML = cusData[i].type;
        days.innerHTML = cusData[i].days;
        instructor.innerHTML = cusData[i].instructor;
      }
    }
      for(i = 0, n= cssData.length; i<n; i++){
          if (cssData[i].course.toLowerCase().includes(query)) {
            var row = table.insertRow(0);
            var course = row.insertCell(0);
            var title = row.insertCell(1);
            var credits = row.insertCell(2);
            var seats = row.insertCell(3);
            var type = row.insertCell(4);
            var days = row.insertCell(5);
            var instructor = row.insertCell(6);
          course.innerHTML = cssData[i].course;
          title.innerHTML = cssData[i].title;
          credits.innerHTML = cssData[i].credits;
          seats.innerHTML = cssData[i].seats;
          type.innerHTML = cssData[i].type;
          days.innerHTML = cssData[i].days;
          instructor.innerHTML = cssData[i].instructor;
        }
      }
      for(i = 0, n= itData.length; i<n; i++){
        if(itData[i].course.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
            course.innerHTML = itData[i].course;
            title.innerHTML = itData[i].title;
            credits.innerHTML = itData[i].credits;
            seats.innerHTML = itData[i].seats;
            type.innerHTML = itData[i].type;
            days.innerHTML = itData[i].days;
            instructor.innerHTML = itData[i].instructor;
        }
    }
    for(i = 0, n= netData.length; i<n; i++){
      if(netData[i].course.toLowerCase().includes(query)){
        var row = table.insertRow(0);
        var course = row.insertCell(0);
        var title = row.insertCell(1);
        var credits = row.insertCell(2);
        var seats = row.insertCell(3);
        var type = row.insertCell(4);
        var days = row.insertCell(5);
        var instructor = row.insertCell(6);
      course.innerHTML = netData[i].course;
      title.innerHTML = netData[i].title;
      credits.innerHTML = netData[i].credits;
      seats.innerHTML = netData[i].seats;
      type.innerHTML = netData[i].type;
      days.innerHTML = netData[i].days;
      instructor.innerHTML = netData[i].instructor;
    }
  }
    for(i = 0, n= hiData.length; i<n; i++){
      if(hiData[i].course.toLowerCase().includes(query)){
        var row = table.insertRow(0);
        var course = row.insertCell(0);
        var title = row.insertCell(1);
        var credits = row.insertCell(2);
        var seats = row.insertCell(3);
        var type = row.insertCell(4);
        var days = row.insertCell(5);
        var instructor = row.insertCell(6);
        course.innerHTML = hiData[i].course;
        title.innerHTML = hiData[i].title;
        credits.innerHTML = hiData[i].credits;
        seats.innerHTML = hiData[i].seats;
        type.innerHTML = hiData[i].type;
        days.innerHTML = hiData[i].days;
        instructor.innerHTML = hiData[i].instructor;
    }
  }
  for(i = 0, n= mthData.length; i<n; i++){
    if(mthData[i].course.toLowerCase().includes(query)){
      var row = table.insertRow(0);
      var course = row.insertCell(0);
      var title = row.insertCell(1);
      var credits = row.insertCell(2);
      var seats = row.insertCell(3);
      var type = row.insertCell(4);
      var days = row.insertCell(5);
      var instructor = row.insertCell(6);
      course.innerHTML = mthData[i].course;
      title.innerHTML = mthData[i].title;
      credits.innerHTML = mthData[i].credits;
      seats.innerHTML = mthData[i].seats;
      type.innerHTML = mthData[i].type;
      days.innerHTML = mthData[i].days;
      instructor.innerHTML = mthData[i].instructor;
  }
}
};

function searchTitle(query){
    var table = document.getElementById("output");
    for(i = 0, n= cusData.length; i<n; i++){
        if (cusData[i].title.toLowerCase().includes(query)) {
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = cusData[i].course;
          title.innerHTML = cusData[i].title;
          credits.innerHTML = cusData[i].credits;
          seats.innerHTML = cusData[i].seats;
          type.innerHTML = cusData[i].type;
          days.innerHTML = cusData[i].days;
          instructor.innerHTML = cusData[i].instructor;
        }
      }
        for(i = 0, n= cssData.length; i<n; i++){
            if (cssData[i].title.toLowerCase().includes(query)) {
              var row = table.insertRow(0);
              var course = row.insertCell(0);
              var title = row.insertCell(1);
              var credits = row.insertCell(2);
              var seats = row.insertCell(3);
              var type = row.insertCell(4);
              var days = row.insertCell(5);
              var instructor = row.insertCell(6);
            course.innerHTML = cssData[i].course;
            title.innerHTML = cssData[i].title;
            credits.innerHTML = cssData[i].credits;
            seats.innerHTML = cssData[i].seats;
            type.innerHTML = cssData[i].type;
            days.innerHTML = cssData[i].days;
            instructor.innerHTML = cssData[i].instructor;
          }
        }
    for(i = 0, n= itData.length; i<n; i++){
          if(itData[i].title.toLowerCase().includes(query)){
            var row = table.insertRow(0);
            var course = row.insertCell(0);
            var title = row.insertCell(1);
            var credits = row.insertCell(2);
            var seats = row.insertCell(3);
            var type = row.insertCell(4);
            var days = row.insertCell(5);
            var instructor = row.insertCell(6);
              course.innerHTML = itData[i].course;
              title.innerHTML = itData[i].title;
              credits.innerHTML = itData[i].credits;
              seats.innerHTML = itData[i].seats;
              type.innerHTML = itData[i].type;
              days.innerHTML = itData[i].days;
              instructor.innerHTML = itData[i].instructor;
          }
      }
    for(i = 0, n= netData.length; i<n; i++){
        if(netData[i].title.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
        course.innerHTML = netData[i].course;
        title.innerHTML = netData[i].title;
        credits.innerHTML = netData[i].credits;
        seats.innerHTML = netData[i].seats;
        type.innerHTML = netData[i].type;
        days.innerHTML = netData[i].days;
        instructor.innerHTML = netData[i].instructor;
      }
    }
    for(i = 0, n= hiData.length; i<n; i++){
        if(hiData[i].title.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = hiData[i].course;
          title.innerHTML = hiData[i].title;
          credits.innerHTML = hiData[i].credits;
          seats.innerHTML = hiData[i].seats;
          type.innerHTML = hiData[i].type;
          days.innerHTML = hiData[i].days;
          instructor.innerHTML = hiData[i].instructor;
      }
    }
    for(i = 0, n= mthData.length; i<n; i++){
      if(mthData[i].title.toLowerCase().includes(query)){
        var row = table.insertRow(0);
        var course = row.insertCell(0);
        var title = row.insertCell(1);
        var credits = row.insertCell(2);
        var seats = row.insertCell(3);
        var type = row.insertCell(4);
        var days = row.insertCell(5);
        var instructor = row.insertCell(6);
        course.innerHTML = mthData[i].course;
        title.innerHTML = mthData[i].title;
        credits.innerHTML = mthData[i].credits;
        seats.innerHTML = mthData[i].seats;
        type.innerHTML = mthData[i].type;
        days.innerHTML = mthData[i].days;
        instructor.innerHTML = mthData[i].instructor;
    }
  }
};

function searchSeats(){
    var table = document.getElementById("output");
    for(i = 0, n= cusData.length; i<n; i++){
        if (cusData[i].seats > 0 ){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = cusData[i].course;
          title.innerHTML = cusData[i].title;
          credits.innerHTML = cusData[i].credits;
          seats.innerHTML = cusData[i].seats;
          type.innerHTML = cusData[i].type;
          days.innerHTML = cusData[i].days;
          instructor.innerHTML = cusData[i].instructor;
        }
      }
        for(i = 0, n= cssData.length; i<n; i++){
            if (cssData[i].seats > 0) {
              var row = table.insertRow(0);
              var course = row.insertCell(0);
              var title = row.insertCell(1);
              var credits = row.insertCell(2);
              var seats = row.insertCell(3);
              var type = row.insertCell(4);
              var days = row.insertCell(5);
              var instructor = row.insertCell(6);
            course.innerHTML = cssData[i].course;
            title.innerHTML = cssData[i].title;
            credits.innerHTML = cssData[i].credits;
            seats.innerHTML = cssData[i].seats;
            type.innerHTML = cssData[i].type;
            days.innerHTML = cssData[i].days;
            instructor.innerHTML = cssData[i].instructor;
          }
        }
    for(i = 0, n= itData.length; i<n; i++){
          if(itData[i].seats > 0 ){
            var row = table.insertRow(0);
            var course = row.insertCell(0);
            var title = row.insertCell(1);
            var credits = row.insertCell(2);
            var seats = row.insertCell(3);
            var type = row.insertCell(4);
            var days = row.insertCell(5);
            var instructor = row.insertCell(6);
              course.innerHTML = itData[i].course;
              title.innerHTML = itData[i].title;
              credits.innerHTML = itData[i].credits;
              seats.innerHTML = itData[i].seats;
              type.innerHTML = itData[i].type;
              days.innerHTML = itData[i].days;
              instructor.innerHTML = itData[i].instructor;
          }
      }
    for(i = 0, n= netData.length; i<n; i++){
        if(netData[i].seats > 0 ){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
        course.innerHTML = netData[i].course;
        title.innerHTML = netData[i].title;
        credits.innerHTML = netData[i].credits;
        seats.innerHTML = netData[i].seats;
        type.innerHTML = netData[i].type;
        days.innerHTML = netData[i].days;
        instructor.innerHTML = netData[i].instructor;
      }
    }
    for(i = 0, n= hiData.length; i<n; i++){
        if(hiData[i].seats > 0 ){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = hiData[i].course;
          title.innerHTML = hiData[i].title;
          credits.innerHTML = hiData[i].credits;
          seats.innerHTML = hiData[i].seats;
          type.innerHTML = hiData[i].type;
          days.innerHTML = hiData[i].days;
          instructor.innerHTML = hiData[i].instructor;
      }
    }
    for(i = 0, n= mthData.length; i<n; i++){
      if(mthData[i].seats > 0 ){
        var row = table.insertRow(0);
        var course = row.insertCell(0);
        var title = row.insertCell(1);
        var credits = row.insertCell(2);
        var seats = row.insertCell(3);
        var type = row.insertCell(4);
        var days = row.insertCell(5);
        var instructor = row.insertCell(6);
        course.innerHTML = mthData[i].course;
        title.innerHTML = mthData[i].title;
        credits.innerHTML = mthData[i].credits;
        seats.innerHTML = mthData[i].seats;
        type.innerHTML = mthData[i].type;
        days.innerHTML = mthData[i].days;
        instructor.innerHTML = mthData[i].instructor;
    }
  }
};

function searchType(query){
    var table = document.getElementById("output");
    for(i = 0, n= cusData.length; i<n; i++){
        if (cusData[i].type.toLowerCase().includes(query)) {
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = cusData[i].course;
          title.innerHTML = cusData[i].title;
          credits.innerHTML = cusData[i].credits;
          seats.innerHTML = cusData[i].seats;
          type.innerHTML = cusData[i].type;
          days.innerHTML = cusData[i].days;
          instructor.innerHTML = cusData[i].instructor;
        }
      }
        for(i = 0, n= cssData.length; i<n; i++){
            if (cssData[i].type.toLowerCase().includes(query)) {
              var row = table.insertRow(0);
              var course = row.insertCell(0);
              var title = row.insertCell(1);
              var credits = row.insertCell(2);
              var seats = row.insertCell(3);
              var type = row.insertCell(4);
              var days = row.insertCell(5);
              var instructor = row.insertCell(6);
            course.innerHTML = cssData[i].course;
            title.innerHTML = cssData[i].title;
            credits.innerHTML = cssData[i].credits;
            seats.innerHTML = cssData[i].seats;
            type.innerHTML = cssData[i].type;
            days.innerHTML = cssData[i].days;
            instructor.innerHTML = cssData[i].instructor;
          }
        }
    for(i = 0, n= itData.length; i<n; i++){
          if(itData[i].type.toLowerCase().includes(query)){
            var row = table.insertRow(0);
            var course = row.insertCell(0);
            var title = row.insertCell(1);
            var credits = row.insertCell(2);
            var seats = row.insertCell(3);
            var type = row.insertCell(4);
            var days = row.insertCell(5);
            var instructor = row.insertCell(6);
              course.innerHTML = itData[i].course;
              title.innerHTML = itData[i].title;
              credits.innerHTML = itData[i].credits;
              seats.innerHTML = itData[i].seats;
              type.innerHTML = itData[i].type;
              days.innerHTML = itData[i].days;
              instructor.innerHTML = itData[i].instructor;
          }
      }
    for(i = 0, n= netData.length; i<n; i++){
        if(netData[i].type.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
        course.innerHTML = netData[i].course;
        title.innerHTML = netData[i].title;
        credits.innerHTML = netData[i].credits;
        seats.innerHTML = netData[i].seats;
        type.innerHTML = netData[i].type;
        days.innerHTML = netData[i].days;
        instructor.innerHTML = netData[i].instructor;
      }
    }
    for(i = 0, n= hiData.length; i<n; i++){
        if(hiData[i].type.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = hiData[i].course;
          title.innerHTML = hiData[i].title;
          credits.innerHTML = hiData[i].credits;
          seats.innerHTML = hiData[i].seats;
          type.innerHTML = hiData[i].type;
          days.innerHTML = hiData[i].days;
          instructor.innerHTML = hiData[i].instructor;
      }
    }
    for(i = 0, n= mthData.length; i<n; i++){
      if(mthData[i].type.toLowerCase().includes(query)){
        var row = table.insertRow(0);
        var course = row.insertCell(0);
        var title = row.insertCell(1);
        var credits = row.insertCell(2);
        var seats = row.insertCell(3);
        var type = row.insertCell(4);
        var days = row.insertCell(5);
        var instructor = row.insertCell(6);
        course.innerHTML = mthData[i].course;
        title.innerHTML = mthData[i].title;
        credits.innerHTML = mthData[i].credits;
        seats.innerHTML = mthData[i].seats;
        type.innerHTML = mthData[i].type;
        days.innerHTML = mthData[i].days;
        instructor.innerHTML = mthData[i].instructor;
    }
  }
};

function searchDays(query){
    var table = document.getElementById("output");
    for(i = 0, n= cusData.length; i<n; i++){
        if (cusData[i].days.toLowerCase().includes(query)) {
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = cusData[i].course;
          title.innerHTML = cusData[i].title;
          credits.innerHTML = cusData[i].credits;
          seats.innerHTML = cusData[i].seats;
          type.innerHTML = cusData[i].type;
          days.innerHTML = cusData[i].days;
          instructor.innerHTML = cusData[i].instructor;
        }
      }
        for(i = 0, n= cssData.length; i<n; i++){
            if (cssData[i].days.toLowerCase().includes(query)) {
              var row = table.insertRow(0);
              var course = row.insertCell(0);
              var title = row.insertCell(1);
              var credits = row.insertCell(2);
              var seats = row.insertCell(3);
              var type = row.insertCell(4);
              var days = row.insertCell(5);
              var instructor = row.insertCell(6);
            course.innerHTML = cssData[i].course;
            title.innerHTML = cssData[i].title;
            credits.innerHTML = cssData[i].credits;
            seats.innerHTML = cssData[i].seats;
            type.innerHTML = cssData[i].type;
            days.innerHTML = cssData[i].days;
            instructor.innerHTML = cssData[i].instructor;
          }
        }
    for(i = 0, n= itData.length; i<n; i++){
          if(itData[i].days.toLowerCase().includes(query)){
            var row = table.insertRow(0);
            var course = row.insertCell(0);
            var title = row.insertCell(1);
            var credits = row.insertCell(2);
            var seats = row.insertCell(3);
            var type = row.insertCell(4);
            var days = row.insertCell(5);
            var instructor = row.insertCell(6);
              course.innerHTML = itData[i].course;
              title.innerHTML = itData[i].title;
              credits.innerHTML = itData[i].credits;
              seats.innerHTML = itData[i].seats;
              type.innerHTML = itData[i].type;
              days.innerHTML = itData[i].days;
              instructor.innerHTML = itData[i].instructor;
          }
      }
    for(i = 0, n= netData.length; i<n; i++){
        if(netData[i].days.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
        course.innerHTML = netData[i].course;
        title.innerHTML = netData[i].title;
        credits.innerHTML = netData[i].credits;
        seats.innerHTML = netData[i].seats;
        type.innerHTML = netData[i].type;
        days.innerHTML = netData[i].days;
        instructor.innerHTML = netData[i].instructor;
      }
    }
    for(i = 0, n= hiData.length; i<n; i++){
        if(hiData[i].days.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = hiData[i].course;
          title.innerHTML = hiData[i].title;
          credits.innerHTML = hiData[i].credits;
          seats.innerHTML = hiData[i].seats;
          type.innerHTML = hiData[i].type;
          days.innerHTML = hiData[i].days;
          instructor.innerHTML = hiData[i].instructor;
      }
    }
    for(i = 0, n= mthData.length; i<n; i++){
      if(mthData[i].days.toLowerCase().includes(query)){
        var row = table.insertRow(0);
        var course = row.insertCell(0);
        var title = row.insertCell(1);
        var credits = row.insertCell(2);
        var seats = row.insertCell(3);
        var type = row.insertCell(4);
        var days = row.insertCell(5);
        var instructor = row.insertCell(6);
        course.innerHTML = mthData[i].course;
        title.innerHTML = mthData[i].title;
        credits.innerHTML = mthData[i].credits;
        seats.innerHTML = mthData[i].seats;
        type.innerHTML = mthData[i].type;
        days.innerHTML = mthData[i].days;
        instructor.innerHTML = mthData[i].instructor;
    }
  }
};

function searchInstructor(query){
    var table = document.getElementById("output");
    for(i = 0, n= cusData.length; i<n; i++){
        if (cusData[i].instructor.toLowerCase().includes(query)) {
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = cusData[i].course;
          title.innerHTML = cusData[i].title;
          credits.innerHTML = cusData[i].credits;
          seats.innerHTML = cusData[i].seats;
          type.innerHTML = cusData[i].type;
          days.innerHTML = cusData[i].days;
          instructor.innerHTML = cusData[i].instructor;
        }
      }
        for(i = 0, n= cssData.length; i<n; i++){
            if (cssData[i].instructor.toLowerCase().includes(query)) {
              var row = table.insertRow(0);
              var course = row.insertCell(0);
              var title = row.insertCell(1);
              var credits = row.insertCell(2);
              var seats = row.insertCell(3);
              var type = row.insertCell(4);
              var days = row.insertCell(5);
              var instructor = row.insertCell(6);
            course.innerHTML = cssData[i].course;
            title.innerHTML = cssData[i].title;
            credits.innerHTML = cssData[i].credits;
            seats.innerHTML = cssData[i].seats;
            type.innerHTML = cssData[i].type;
            days.innerHTML = cssData[i].days;
            instructor.innerHTML = cssData[i].instructor;
          }
        }
    for(i = 0, n= itData.length; i<n; i++){
          if(itData[i].instructor.toLowerCase().includes(query)){
            var row = table.insertRow(0);
            var course = row.insertCell(0);
            var title = row.insertCell(1);
            var credits = row.insertCell(2);
            var seats = row.insertCell(3);
            var type = row.insertCell(4);
            var days = row.insertCell(5);
            var instructor = row.insertCell(6);
              course.innerHTML = itData[i].course;
              title.innerHTML = itData[i].title;
              credits.innerHTML = itData[i].credits;
              seats.innerHTML = itData[i].seats;
              type.innerHTML = itData[i].type;
              days.innerHTML = itData[i].days;
              instructor.innerHTML = itData[i].instructor;
          }
      }
    for(i = 0, n= netData.length; i<n; i++){
        if(netData[i].instructor.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
        course.innerHTML = netData[i].course;
        title.innerHTML = netData[i].title;
        credits.innerHTML = netData[i].credits;
        seats.innerHTML = netData[i].seats;
        type.innerHTML = netData[i].type;
        days.innerHTML = netData[i].days;
        instructor.innerHTML = netData[i].instructor;
      }
    }
    for(i = 0, n= hiData.length; i<n; i++){
        if(hiData[i].instructor.toLowerCase().includes(query)){
          var row = table.insertRow(0);
          var course = row.insertCell(0);
          var title = row.insertCell(1);
          var credits = row.insertCell(2);
          var seats = row.insertCell(3);
          var type = row.insertCell(4);
          var days = row.insertCell(5);
          var instructor = row.insertCell(6);
          course.innerHTML = hiData[i].course;
          title.innerHTML = hiData[i].title;
          credits.innerHTML = hiData[i].credits;
          seats.innerHTML = hiData[i].seats;
          type.innerHTML = hiData[i].type;
          days.innerHTML = hiData[i].days;
          instructor.innerHTML = hiData[i].instructor;
      }
    }
    for(i = 0, n= mthData.length; i<n; i++){
      if(mthData[i].instructor.toLowerCase().includes(query)){
        var row = table.insertRow(0);
        var course = row.insertCell(0);
        var title = row.insertCell(1);
        var credits = row.insertCell(2);
        var seats = row.insertCell(3);
        var type = row.insertCell(4);
        var days = row.insertCell(5);
        var instructor = row.insertCell(6);
        course.innerHTML = mthData[i].course;
        title.innerHTML = mthData[i].title;
        credits.innerHTML = mthData[i].credits;
        seats.innerHTML = mthData[i].seats;
        type.innerHTML = mthData[i].type;
        days.innerHTML = mthData[i].days;
        instructor.innerHTML = mthData[i].instructor;
    }
  }
};
