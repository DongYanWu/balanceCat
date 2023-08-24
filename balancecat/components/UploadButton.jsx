/* eslint-disable prettier/prettier */
import * as React from "react";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { ThemeProvider, styled } from "@mui/joy";
import { useRef } from "react";
import useSWRMutation from "swr/mutation";
import swal from "sweetalert";
import { mutate } from "swr";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function sendRequest(url, { arg }) {
  return fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${arg.token}`,
      // 'Content-Type': 'multipart/form-data',
    },
    body: arg.formData,
  }).catch((error) => {
    console.error("Error:", error);
  });
}

export default function UploadButton({ token }) {
  const fileInputRef = useRef();
  // eslint-disable-next-line no-unused-vars
  const { trigger, isMutating } = useSWRMutation(
    `${API_URL}users/picture`,
    sendRequest
  );

  function fileChangedHandler(event) {
    const file = event.target.files[0];
    const regex = /(.*?)\.(jpg|jpeg|png)$/;
    if (!file.name.match(regex)) {
      swal(
        "Error",
        "Invalid file format. Only jpg, jpeg, and png files are allowed.",
        "error"
      );
    } else {
      const formData = new FormData();

      formData.append("picture", file);

      // eslint-disable-next-line no-unused-vars
      trigger({ formData, token }).then(async (response) => {
        mutate([`${API_URL}users`, token]);
      });
    }
  }
  return (
    <ThemeProvider>
      <Button
        component="label"
        role={undefined}
        tabIndex={-1}
        variant="outlined"
        color="neutral"
        startDecorator={
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </SvgIcon>
        }
      >
        上傳
        <VisuallyHiddenInput
          inputRef={fileInputRef}
          type="file"
          // ref={fileInputRef}
          onChange={(e) => fileChangedHandler(e)}
        />
      </Button>
    </ThemeProvider>
  );
}
