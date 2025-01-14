// test/test-setup.js (or similar)

const mongoose = require('mongoose');

// Connect to MongoDB
before(async () => {
    await mongoose.connect('mongodb://localhost:27017/your_database_name', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

// Close MongoDB connection
after(async () => {
    await mongoose.connection.close();
});

