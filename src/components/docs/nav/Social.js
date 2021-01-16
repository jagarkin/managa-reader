import React, { useState } from "react";
import useClipboard from "react-use-clipboard";

// style component
import styled from "styled-components";
import { Tooltip, message } from "antd";
import { FaDiscord } from "react-icons/fa";

const Social = () => {
  const [clip, setClip] = useState("jagarkin#9781");
  const [isCopied, setCopied] = useClipboard("jagarkin#9781", {
    successDuration: 1000,
  });

  const copyClip = () => {
    setCopied();
    message.success("copied to clipboard", 1);
    setClip(isCopied);
  };

  return (
    <>
      <StyledToolTip onClick={copyClip} title={clip} color="blue">
        add me on <DiscordIcon />
      </StyledToolTip>
    </>
  );
};

export default Social;

const StyledToolTip = styled(Tooltip)`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const DiscordIcon = styled(FaDiscord)`
  margin: 0rem 1rem;
  font-size: 1.5rem;
`;
