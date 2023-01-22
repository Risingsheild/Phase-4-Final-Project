import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function ReviewList({ reviews }) {
  return (
    <div className="PlatformList">
      <ReviewForm />
      {reviews.map((eachReview) => {
        return <ReviewCard key={eachReview.id} review={eachReview} />;
      })}
    </div>
  );
}

export default ReviewList;
