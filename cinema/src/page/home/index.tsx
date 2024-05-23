import CinemaButton from "../../component/cinema-button";

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
    </>
  );
};

export default HomePage;
