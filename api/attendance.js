const { connectToDatabase } = require("../lib/database");

module.exports = async (req, res) => {
    if(req.method === 'GET'){
        const db = await connectToDatabase();
        const collection = await db.collection('attendance');
        const attendance = await collection.find({}).toArray();
        res.status(200).json({
            code: 200,
            attendance: attendance,
        });
    }else if(req.method === 'POST'){
        const newAttendance = req.body;
        const db = await connectToDatabase();
        const collection = await db.collection('attendance');
        const attendance = await collection.insertOne(newAttendance);
        
        res.status(201).json({
            code: 201,
            message: 'Attendance added successful',
            evidence: attendance
        })
    }
}
