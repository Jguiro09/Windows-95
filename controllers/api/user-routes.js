const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.get('/', async(req, res) => {
  try {
    const allUser = await User.findAll();
    res.status(200).json(allUser);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const findUser = await User.findByPk(req.params.id);
    res.status(200).json(findUser);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.username);
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
  });

  req.session.save(() => {
    req.session.loggedIn = true;
    res.status(200).json(newUser);  
  })
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
      const dbUserData = await User.findOne({
          where: {
              username: req.body.username,
          }
      });

      if (!dbUserData) {
          res.status(400)
              .json({ message: 'Incorrect username or password. Please try again!' })
          return;
      }

      const validPassword = await dbUserData.checkPassword(req.body.password);

      if (!validPassword) {
          res.status(400)
              .json({ message: 'Incorrect username or password. Please try again!' });
      }


      req.session.save(() => {
          req.session.loggedIn = true;
          req.session.user_id = dbUserData.id;
          console.log(
              '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
              req.session.cookie
          );

      res.status(200)
      .json({ user: dbUserData, message: 'You are now logged in!'});
      });
  } catch(err){
      console.log(err);
      res.status(500).json(err)
  }
})

router.put('/:id', (req, res) => {
  try {
    const updateUser = User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(updateUser);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const deleted = User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleted);
    }
    catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
