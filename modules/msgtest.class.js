module.exports = class MsgTest {

  constructor(){

    

    Message.count({},(err,count)=>{

      console.log("Number of messages in db", count);
      this.exampleSkipLimit();
    });

  }

  exampleSkipLimit(){
    
    Message.find(
      // query object
      {},
      // fields (the once we want + _id)
      // omit id to with minus before the field name
      'username -_id',
      // skip, limits etc
      {
        // sort descending by name (z to a)
        // then (if the same name) acending by age (0 to old)
        sort: 'fulldate',
        limit: 10 // return 10 items
      },
      // callback
      function(err,kittens){
        console.log(kittens);
      }
    );
  }
};