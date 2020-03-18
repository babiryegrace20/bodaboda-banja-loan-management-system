const express = require('express')
const router = express.Router()
const User = require('../models/userModels')
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'adminLogin.html'));
})

router.post('/executiveRegistration', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'execRegistration.html'));
  })

  router.post('/salesLogin', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'salesLogin.html'));
  })

  router.post('/customerRegistration', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'customerReg.html'));
  })

/**router.post('/salesexec', async(req, res)=> {
  try{
    //should include if code to check if its the first time of login or already exists
     var myData = new User(req.body)
     await myData.save()
     console.log('login successful')
     res.redirect('/customerReg.html')

  }
  catch (error){
  res.status(400).send("unable to save to direct to customer registration") 

  }
})

//another route to access the salesExecutive list
router.get('/salesExecutiveList',async(req, res) => {
  try {
    let salesexecs = await Executive.find()
    res.render('executives', { executives: salesexecs })
  } catch (err) {
    res.status(400).send("unable to find sales executive list");
  }
})
**/
/**router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'salesLogin.html'));
})**/

router.post('/addname', async(req, res)=> {
try{
   var myData = new User(req.body)
   await myData.save()
   console.log('Item has been saved')
   res.redirect('/userlist')

}
catch (error){
res.status(400).send("unable to save to database") 

}
})

//another route to access the list of entered data
router.get('/userlist',async(req, res) => {
try {
  let items = await User.find()
  if (req.query.nationality){
    items = await User.find({nationality:req.query.nationality})
  }
  res.render('list', { users: items })
} catch (err) {
  res.status(400).send("unable to find items in the database");
}
})

//exporting the routers
module.exports = router 