const path = require('path');

const port = 5000;
const homepageRouter = require('./routes/homepage');
const infopageRouter = require('./routes/infopage');


class AppConfig {
    constructor(app){
      this.app =app
    }
    setingUp() {
  
    this.app.listen(port,()=>{
        console.log(`The program is listening to port ${port} and local server is on`);
    });
    this.app.use(homepageRouter);
    this.app.use(infopageRouter);
  
}
}


module.exports = AppConfig;
