import { useState } from "react";
import {useNavigate} from "react-router-dom"

function ReviewForm(){
    onst[reviewData, setReviewData] = useState({
        comment: "Add Comment",
        user_id: "Add user_id",
        game_id: "Add game_id"
    })

    const navigate = useNavigate()

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
        .then(navigate('/games'))
    }

    return(
        <form  onSubmit={handleSubmit} className="GameForm"> 
            <input
                type="text"
                id="comment"
                value={reviewData.comment}
                onChange={handleChange}
            />
            <input
                type="text" 
                id="user_id"
                value={reviewData.user_id}
                onChange={handleChange}
            />
            <input
                type="text"
                id="game_id"
                value={reviewData.game_id}
                onChange={handleChange}
            /> 

            <button type="submit">Submit Review</button>
        </form>
    )
}

export default ReviewForm