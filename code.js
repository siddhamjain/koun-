playSpeech("Hello everybody,Welcome to Kaun banega crorepeti...", "male", "English");
onEvent("button0", "click", function( ) {
  playSpeech("Click on the screen to go ahead", "female", "English");
  setScreen("screen2");
});
onEvent("imageIDFC", "click", function( ) {
  setScreen("screen17");
  setProperty("imagebank", "image", "data:image/png;base64,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");
  setProperty("bankname", "text", "IDFC First Bank");
});
onEvent("imageRBI", "click", function( ) {
  setScreen("screen17");
  setProperty("imagebank", "image", "https://allindiajobsalert.com/wp-content/uploads/2021/02/RBI.jpg");
  setProperty("bankname", "text", "Reserve bank of India");
});
onEvent("imageSBI", "click", function( ) {
  setScreen("screen17");
  setProperty("imagebank", "image", "https://www.kindpng.com/picc/m/83-837808_sbi-logo-state-bank-of-india-group-png.png");
  setProperty("bankname", "text", "State bank of India");
});
onEvent("screen2", "click", function( ) {
  setScreen("screen3");
  playSpeech("So let's start!!!", "female", "English");
});
onEvent("screen2", "click", function( ) {
  setScreen("screen3");
});
onEvent("Rama", "click", function( ) {
  playSpeech("Correct", "female", "English");
  setScreen("screen4");
});
onEvent("Ganesh", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Shiv", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Vishnu", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("SanFrancisco", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Sacramento", "click", function( ) {
  playSpeech("Correct", "female", "English");
  setScreen("screen5");
});
onEvent("Texas", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("NewJersey", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("SportsUtilityVehicles", "click", function( ) {
  playSpeech("Correct", "female", "English");
  setScreen("screen6");
});
onEvent("MarutiSuzuki", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("SeatCompanyCars", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("TataMotors", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("BhimraoAmedkar", "click", function( ) {
  playSpeech("Correct", "female", "English");
  setScreen("screen7");
});
onEvent("MahatmaGandhi", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("BhagatSingh", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("JawaharLalNehru", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Chess", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Hockey", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Cricket", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Football", "click", function( ) {
  playSpeech("correct", "female", "English");
  setScreen("screen8");
});
onEvent("Canoe", "click", function( ) {
  playSpeech("correct", "female", "English");
  setScreen("screen9");
});
onEvent("Carriage", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Galley", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Rocket", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("shiv", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("vishnu", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("ganesh", "click", function( ) {
  playSpeech("correct", "female", "English");
  setScreen("screen10");
});
onEvent("Jesus", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Vandemataram", "click", function( ) {
  playSpeech("correct", "female", "English");
  setScreen("screen11");
});
onEvent("Marchareal", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("JanaGanaMana", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Jerusalem", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("RavindraJadeja", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("ViratKohli", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("SachinTendulkar", "click", function( ) {
  playSpeech("correct", "female", "English");
  setScreen("screen12");
});
onEvent("BenStokes", "click", function( ) {
  setScreen("screen17");
  playSpeech("Wrong", "female", "English");
});
onEvent("Korea", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("India", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Japan", "click", function( ) {
  playSpeech("correct", "female", "English");
  setScreen("screen13");
});
onEvent("Vietnam", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Dollars", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Ruble", "click", function( ) {
  playSpeech("correct", "female", "English");
  setScreen("screen14");
});
onEvent("Rupees", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("Pounds", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("MoneyPlant", "click", function( ) {
  playSpeech("correct", "female", "English");
  setScreen("screen15");
});
onEvent("BanyanTree", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("MangoTree", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("NeemTree", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("JusticeRajanGogoi", "click", function( ) {
  setScreen("screen16");
  playSpeech("correct", "female", "English");
  setProperty("confetti1", "hidden", false);
  setProperty("confetti2", "hidden", false);
  setProperty("confetti3", "hidden", false);
  setProperty("confetti4", "hidden", false);
  setProperty("confetti5", "hidden", false);
  setProperty("confetti6", "hidden", false);
  setProperty("confetti7", "hidden", false);
  setProperty("confetti8", "hidden", false);
  setProperty("label1crore", "hidden", false);
});
onEvent("JusticeDipakMishra", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("JusticeTSThakur", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("JusticeRanganathMishra", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("BaqaJilani", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("CommandurRangachari", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("GogumalKishenchand", "click", function( ) {
  setProperty("confetti9", "hidden", false);
  setProperty("image31", "hidden", false);
  setProperty("image32", "hidden", false);
  setProperty("confetti10", "hidden", false);
  setProperty("confetti11", "hidden", false);
  setProperty("confetti12", "hidden", false);
  setProperty("label7Crore", "hidden", false);
  setScreen("screen17[a]");
  playSpeech("Awesome!You have won 5 crores...", "male", "English");
});
onEvent("KanwarRaiSingh", "click", function( ) {
  playSpeech("Wrong", "female", "English");
  setScreen("screen17");
});
onEvent("button66", "click", function( ) {
  setScreen("screen18");
});
onEvent("Home", "click", function( ) {
  setScreen("screen1");
  playSpeech("Thankyou!Your Payment has been succesfully done!!!", "female", "English");
});
onEvent("Homebutton", "click", function( ) {
	setScreen("screen1");
});
