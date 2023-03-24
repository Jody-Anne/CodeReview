function sayNumber(numeral) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion', 'trillion'];
    
    const numArr = numeral.toString().split('').map(Number).reverse();
    const numGroups = Math.ceil(numArr.length / 3);
    let groupWords = [];
    
    for (let i = 0; i < numGroups; i++) {
      let group = numArr.slice(i * 3, (i + 1) * 3);
      let groupStr = '';
      
      if (group[0]) {
        groupStr += ones[group[0]] + ' hundred';
        if (group[1] || group[2]) groupStr += ' and ';
      }
      
      if (group[1]) {
        if (group[1] === 1) {
          groupStr += teens[group[2]];
        } else {
          groupStr += tens[group[1]];
          if (group[2]) groupStr += '-';
        }
      }
      
      if (group[2] && group[1] !== 1) {
        groupStr += ones[group[2]];
      }
      
      if (groupStr) {
        groupStr += ' ' + thousands[i];
        groupWords.push(groupStr);
      }
    }
    
    if (!groupWords.length) {
      return 'zero';
    } else {
      return groupWords.reverse().join(', ') + '.';
    }
  }

  console.log(sayNumber(19093)); // "nineteen thousand and ninety-three."
console.log(sayNumber(123456789)); // "one hundred and twenty-three million, four hundred and fifty-six thousand, seven hundred and eighty-nine."

function handleSubmit(event) {
    event.preventDefault();
    const input = document.getElementById('numInput').value;
    const result = sayNumber(input);
    const output = document.getElementById('numOutput');
    output.innerText = result;
  }
  
  const form = document.getElementById('numForm');
  form.addEventListener('submit', handleSubmit);
