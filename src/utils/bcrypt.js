import bcrypt from 'bcrypt';

export const hashPassword = async (plainTextPassword) => {
    return await bcrypt.hash(plainTextPassword, 10);
};

export const comparePassword = async (plainTextPassword, hashedPassword) => {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
};