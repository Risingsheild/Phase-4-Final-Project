import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';


function ReviewList() {

  const [reviewData, setReviewData] = useState([]);
    console.log(reviewData)

 
    useEffect(() => {
        fetch('/reviews')
        .then((r) => r.json())
        .then(data => setReviewData(data))
      },[])
      


return (
  <div className="PlatformList">
    <ReviewForm />
      {reviewData.map(
          
        (eachReview) => {

            return (<ReviewCard key={eachReview.id} reviewInfo={eachReview}/>)


      })}
    </div>
    )
}

export default ReviewList;