import axios from "axios";

export const handlePayment = async (
  plan,
  token,
  backendUrl,
  refreshBusiness
) => {

  try {

    const orderResponse =
      await axios.post(

        `${backendUrl}/payment/create-order`,

        {
          plan
        },

        {
          headers: {
            Authorization: token
          }
        }

      );

    const order =
      orderResponse.data.order;

    const options = {

      key:
      import.meta.env.VITE_RAZORPAY_KEY_ID,

      amount:
      order.amount,

      currency:
      order.currency,

      name:
      "RankReview",

      description:
      `${plan} Plan`,

      order_id:
      order.id,

      handler:
      async function (response) {
        console.log("RAZORPAY SUCCESS RESPONSE:", response);

        const verifyResponse =
          await axios.post(

            `${backendUrl}/payment/verify`,

            {

              ...response,

              plan

            },

            {

              headers: {
                Authorization: token
              }

            }

          );

        if (
          verifyResponse.data.success
        ) {

          alert(
            "Plan Updated Successfully"
          );

          refreshBusiness();

        }

      }

    };

    const razorpay =
      new window.Razorpay(options);

    razorpay.open();

  }

  catch (error) {

    console.log(error);

  }

};