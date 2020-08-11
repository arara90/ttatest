import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Image from "../Atom/Image";
import Link from "../Atom/Link";

function IconLink(props) {
  const { icon, width, height } = props;

  return (
    // <Link {...props}>
    //   <Image icon={icon}></Image>
    // </Link>
    <Image {...props}/>
  );
}

export default IconLink;
