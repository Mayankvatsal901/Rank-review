function SentimentSelector({
    Reqdata,
    SetReqData
}) {

    return (

        <div>

            <button
                onClick={() =>
                    SetReqData((prev) => ({
                        ...prev,
                        sentiments: "positive"
                    }))
                }
            >
                Positive
            </button>

            <button
                onClick={() =>
                    SetReqData((prev) => ({
                        ...prev,
                        sentiments: "neutral"
                    }))
                }
            >
                Neutral
            </button>

            <button
                onClick={() =>
                    SetReqData((prev) => ({
                        ...prev,
                        sentiments: "negative"
                    }))
                }
            >
                Negative
            </button>

        </div>
    );
}

export default SentimentSelector;