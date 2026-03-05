const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

/**
 * 'pre' მოვლენის მსმენელი (Middleware)
 * მუშაობს .save() მეთოდამდე
 */
userSchema.pre('save', async function(next) {
  // 1. ვამოწმებთ, შეიცვალა თუ არა პაროლის ველი
  // თუ პაროლი არ შეცვლილა, გადავდივართ შემდეგ ეტაპზე (next)
  if (!this.isModified('password')) {
    return next();
  }

  try {
    // 2. ვქმნით Salt-ს (10 რაუნდით)
    const salt = await bcrypt.genSalt(10);
    
    // 3. ვაკეთებთ პაროლის ჰეშირებას
    this.password = await bcrypt.hash(this.password, salt);
    
    // 4. ვაგრძელებთ შენახვის პროცესს
    next();
  } catch (error) {
    // თუ რამე შეცდომა მოხდა, გადავცემთ შეცდომას Mongoose-ს
    next(error);
  }
});

module.exports = mongoose.model('User', userSchema);