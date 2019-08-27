/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    for(let i=0; i<input.length; i++) {
      if(input[i].match(/[a-z]/i)) {
        result = input.slice(0,i);
        break;
      }
    }
    result = (result === '') ? 1 : result;
    result = eval(result);
    if(!result || result === '' || result === NaN || result === 'Infinity') {
      return undefined;
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    const units = ['km', 'mi', 'gal', 'l', 'kg', 'lbs'];
    for(let i=0; i<input.length; i++) {
      if(input[i].match(/[a-z]/i)) {
        result = input.slice(i);
        break;
      }
    }
    if(units.indexOf(result) === -1) {
      return undefined;
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit) {
      case 'km': 
        result = 'mi';
        break;
      case 'mi': 
        result = 'km';
        break;
      case 'gal': 
        result = 'l';
        break;
      case 'l': 
        result = 'gal';
        break;
      case 'lbs': 
        result = 'kg';
        break;
      case 'kg': 
        result = 'lbs';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit) {
      case 'km': 
        result = 'kilometers';
        break;
      case 'mi': 
        result = 'miles';
        break;
      case 'gal': 
        result = 'gallons';
        break;
      case 'l': 
        result = 'litres';
        break;
      case 'lbs': 
        result = 'pounds';
        break;
      case 'kg': 
        result = 'kilograms';
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit) {
      case 'km': 
        result = initNum / miToKm;;
        break;
      case 'mi': 
        result = initNum * miToKm;
        break;
      case 'gal': 
        result = initNum * galToL;
        break;
      case 'l': 
        result = initNum / galToL;
        break;
      case 'lbs': 
        result = initNum * lbsToKg;
        break;
      case 'kg': 
        result = initNum / lbsToKg;
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
