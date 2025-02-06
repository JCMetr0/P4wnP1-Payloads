ps = "powershell.exe"
ps_wow64='%SystemRoot%\\SysWOW64\\WindowsPowerShell\\v1.0\\powershell.exe'

layout("us");
typingSpeed(0,0);

function startPS(){
    press("GUI r");
    delay(500);
    type("powershell\n")
}