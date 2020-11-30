// Телефонная книга
var phoneBook = [];

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var newArray = command.split(' ');
    var commandName = newArray[0];
    
	if (commandName === 'ADD') return addContact(newArray);
	if (commandName === 'REMOVE_PHONE') return removePhone(newArray);
    if (commandName === 'SHOW') return showContact();
    
};


function addContact(comadd){
	comadd.shift(0);
	var contactArray = comadd[1].split(',');
	for(let i = 0; i < phoneBook.length; i++){
		if(phoneBook[i][0] === comadd[0]){
			phoneBook[i].push(...contactArray);
			var arrayONcopy = phoneBook[i].slice();
			return phoneBook[i][0] + ': ' + arrayONcopy.splice(1).join(', ');	
		}
	}
	comadd.splice(1, 1, ...contactArray);
	phoneBook.push(comadd);
	var arrayONcopy = phoneBook[phoneBook.length - 1].slice();
	return phoneBook[phoneBook.length - 1][0] + ': ' + arrayONcopy.splice(1).join(', ');
}

function removePhone(comrem){
	var checking = false;
	for(let i = 0; i < phoneBook.length; i++){
		for(let j = 0; j < phoneBook[i].length; j++){
			if(comrem[1] == phoneBook[i][j]){
				phoneBook[i].splice(j, 1);
				checking = true;
			}
		}
	}
	return checking ? checking : false;
}



function showContact(comshow){
	// есть вариант с изменением основного массива, а есть без такового, я начну с изменением, ибо так проще
	var stringArray = [];
	phoneBook.sort();
	for(let i = 0; i < phoneBook.length; i++){
        var arrayONcopy = phoneBook[i].slice();
        if(phoneBook[i].length <= 1) continue;
		stringArray.push(phoneBook[i][0] + ': ' + arrayONcopy.splice(1).join(', '));
	}
	return stringArray;
}