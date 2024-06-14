const { Schema, model, Types } = require("mongoose");

// Schema for Reaction subdocument
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: [true, "Reaction cannot be blank"],
    maxlength: 280,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => new Date(createdAtVal).toLocaleString(),
  },
});

// Schema for Thought document
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: [true, "Thought cannot be blank"],
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => new Date(createdAtVal).toLocaleString(),
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  userId: {
    type: Schema.Types.String,
    required: true,
    ref: "User",
  },
  reactions: [reactionSchema],
});

// Virtual to get total count of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Set the schema toJSON options
thoughtSchema.set("toJSON", {
  virtuals: true,
  getters: true,
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
