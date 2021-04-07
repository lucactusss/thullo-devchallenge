import * as passport from 'passport';
import UserModel, { User } from '../../models/User';
import { Strategy as LocalStrategy } from 'passport-local';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'user[email]',
      passwordField: 'user[password]',
    },
    (email, password, done) => {
      UserModel.findOne({ email })
        .then((user: User | null) => {
          if (!user || !user.validatePassword(password)) {
            return done(null, false, {
              message: 'email or password is invalid',
            });
          }

          return done(null, user);
        })
        .catch(done);
    }
  )
);
