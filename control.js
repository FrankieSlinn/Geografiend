let countries = ["Honduras","United Arab Emirates","Djibouti","Saint Barthelemy","Seychelles","Antigua and Barbuda","Vietnam","Hungary","Tajikistan","Belarus","Austria","Fiji","DR Congo","Réunion","Papua New Guinea","Serbia","Comoros","Israel","Switzerland","Isle of Man","Turkey","Iran","Germany","Togo","Holy See","Sierra Leone","Guyana","Andorra","Bhutan","Hong Kong","Laos","Dominica","Paraguay","Thailand","Bulgaria","Libya","Solomon Islands","Lebanon","United Kingdom","Nicaragua","Cayman Islands","France","Kyrgyzstan","Macao","El Salvador","Montenegro","Luxembourg","Bermuda","Saint Helena","Italy","Turkmenistan","Tanzania","Western Sahara","South Africa","Marshall Islands","Suriname","Singapore","Saint Pierre & Miquelon","Denmark","Northern Mariana Islands","Greenland","Cabo Verde","Finland","American Samoa","Congo","Micronesia","Slovakia","Myanmar","Norway","Maldives","Kenya","Saint Kitts & Nevis","South Korea","Oman","State of Palestine","Costa Rica","Colombia","Liberia","Montserrat","Ireland","Faeroe Islands","Central African Republic","New Zealand","Spain","Mauritania","Uganda","Argentina","Malta","Algeria","Sudan","Brunei ","Ukraine","Panama","Sint Maarten","Kuwait","Croatia","Moldova","Iraq","Guadeloupe","Georgia","Belize","Bahamas","Monaco","Afghanistan","Turks and Caicos","Saint Martin","Liechtenstein","Poland","Canada","Martinique","Morocco","Eritrea","Saudi Arabia","Falkland Islands","Uruguay","Iceland","San Marino","Gibraltar","Uzbekistan","United States","Peru","Angola","Bosnia and Herzegovina","Mongolia","Malaysia","Mozambique","Ghana","Vanuatu","British Virgin Islands","French Guiana","Yemen","Armenia","Jamaica","Nepal","Qatar","Albania","Barbados","Puerto Rico","New Caledonia","Venezuela","French Polynesia","Madagascar","Indonesia","Mayotte","Lithuania","Cameroon","Côte d'Ivoire","Caribbean Netherlands","North Korea","Australia","Namibia","Niger","Gambia","Taiwan","Botswana","Gabon","Pakistan","Sao Tome & Principe","Lesotho","Sri Lanka","Brazil","Burkina Faso","North Macedonia","Slovenia","Nigeria","Mali","Samoa","Guinea-Bissau","Romania","Malawi","Chile","Latvia","Kazakhstan","Zambia","Saint Lucia","Palau","Guatemala","Ecuador","Cook Islands","Syria","Channel Islands","Netherlands","Bahrain","Guam","Senegal","Cambodia","Bangladesh","Chad","Curaçao","Niue","Somalia","Anguilla","Zimbabwe","Russia","China","Equatorial Guinea","Trinidad and Tobago","Tokelau","Estonia","Timor-Leste","Guinea","Rwanda","Mexico","Mauritius","Japan","Benin","Cyprus","Kiribati","Burundi","Tunisia","Tuvalu","Bolivia","Eswatini","Belgium","Ethiopia","Haiti","Cuba","Grenada","Wallis & Futuna","South Sudan","St. Vincent & Grenadines","Philippines","Dominican Republic","Nauru","Czech Republic (Czechia)","Aruba","Tonga","U.S. Virgin Islands","Greece","Egypt","Jordan","Portugal","Azerbaijan","Sweden","India"]

let countryCodes = [
  'AD',
  'AE',
  'AF',
  'AG',
  'AI',
  'AL',
  'AM',
  'AO',
  'AR',
  'AS',
  'AT',
  'AU',
  'AW',
  'AZ',
  'BA',
  'BB',
  'BD',
  'BE',
  'BF',
  'BG',
  'BH',
  'BI',
  'BJ',
  'BL',
  'BM',
  'BN',
  'BO',
  'BQ',
  'BR',
  'BS',
  'BT',
  'BW',
  'BY',
  'BZ',
  'CA',
  'CD',
  'CF',
  'CG',
  'CH',
  'CI',
  'CK',
  'CL',
  'CM',
  'CN',
  'CO',
  'CR',
  'CU',
  'CV',
  'CW',
  'CY',
  'CZ',
  'DE',
  'DJ',
  'DK',
  'DM',
  'DO',
  'DZ',
  'EC',
  'EE',
  'EG',
  'ER',
  'ES',
  'ET',
  'FI',
  'FJ',
  'FM',
  'FR',
  'GA',
  'GB',
  'GD',
  'GE',
  'GF',
  'GH',
  'GL',
  'GM',
  'GN',
  'GP',
  'GQ',
  'GR',
  'GT',
  'GW',
  'GY',
  'HK',
  'HN',
  'HR',
  'HT',
  'HU',
  'ID',
  'IE',
  'IL',
  'IN',
  'IQ',
  'IR',
  'IS',
  'IT',
  'JM',
  'JO',
  'JP',
  'KE',
  'KG',
  'KH',
  'KI',
  'KM',
  'KN',
  'KP',
  'KR',
  'KW',
  'KY',
  'KZ',
  'LA',
  'LB',
  'LC',
  'LI',
  'LK',
  'LR',
  'LS',
  'LT',
  'LU',
  'LV',
  'LY',
  'MA',
  'MC',
  'MD',
  'ME',
  'MF',
  'MG',
  'MK',
  'ML',
  'MM',
  'MN',
  'MO',
  'MP',
  'MQ',
  'MR',
  'MS',
  'MT',
  'MU',
  'MV',
  'MW',
  'MX',
  'MY',
  'MZ',
  'NA',
  'NC',
  'NE',
  'NG',
  'NI',
  'NL',
  'NO',
  'NP',
  'NZ',
  'OM',
  'PA',
  'PE',
  'PG',
  'PH',
  'PK',
  'PL',
  'PM',
  'PR',
  'PS',
  'PT',
  'PY',
  'QA',
  'RE',
  'RO',
  'RS',
  'RU',
  'RW',
  'SA',
  'SB',
  'SC',
  'SD',
  'SE',
  'SG',
  'SI',
  'SK',
  'SL',
  'SM',
  'SN',
  'SO',
  'SR',
  'SS',
  'ST',
  'SV',
  'SX',
  'SY',
  'SZ',
  'TC',
  'TD',
  'TG',
  'TH',
  'TJ',
  'TL',
  'TM',
  'TN',
  'TO',
  'TR',
  'TT',
  'TV',
  'TW',
  'TZ',
  'UA',
  'UG',
  'US',
  'UY',
  'UZ',
  'VC',
  'VE',
  'VG',
  'VN',
  'VU',
  'WF',
  'WS',
  'YE',
  'YT',
  'ZA',
  'ZM',
  'ZW'
    
];
console.log("countryCodesLength", countryCodes.length);
let continentMap = 
{AF:'Asia',
AL:'Europe',
DZ:'Africa',
AS:'Oceania',
AD:'Europe',
AO:'Africa',
AG:'North America',
AZ:'Europe',
AR:'South America',
AU:'Oceania',
AT:'Europe',
BS:'North America',
BH:'Asia',
BD:'Asia',
AM:'Asia',
BB:'North America',
BE:'Europe',
BM:'North America',
BT:'Asia',
BO:'South America',
BA:'Europe',
BW:'Africa',
BR:'South America',
BZ:'North America',
SB:'Oceania',
VG:'North America',
BN:'Asia',
BG:'Europe',
MM:'Asia',
BI:'Africa',
BY:'Europe',
KH:'Asia',
CM:'Africa',
CA:'North America',
CV:'Africa',
KY:'North America',
CF:'Africa',
LK:'Asia',
TD:'Africa',
CL:'South America',
CN:'Asia',
TW:'Asia',
CO:'South America',
KM:'Africa',
YT:'Africa',
CG:'Africa',
CD:'Africa',
CK:'Oceania',
CR:'North America',
HR:'Europe',
CU:'North America',
CY:'Asia',
CZ:'Europe',
BJ:'Africa',
DK:'Europe',
DM:'North America',
DO:'North America',
EC:'South America',
SV:'North America',
GQ:'Africa',
ET:'Africa',
ER:'Africa',
EE:'Europe',
FJ:'Oceania',
FI:'Europe',
FR:'Europe',
GF:'South America',
PF:'Oceania',
DJ:'Africa',
GA:'Africa',
GE:'Asia',
GM:'Africa',
DE:'Europe',
GH:'Africa',
KI:'Oceania',
GR:'Europe',
GL:'North America',
GD:'North America',
GP:'North America',
GU:'Oceania',
GT:'North America',
GN:'Africa',
GY:'South America',
HT:'North America',
VA:'Europe',
HN:'North America',
HK: 'Asia',
HU:'Europe',
IS:'Europe',
IN:'Asia',
ID:'Asia',
IR:'Asia',
IQ:'Asia',
IE:'Europe',
IL:'Asia',
IT:'Europe',
CI:'Africa',
JM:'North America',
JP:'Asia',
KZ:'Asia',
JO:'Asia',
KE:'Africa',
KP:'Asia',
KR:'Asia',
XK:'Europe',
KW:'Asia',
KG:'Asia',
LA:'Asia',
LB:'Asia',
LS:'Africa',
LV:'Europe',
LR:'Africa',
LY:'Africa',
LI:'Europe',
LT:'Europe',
LU:'Europe',
MO:'Asia',
MG:'Africa',
MW:'Africa',
MY:'Asia',
MV:'Asia',
ML:'Africa',
MT:'Europe',
MQ:'North America',
MR:'Africa',
MU:'Africa',
MX:'North America',
MC:'Europe',
MN:'Asia',
MD:'Europe',
ME:'Europe',
MS:'North America',
MA:'Africa',
MZ:'Africa',
OM:'Asia',
NA:'Africa',
NP:'Asia',
NL:'Europe',
CW:'North America',
AW:'North America',
SX:'North America',
BQ:'North America',
NC:'Oceania',
VU:'Oceania',
NZ:'Oceania',
NI:'North America',
NE:'Africa',
NG:'Africa',
NO:'Europe',
MP:'Oceania',
FM:'Oceania',
PW:'Oceania',
PK:'Asia',
PS:'Asia',
PA:'North America',
PG:'Oceania',
PY:'South America',
PE:'South America',
PH:'Asia',
PL:'Europe',
PT:'Europe',
GW:'Africa',
TL:'Asia',
PR:'North America',
QA:'Asia',
RE:'Africa',
RO:'Europe',
RU:'Asia',
RW:'Africa',
BL:'North America',
KN:'North America',
AI:'North America',
LC:'North America',
MF:'North America',
PM:'North America',
VC:'North America',
SM:'Europe',
ST:'Africa',
SA:'Asia',
SN:'Africa',
RS:'Europe',
SC:'Africa',
SL:'Africa',
SG:'Asia',
SK:'Europe',
VN:'Asia',
SI:'Europe',
SO:'Africa',
ZA:'Africa',
ZW:'Africa',
ES:'Europe',
SS:'Africa',
SD:'Africa',
SR:'South America',
SZ:'Africa',
SE:'Europe',
CH:'Europe',
SY:'Asia',
TJ:'Asia',
TH:'Asia',
TG:'Africa',
TO:'Oceania',
TT:'North America',
AE: 'Asia',
TN:'Africa',
TR:'Europe',
TM:'Asia',
TC:'North America',
TV:'Oceania',
UG:'Africa',
UA:'Europe',
MK:'Europe',
EG:'Africa',
GB:'Europe',
TZ:'Africa',
US:'North America',
VI:'North America',
BF:'Africa',
UY:'South America',
UZ: 'Asia',
VE:'South America',
WF:'Oceania',
WS:'Oceania',
YE: 'Asia',
ZM:'Africa'

};
let countryNameMap = {AD: 'Andorra',
AE:'United Arab Emirates',
AF:'Afghanistan',
AG:'Antigua and Barbuda',
AI:'Anguilla',
AL:'Albania',
AM:'Armenia',
AO:'Angola',
AR:'Argentina',
AS:'American Samoa',
AT:'Austria',
AU:'Australia',
AW:'Aruba',
AZ:'Azerbaijan',
BA:'Bosnia and Herzegovina',
BB:'Barbados',
BD:'Bangladesh',
BE:'Belgium',
BF:'Burkina Faso',
BG:'Bulgaria',
BH:'Bahrain',
BI:'Burundi',
BJ:'Benin',
BL:'Saint Barthelemy',
BM:'Bermuda',
BN:'Brunei',
BO:'Bolivia',
BQ:'Bonaire',
BR:'Brazil',
BS:'Bahamas',
BT:'Bhutan',
BW:'Botswana',
BY:'Belarus',
BZ:'Belize',
CA:'Canada',
CD:'Democratic Republic of Congo',
CF:'Central African Republic',
CG:'Congo',
CH:'Switzerland',
CI:'Ivory Coast',
CK:'Cook Islands',
CL:'Chile',
CM:'Cameroon',
CN:'China',
CO:'Colombia',
CR:'Costa Rica',
CU:'Cuba',
CV:'Cabo Verde',
CW:'Curacao',
CY:'Cyprus',
CZ:'Czechia',
DE:'Germany',
DJ:'Djibouti',
DK:'Denmark',
DM:'Dominica',
DO:'Dominican Republic',
DZ:'Algeria',
EC:'Ecuador',
EE:'Estonia',
EG:'Egypt',
ER:'Eritrea',
ES:'Spain',
ET:'Ethiopia',
FI:'Finland',
FJ:'Fiji',
FM:'Micronesia',
FR:'France',
GA:'Gabon',
GB:'United Kingdom',
GD:'Grenada',
GE:'Georgia',
GF:'French Guiana',
GH:'Ghana',
GL:'Greenland',
GM:'Gambia',
GN:'Guinea',
GP:'Guadeloupe',
GQ:'Equatorial Guinea',
GR:'Greece',
GT:'Guatemala',
GW:'Guinea Bissau',
GY:'Guyana',
HK:'Hong Kong',
HN:'Honduras',
HR:'Croatia',
HT:'Haiti',
HU:'Hungary',
ID:'Indonesia',
IE:'Ireland',
IL:'Israel',
IN:'India',
IQ:'Iraq',
IR:'Iran',
IS:'Iceland',
IT:'Italy',
JM:'Jamaica',
JO:'Jordan',
JP:'Japan',
KE:'Kenya',
KG:'Kyrgyzstan',
KH:'Cambodia',
KI:'Kiribati',
KM:'Comoros',
KN:'Saint Kitts and Nevis',
KP:'North Korea',
KR:'South Korea',
KW:'Kuwait',
KY:'Cayman Islands',
KZ:'Kazakhstan',
LA:'Laos',
LB:'Lebanon',
LC:'Saint Lucia',
LI:'Liechtenstein',
LK:'Sri Lanka',
LR:'Liberia',
LS:'Lesotho',
LT:'Lithuania',
LU:'Luxembourg',
LV:'Latvia',
LY:'Libya',
MA:'Morocco',
MC:'Monaco',
MD:'Moldova',
ME:'Montenegro',
MF:'Saint Martin',
MG:'Madagascar',
MK:'North Macedonia',
ML:'Mali',
MM:'Myanmar',
MN:'Mongolia',
MO:'Macau',
MP:'Northern Mariana Islands',
MQ:'Martinique',
MR:'Mauritania',
MS:'Montserrat',
MT:'Malta',
MU:'Mauritius',
MV:'Maldives',
MW:'Malawi',
MX:'Mexico',
MY:'Malaysia',
MZ:'Mozambique',
NA:'Namibia',
NC:'New Caledonia',
NE:'Niger',
NG:'Nigeria',
NI:'Nicaragua',
NL:'Netherlands',
NO:'Norway',
NP:'Nepal',
NZ:'New Zealand',
OM:'Oman',
PA:'Panama',
PE:'Peru',
PG:'Papua New Guinea',
PH:'Philippines',
PK:'Pakistan',
PL:'Poland',
PM:'Saint Pierre and Miquelon',
PR:'Puerto Rico',
PS:'Palestine',
PT:'Portugal',
PY:'Paraguay',
QA:'Qatar',
RE:'Reunion',
RO:'Romania',
RS:'Serbia',
RU:'Russia',
RW:'Rwanda',
SA:'Saudi Arabia',
SB:'Solomon Islands',
SC:'Seychelles',
SD:'Sudan',
SE:'Sweden',
SG:'Singapore',
SI:'Slovenia',
SK:'Slovakia',
SL:'Sierra Leone',
SM:'San Marino',
SN:'Senegal',
SO:'Somalia',
SR:'Suriname',
SS:'South Sudan',
ST:'Sao Tome and Principe',
SV:'El Salvador',
SX:'Saint Martin',
SY:'Syria',
SZ:'Eswatini',
TC:'Turks and Caicos',
TD:'Chad',
TG:'Togo',
TH:'Thailand',
TJ:'Tajikistan',
TL:'East Timor',
TM:'Turkmenistan',
TN:'Tunisia',
TO:'Tonga',
TR:'Turkey',
TT:'Trinidad and Tobago',
TV:'Tuvalu',
TW:'Taiwan',
TZ:'Tanzania',
UA:'Ukraine',
UG:'Uganda',
US:'United States',
UY:'Uruguay',
UZ:'Uzbekistan',
VC:'Saint Vincent and the Grenadines',
VE:'Venezuela',
VG:'British Virgin Islands',
VN:'Vietnam',
VU:'Vanuatu',
WF:'Wallis and Futuna',
WS:'Samoa',
YE:'Yemen',
YT:'Mayotte',
ZA:'South Africa',
ZM:'Zambia',
ZW:'Zimbabwe'
};
let countryCode = "";
let countryObject = {}; 
//let country = [];
let countryData = "";
let responseText  = "";

//capitalCity works
let capitalCity = "";
let population  = 0;
////let populationDec  =0;
let answer = "";
let countryPredict = [];
let buttonClasses = [".First", ".Second", ".Third", ".Fourth", ".Fifth"];
let labelContent = [
  "firstLabel",
  "secondLabel",
  "thirdLabel",
  "fourthLabel",
  "fifthLabel",
];
let countryNameMapLow = "";
//let finalScore = "";
let turns = 0;
let score = 0;
let finalScores = ["100", "80", "60", "40", "20","0"];
//let feedback = [".feedback1", ".feedback2", ".feedback3", ".feedback4", ".feedback5"];

let populationDec = 0; 

//set scores in beginning
let averageScore = 0;
//temp holding place
let longScores = [];
let gamesPlayed = JSON.parse(localStorage.getItem("longGameScores")) != null
? JSON.parse(localStorage.getItem("longGameScores")).length
: 0;
let gameScore = 0;
//let gameScores = [];
//let statsScore = 0;
let longGames =[];
let longGameScores = [];
console.log("JSON.parse(localStorage.getItem(gameScore))==null)", localStorage.setItem("gameScore", JSON.stringify(0))) ;

if(JSON.parse(localStorage.getItem("gameScore"))==null){
  localStorage.setItem("gameScore", JSON.stringify(0));
}


  
console.log("json.pase localstorage is not null", JSON.parse(localStorage.getItem("longGameScores")) != null)
  if(JSON.parse(localStorage.getItem("longGameScores"))!=null){averageScore = JSON.parse(localStorage.getItem("longGameScores")).length != 0?
  JSON.parse(localStorage.getItem("longGameScores")).reduce((numa, numb) => numa + numb, 0) / JSON.parse(localStorage.getItem("longGameScores")).length
    .toFixed(0):0;}
    console.log("averageScore", averageScore);
    console.log("longGameScores", JSON.parse(localStorage.getItem("longGameScores")));
    window.localStorage.setItem("averageScore", JSON.stringify(averageScore));
console.log("JSON.parse(localStorage.getItem(longgamescores)!=null", JSON.parse(localStorage.getItem("longGameScores")) != null);
    /*JSON.parse(localStorage.getItem("longGameScores")) != null?localStorage.setItem(("gameScore"), JSON.parse(localStorage.getItem("longGameScores"))[
      JSON.parse(localStorage.getItem("longGameScores")).length - 1]): localStorage.setItem("gameScore", JSON.stringify(0));
*/
      console.log("gameScore in beginning", JSON.parse(localStorage.getItem("gameScore")));

  console.log("countryname map length",countryNameMap.length)


  //Score for last game
  /*
    statsScore = JSON.parse(localStorage.getItem("longGameScores")) != null
    ?JSON.parse(localStorage.getItem("longGameScores"))[
      JSON.parse(localStorage.getItem("longGameScores")).length - 1
      
    ]:0;*/
  
  

//let longGames =
 // JSON.parse(localStorage.getItem("longGameScores")) != null
 //   ? JSON.parse(localStorage.getItem("longGameScores")).length
 //   : 0;
//console.log("longgames", longGames);
console.log("longGameScores in beginning", JSON.parse(localStorage.getItem("longGameScores")));
//console.log("gameScore in beginning",(JSON.parse(localStorage.getItem("gameScore"))!=null?JSON.parse(localStorage.getItem("gameScore")):0));

//start New Game after load
document.addEventListener("load", startNewGame());

//Math.round(JSON.parse(localStorage.getItem("population")) * 100) / 100;
//console.log("population", population);
console.log("longgamescores", JSON.parse(localStorage.getItem("longGameScores")));
//console.log("populationDec",populationDec)
document.querySelector(".scores").innerHTML = `GeograFiend Game Score: <strong>${JSON.parse(localStorage.getItem("gameScore"))}%</strong><br><br>Games Played: <strong>${gamesPlayed}</strong><br><br>Average Score: <strong>${averageScore.toFixed(0)}%</strong>`

//Popups

//Show Popup Content - Stats
document.querySelector(".stats").addEventListener("click", function () {
  console.log("stats clicked");
  document.querySelector(".helpContent").style["display"] = "none";
  document.querySelector(".overallContainer").style["display"] = "none";
  document.querySelector(".overallContainer").style["z-index"] = "-1";
  document.querySelector(".statsContent").style["display"] = "inline-block";
});

//Close Button - Stats
document
  .querySelector(".closeButtonStats")
  .addEventListener("click", function () {
    document.querySelector(".overallContainer").style["display"] = "inline";
    document.querySelector(".overallContainer").style["z-index"] = "1";
    document.querySelector(".statsContent").style["display"] = "none";
    //document.querySelector(".scores").innerHTML = `GeograFiend Game Score: ${gameScore}%<br><br>Games Played:${JSON.parse(localStorage.getItem("longGameScores")).length}<br><br>`
  });
console.log("longGameScores in beginning", JSON.parse(localStorage.getItem("longGameScores")));
//console.log("gameScore", JSON.parse(localStorage.getItem("gameScore")));

//Show Popup Content - Help
document.querySelector(".help").addEventListener("click", function () {
  console.log("help clicked");
  document.querySelector(".statsContent").style["display"] = "none";
  document.querySelector(".overallContainer").style["display"] = "none";
  document.querySelector(".overallContainer").style["z-index"] = "-1";
  document.querySelector(".helpContent").style["display"] = "inline-block";
});

//Close Button - Help
document
  .querySelector(".closeButtonHelp")
  .addEventListener("click", function () {
    document.querySelector(".overallContainer").style["display"] = "inline";
    document.querySelector(".overallContainer").style["z-index"] = "1";
    document.querySelector(".helpContent").style["display"] = "none";
  });

  //get question1 to always show
document.querySelector(".question1").style["display"] = "inline-block";
//generate country / countrycode
function getCountry(){
let randomNum = randomNumber();
localStorage.setItem(("randomNum"), JSON.stringify(randomNum));
//console.log("GB Name", countryNameMap.GB)
console.log("randomNumber", randomNum);
let rightCountryCode = countryCodes[JSON.parse(localStorage.getItem("randomNum"))];

console.log("rightCountryCode", rightCountryCode);
console.log("typeofrightcountrycode", typeof(rightCountryCode));
console.log("typeof countryname map", typeof(countryNameMap));
country =  Object.values(countryNameMap)[randomNum];
console.log("country", country);
localStorage.setItem(("country"), JSON.stringify(country));
console.log("COUNTRY",JSON.parse(localStorage.getItem("country")));
}
//document.querySelectorAll(".option").style["display"] = "none";


popAPI();

///API Call for Population

function popAPI(){
const data = null;

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
   // console.log("capital",document.getElementById("GBR").value);
	}


  var doc;
  if(window.ActiveXObject)  
  {  
      doc = new ActiveXObject('Microsoft.XMLDOM'); // For IE6, IE5  
      doc.async = 'false';  
      doc.loadXML(this.responseText);  
  }  
  else  
  {  
      var parser = new DOMParser();  
      doc = parser.parseFromString(this.responseText, 'text/xml'); // For Firefox, Chrome etc  
  }  
  var y = doc.getElementsByTagName("wb:value")[0].childNodes[0].nodeValue; 
  console.log("population", y);
  //localStorage.setItem(("population"), JSON.stringify(ParseInt(y)));
  localStorage.setItem(("population"), JSON.stringify(y));
 // console.log("localstoragepopulation", JSON.parse(localStorage.getItem("population")));
 let roundPop = Math.round((JSON.parse(localStorage.getItem("population")))/1000000 * 10) / 10;
 console.log("roundPop", roundPop)


  //let populationDec  =Math.round((JSON.parse(localStorage.getItem("population")))/1000000 * 10) / 10;
console.log("populationDec",populationDec)
//populating question one and two flag here to keep value
console.log("country in pop api", JSON.parse(localStorage.getItem("country")))
if(roundPop ==0){
  document.querySelector(".question1").innerHTML = `<strong>Clue #1:</strong> This country has a population of under 100'000`}
  else{populationDec = roundPop;
    document.querySelector(".question1").innerHTML = `<strong>Clue #1:</strong> This country has a population of ${populationDec} million`};
turns = 0;

document.querySelector(".answer").style[".display"] = "inline-block";


});


xhr.open("GET", `https://api.worldbank.org/v2/country/${countryCodes[JSON.parse(localStorage.getItem("randomNum"))]}/indicator/SP.POP.TOTL?date=2021`);
//xhr.open("GET", "http://api.worldbank.org/v2/country/gb");
//xhr.setRequestHeader("X-RapidAPI-Key", "9befc1d2a6msh43bf070da1abde6p1d37c1jsn616d294fe695");
console.log("localstoragepopulation", JSON.parse(localStorage.getItem("population")));

xhr.send(data);

//end popAPI
};

//API Call for capital city
function capitalAPI(){
const capInfo = null;

const cap = new XMLHttpRequest();


cap.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}


///get Data for capital kcity
  var doc;
if(window.ActiveXObject)  
{  
    doc = new ActiveXObject('Microsoft.XMLDOM'); // For IE6, IE5  
    doc.async = 'false';  
    doc.loadXML(this.responseText);  
}  
else  
{  
    var parser = new DOMParser();  
    doc = parser.parseFromString(this.responseText, 'text/xml'); // For Firefox, Chrome etc  
}  
  
var x = doc.getElementsByTagName("wb:capitalCity")[0].childNodes[0].nodeValue; 

capitalCity= String(x);
localStorage.setItem(("capitalCity"), JSON.stringify(capitalCity));
console.log("capitalCity in function", capitalCity)
//var y = x.getElementsByTagName("wb:capitalCity")[0]
//console.log("name", doc.getElementsByTagName("wb:name")[0].value);
console.log("capital before function", x);

  

document.querySelector(".question4").innerHTML = `<strong>Clue #4:</strong> The country's capital city is ${capitalCity}`;
console.log("question4 innerhtml", document.querySelector(".question4").value);

});

cap.open("GET", `https://api.worldbank.org/v2/country/${countryCodes[JSON.parse(localStorage.getItem("randomNum"))]}`);

//http://api.worldbank.org/v2/country/${countryCodes[JSON.parse(localStorage.getItem("randomNum"))]}/indicator/SP.POP.TOTL?date=2021`);
cap.send(capInfo);

 console.log("capitalCity", JSON.parse(localStorage.getItem("capitalCity")));
}
//populate question 1
console.log("population", population);
console.log("localstoragepopulation", JSON.parse(localStorage.getItem("population")));

//ensure 1st clue shows in beginning
document.querySelector(".question1").style["display"] = "inline-block";

//randomSelector to get country
function randomNumber() {
  return Math.abs(Math.floor(Math.random() * countryCodes.length));
}


//Predictive Text
  /**** PREDICTIVE TEXT *****/

typeAnswer();

function typeAnswer(){
  console.log("typeanswer running")
  for(let i =0; i<5;i++){
    //let answeri = answers[turns];
    let answerQuery = document.querySelector(".answer");
   // console.log("answeri", answeri)
   // console.log("answer1value", document.querySelector(".answer1").value);

  document.querySelector(".answer").addEventListener("keyup", function (e) {
   //console.log("answeri", document.querySelector(".answer"));
    //e.preventDefault();
    //document.querySelector(".selection").innerHTML = "";
    document.querySelector(".spanBut").style["display"] = "inline-block";
    document.querySelector(".spanBut").style["visibility"] = "visible";
    document.querySelector(".spanBut").hidden = false;
    //console.log("spanButi", spanBut);
   let countryNameMapLow = String(countryNameMap).toLowerCase();

    let keysJoin = String(answerQuery.value).toLowerCase();
   console.log("keysjoin", keysJoin);
    //flagsCopy used to ensure all answer o
    let countryi = "";
    //console.log("county name i before function", Object.values(countryNameMap)[1])
    //options stay. To avoid duplicates a country is removed from array "flags" after displayed.
    for (i = 0; i < countryCodes.length; i++) {
      //console.log("county name i during function", String(Object.values(countryNameMap)[i].slice(0, keysJoin.length)).toLowerCase());
      //console.log("keysjoin to lowercase", String(keysJoin).toLowerCase());
      if (
        String(keysJoin).toLowerCase() ===
          String(Object.values(countryNameMap)[i].slice(0, keysJoin.length)).toLowerCase())
       {
       // console.log("match");
        if (!countryPredict.includes(Object.values(countryNameMap)[i])) {
          //console.log("county name i", Object.values(countryNameMap)[i])
          countryPredict.push(Object.values(countryNameMap)[i]);
        }
      }
    }
   // console.log("countryPredict after first push", countryPredict);
    let filterFunct = function (a) {
      if (
        keysJoin.toLowerCase() ==
        String(a.slice(0, keysJoin.length)).toLowerCase()
      ) {
        return a;
      }
    };
    countryPredict = countryPredict.filter((item) => filterFunct(item));

   // console.log("countryPredict", countryPredict);

    defineButtonText();
    //checkonly alphabetical characters
    
    function alphabet(inputtxt) {
      if (inputtxt.match(letterOnly)) {
        return true;
      }
    }
  });
  }};
    submitValue();

    function defineButtonText() {
      for (i = 0; i < buttonClasses.length; i++) {
        document.querySelector(buttonClasses[i]).style["visibility"] = "visible";
        //console.log("countrypredict", countryPredict[i]);
        //console.log("buttonClasses i in defineButtonText", buttonClasses[i])
        if (countryPredict[i]) {
          document.querySelector(
            buttonClasses[i]
          ).innerHTML = `${countryPredict[i]}`;
         
          //document.querySelector(".First").style["display"] = "inline-block";
          document.querySelector(buttonClasses[i]).style["display"] =
            "inline-block";
            //console.log("buttonClasses i in defineButtonText.innerhtml", document.querySelector(buttonClasses[1]).innerHTML)
        } else {
          document.querySelector(buttonClasses[i]).style["display"] = "none";
        }
      }
    }

    function submitValue() {
      console.log("submitvalue running");
      document.querySelector(".spanBut").style["display"] = "none";
      //document.querySelector(".spanBut").style["display"] = "inline-block";
      document.querySelector(".spanBut").style["visibility"] = "hidden";
     // console.log("turns in submit value after increase", turns);
      //console.log("submitvalue started")
      for (let i = 0; i < buttonClasses.length; i++) {
        document
          .querySelector(buttonClasses[i])
          .addEventListener("click", function () {
            //console.log("submitting value", document.querySelector(buttonClasses[i]))
    
            buttonClicked = i + 1;
    
            getInputValue();
          });
      }
    }
    

    function getInputValue() {
     
     // console.log("turns", turns);
      console.log("getinputval started");
      console.log("buttonClicked in beg input value is", buttonClicked);
    
      inputValue = document.getElementById(
        labelContent[buttonClicked - 1]
      ).innerHTML;
      localStorage.setItem("inputValue", JSON.stringify(inputValue))
      document.querySelector(buttonClasses[buttonClicked - 1]).checked = false;
      document.getElementById(labelContent[buttonClicked - 1]).innerHTML == "";
   
      inputValLow = inputValue.toLowerCase();
      inputValue = "";

      whichFeedbackScreen();
    
    
      countryPredict = [];
   
    }
    function whichFeedbackScreen() {
      console.log("turns", turns);
      console.log("inputvallow", inputValLow);
      buttonClicked = 0;
      
   
      if (inputValLow == String(country.toLowerCase())) {
        localStorage.setItem("isCorrect", JSON.stringify(true));
        localStorage.setItem("isIncorrect", JSON.stringify(false));
        //correct();
        console.log("correct");

      } else {
        localStorage.setItem("isIncorrect", JSON.stringify(true));
        localStorage.setItem("isCorrect", JSON.stringify(false));
        // incorrect();
        console.log("incorrect");
       
      }
      inputValLow = "";
      showResult();

    }
    console.log("score", JSON.parse(localStorage.getItem("score")));
function getScore(){
  if (JSON.parse(localStorage.getItem("score"))==1){
    finalScore = "100%";
  }
}

function updateScores(){
  longGames.push(JSON.parse(localStorage.getItem("gameScore")));
  console.log("gameScore after set", longGames);
 console.log("longScores when being calculated(pushed)", longGames);
console.log("longGameScores = []", JSON.parse(localStorage.getItem("longGameScores")) == []);

longGameScores =
JSON.parse(localStorage.getItem("longGameScores")) == null
  ? longGames
  : JSON.parse(localStorage.getItem("longGameScores")).concat(JSON.parse(localStorage.getItem("gameScore")));
console.log("longGameScores after concat", longGameScores);
longGames = []; 
console.log("longGameScores after concat", longGameScores);

localStorage.setItem("longGameScores", JSON.stringify(longGameScores));
//define averageScore after change
averageScore = JSON.parse(localStorage.getItem("longGameScores")).length != 0?
JSON.parse(localStorage.getItem("longGameScores")).reduce((numa, numb) => numa + numb, 0) / JSON.parse(localStorage.getItem("longGameScores")).length.toFixed(0):0;
//amend stats message after score change
document.querySelector(".scores").innerHTML = `GeograFiend Game Score: <strong>${JSON.parse(localStorage.getItem("gameScore"))}%</strong><br><br>Games Played: <strong>${JSON.parse(localStorage.getItem("longGameScores")).length}</strong><br><br>Average Score: <strong>${averageScore.toFixed(0)}%</strong>`
}
//consfuncole.log("score", score)

//after question answered, feedback, go to next question
    function showResult(){
      document.querySelector(".answer").value = "";
      for (i = 0; i < buttonClasses.length; i++) {
       // document.getElementById(labelContent[i]).style["visibility"] = "visible";
        //if (countryPredict[i]) {
          document.getElementById(
            labelContent[i]
          ).innerHTML = "";
      console.log("show result turns", turns);}
      countryPredict = [];
      document.querySelector(".option").style["display"] = "none";
      
      document.querySelector(buttonClasses).style["display"] = "none";
      document.querySelector(".spanBut").style["display"] = "none";
      document.querySelector(".answer").style["display"] = "none";
      console.log("inscorrect", JSON.parse(localStorage.getItem("isCorrect")));
      if(JSON.parse(localStorage.getItem("isCorrect")) ==true){
        document.querySelector(".feedback").style["display"] ="inline-block";
        document.querySelector(".startGame").style["display"] ="inline-block";
        document.querySelector(".spanBut").style["display"] ="none";
        document.querySelector(".option").style["display"] ="none";
        //let scoreNew = JSON.parse(localStorage.getItem("score"))+=1;
        //localStorage.setItem("score", JSON.stringify(scoreNew));
        document.querySelector(".feedback").innerHTML = `<strong>Congratulations, ${localStorage.getItem("country")} is <span class = "right">correct</span> <br><br></strong>  Your game score is <strong>${finalScores[turns]}%</strong>`;
        document.querySelector(".right").style["color"] ="green";
       
        //getscores define gameScore for latest game
        finalScores[turns]!=null?
        localStorage.setItem("gameScore", JSON.stringify(Number(finalScores[turns]))):localStorage.setItem("gameScore", JSON.stringify(0));
        console.log("gameScore", JSON.parse(localStorage.getItem("gameScore")));
        //ensure stats reflects latest scores
        updateScores();
        //temp arrray to hold game34);


 

        
        //document.querySelector(".feedback").style["background-color"] ="#333";
       // document.querySelector(".feedback").style["color"] ="#fff";

       
       
      }
      else if(JSON.parse(localStorage.getItem("isIncorrect")) ==true) {
        turns+=1;
        document.querySelector(".spanBut").style["display"] = "none";
      
        //console.log("score in showResult function", JSON.parse(localStorage.getItem("score")));
        if (turns <=3){
          console.log("turns false answer", turns);
  
        //  console.log("feedback i ", document.querySelector(`${feedback[i]}`).value)
        document.querySelector(".feedback").innerHTML = `Unlucky, ${JSON.parse(localStorage.getItem("inputValue"))} is <span class = "incorrect">incorrect</span> - Here's another clue:`
        document.querySelector(".incorrect").style["color"] = "red";
        document.querySelector(".feedback").style["display"] = "inline-block";
      };
      
      
      if(turns ==5){
        document.querySelector(".feedback").innerHTML = `<strong>Unlucky that isn't correct, the correct answer is ${JSON.parse(localStorage.getItem("country"))} - The Game Score is 0%</strong>`
        //set gamescore after change
        localStorage.setItem("gameScore", JSON.stringify(0));
        updateScores();
        document.querySelector(".startGame").style["display"] = "inline-block";
        document.querySelector(".answer").style["display"] = "none";
      }

      console.log("show result turns after increase", turns);
      
     
    }
      //show 2nd clue
    if (turns==1){
      console.log("turns 1 running");
      document.querySelector(".question2").innerHTML = `<strong>Clue #2:</strong> Here is the flag of this country`;
      document.querySelector(".question2").style["display"] = "inline-block";
      document.querySelector(".showFlag").style["display"] = "inline-block";
      if(JSON.parse(localStorage.getItem("isCorrect")) !=true){
      document.querySelector(".answer").style["display"] = "inline-block"}else{
        document.querySelector(".answer").style["display"] = "none"
      };
      
      //document.querySelector(".spanBut2").innerHTML = `${spanBut}`;
      document.querySelector(".spanBut").style["display"] = "none";
      document.querySelector(".option").style["display"] = "none";
      displayFlag();
    }
    //show 3rd clue
    if (turns==2){
      let countCode = countryCodes[JSON.parse(localStorage.getItem("randomNum"))];
      console.log("rightCountryCode", countCode);
      //rightCountryCodeVar = countCode.replace("'", "");
      //console.log(typeof(rightCountryCodeVar));
     console.log("continentMap.countCode", continentMap.countCode);
      console.log()
      document.querySelector(".question3").innerHTML = `<strong>Clue #3:</strong> The country is fully or mostly located in this continent: ${continentMap[countCode]}`;
      document.querySelector(".question3").style["display"] = "inline-block";
     
      if(JSON.parse(localStorage.getItem("isCorrect")) !=true){
        document.querySelector(".answer").style["display"] = "inline-block"}else{
          document.querySelector(".answer").style["display"] = "none"
        };
      document.querySelector(".spanBut").style["display"] = "none";
     
      typeAnswer();
    }

    if (turns==3){
      console.log('3 turns');
     
      document.querySelector(".question4").style['display']= "inline-block";
      if(JSON.parse(localStorage.getItem("isCorrect")) !=true){
        document.querySelector(".answer").style["display"] = "inline-block"};
     
      typeAnswer();
    }
    if(turns >=4){
      console.log("turns if tunrs ", turns);
      
      document.querySelector(".question5").innerHTML = `<strong>Clue #5:</strong> The country's name begins with the letter <strong>${JSON.parse(localStorage.getItem("country"))[0]}</strong>`
      document.querySelector(".question5").style["display"] = "inline-block";
      if(JSON.parse(localStorage.getItem("isCorrect")) !=true){
        document.querySelector(".answer").style["display"] = "inline-block"};
      document.querySelector(".spanBut").style["display"] = "none";
      typeAnswer();
    }
    if(turns ==5){
      document.querySelector(".answer").style["display"] = "none";
  }
}

    function displayFlag(){
      console.log("country", JSON.parse(localStorage.getItem("country")))
      flagWithUnderscore = JSON.parse(localStorage.getItem("country")).replaceAll(
        " ",
        "_"
      );
      console.log("flagwunderscore", flagWithUnderscore);
      let pngName =
      "<img src = Images/" +
      flagWithUnderscore +
      '.png  style="width:400px;height:250px;">';
      document.querySelector(".showFlag").innerHTML = pngName;
      document.querySelector(".showFlag").style["display"] = "inline-block";
      //document.querySelector(".answer").style["display"] = "inline-block";
      typeAnswer();
    }
//start new game
 var startNew = document.querySelector(".startGame");
    startNew.addEventListener("click", startNewGame);
    function startNewGame(){
      turns = 0;
      document.querySelector(".question1").style["display"] = "inline-block";
      randomNumber();
      getCountry();
      popAPI();
      capitalAPI();
      console.log("startNewGame Started")
      //window.location.reload();
      localStorage.setItem("isCorrect", JSON.stringify(false));
      localStorage.setItem("isIncorrect", JSON.stringify(false));
      localStorage.setItem("score", JSON.stringify(0));

      document.querySelector(".instruction").style["display"] = "inline-block";
      document.querySelector(".startGame").style["display"] = "none";
      document.querySelector(".showFlag").style["display"] = "none";
      document.querySelectorAll(".question").forEach((item)=>item.style["display"] = "none");
      //document.querySelector(".question2").style["display"] = "none";
      document.querySelectorAll(".feedback").forEach((item)=>item.style["display"] = "none");
      document.querySelector(".question1").style["display"] = "inline-block";
      document.querySelector(".answer").style["display"] = "inline-block";
      //document.querySelector(".answer").style["display"] = "none";
   

    };
    
    

    //Check if function correct

    
    