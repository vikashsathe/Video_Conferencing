import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';
export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }

        fetchHistory();
    }, [])

    let formatDate = dateString =>
  new Date(dateString).toLocaleDateString("en-GB");


    return (
        <div className='w-full h-screen px-10 py-5'>

            <IconButton onClick={() => {
                routeTo("/home")
            }}>
                <HomeIcon sx={{color:"#d4d4d8", fontSize:"2rem"}} />
            </IconButton >
            
                <div className='flex flex-wrap gap-3 py-10 items-center justify-center'>

                                     {meetings.length !== 0 ? (
    meetings.map((e, i) => (
      <Card
        key={i}
        variant="outlined"
        sx={{
          background: "#D4D4D8",
          width: "25vw",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Code: {e.meetingCode}
          </Typography>
          <Typography color="text.secondary">
            Date: {formatDate(e.date)}
          </Typography>
        </CardContent>
      </Card>
    ))
  ) : (
    <></>
  )}
</div>

        </div>
    )
}