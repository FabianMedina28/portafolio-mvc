const path = require('path');
let aboutControllers = (req,res) => {
    res.sendFile(path.join(__dirname,'../views/about.html'));

}

module.exports = aboutControllers;