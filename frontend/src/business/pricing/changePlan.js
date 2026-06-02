import axios from "axios";

const changePlan = async (

    plan,

    token,

    backendUrl,

    refreshBusiness

) => {

    try {

        const response =
        await axios.post(

            `${backendUrl}/payment/change-plan`,

            {
                plan
            },

            {
                headers: {
                    Authorization: token
                }
            }

        );

        if (
            response.data.success
        ) {

            alert(
              "Plan Updated Successfully"
            );

            refreshBusiness();

        }

    }

    catch (error) {

        console.log(error);

    }

};

export default changePlan;