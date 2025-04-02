import { useState, useEffect } from "react";
import "../components/HospitalQueue.css";

const HospitalQueue = () => {
    const [queue, setQueue] = useState([]);
    const [patientName, setPatientName] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");

    useEffect(() => {
        const storedQueue = JSON.parse(localStorage.getItem("hospitalQueue")) || [];
        setQueue(storedQueue);
    }, []);

    useEffect(() => {
        localStorage.setItem("hospitalQueue", JSON.stringify(queue));
    }, [queue]);

    const addPatient = () => {
        if (!patientName.trim() || !appointmentTime) {
            alert("Please enter both name and appointment time.");
            return;
        }

        const newPatient = {
            id: queue.length + 1,
            name: patientName,
            time: appointmentTime
        };

        setQueue([...queue, newPatient]);
        setPatientName("");
        setAppointmentTime("");
    };

    const checkIn = (index) => {
        setQueue(queue.filter((_, i) => i !== index));
    };

    return (
    
            <div className="hospital-queue-container">
                <h1>🏥 Hospital Queue Management</h1>
        
                <div className="form-container">
                    <input
                        type="text"
                        placeholder="Enter Patient Name"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                    />
                    <input
                        type="time"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                    />
                    <button onClick={addPatient}>Add Patient</button>
                </div>
        
                <h2>Current Queue</h2>
                <table className="queue-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient Name</th>
                            <th>Appointment Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queue.map((patient, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{patient.name}</td>
                                <td>{patient.time}</td>
                                <td>
                                    <button className="check-in-btn" onClick={() => checkIn(index)}>Check-in</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    
        
    );
};

export default HospitalQueue;