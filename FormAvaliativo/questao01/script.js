function quest1 () {
    var x = 'R$ 10,50';
    var numStr = x.replace("R$ ", "");
    var numStr2 = numStr.replace(",", ".");
    console.log(typeof numStr2 + " = " + numStr2 );
    var num = parseFloat(numStr2);
    console.log(typeof num + " = " + num);
};
 quest1();

