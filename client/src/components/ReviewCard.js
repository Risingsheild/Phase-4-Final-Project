function ReviewCard({reviewInfo}){
    
    function handleDelete(){
        fetch(`/reviews/${reviewInfo.id}`, {
            method: 'DELETE'
        })
        .then((r) => r.json())
    }

    return(
        <div className="GameCard">
            <p>{reviewInfo.comment}</p>
            <button type="submit" onClick={handleDelete}>Delete Comment</button>
        </div>
    )

}

export default ReviewCard