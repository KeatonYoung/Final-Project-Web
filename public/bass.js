const largemouthBassRecords = [
    { state: "Alabama", weight: 16.8, angler: "Thomas Burgin", date: "1987-03-01" },
    { state: "Alaska", weight: 0, angler: "None", date: "none" }, // Alaska has no native largemouth bass
    { state: "Arizona", weight: 16.7, angler: "Randall White", date: "1997-04-22" },
    { state: "Arkansas", weight: 16.4, angler: "Paul Crowder", date: "1976-03-02" },
    { state: "California", weight: 22.25, angler: "George W. Perry", date: "1932-06-02" }, // Tied with Georgia
    { state: "Colorado", weight: 11.6, angler: "Jarrett Edwards", date: "1997-06-11" },
    { state: "Connecticut", weight: 12.75, angler: "Frank McDonough", date: "1961-08-01" },
    { state: "Delaware", weight: 11.1, angler: "Andre Klein", date: "1987-05-15" },
    { state: "Florida", weight: 17.27, angler: "Billy O’Berry", date: "1986-05-19" },
    { state: "Georgia", weight: 22.25, angler: "George W. Perry", date: "1932-06-02" },
    { state: "Hawaii", weight: 9.8, angler: "Roysen Toguchi", date: "1992-04-15" },
    { state: "Idaho", weight: 10.9, angler: "Nathaniel Peavey", date: "2006-05-04" },
    { state: "Illinois", weight: 13.1, angler: "S.P. Williamson", date: "1976-03-16" },
    { state: "Indiana", weight: 14.6, angler: "Mike McCallister", date: "1991-04-10" },
    { state: "Iowa", weight: 10.75, angler: "John Baldwin", date: "1984-07-03" },
    { state: "Kansas", weight: 11.8, angler: "David Perkins", date: "2008-04-25" },
    { state: "Kentucky", weight: 13.1, angler: "Dale Wilson", date: "1967-04-21" },
    { state: "Louisiana", weight: 15.97, angler: "Greg Wiggins", date: "1994-02-10" },
    { state: "Maine", weight: 11.75, angler: "Rodney Beaulieu", date: "1968-07-12" },
    { state: "Maryland", weight: 11.2, angler: "Barry Browning", date: "1985-06-07" },
    { state: "Massachusetts", weight: 15.8, angler: "Walter Bolline", date: "1975-09-03" },
    { state: "Michigan", weight: 11.94, angler: "Bill Whittle", date: "1934-08-22" },
    { state: "Minnesota", weight: 8.15, angler: "Tom Hart", date: "2005-07-14" },
    { state: "Mississippi", weight: 18.15, angler: "Anthony Denny", date: "1992-01-12" },
    { state: "Missouri", weight: 13.14, angler: "William McKinney", date: "1961-05-23" },
    { state: "Montana", weight: 8.8, angler: "Casey West", date: "1999-06-16" },
    { state: "Nebraska", weight: 10.8, angler: "Lyle Bauer", date: "1974-06-10" },
    { state: "Nevada", weight: 12.5, angler: "James Neufeld", date: "1980-07-22" },
    { state: "New Hampshire", weight: 10.8, angler: "Donald Direnzo", date: "1968-08-14" },
    { state: "New Jersey", weight: 10.14, angler: "Bob Eisele", date: "1980-05-06" },
    { state: "New Mexico", weight: 15.5, angler: "Bobbie Canas", date: "1998-04-12" },
    { state: "New York", weight: 11.4, angler: "Rodney Hoyle", date: "1987-08-13" },
    { state: "North Carolina", weight: 15.9, angler: "Raymond Eagle", date: "1991-04-18" },
    { state: "North Dakota", weight: 8.8, angler: "Jon Hagar", date: "2004-06-01" },
    { state: "Ohio", weight: 13.13, angler: "Roy Patrick", date: "1976-05-05" },
    { state: "Oklahoma", weight: 14.8, angler: "Jeff Walker", date: "2012-03-23" },
    { state: "Oregon", weight: 12.1, angler: "Greg Stiger", date: "1974-06-11" },
    { state: "Pennsylvania", weight: 11.3, angler: "Donald Mulholland", date: "1983-06-04" },
    { state: "Rhode Island", weight: 10.6, angler: "Jerry Lefebvre", date: "1980-07-03" },
    { state: "South Carolina", weight: 16.2, angler: "Perry Fulmer", date: "1949-02-28" },
    { state: "South Dakota", weight: 8.5, angler: "Bob Hattervig", date: "1997-05-17" },
    { state: "Tennessee", weight: 15.2, angler: "James Barnett", date: "1954-05-29" },
    { state: "Texas", weight: 18.18, angler: "Barry St. Clair", date: "1992-01-24" },
    { state: "Utah", weight: 10.2, angler: "Terry Killian", date: "1979-06-07" },
    { state: "Vermont", weight: 10.9, angler: "Willard Boudreau", date: "1988-09-16" },
    { state: "Virginia", weight: 16.3, angler: "Richard Tate", date: "1985-04-04" },
    { state: "Washington", weight: 12.5, angler: "Richard Walter", date: "1977-07-20" },
    { state: "West Virginia", weight: 12.28, angler: "Phillip Bradfield", date: "1994-05-15" },
    { state: "Wisconsin", weight: 11.3, angler: "Paul Roebuck", date: "1940-06-30" },
    { state: "Wyoming", weight: 8.5, angler: "Kevin Small", date: "1987-06-08" }
  ];
  
//   console.log(largemouthBassRecords);
  
  const smallmouthBassRecords = [
    { state: "Alabama", weight: 10.0, angler: "James Hatcher", date: "1950-03-10" },
    { state: "Alaska", weight: 0, angler: "None", date: "none" }, // Alaska has no native smallmouth bass
    { state: "Arizona", weight: 7.6, angler: "Leo Michel", date: "1977-04-10" },
    { state: "Arkansas", weight: 7.5, angler: "Jack Reece", date: "1975-05-15" },
    { state: "California", weight: 9.13, angler: "Mac Weakley", date: "2007-03-05" },
    { state: "Colorado", weight: 6.63, angler: "David Cunningham", date: "1993-05-18" },
    { state: "Connecticut", weight: 7.5, angler: "Tony Terzi", date: "1969-06-10" },
    { state: "Delaware", weight: 4.5, angler: "Rufus Brown", date: "1991-06-12" },
    { state: "Florida", weight: 7.83, angler: "Wallace Renegar", date: "1990-03-19" },
    { state: "Georgia", weight: 7.2, angler: "David Hubbard", date: "1980-05-23" },
    { state: "Hawaii", weight: 0, angler: "None", date: "none" }, // Hawaii has no native smallmouth bass
    { state: "Idaho", weight: 9.72, angler: "Lynnae Moody", date: "2006-04-27" },
    { state: "Illinois", weight: 7.3, angler: "Scott Tunney", date: "1986-09-15" },
    { state: "Indiana", weight: 7.69, angler: "David David", date: "1991-06-07" },
    { state: "Iowa", weight: 7.12, angler: "Jeff Jensen", date: "1984-09-02" },
    { state: "Kansas", weight: 6.88, angler: "Michael Lininger", date: "1979-05-03" },
    { state: "Kentucky", weight: 11.15, angler: "David Hayes", date: "1955-07-09" }, // World record
    { state: "Louisiana", weight: 7.68, angler: "James Torrance", date: "1985-05-16" },
    { state: "Maine", weight: 8.0, angler: "Herbert Locke", date: "1970-06-22" },
    { state: "Maryland", weight: 7.5, angler: "Norman Baer", date: "1973-08-05" },
    { state: "Massachusetts", weight: 8.2, angler: "Thomas Fasanello", date: "1996-09-01" },
    { state: "Michigan", weight: 9.33, angler: "Edward Heltzel", date: "1906-09-22" },
    { state: "Minnesota", weight: 8.0, angler: "Chris Manley", date: "1948-06-10" },
    { state: "Mississippi", weight: 7.15, angler: "Andrew Johnson", date: "1983-04-07" },
    { state: "Missouri", weight: 7.2, angler: "David Robinson", date: "1963-07-03" },
    { state: "Montana", weight: 7.51, angler: "Gene Mann", date: "2006-05-23" },
    { state: "Nebraska", weight: 7.2, angler: "Brian Marsh", date: "1997-06-10" },
    { state: "Nevada", weight: 5.5, angler: "Tom Sanders", date: "1995-08-01" },
    { state: "New Hampshire", weight: 6.83, angler: "David Holmes", date: "1983-07-12" },
    { state: "New Jersey", weight: 7.2, angler: "Daniel Aiken", date: "1992-09-15" },
    { state: "New Mexico", weight: 7.92, angler: "Robert Ward", date: "2004-04-09" },
    { state: "New York", weight: 8.25, angler: "Patrick Cifaldi", date: "1995-05-10" },
    { state: "North Carolina", weight: 10.0, angler: "Joseph Tarleton", date: "1955-06-17" },
    { state: "North Dakota", weight: 5.2, angler: "Ken Mallory", date: "1991-06-14" },
    { state: "Ohio", weight: 9.5, angler: "James Atkinson", date: "1993-04-25" },
    { state: "Oklahoma", weight: 8.3, angler: "Tim Carroll", date: "2012-05-30" },
    { state: "Oregon", weight: 8.1, angler: "Richard Fisher", date: "1973-06-17" },
    { state: "Pennsylvania", weight: 8.7, angler: "Rick Goldstein", date: "1983-08-03" },
    { state: "Rhode Island", weight: 5.5, angler: "William Crane", date: "1992-07-15" },
    { state: "South Carolina", weight: 8.8, angler: "James Ray", date: "1972-05-18" },
    { state: "South Dakota", weight: 7.7, angler: "Don Jacobson", date: "2005-06-03" },
    { state: "Tennessee", weight: 11.15, angler: "David Hayes", date: "1955-07-09" }, // World record tied with Kentucky
    { state: "Texas", weight: 7.93, angler: "Richard Wyatt", date: "1983-04-21" },
    { state: "Utah", weight: 7.5, angler: "John Peterson", date: "1986-07-15" },
    { state: "Vermont", weight: 6.81, angler: "Charles Hunt", date: "1990-06-11" },
    { state: "Virginia", weight: 8.75, angler: "Joseph Mays", date: "1993-08-07" },
    { state: "Washington", weight: 8.8, angler: "Stan Wright", date: "1966-06-19" },
    { state: "West Virginia", weight: 7.5, angler: "Mark Edwards", date: "1995-05-18" },
    { state: "Wisconsin", weight: 9.1, angler: "James Schackelton", date: "1950-09-21" },
    { state: "Wyoming", weight: 6.5, angler: "Bradley Reed", date: "1999-07-20" }
  ];
  
//   console.log(smallmouthBassRecords);
  
function bassRecord(){
    
    
    document.getElementById('output').innerHTML = "";
    var bass = document.getElementsByTagName('input');
    var fish = null;

    for (let i = 0; i < bass.length; i++) {
        if (bass[i].type === "radio" && bass[i].checked) {
            fish = bass[i].value; 
            break;
        }
    }


    const box = document.getElementById('state').value.toLowerCase();
    const output = document.getElementById('output');

    if (!fish) {
        output.innerHTML = "<h2>Please select Largemouth or Smallmouth</h2>";
        return false;
    }
    
    let match;

    if(fish == "largemouth"){
        match = largemouthBassRecords.find(largemouthBassRecords => largemouthBassRecords.state.toLowerCase() === box);
    }else if(fish == "smallmouth"){
        match = smallmouthBassRecords.find(smallmouthBassRecords => smallmouthBassRecords.state.toLowerCase() === box);
    }

    if(match){
        output.innerHTML = "<h2>"+ match.state +"(" + match.angler + ")</h2> <br>" +
                            "<p>" + match.weight + " pounds</p> <br> <p>"+ match.date +"</p>" ;
    }else{
        output.innerHTML = "<h2> No Matching FI</h2>"
    }

    return false;
}