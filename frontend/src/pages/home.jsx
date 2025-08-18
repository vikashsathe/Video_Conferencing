import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";
import imgHome from "../assets/homepage.png";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="h-screen w-full relative px-10 py-10">
      <div className="navBar py-5 flex justify-between">
        <div className="">
          <h1 className="text-4xl">
            <span style={{ color: "#FF9839" }}>Face</span>Link
          </h1>
          <h2 className="text-xl capitalize -tracking-tight text-gray-400">
            Your Own Video Call Platform
          </h2>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
            sx={{
              padding: "8px 30px",
              background: "#fbbf24",
              "&:hover": { backgroundColor: "#f59e0b" },
              color: "#000",
              border: "none",
              fontSize: "12px",
            }}
            // style={{background:"#D97500", border:"none"}}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer flex justify-center h-4/5 items-center">
        <div className="leftPanel w-[40%]">
          <div>
            <h1 className="text-4xl">Connect with Your Loved Ones</h1>
            <div>
              <div className="py-5">
                <TextField
                  className="w-[85%]"
                  onChange={(e) => setMeetingCode(e.target.value)}
                  id="outlined-basic"
                  label="Meeting Code"
                  variant="outlined"
                  InputProps={{
                    sx: {
                      fontSize: "16px",
                      color: "#d4d4d8",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: "16px",
                      color: "#a1a1aa",
                    },
                  }}
                />
              </div>

              <Button
                onClick={handleJoinVideoCall}
                variant="contained"
                sx={{
                  width: "85%",
                  backgroundColor: "#fbbf24",
                  "&:hover": { backgroundColor: "#f59e0b" },
                  color: "#000",
                  padding: "8px 0px",
                }}
              >
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPanel w-[40%]">
          <img src={imgHome} alt="demo" className="w-full rounded-2xl" />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center absolute bottom-10 bg-zinc-800 text-zinc-200 px-5 py-2 rounded-4xl right-15">
        <IconButton
          onClick={() => {
            navigate("/history");
          }}
        >
          <RestoreIcon className="text-zinc-200" />
        </IconButton>
        <p>History</p>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
