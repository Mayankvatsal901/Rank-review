function ReviewInput({
    Reqdata,
    SetReqData
}) {

    return (

        <div>

            <textarea
                placeholder="Write your review..."
                value={Reqdata.originalReview}
                onChange={(e) =>
                    SetReqData((prev) => ({
                        ...prev,
                        originalReview: e.target.value
                    }))
                }
            />

        </div>
    );
}

export default ReviewInput;