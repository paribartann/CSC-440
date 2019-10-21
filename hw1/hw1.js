const fs = require('fs');
const util = require('util');

var answer = [];
var splitSentence="";
var updateString=""
var updateArray=[]

const getData = (fileName, type) =>
  new Promise((resolve, reject) =>
    fs.readFile(fileName, type, (err, data) => {
      return err ? reject(err) : resolve(data);
    })
  );

getData('./input.txt', 'utf8')
  .then((data) => {
    splitSentence = data.split("\r\n");
    for(i in splitSentence) {
       answer.push(splitSentence[i]);
    }
      return answer;
  })
  .then (answer => 
    [camelCase(answer),
    snakeCase(answer),
    dashCase(answer),
    dotCase(answer),
    pathCase(answer),
    properCase(answer),
    lowerCase(answer),
    sentenceCase(answer),
    constantCase(answer),
    titleCase(answer),
    escapeHTML(answer),
    escapeJS(answer),
    escapeJSON(answer)
    ]
    )
  .catch(error => console.log(error));


camelCase = (answer) => {
    updateArray=[];
    console.log("This is in camel case: ");
    answer.forEach(element => {

        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g," ");
        updateString = updateString.split(' ').map(function(word, i) {
            return (word[0] || '')[i == 0 ? 'toLowerCase' : 'toUpperCase']() + word.substr(1).toLowerCase();
        }).join('');
            
        updateArray.push(updateString)   

    });
    console.log(updateArray);

}

snakeCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in snake case: ")
    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g, " ");
        updateArray.push( updateString.toLowerCase().split(' ').join('_'));
    });
    console.log(updateArray);
}

dashCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in dash case: ")
    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g, " ");
        updateArray.push( updateString.toLowerCase().split(' ').join('-'));
    });
    console.log(updateArray);
}

dotCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in dot case: ")
    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g, " ");
        updateArray.push( updateString.toLowerCase().split(' ').join('.'));
    });
    console.log(updateArray);
}

pathCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in path case: ")
    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g, " ");
        updateArray.push( updateString.toLowerCase().split(' ').join('/'));
    });
    console.log(updateArray);
}

properCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in proper case: ")
    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g, " ");
        updateArray.push(
            (updateString.charAt(0).toUpperCase()+ updateString.slice(1).toLowerCase()).split(' ').join(' '));  
    });
    console.log(updateArray);
}

lowerCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in lower case: ")
    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g, " ");
        updateArray.push( updateString.toLowerCase());
    });
    console.log(updateArray);
}

sentenceCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in sentence case: ")
    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g, " ");

        var updateString = updateString.split(' ').map(function(words,index){
			if (index == 0)
			return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
		else
			return words.toLowerCase()
        }).join(' ') 
        
        updateArray.push( updateString);
    });
    console.log(updateArray);
}

constantCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in constant case: ")

    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g, " ");

        updateArray.push( updateString.toUpperCase().split(' ').join('_'));
    });
    console.log(updateArray);
}

titleCase = (answer) => {
    updateArray=[];
    console.log("\nThis is in title case: ")

    answer.forEach(element => {
        
        updateString = element.replace(/[^\w\s]/g, "");
        updateString = updateString.replace(/\s+/g," ");
        var updateString = updateString.split(' ').map(function(words,index){
			return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
        }).join(' ')
        
        updateArray.push( updateString);
    });
    console.log(updateArray);

}


escapeHTML = (answer) => {
    updateArray=[];
    console.log("\nThis is escaping HTML: ");
    answer.forEach(element => {
        var updateString = element.replace(/[\u00A0-\u9999<>&\"/'.$%;:\s]/gim, function(words)
	    {
		switch(words)
		{
			case '&': 
				return ' &amp; ' 
			case '<':
				return ' $lt; ';
			case '>':
				return ' &gt; ';
			default: 
				return ' $#x' + words.charCodeAt(0).toString(16) + ' ';
		}
	})
	
    updateArray.push(updateString);
        
    });
    console.log(updateArray);
}

escapeJS = (answer) => {
    updateArray=[];
    console.log("\nThis is escaping JS: ")
    
    answer.forEach(element => {
        updateString = element.replace(/[\W]+/g, function(words)
        {
            return ' /x' + words.charCodeAt(0).toString(16) + ' ';
        });
        
        updateArray.push(updateString);
        
    });
    console.log(updateArray);
}

escapeJSON = (answer) => {
    updateArray=[];
    console.log("\nThis is escaping JSON: ")
    
    answer.forEach(element => {
        updateString = element.replace(/[\W]+/g, function(words)
        {
            return ' \\u00' + words.charCodeAt(0).toString(16) + ' ';
        });
        
        updateArray.push(updateString);
        
    });
    console.log(updateArray);

  
}





