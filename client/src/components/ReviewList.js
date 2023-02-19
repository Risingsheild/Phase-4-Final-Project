import { useContext } from "react";
import { UserContext } from "./Context/User";
import ReviewCard from "./ReviewCard";

function ReviewList() {
  const {reviews} = useContext(UserContext)

  const renderReviews = reviews.map((eachReview) => <ReviewCard key={eachReview.id} review={eachReview} />)
    
  return (
    <div>
    {renderReviews}
    </div>
  );
}

export default ReviewList;
