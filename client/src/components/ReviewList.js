import ReviewCard from "./ReviewCard";

function ReviewList({ reviews }) {
  return (
    <div className="PlatformList">
      {reviews.map((eachReview) => {
        return <ReviewCard key={eachReview.id} review={eachReview} />;
      })}
    </div>
  );
}

export default ReviewList;
