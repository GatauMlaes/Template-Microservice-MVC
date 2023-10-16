

class Service {
  constructor(db){
    this.db = db 
  }
  
  async getAll(){
    try{
      return this.db
    }catch(error){
      throw error;
    }
  }
  
}


export default Service ;