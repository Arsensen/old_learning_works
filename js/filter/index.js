function query(collection){
    this.collection = collection;
    this.collection1 = collection.slice(0);
    
    if (arguments.length <= 1){
      return collection;
    }
    let queryArgs = [].slice.call(arguments);
    queryArgs.shift();
    
    this.number = 'filtered';
    for(let elements of queryArgs){
      elements();
    }
    this.number = 'selected';
    for(let elements of queryArgs){
      elements();
    }
    return this.collection1;
  }
  
  
  function select(){
    let args = [].slice.call(arguments);
    return () => {
        if(this.number == 'selected'){
            let args = [].slice.call(arguments);
            let filteredArray = this.collection1;
            let newArray = [];
            for(let arrObjects of filteredArray){
                let timeObject = Object.assign({});
                for(let key of args){
                    if(arrObjects[key]){
                        timeObject[key] = arrObjects[key];
                    }
            }
            newArray.push(timeObject);    
            }
            this.collection1 = newArray;
      }
  }
  }
  
  function filterIn(property, values) {
    return () => {
      if(this.number == 'filtered'){
        let returningArray = [];
        for(let colObjects of this.collection1){
          for(let key in colObjects){
            if(key == property){
              if(values.includes(colObjects[key])){
                returningArray.push(colObjects);
              }
            }
          }
        }
      this.collection1 = returningArray;
     }
    }
  }

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
