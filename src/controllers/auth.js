import { registerUser, loginUser } from "../services/auth.js";

export const registerUserController = async (req, res) => {
    const user = await registerUser(req.body);

    const { _id, name, email, createdAt, updatedAt } = user;
  
    res.status(201).json({
      status: 201,
      message: 'Successfully registered a user!',
      data: { _id, name, email, createdAt, updatedAt },
    });
  };

  export const loginController = async(req,res) => {
    const session = await loginUser(req.body);

    res.cookie('refreshToken', session.refreshToken, {
      httpOnly: true,
      expires: session.refreshTokenValidUntil,
    });
    res.cookie('sessionId', session._id, {
      httpOnly: true,
      expires: session.refreshTokenValidUntil,
    });
  
    res.json({
      status: 200,
      message: 'Successfully logged in an user!',
      data: {
        accessToken: session.accessToken,
      },
    });
  };