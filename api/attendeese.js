const { connectToDatabase } = require("../lib/database")

module.exports = async (req, res) => {
    if(req.method === 'GET'){

        const db = await connectToDatabase();
        const collection = await db.collection('attendeese');
        //Select all attendeese
        const attendeese = await collection.find({}).toArray();
        res.status(200).json({
            code: 200,
            attendeese: attendeese
        });

    }else if(req.method === 'POST'){

        const newAttendee = req.body;
        const db = await connectToDatabase();
        const collection = await db.collection('attendeese');
        // Insert into attendeese
        const attendeese = await collection.insertOne(newAttendee);
        res.status(201).json({ 
            code: 201,
            message: 'Attendee added successful',
            evidence: attendeese
        });

    }else if(req.method === 'PATCH'){
        const newAttendee = req.body;
        const db = await connectToDatabase();
        const collection = await db.collection('attendeese');
        const attendeese = await collection.updateOne({ phone: newAttendee.phone }, { $push: { child: { childName: newAttendee.child }} });
        res.status(201).json({ 
            code: 201,
            message: 'Attendee added successful',
            evidence: attendeese
        });
    }else{
        res.status(404).json({
            code: 404,
            message: 'Endpoint not found.'
        });
    }
}