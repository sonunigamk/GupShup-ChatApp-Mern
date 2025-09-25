export const register = (req, res, next) => {
  try {
    const { fullName, username, password, gender } = req.body;

    if (!fullName || !username || !password || !gender) {
      res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }
    res.send("registration Sucessfully");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export const login = (req, res) => {
  res.send("calling from the user controller js file");
};
