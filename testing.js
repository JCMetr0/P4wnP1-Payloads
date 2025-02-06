layout("gb"); //Define keybaord layout

function tsFast(){
  typingSpeed(0,0); //Nearly instant
}

function tsNatural(){
  typingSpeed(100,150); //More Natural typing speed
}

function launchAsAdmin() {
    press("GUI");
    delay(200);
    delay(500); 
    press("CTRL SHIFT ENTER"); //Run as admin
    delay(500);
    press("TAB"); press("TAB"); //Tabs to Yes, No check if admin run is password protected. Double tab since starts at no. WORKS WIN11
    press("ENTER");
  	delay(500);
  }

tsFast();
launchAsAdmin();