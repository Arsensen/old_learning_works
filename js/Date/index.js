/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    
    var objects = {
        value: date,
    
    
        add (value, name){
            if (value < 0) {throw new TypeError;}
            if (name == 'years'){
                this.stringifyJSON();
                this.value.setFullYear(this.value.getFullYear() + value);
                this.stringifyJSON();
                return this;
            }
            if (name == 'months'){
                this.stringifyJSON();
                this.value.setMonth(this.value.getMonth() + value);
                this.stringifyJSON();
                return this}
            if (name == 'days'){
                this.stringifyJSON();
                this.value.setDate(this.value.getDate() + value);
                this.stringifyJSON();
                return this}
            if (name == 'hours'){
                this.stringifyJSON();
                this.value.setHours(this.value.getHours() + value); 
                this.stringifyJSON();
                return this}
            if (name == 'minutes'){
                this.stringifyJSON();
                this.value.setMinutes(this.value.getMinutes() + value); 
                this.stringifyJSON();
                return this}
            throw new TypeError;
            
            
        },
        
        subtract (value, name){
            if (value < 0) {throw new TypeError;}
            if (name == 'years'){
                this.stringifyJSON();
                this.value.setFullYear(this.value.getFullYear() - value);
                this.stringifyJSON();
                return this}
            if (name == 'months'){
                this.stringifyJSON();
                this.value.setMonth(this.value.getMonth() - value); 
                this.stringifyJSON();
                return this}
            if (name == 'days'){
                this.stringifyJSON();
                this.value.setDate(this.value.getDate() - value); 
                this.stringifyJSON();
                return this}
            if (name == 'hours'){
                this.stringifyJSON();
                this.value.setHours(this.value.getHours() - value); 
                this.stringifyJSON();
                return this}
            if (name == 'minutes'){
                this.stringifyJSON();
                this.value.setMinutes(this.value.getMinutes() - value);
                this.stringifyJSON();
                return this}
            throw new TypeError;
            
        },
        
        stringifyJSON (){
            if(typeof(this.value) != 'string'){
                let renderValue = this.value;
				this.value =  `${renderValue.getFullYear()}-${(renderValue.getMonth() > 8) ? renderValue.getMonth()+1 : '0' + (renderValue.getMonth() + 1)}-${(renderValue.getDate() > 9) ? renderValue.getDate() : '0' + renderValue.getDate() } ${(renderValue.getHours() > 9) ? renderValue.getHours() : '0' + renderValue.getHours()}:${(renderValue.getMinutes() > 9) ? renderValue.getMinutes() : '0' + renderValue.getMinutes()}`;
            }
            else {
                this.value = new Date(this.value)
            }
        }
    }
    return objects;
}