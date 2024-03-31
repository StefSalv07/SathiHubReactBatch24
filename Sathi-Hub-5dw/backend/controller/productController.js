const productSchema = require("../model/productModel");
// save() , delete , update
//function ()-> export
// call back()

exports.createProduct = (req, res) => {
  const product = new productSchema(req.body); // req.body = {productName: "Laptop", productDetails: "Dell", productPrice: 50000, productQuantity: 10}
    product.save()
    .then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while saving the product",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Product saved successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while saving the product",
            status: 400,
            error: err,
          });
    })
};
//   product.save((err, data) => {
//     if (err) {
//       res.json({
//         message: "Something went wrong while saving the product",
//         status: 400,
//         error: err,
//       });
//     } else {
//       message: "Product saved successfully",
//         res.json({
//           status: 200,
//           data: data,
//         });
//     }
//   });

