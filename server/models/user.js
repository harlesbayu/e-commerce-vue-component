const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { generatePassword } = require('../helpers')

const userSchema = new Schema({
  name:   {
    type: String,
    required: [true, 'name is required']
  },
  gender: {
    type: String,
    required: [true, 'gender is required']
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: [true, 'phone number is required']
  },
  address : {
    type: String,
    required: [true, 'address is required']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  avatar: {
    type: String,
  },
  listTransaction : [{ type: Schema.Types.ObjectId, ref: 'Transaction' }]
}, {
    timestamps : true
});

userSchema.post('save', function(user) {

  console.log(this)

  generatePassword(this.email, this.password)
  .then(function(newPassword){
      User.update(
          { _id : user._id},
          { password : newPassword}
      )
      .then(function(){})
      .catch(function(){})
  })
})

const User = mongoose.model('User', userSchema);

module.exports = User