import { useState } from "react";

function ReviewForm(){
    const[reviewData, setReviewData] = useState({
        comment: "",
        user_id: "",
        game_id: ""
    })


    function handleChange(e){
        setReviewData({
            ...reviewData,
            [e.target.id]: e.target.value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData),
        })
        .then((r) => r.json())
        window.location.reload()
    }

    return(
        <form  onSubmit={handleSubmit} className="GameForm"> 
            <input
                type="text"
                id="comment"
                placeholder="Add Review"
                value={reviewData.comment}
                onChange={handleChange}
            />
            <input
                type="text" 
                id="user_id"
                placeholder="Your User ID"
                value={reviewData.user_id}
                onChange={handleChange}
            />
            <input
                type="text"
                id="game_id"
                placeholder="What Game Number"
                value={reviewData.game_id}
                onChange={handleChange}
            /> 

            <button type="submit">Submit Review</button>
        </form>
    )
}

export default ReviewForm