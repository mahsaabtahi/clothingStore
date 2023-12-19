import {createRouter} from "next-connect"
import db from "../../../utils/db";
import bcrypt from "bcrypt";
import User from "../../../models/User";
import { validateEmail } from "../../../utils/validation";
import { createActivationToken } from "../../../utils/tokens";
const handler =new createRouter();
handler.post(async (req, res) => {
   try {
     await db.connectDb();
     const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }
     if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email." });
    }
     const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "This email already exsits." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters." });
    }
      const cryptedPassword = await bcrypt.hash(password, 12)
      const newUser = new User({ name, email, password: cryptedPassword });
      const addedUser = await newUser.save();
       const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });
   }catch(error){
      res.status(500).json({ message: error.message });
   }
});
export default handler.handler();