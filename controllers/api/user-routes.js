const router = require('express').Router();
const { User, Score, Note } = require('../../models');

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

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.body.username);
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
  });

  Score.create({
    score: 0,
    user_id: newUser.id,
    game_id: 1,
  });

  Score.create({
    score: 0,
    user_id: newUser.id,
    game_id: 2,
  });

  Note.create({
    body: "REMOVE THIS TEXT AND TYPE HERE!",
    user_id: 1
  });

  req.session.save(() => {
    req.session.loggedIn = true;
    req.session.user_id = newUser.id;
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

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  }

  else {
      res.status(404).end();
  }
})

router.delete('/delete', (req, res) => {
  try {
    const deleted = User.destroy({
      where: {
        id: req.session.user_id,
      },
    });
    res.status(200).json(deleted);
    }
    catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
