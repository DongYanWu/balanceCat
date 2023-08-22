import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
async function sendRequest(url, { arg }) {
  console.log(arg);
  return fetch(url, {
    method: "PUt",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${arg.token}`,
    },
    body: JSON.stringify(arg.Mergedata),
  });
  // .then((response) => response)
  // .then((data) => [data, data.json()])

  // .catch((error) => {
  //   // eslint-disable-next-line no-console
  //   console.error("Error:", error);
  // });
}

export default function PlanCard({ title, content, token }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const { trigger, isMutating } = useSWRMutation(
    `${API_URL}users/memo`,
    sendRequest,
  );

  const handleSendMemo = () => {
    const titleValue = titleRef.current.value;
    const contentValue = contentRef.current.value;
    console.log(titleRef.current);
    const Mergedata = {
      title: titleValue,
      content: contentValue,
    };

    trigger({ token, Mergedata }).then(async (data) => {
      console.log(data);
      mutate([`${API_URL}users`, token]);
    });
    // mutate([`${API_URL}users`, token]);
    setIsEditing(!isEditing);
  };

  let context;
  if (isEditing) {
    context = (
      <Card
        sx={{
          minWidth: 275,
          height: 195,
          borderRadius: "20px",
          backgroundColor: "#fff",
          // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
          boxShadow: "0 0 20px rgb(0,0,0,0.2)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            gap: "10px",
            alignItems: "center",
            padding: "10px 0px 0px 0px",
          }}
        >
          <TextField
            inputRef={titleRef}
            id="outlined-multiline-flexible"
            label="標題"
            // multiline
            defaultValue={title}
            size="small"
            maxRows={2}
            sx={{ width: "80%" }}
          />
          <TextField
            inputRef={contentRef}
            id="outlined-multiline-static"
            label="內文"
            multiline
            size="small"
            rows={3}
            sx={{ width: "80%" }}
            defaultValue={content}
          />
          <Button onClick={() => handleSendMemo()} size="small">
            Send
          </Button>
        </div>
      </Card>
    );
  } else {
    context = (
      <Card
        sx={{
          minWidth: 275,
          height: 195,
          borderRadius: "20px",
          backgroundColor: "#fff",
          // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
          boxShadow: "0 0 20px rgb(0,0,0,0.2)",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, fontWeight: "600" }}
            color="text.secondary"
            gutterBottom
          >
            備忘錄
          </Typography>

          <Typography variant="h5" component="div" sx={{ fontWeight: "700" }}>
            {title || "快來寫備忘錄吧！"}
          </Typography>

          {/* <Typography variant="h5" component="div" sx={{ fontWeight: "700" }}>
        {title || "快來寫備忘錄吧！"}
      </Typography> */}
          <Typography
            variant="body2"
            sx={{ fontWeight: "500", height: "60px" }}
          >
            {content || "點擊右下角的＋號新增備忘錄~~"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setIsEditing(!isEditing)} size="small">
            Edit
          </Button>
        </CardActions>
      </Card>
    );
  }
  return context;
}
