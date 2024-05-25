const zod = require("zod");
const productValidation = zod.object({
  body: zod.object({
    pName: zod
      .string()
      .max(40, "the max char of produc Name should be 25")
      .min(7, "min 7 req"),
    pDetails: zod
      .string()
      .max(100, "the max char of produc Name should be 100")
      .min(10, "min 10 req"),
    pPrice: zod.number(),
    email: zod.string().email(),
    //   },
    //     {
    //         params: zod.object({
    //         id: zod.string().uuid(),
    //         }
    //     }
  }),
});
module.exports = productValidation;
