import React, { useState } from "react";
import { useQuery } from "react-query";
import { getReviewMovie } from "../../../api/api";
import { Container } from "@mui/material";
import styled from "styled-components";
import { flexCenter } from "../../../style/common.style";
import { QUERY_KEY } from "../../../const/query-key";

interface DetailMovieProps {
  detail: string;
}

interface Review {
  author: string;
  content: string;
}

interface ReviewData {
  results: Review[];
}

const Review: React.FC<DetailMovieProps> = ({ detail }) => {
  const [isShowReview, setIsShowReview] = useState(false);
  const { data: reviewData } = useQuery<ReviewData>([QUERY_KEY.Review, detail], () => getReviewMovie(detail));

  const toggleVisibility = () => {
    setIsShowReview(!isShowReview);
  };

  return (
    <CinemaContainer>
      <ReviewTitle onClick={toggleVisibility}>Review</ReviewTitle>
      {isShowReview &&
        reviewData?.results.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewAuthor>{review.author}</ReviewAuthor>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewCard>
        ))}
    </CinemaContainer>
  );
};

export default Review;

const CinemaContainer = styled(Container)`
  ${flexCenter}
  margin-top: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.white};
  flex-direction: column;
`;

const ReviewTitle = styled.div`
  text-align: start;
  font-size: 30px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-bottom: 40px;
  cursor: pointer;
`;

const ReviewCard = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.primary["navy"]};
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
`;

const ReviewAuthor = styled.h3`
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin-bottom: 15px;
`;

const ReviewContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;
