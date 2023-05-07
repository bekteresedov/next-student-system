import { dbConnect } from "@/config/db";
import Student from "@/models/studentModel";

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const students = await Student.find({});
        res.status(200).json({ success: true, data: students });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    case "POST":
      try {
        const student = await Student.create(req.body);
        res.status(200).json({ success: true, data: student });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;
    

    default:
      break;
  }
};
