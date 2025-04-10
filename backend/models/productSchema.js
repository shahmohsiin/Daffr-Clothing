import mongoose from "mongoose"

const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    }
    ,
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default: "hello"
    }
    ,
    new_price: {
        type: Number,
        required: true,
    }
    ,
    old_price: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true
    },
})


export default Product