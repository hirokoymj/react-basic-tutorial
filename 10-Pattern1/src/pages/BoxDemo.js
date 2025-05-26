import Box from "../components/Box";

export const BoxOne = () => {
  return (
    <Box>
      <Box.GreenOutline>Some content</Box.GreenOutline>
    </Box>
  );
};

export const BoxTwo = () => {
  return (
    <Box>
      <Box.BrownOutline>
        <input placeholder="Enter Email" />
      </Box.BrownOutline>
    </Box>
  );
};

export const BoxThree = () => {
  return <Box>From Three</Box>;
};
