/* eslint-disable prettier/prettier */
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// eslint-disable-next-line no-unused-vars
import useSWR, { mutate as globalMutate } from "swr";
import { useState } from "react";
import FetchWithToken from "../fetchWithToken";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function SelectRegister({
  token,
  urlType,
  handleInputChange,
  setParent_id,
}) {
  const [selectedValue, setSelectedValue] = useState(""); // Step 1
  // eslint-disable-next-line no-unused-vars
  const { data, error, mutate } = useSWR(
    [`${API_URL}registers?type=${urlType}`, token],
    // eslint-disable-next-line no-shadow
    ([url, token]) => FetchWithToken(url, token)
  );
  const handleChange = (event) => {
    const selectedId = event.target.value;
    setSelectedValue(selectedId);
    // setSelectedValue(event.target.value); // Step 2
    // console.log(event.target.value);
    const selected = JSON.parse(event.target.value);
    // setSelectedValue(selected.value);
    setParent_id(selected.entry_id);
    const id_data = {
      target: {
        id: "dataSet",
        value: { id: selected.id, book_value: selected.value },
      },
    };
    //  const event_data = { target: { id: selected.id, book_value: selected.id } };
    handleInputChange(id_data);
    // const book_value_data = {
    //   target: { id: "book_value", value: selected.value },
    // };

    // handleInputChange(book_value_data);

    // const selectedItem = data?.data.registers.find(
    //   (item) => item?.id === selectedId,
    // );

    // if (selectedItem) {
    //   const event_data = {
    //     target: { id: selectedItem.id, value: selectedItem.id },
    //   };
    //   console.log(event_data);
    //   handleInputChange(event_data);
    // }
  };

  //   const refreshFriendData = () => {
  //     mutate([`${API_URL}/friends`, token]);
  //   };

  // eslint-disable-next-line no-unused-vars
  const loading = !data && !error;
  console.log(data);
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          htmlFor="grouped-native-select"
          sx={{ fontSize: "0.5rem", padding: "0 4px", textAlign: "center" }}
        >
          沖銷
        </InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="沖銷"
          onChange={handleChange} // Attach the handler here
          value={selectedValue}
          size="small"
        >
          <option aria-label="None" value="" />
          {data?.data.registers.map((item) => (
            <optgroup label={`${item?.timestamp}`}>
              <option
                // id={item?.id}
                // value={item?.bookvalue}
                // value={item?.id}
                value={JSON.stringify({
                  id: item?.id,
                  value: item?.book_value,
                  entry_id: item?.entry_id,
                })}
              >{`${item?.initial_value}`}</option>
            </optgroup>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
