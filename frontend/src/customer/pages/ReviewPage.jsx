import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ReviewInput from "../components/ReviewInput";
import SentimentSelector from "../components/SentimnentSelectore";

function ReviewPage() {

    const Baseurl = import.meta.env.VITE_BASE_URL;

    const { slug } = useParams();

    const [loading, SetLoading] = useState(false);

    const [bdata, Setbdata] = useState({});

    const [Reqdata, SetReqData] = useState({
        businessId: "",
        userName: "",
        location: "",
        rating: "",
        originalReview: "",
        optimizedReview: "",
        sentiments: "",
        googleLink: ""
    });

    useEffect(() => {

        const fetchBusiness = async () => {

            try {

                const response = await axios.get(
                    `${Baseurl}/business/getfeature/${slug}`
                );
                console.log(response.data);

                const businessData =
                    response.data.information;

                Setbdata(businessData);

                SetReqData((prev) => ({
                    ...prev,
                    businessId: businessData._id,
                    location: businessData.location,
                    googleLink: businessData.googleLink
                }));

            } catch (error) {

                console.log(error);

            }

        };

        fetchBusiness();

    }, [slug]);



    const GenerateReview = async () => {

        try {

            SetLoading(true);

            const response = await axios.post(
                `${Baseurl}/ai/generate`,
                {
                    review: Reqdata.originalReview,
                    location: Reqdata.location,
                    sentiment: Reqdata.sentiments
                }
            );

            SetReqData((prev) => ({
                ...prev,
                optimizedReview:
                    response.data.optimizedReview
            }));

        } catch (error) {

            console.log(error);

        } finally {

            SetLoading(false);

        }

    };



    const CopyReview = async () => {

        try {

            await navigator.clipboard.writeText(
                Reqdata.optimizedReview
            );

            alert("Review copied");

        } catch (error) {

            console.log(error);

        }

    };



    const RedirectToGoogle = () => {

        window.location.href =
            Reqdata.googleLink;

    };



    return (

        <div
            style={{
                padding: "40px"
            }}
        >

            <h1>
                Write Review
            </h1>

            <h2>
                {bdata.businessName}
            </h2>

            <p>
                {Reqdata.location}
            </p>



            <input
                type="text"
                placeholder="Enter your name"
                value={Reqdata.userName}
                onChange={(e) =>
                    SetReqData((prev) => ({
                        ...prev,
                        userName: e.target.value
                    }))
                }
            />



            <br />
            <br />



            <select
                value={Reqdata.rating}
                onChange={(e) =>
                    SetReqData((prev) => ({
                        ...prev,
                        rating: e.target.value
                    }))
                }
            >

                <option value="">
                    Select Rating
                </option>

                <option value="1">
                    1
                </option>

                <option value="2">
                    2
                </option>

                <option value="3">
                    3
                </option>

                <option value="4">
                    4
                </option>

                <option value="5">
                    5
                </option>

            </select>



            <br />
            <br />



            <ReviewInput
                Reqdata={Reqdata}
                SetReqData={SetReqData}
            />



            <br />



            <SentimentSelector
                Reqdata={Reqdata}
                SetReqData={SetReqData}
            />



            <br />



            <button
                onClick={GenerateReview}
            >

                {
                    loading
                        ? "Generating..."
                        : "Generate Review"
                }

            </button>



            <br />
            <br />



            {
                Reqdata.optimizedReview && (

                    <div>

                        <h2>
                            Optimized Review
                        </h2>

                        <p>
                            {
                                Reqdata.optimizedReview
                            }
                        </p>



                        <button
                            onClick={CopyReview}
                        >
                            Copy Review
                        </button>



                        <button
                            onClick={RedirectToGoogle}
                        >
                            Open Google Review
                        </button>

                    </div>

                )
            }

        </div>

    );
}

export default ReviewPage;