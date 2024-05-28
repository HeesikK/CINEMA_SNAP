import { Grid } from "@mui/material";
import styled from "styled-components";
import { flexCenter } from "../style/common.style";

const OneMovieSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {[...Array(4)].map((_, index) => (
        <CinemaGrid item xs={6} md={3} key={index}>
          <Skeleton></Skeleton>
        </CinemaGrid>
      ))}
    </Grid>
  );
};

export default OneMovieSkeleton;

const Skeleton = styled.div`
  background-color: ${({ theme }) => theme.COLORS.gray[300]};
  border-radius: 5px;
  width: 230px;
  height: 331px;
  border-radius: 10px;
`;

const CinemaGrid = styled(Grid)`
  ${flexCenter}
`;
