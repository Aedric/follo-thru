const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  //array of assigned tasks. Might be worth taking updating to task objects, or just worth keeping as an array of unsaturated, making a second call to fill them with all the info
  tasks: [
    {
      id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      //  The user the task is assigned to
      assignedId: {
        type: String,
        required: true
      },
      //  TODO: define and import a group for proper typing. GroupId will do for now. This is the group the task is assigned to.
      groupId: {
        type: String,
        default: ''
      }
    }
  ]
});

module.exports = Users = mongoose.model('users', UserSchema);
