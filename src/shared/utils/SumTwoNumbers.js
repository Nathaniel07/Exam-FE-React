function SumTwoNumbers (num1 = 0, num2 = 0) {

    function roundNumber(number, decimals) { 
        let newNumber = new Number(number+'').toFixed(parseInt(decimals)); // For decimal numbers
        return parseFloat(newNumber); 
    }

    const sumTotal = Math.log2(2**num1 * 2**num2);
    console.log('The sum of '+num1+ ' and ' + num2 +' is:', roundNumber(sumTotal, 12)); // Answer
    // return roundNumber(sumTotal, 12);
   
}

export default SumTwoNumbers;
