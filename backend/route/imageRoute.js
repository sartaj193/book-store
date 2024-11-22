// routes/imageRoutes.js
import express from "express";
import mongoose from "mongoose";
import gridfsStream from "gridfs-stream";

const router = express.Router();
const conn = mongoose.connection;
let gfs;

conn.once("open", () => {
  gfs = gridfsStream(conn.db, mongoose.mongo);
  gfs.collection("uploads"); // The GridFS collection name
});

// Route to retrieve image by filename
router.get("/image/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ message: "No file found" });
    }

    // If the file exists, stream it to the client
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  });
});

export default router;
