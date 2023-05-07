import Student from "@/models/studentModel";

const { dbConnect } = require("@/config/db");

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { studentId } = req.query;
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const student = await Student.findById(studentId);
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    case "PUT":
      try {
        const student = await Student.findByIdAndUpdate(
          { _id: studentId },
          { ...req.body }
        );
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case "DELETE":
      try {
        const student = await Student.findByIdAndDelete(studentId);
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    default:
      break;
  }
};
