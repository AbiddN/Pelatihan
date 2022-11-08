const mongoose = require("mongoose");

const activeUserSchema = new mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        token: {
            type: String,
            required: true,
        },
        expired: {
            type: Date,
            required: true,
        },
    },
)

module.exports = mongoose.model("ActiveUser", activeUserSchema);