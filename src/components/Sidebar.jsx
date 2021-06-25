/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { Phone, PhoneDisabled } from "@material-ui/icons";

import { SocketContext } from "../Context";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="row mx-auto">
      <span className="bg-white mt-5 mx-auto">
        <form className="" noValidate autoComplete="off">
          <TextField
            label="ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            fullWidth
          />
          {callAccepted && !callEnded ? (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<PhoneDisabled fontSize="large" />}
              fullWidth
              onClick={leaveCall}
            >
              Hang Up
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<Phone fontSize="large" />}
              fullWidth
              onClick={() => callUser(idToCall)}
            >
              Call
            </Button>
          )}
        </form>
      </span>
      {children}
    </div>
  );
};

export default Sidebar;
