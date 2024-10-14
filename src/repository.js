class Repository {
    constructor() {
      this.data = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
      ];
    }
  
    getAllItems() {
      return this.data;
    }
  
    getItemById(id) {
      return this.data.find((item) => item.id === id);
    }
  
    addItem(item) {
      this.data.push(item);
      return item;
    }
  
    removeItemById(id) {
      return this.data.splice(id, 1)[0]; 
    }
  }
  
  module.exports = Repository;