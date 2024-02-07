function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openBox(evet, boxName) {
  var i, boxtabcontent, boxtablinks;
  boxtabcontent = document.getElementsByClassName("boxtabcontent");
  for (i = 0; i < boxtabcontent.length; i++) {
    boxtabcontent[i].style.display = "none";
  }
  boxtablinks = document.getElementsByClassName("boxtablinks");
  for (i = 0; i < boxtablinks.length; i++) {
    boxtablinks[i].className = boxtablinks[i].className.replace(" active", "");
  }
  document.getElementById(boxName).style.display = "block";
  evet.currentTarget.className += " active";
}
