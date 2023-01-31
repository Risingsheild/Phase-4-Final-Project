import { useContext } from "react";
import { UserContext } from "./Context/User";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function ReviewList() {
  const {reviews} = useContext(UserContext)

  const renderReviews = reviews.map((eachReview) => <ReviewCard key={eachReview.id} review={eachReview} />)
    
  return (
    <div>
      <ReviewForm />
    {renderReviews}
    </div>
  );
}

export default ReviewList;
