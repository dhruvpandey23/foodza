const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://dhruvpandey2320:UP9kOGK5N7Bm32x4@test-pro.zpf6dkz.mongodb.net/?retryWrites=true&w=majority&appName=test-pro';

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
      global.food_items =data;
      let foodCategory = await mongoose.connection.db.collection("foodCategory")
 
    } catch (error) {
      console.log('err: ', error);
    }
  };
  


module.exports = mongoDB;


// dhruvpandey2320
//UP9kOGK5N7Bm32x4

//mongodb+srv://dhruvpandey2320:UP9kOGK5N7Bm32x4@test-pro.zpf6dkz.mongodb.net/?retryWrites=true&w=majority&appName=test-pro
//mongodb+srv://dhruvpandey2320:<password>@test-pro.zpf6dkz.mongodb.net/
