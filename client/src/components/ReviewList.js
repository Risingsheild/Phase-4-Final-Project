import Logout from "./Logout";
import NavBar from "./NavBar";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function ReviewList({ reviews, onDeleteReview, onAddReview }) {
  return (
    <div className="PlatformList">
      <Logout />
      <NavBar />
      <br></br>
      <ReviewForm onAddReview={onAddReview} />
      <br></br>

      {reviews.map((eachReview) => {
        return (
          <ReviewCard
            key={eachReview.id}
            reviewInfo={eachReview}
            onDeleteReview={onDeleteReview}
          />
        );
      })}
    </div>
  );
}

export default ReviewList;
