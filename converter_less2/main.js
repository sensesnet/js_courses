
 var el = document.getElementById("output");
 var inSelect = document.getElementById("inselect");
 var inselValue = inSelect.options[inSelect.selectedIndex].text;
// var inselValue = "EUR";
// var outselValue = "USD";
 var outselect = document.getElementById("outselect");
 var outselValue = outSelected.options[outSelect.selectedIndex].text;

 var converterExchangeList = {};
 converterExchangeList['EUR'] = 1;
 converterExchangeList['USD'] = 1.2;

function moneyExchange(value) {  
    // const http = new XMLHttpRequest();
    // const url = 'https://api.exchangeratesapi.io/latest';
    // http.open("GET", url);
    // http.send();
    // console.log("Data:" + http.responseText);
    log.console(inselValue.toString);
    log.console(outselValue.toString);
    if(inselValue.toString == outselValue.toString){
    el.value=value;
    }
    if(inselValue.toString != outselValue.toString){
    el.value=value*converterExchangeList[outselValue];
    }
}