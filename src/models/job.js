const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    company:{
        type:String,
        require:true
    },
    job:{
        type:String,
        require:true
    },
    payment:{
        type:Number,
        require:true
    }
});

module.exports = mongoose.model('Job',jobSchema);