const { Schema, model } = require("mongoose");

// Schema for Reaction subdocument
const reactionSchema = new Schema({
  // NOTE: Requirements asked for reactionId, doesn't seem to be necessary
  // reactionId: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  reactionBody: {
    type: String,
    required: [true, "Reaction cannot be blank"],
    maxlength: 280,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "User ID is required"],
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
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: [true, "User ID is required"],
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => new Date(createdAtVal).toLocaleString(),
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
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.id;
    delete ret.userId;
  },
});
reactionSchema.set("toJSON", {
  getters: true,
  transform: (doc, ret) => {
    delete ret.__v;
    delete ret.id;
    delete ret.userId;
  },
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
