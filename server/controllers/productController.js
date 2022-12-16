const products = require("../models/productSchema");

const addArticle = async (req, res) => {
  try {
    const {
      user: { role, _id },
      body: {
        articleName,
        articleType,
        description,
        availableSizes,
        price,
        articleImage
      },
    } = req;

    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "unauthorized",
      });
    }

    if (
      !articleName ||
      !articleType ||
      !description ||
      !availableSizes ||
      !price ||
      !articleImage
    ) {
      return res.status.json({
        message: " please provide all the required fields ",
      });
    }

    const newArticles = new products({
      articleName,
      articleType,
      addedBy: _id,
      description,
      availableSizes,
      price,
      articleImage,
    });

    const art = await newArticles.save();
    res.status(200).json({ message: "added", art });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const modifyArticle = async (req, res) => {
  try {
    const {
      user: { role },
      body,
      params: { id },
    } = req;

    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "unauthorized",
      });
    }

    const newArticles = await products.findByIdAndUpdate(id, body, {
      new: true,
    });

    res.status(200).json({ newArticles });
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteArticle = async (req, res) => {
  try {
    const {
      user: { role },
      params: { id },
    } = req;

    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "unauthorized",
      });
    }

    await products.findByIdAndDelete(id);

    res.status(200).json({ message: `Article ${id} has been deleted` });
  } catch (error) {
    res.status(500).send(error);
  }
};
const allArticles = async (req, res) => {
  try {
    const allArticles = await products.find({});

    res.status(200).json({ allArticles });
  } catch (error) {
    res.status(500).send(error);
  }
};
const myArticles = async (req, res) => {
  try {
    const {
      user: { role, _id },
    } = req;

    if (role !== "ADMIN") {
      return res.status(401).json({
        message: "unauthorized",
      });
    }

    const myArticles = await products.find({ addedBy: _id });
    res.status(200).json({ myArticles });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addArticle,
  modifyArticle,
  deleteArticle,
  allArticles,
  myArticles,
};
