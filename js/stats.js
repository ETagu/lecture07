var DATA_SIZE = 8;

var inputElements = [];
var outputMean = null;


/**
 * initInputElements: データ入力用のテキスト入力集めた配列を作成
 */
var initInputElements = function(){
    var i = 0;
    while(i < DATA_SIZE){
        var id = "#number_" + (i + 1);
        // #input_1, #input_2 のような id を i から作る
        var elm = document.querySelector(id);
        inputElements.push(elm); // elm を inputElements に追加
        i = i + 1;
    }
};

/**
 * calcMean: 入力されたデータから平均値を計算して出力する
 */
var calcMean = function(){
    var index = 0;
    var sum = 0;
    var n = 0;

    while(index < inputElements.length){
        var input = inputElements[index];
        var number = Number(input.value);
        if(!Number.isNaN(number)){
            sum = sum + number;
            n = n + 1;
        }
        index = index + 1;
    }

    if(n > 0){
        outputMean.textContent = sum / n;
    }
    else{
        outputMean.textContent="数値を入力しないと算出できない";
    }
};

var calcMax = function(){
    var index = 0;
    var n = 0;
    var array1 = [];

    while(index < inputElements.length){
        var input = inputElements[index];
        var number = Number(input.value);
        if(!Number.isNaN(number)){
            array1[n] = number;
            n = n + 1;
        }
        index = index + 1;
    }

    if(n > 0){
        outputMax.textContent = Math.max.apply(null, array1); 
    }
    else{
        outputMax.textContent="数値を入力しないと算出できない";
    }
};

var calcStats = function(){
    calcMean();
    calcMax();
};

var initApp = function(){
    initInputElements();

    outputMean = document.querySelector("#mean");
    outputMax = document.querySelector("#max");


    var calcMeanButton = document.querySelector("#start");
    calcMeanButton.addEventListener("click", calcStats); 
};




initApp();
