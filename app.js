// app.js

console.log('Hello, world!');
// app.js

// Import required modules
const express = require('express');


// Define a route handler for the root path
app.get('/', (req, res) => {
    res.send('Hello, world! This is your Express server.');
});

// Start the server on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Import required modules
const mongoose = require('mongoose');

// MongoDB connection URI (replace with your MongoDB connection string)
const MONGODB_URI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Check MongoDB connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Define a mongoose schema and model example
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: String,
  email: String,
});

// Example usage: create a new user
const newUser = new mongoose.model('User', UserSchema)({ username: 'john_doe', email: 'john@example.com' });
newUser.save((err) => {
  if (err) return console.error(err);
  console.log('User saved successfully');
});

// Import required modules
const axios = require('axios');

// Example: Fetch data from an API
axios.get('https://api.example.com/data')
    .then(response => {
        console.log('API Response:', response.data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Import required modules
const express = require('express');
const bodyParser = require('body-parser'); // For parsing JSON request bodies

// Create an Express application
// const app = express(); // Removed duplicate declaration

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Example route handler for GET request
app.get('/', (req, res) => {
    res.send('Hello, world! This is your Express server.');
});

// Example route handler for POST request
app.post('/api/users', (req, res) => {
    const { username, email } = req.body;
    // Validate input
    if (!username || !email) {
        return res.status(400).json({ error: 'Username and email are required' });
    }
    // Save to database or perform other actions
    // Example: Creating a new user (assuming you have a User model)
    const newUser = new User({ username, email });
    newUser.save()
        .then(user => {
            res.status(201).json(user); // Respond with created user object
        })
        .catch(err => {
            console.error('Error saving user:', err);
            res.status(500).json({ error: 'Server error' });
        });
});

// Example route handler for PUT request
app.put('/api/users/:userId', (req, res) => {
    const { userId } = req.params;
    const { username, email } = req.body;
    // Update user in database based on userId
    // Example: Updating user details
    User.findByIdAndUpdate(userId, { username, email }, { new: true })
        .then(updatedUser => {
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(updatedUser); // Respond with updated user object
        })
        .catch(err => {
            console.error('Error updating user:', err);
            res.status(500).json({ error: 'Server error' });
        });
});

// Example route handler for DELETE request
app.delete('/api/users/:userId', (req, res) => {
    const { userId } = req.params;
    // Delete user from database based on userId
    // Example: Deleting a user
    User.findByIdAndDelete(userId)
        .then(deletedUser => {
            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        })
        .catch(err => {
            console.error('Error deleting user:', err);
            res.status(500).json({ error: 'Server error' });
        });
});

// Start the server on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Mock database (replace with your actual database setup)
const users = [
    { id: 1, username: 'john', password: 'password' },
    { id: 2, username: 'jane', password: 'password' },
];

// Passport.js setup
passport.use(new LocalStrategy(
    (username, password, done) => {
        // Mock user authentication (replace with actual logic)
        const user = users.find(u => u.username === username && u.password === password);
        if (!user) {
            return done(null, false, { message: 'Incorrect username or password' });
        }
        return done(null, user);
    }
));

// Serialize and deserialize user (session management)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
});

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Example route handler for login (POST /login)
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login-failure' }),
    (req, res) => {
        res.redirect('/dashboard'); // Successful login redirect
    }
);

// Example route handler for logout (GET /logout)
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Example route handler for authenticated route (GET /dashboard)
app.get('/dashboard', isAuthenticated, (req, res) => {
    res.send(`Welcome, ${req.user.username}! This is your dashboard.`);
});

// Middleware function to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login'); // Redirect to login if not authenticated
}

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Error handling middleware (must be defined last)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        // Check if user exists in database or create a new user
        // Example:
        User.findOrCreate({ googleId: profile.id }, (err, user) => {
            return done(err, user);
        });
    }
));

// Routes for OAuth authentication
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect to dashboard or profile
        res.redirect('/dashboard');
    }
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// Example middleware for role-based access control
function isAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    res.status(403).json({ error: 'Unauthorized' });
}

// Example route with role-based access control
app.get('/admin/dashboard', isAdmin, (req, res) => {
    res.send('Admin Dashboard');
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    role: { type: String, default: 'user' }
});

const User = mongoose.model('User', userSchema);

mongoose.model('User', userSchema);
