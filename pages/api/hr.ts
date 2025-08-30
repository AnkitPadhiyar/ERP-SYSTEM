import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection("employees");

  if (req.method === "GET") {
    // Get all employees
    const employees = await collection.find({}).toArray();
    res.status(200).json(employees);
  } else if (req.method === "POST") {
    // Add new employee
    const employee = req.body;
    const result = await collection.insertOne(employee);
    res.status(201).json(result);
  } else if (req.method === "PUT") {
    // Update employee
    const { id, ...update } = req.body;
    const result = await collection.updateOne({ _id: id }, { $set: update });
    res.status(200).json(result);
  } else if (req.method === "DELETE") {
    // Delete employee
    const { id } = req.body;
    const result = await collection.deleteOne({ _id: id });
    res.status(200).json(result);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
