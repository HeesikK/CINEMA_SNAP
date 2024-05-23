import CinemaButton from "../../component/cinema-button";
import CinemaInput from "../../component/cinema-input";

const HomePage = () => {
  return (
    <>
      <CinemaButton variant="primary" size="small" shape="round">
        small
      </CinemaButton>
      <CinemaButton variant="secondary" size="medium" shape="shape">
        medium
      </CinemaButton>
      <CinemaButton variant="secondary" size="large" shape="default">
        large
      </CinemaButton>
      <CinemaInput variant="white" size="small" shape="default" />
      <CinemaInput variant="white" size="medium" shape="default" />
      <CinemaInput variant="white" size="large" shape="default" />
    </>
  );
};

export default HomePage;
