layout("gb"); //Define keybaord layout

function tsFast(){//Fast Typing Speed
  typingSpeed(0,0);
}

function tsNatural(){//Natural Typing Speed
  typingSpeed(100,150);
}

function launchAsAdmin(program){
    press("GUI");
    delay(200);
    type(program)//Program what you want to run
    delay(1500); 
    press("CTRL SHIFT ENTER"); //Run as admin
    delay(750);
    press("TAB"); press("TAB"); //Tabs to Yes, No check if admin run is password protected. Double tab since starts at no. WORKS WIN11
    delay(500);
  	press("ENTER");
  	delay(500);
  }

function payload(){
  launchAsAdmin("cmd"); //launches program entered in brackets in admin mode.
}

//Calling Functions
tsFast(); 
payload();