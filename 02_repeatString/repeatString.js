const repeatString = function(string, num) {
    
    if (num == 0){
        return '';
    }else if(num == 1){
        return string;
    }else if(num < 0){
        return 'ERROR';
    }

    let tempString = string;
    for (let i=1; i<num; i++){
        string+=tempString;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;