import createHttpError from "http-errors";
import { UsersCollection } from "../db/models/user.js";
import bcrypt from "bcrypt";
const SALT_ROUNDS = 10;

export const registerUser = async ({ name, email, password }) => {
    const existingUser = await UsersCollection.findOne({email});

    if (existingUser) {
      throw createHttpError(409, "Email in use");
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await UsersCollection.create({
      name,
      email,
      password: hashedPassword,
    });
  
    return newUser;
  };