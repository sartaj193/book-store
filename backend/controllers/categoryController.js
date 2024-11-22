/*import slugify from "slugify";
import categoryModel from "../models/categorymodel.js";

export const categoryProductController = async (req, res) => {
  try {
    const { name } = req.body;
    // validations
    if (!name) {
      return res.status(401).send({
        message: "name is required",
      });
    }
    const existingProduct = await categoryModel.findOne({ name });
    if (existingProduct) {
      res.status(400).send({
        message: "product already existed",
      });
    }
    const product = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    return res.status(200).send({
      message: "product created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};
*/
