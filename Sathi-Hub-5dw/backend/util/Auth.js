// const productModel = require("../model/productModel");

// const getuser = async (id) => {
//   var flag = false;
//   try {
//     const user = await productModel.find(id);
//     if (
//       user ||
//       user.length > 0 ||
//       user != null ||
//       user != undefined ||
//       user != "" ||
//       user != {} ||
//       user != []
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };
// const validateRequest = async (req, res, next) => {
//   var auth = req.headers.authorization;
//   console.log("User MILGYA USKA ID => " + auth);
//   console.log(getuser(auth));
//   const auth1 = await getuser(auth);
//   if (auth) {
//     if (auth1) {
//       next();
//     } else {
//       res.json({
//         message: "token is not authorizd",
//         status: 401,
//       });
//     }
//   } else {
//     res.json({
//       message: "You are not authorized to access this route",
//       status: 401,
//     });
//   }
// };
// module.exports = { validateRequest };
