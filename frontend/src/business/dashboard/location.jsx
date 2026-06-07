import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

function Location() {

    const { business } = useContext(AppContext);

    const [leaderboard, setLeaderboard] = useState([]);

    const [loading, setLoading] = useState(true);

    const Baseurl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {

        const fetchLeaderboard = async () => {

            try {

                if (!business?.location) return;

                const response = await axios.get(
                    `${Baseurl}/review/locationwise/${business.location}`
                );

                setLeaderboard(
                    response.data.leaderboard
                );

            }
            catch (error) {

                console.log(error);

            }
            finally {

                setLoading(false);

            }

        };

        fetchLeaderboard();

    }, [business]);

    if (loading) {

        return (

            <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
                <div className="h-8 w-72 rounded-lg bg-gray-200 animate-pulse mb-3"></div>
                <div className="h-4 w-56 rounded bg-gray-100 animate-pulse mb-8"></div>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="h-12 rounded-xl bg-gray-50 animate-pulse"></div>
                    ))}
                </div>
            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gray-50 p-6 lg:p-8 space-y-8">

            {/* HEADING */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
                        Local Competition
                        <span className="text-xl">🏆</span>
                    </h1>
                    <p className="text-sm text-gray-400 mt-1">
                        Top rated businesses in{" "}
                        <span className="font-medium text-gray-600">{business?.location}</span>
                    </p>
                </div>

                <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold">
                        {leaderboard.length}
                    </span>
                    <span className="text-sm font-medium text-gray-600">Businesses</span>
                </div>
            </div>

            {/* PODIUM - TOP 3 */}
            {leaderboard.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {leaderboard.slice(0, 3).map((item, index) => {
                        const styles = [
                            { medal: "🥇", ring: "from-yellow-400 to-amber-500", bg: "from-yellow-50 to-amber-50", border: "border-yellow-200", label: "1st Place" },
                            { medal: "🥈", ring: "from-gray-300 to-gray-400", bg: "from-gray-50 to-slate-50", border: "border-gray-200", label: "2nd Place" },
                            { medal: "🥉", ring: "from-orange-400 to-amber-600", bg: "from-orange-50 to-amber-50", border: "border-orange-200", label: "3rd Place" },
                        ][index];

                        return (
                            <div
                                key={item.businessId}
                                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${styles.bg} border ${styles.border} p-6 ${index === 0 ? "sm:-translate-y-2 shadow-md" : "shadow-sm"} transition`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-3xl">{styles.medal}</span>
                                    <span className={`text-[11px] font-semibold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${styles.ring}`}>
                                        {styles.label}
                                    </span>
                                </div>
                                <h3 className="text-base font-bold text-gray-900 truncate">
                                    {item.businessName}
                                </h3>
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-1">
                                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        <span className="text-lg font-bold text-gray-900">{item.averageRating}</span>
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 bg-white/60 px-2.5 py-1 rounded-lg">
                                        {item.totalReviews} reviews
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* FULL TABLE */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">Full Rankings</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">

                        <thead>
                            <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-gray-100">
                                <th className="text-left px-6 py-3 font-semibold">Rank</th>
                                <th className="text-left px-6 py-3 font-semibold">Business</th>
                                <th className="text-left px-6 py-3 font-semibold">Rating</th>
                                <th className="text-left px-6 py-3 font-semibold">Reviews</th>
                            </tr>
                        </thead>

                        <tbody className="text-sm">
                            {
                                leaderboard.map(

                                    (item, index) => {

                                        const isMine = item.businessId === business?._id;

                                        return (

                                            <tr
                                                key={item.businessId}
                                                className={`border-b border-gray-50 transition
                                                    ${isMine ? "bg-indigo-50/60" : "hover:bg-gray-50/60"}`}
                                            >

                                                {/* RANK */}
                                                <td className="px-6 py-4">
                                                    {
                                                        index < 3 ? (
                                                            <span className="text-xl">
                                                                {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                                                            </span>
                                                        ) : (
                                                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-600 text-xs font-bold">
                                                                #{index + 1}
                                                            </span>
                                                        )
                                                    }
                                                </td>

                                                {/* BUSINESS */}
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm font-semibold">
                                                            {item.businessName?.charAt(0)?.toUpperCase()}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-medium text-gray-800">
                                                                {item.businessName}
                                                            </span>
                                                            {isMine && (
                                                                <span className="text-[10px] font-semibold uppercase text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full">
                                                                    You
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* RATING */}
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-1.5 w-fit bg-yellow-50 px-2.5 py-1 rounded-lg border border-yellow-100">
                                                        <svg className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                        </svg>
                                                        <span className="font-semibold text-gray-800">
                                                            {item.averageRating}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* REVIEWS */}
                                                <td className="px-6 py-4 text-gray-600 font-medium">
                                                    {item.totalReviews}
                                                </td>

                                            </tr>

                                        );

                                    }

                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>

        </div>

    );

}

export default Location;
