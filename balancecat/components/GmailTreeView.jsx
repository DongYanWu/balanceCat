/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import * as React from "react";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Button } from "@mui/material";
import useSWRMutation from "swr/mutation";
import swal from "sweetalert";
import UploadButton from "./UploadButton";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}goals/`;
async function fetcher(url, { arg }) {
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${arg.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject_id: `${arg.nodeId}`,
      amount: `${arg.newLabelInfo}`,
    }),
  })
    .then((response) => response)
    .then((data) => [data, data.json()])

    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error("Error:", error);
    });
}
async function updateGoal(url, { arg }) {
  return fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${arg.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject_id: `${arg.nodeId}`,
      amount: `${arg.newLabelInfo}`,
    }),
  })
    .then((response) => response)
    .then((data) => [data, data.json()])

    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error("Error:", error);
    });
}
const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

function StyledTreeItem(props) {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const { trigger } = useSWRMutation(API_URL, fetcher);
  const theme = useTheme();
  const { nodeId } = props;
  const { goalId } = props;
  const { trigger: triggerEdit } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_API_URL}goals/${goalId}`,
    updateGoal,
  );
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    isPersonal,
    token,
    ...other
  } = props;
  const [newLabelInfo, setNewLabelInfo] = React.useState(labelInfo);
  const styleProps = {
    "--tree-view-color":
      theme.palette.mode !== "dark" ? color : colorForDarkMode,
    "--tree-view-bg-color":
      theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
  };
  const handleSetGoal = (event) => {
    event.stopPropagation();
    trigger({ token, nodeId, newLabelInfo }).then(async (data) => {
      const response = data[0];
      const responseData = await data[1];

      if (response.status === 403) {
        swal("Error", "Wrong Token", "error");
      }
      if (response.status === 400) {
        swal("Error", "Client Error Response", "error");
      }
      if (response.status === 500) {
        swal(
          "Error",
          "Something's wrong. Please try again later or notify our engineering team",
          "info",
        );
      }
      if (response.status === 200) {
        console.log(responseData);
        swal("Success", "成功設定目標", "success");
        setIsEditMode(!isEditMode);
      }
    });
    // console.log(`Editing label info for ${labelText}`);
  };
  const handleEditLabelInfo = (event) => {
    setIsEditMode(!isEditMode);
    event.stopPropagation();
  };
  const handleSaveNewGoal = (event) => {
    event.stopPropagation();
    triggerEdit({ token, nodeId, newLabelInfo }).then(async (data) => {
      const response = data[0];
      const responseData = await data[1];

      if (response.status === 403) {
        swal("Error", "Wrong Token", "error");
      }
      if (response.status === 400) {
        swal("Error", "Client Error Response", "error");
      }
      if (response.status === 500) {
        swal(
          "Error",
          "Something's wrong. Please try again later or notify our engineering team",
          "info",
        );
      }
      if (response.status === 200) {
        console.log(responseData);
        swal("Success", "成功編輯目標或支出", "success");
        setIsEditMode(!isEditMode);
      }
    });
    // console.log(`Editing label info for ${labelText}`);
  };
  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.5,
            pr: 0,
            height: 40,
          }}
        >
          <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
          {labelText === "設定大頭貼" && <UploadButton />}
          {labelInfo == null ? null : labelInfo === "尚無目標" ||
            labelInfo === "尚無限制" ? (
            <>
              {isEditMode ? (
                <>
                  <input
                    value={newLabelInfo}
                    onChange={(e) => {
                      setNewLabelInfo(e.target.value);
                    }}
                    onClick={(event) => event.stopPropagation()}
                    style={{
                      marginRight: "1rem",
                      width: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      textAlign: "end",
                    }}
                  />
                  <Button variant="outlined" onClick={handleSetGoal}>
                    儲存
                  </Button>
                </>
              ) : (
                <>
                  <Typography
                    variant="caption"
                    color="inherit"
                    sx={{ marginRight: "1rem" }}
                  >
                    {labelInfo}
                  </Typography>
                  <Button onClick={handleEditLabelInfo} variant="outlined">
                    設定
                  </Button>
                </>
              )}
              {/** */}
            </>
          ) : (
            <>
              {isEditMode ? (
                <>
                  <input
                    value={newLabelInfo}
                    onChange={(e) => {
                      setNewLabelInfo(e.target.value);
                    }}
                    onClick={(event) => event.stopPropagation()}
                    style={{
                      marginRight: "1rem",
                      width: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      textAlign: "end",
                    }}
                  />
                  <Button variant="outlined" onClick={handleSaveNewGoal}>
                    儲存
                  </Button>
                </>
              ) : (
                <>
                  <Typography
                    variant="caption"
                    color="inherit"
                    sx={{ marginRight: "1rem" }}
                  >
                    {labelInfo}
                  </Typography>
                  <Button onClick={handleEditLabelInfo} variant="outlined">
                    編輯
                  </Button>
                </>
              )}
              {/** */}
            </>
          )}
        </Box>
      }
      style={styleProps}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  bgColorForDarkMode: PropTypes.string,
  color: PropTypes.string,
  colorForDarkMode: PropTypes.string,
  nodeId: PropTypes.string,
  goalId: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  isPersonal: PropTypes.bool,
};

export default function GmailTreeView({ isPersonal, data, token }) {
  const renderTree = (nodes) => (
    <StyledTreeItem
      key={nodes.nodeId}
      nodeId={nodes.nodeId}
      labelText={nodes.labelText}
      labelIcon={nodes.labelIcon}
      labelInfo={nodes.labelInfo}
      color={nodes.color}
      bgColor={nodes.bgColor}
      colorForDarkMode={nodes.colorForDarkMode}
      bgColorForDarkMode={nodes.bgColorForDarkMode}
      isPersonal={isPersonal}
      token={token}
      goalId={nodes.goalId}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </StyledTreeItem>
  );
  return (
    <TreeView
      aria-label="assets"
      // defaultExpanded={["1", "2"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{
        maxHeight: "300px",
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "scroll",
        scrollbarWidth: "none", // 新增這行來隱藏滾動條（for Firefox）
        msOverflowStyle: "none", // 新增這行來隱藏滾動條（for IE and Edge）
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#333",
        },
      }}
    >
      {data?.map((node) => renderTree(node))}
    </TreeView>
  );
}
