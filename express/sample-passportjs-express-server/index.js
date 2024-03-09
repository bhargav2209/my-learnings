const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('public'));

// Mock user database
const users = [
    { id: 1, userName: 'admin', password: 'admin' }
];

// Configure Passport to use LocalStrategy for authentication
passport.use(new LocalStrategy(
    { usernameField: 'userName', passwordField: 'password' },
    (username, password, done) => {
        const user = users.find(user => user.userName === username && user.password === password);
        if (!user) {
            return done(null, false, { message: 'Incorrect username or password' });
        }
        return done(null, user);
    }
));


// Passport session setup.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find(user => user.id === id);
    done(null, user);
});

// Initialize Passport and restore authentication state, if any, from the session.
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Login route using Passport authentication
app.post('/api/login', passport.authenticate('local', {
    successRedirect: '/api/success',
    failureRedirect: '/api/fail'
}));

// Success route after successful login
app.get('/api/success', (req, res) => {
    res.send('Login success');
});

// Fail route after failed login
app.get('/api/fail', (req, res) => {
    res.status(401).send('Login failed');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
