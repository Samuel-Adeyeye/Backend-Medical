import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {diagnosisRoute, patientRoute, userRoute, appointmentRoute} from './routes/index';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('api/diagnosis', diagnosisRoute);
app.use('api/patients', patientRoute);
app.use('api/users', userRoute);
app.use('api/appointments', appointmentRoute);

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`)
})
 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    
    if (err.message) {
        res.status(500).json({ error: err.message })
    }
})