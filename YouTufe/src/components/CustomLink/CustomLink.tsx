import React from "react";
import { Routes, Route, Outlet, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const CustomLink = (props: LinkProps) => {
  // const resolved = useResolvedPath(props.to)
  // const match = useMatch({path: resolved.pathname, end:true})
  // console.log(match);
  return (
    <></>
  );
};

export default CustomLink;
