import { useParams, useNavigate } from "react-router-dom";
import DetailMovie from "./component/detail-movie";
import { useEffect } from "react";
import SimilarMovie from "./component/similar-movie";
import Review from "./component/review";

const DetailPage = () => {
  const { detail } = useParams<{ detail: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!detail) {
      // detail이 없으면 홈 페이지나 다른 페이지로 리다이렉트
      navigate("/");
    }
  }, [detail, navigate]);

  if (!detail) {
    return null; // detail이 없으면 아무것도 렌더링하지 않음
  }

  return (
    <>
      <DetailMovie detail={detail} />
      <Review detail={detail} />
      <SimilarMovie detail={detail} />
    </>
  );
};

export default DetailPage;
