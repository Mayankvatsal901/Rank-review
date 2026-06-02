import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

function Reviews() {

  const { backendUrl, business } = useContext(AppContext);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getReviews = async () => {

    try {

      const response = await axios.get(
        `${backendUrl}/review/getreview/${business._id}`
      );
      

      if (response.data.success) {

        setReviews(response.data.Information);

      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };
  
  useEffect(() => {

    if (business?._id) {

      getReviews();

    }

  }, [business]);

  return (

    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* HEADING */}

      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">

        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Customer Reviews
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Manage and track all customer reviews
          </p>
        </div>

        {/* Count badge */}
        {!loading && (
          <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">
              {reviews.length}
            </span>
            <span className="text-sm font-medium text-gray-600">Total Reviews</span>
          </div>
        )}

      </div>

      {/* LOADING */}

      {
        loading && (

          <div className="space-y-5">
            {[1, 2].map((s) => (
              <div key={s} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 animate-pulse">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-gray-200"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-32 rounded bg-gray-200"></div>
                      <div className="h-3 w-20 rounded bg-gray-100"></div>
                    </div>
                  </div>
                  <div className="h-8 w-16 rounded-lg bg-gray-100"></div>
                </div>
                <div className="h-20 rounded-xl bg-gray-100 mb-4"></div>
                <div className="h-20 rounded-xl bg-gray-50"></div>
              </div>
            ))}
          </div>

        )
      }

      {/* EMPTY */}

      {
        !loading && reviews.length === 0 && (

          <div className="bg-white rounded-2xl p-14 shadow-sm border border-gray-100 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 mb-5">
              <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-1.5">
              No Reviews Yet
            </h2>

            <p className="text-sm text-gray-400">
              Customer reviews will appear here.
            </p>

          </div>

        )
      }

      {/* REVIEWS */}

      <div className="space-y-5">

        {
          reviews.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
            >

              {/* TOP */}

              <div className="flex items-start justify-between mb-5">

                <div className="flex items-center gap-3">

                  {/* Avatar */}
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold text-lg">
                    {item.userName?.charAt(0)?.toUpperCase()}
                  </div>

                  <div>
                    <h2 className="text-base font-bold text-gray-900">
                      {item.userName}
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                </div>

                {/* Rating badge */}
                <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-100">
                  <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <span className="text-sm font-bold text-gray-800">
                    {item.rating}
                  </span>
                </div>

              </div>

              {/* ORIGINAL REVIEW */}

              <div className="mb-4">

                <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                  Original Review
                </h3>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.originalReview}
                  </p>
                </div>

              </div>

              {/* OPTIMIZED REVIEW */}

              <div>

                <h3 className="text-xs font-semibold uppercase tracking-wide text-indigo-500 mb-2 flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                  </svg>
                  AI Optimized Review
                </h3>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.optimizedReview}
                  </p>
                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>

  );

}

export default Reviews;