const { Schema, model } = require("mongoose");

// Schema for User document
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trimmed: true,
    match: [
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
      "Email address entered is not valid",
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// Virtual to get total count of user's thoughts
userSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.length;
});

// Virtual to get total count of user's friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Set the schema toJSON options
userSchema.set("toJSON", {
  virtuals: true,
  getters: true,
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.id;
  },
});

const User = model("User", userSchema);

module.exports = User;
