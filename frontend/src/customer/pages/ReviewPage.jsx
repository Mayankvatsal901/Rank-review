import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ReviewPage() {

    const { slug } = useParams();

    const Baseurl = import.meta.env.VITE_BASE_URL;

    const optimizedReviewRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const [bdata, Setbdata] = useState({});
    const [businessFound, setBusinessFound] = useState(true);

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

                const businessData = response.data.information;

                if (!businessData) {

                    setBusinessFound(false);
                    return;

                }

                setBusinessFound(true);

                Setbdata(businessData);

                SetReqData((prev) => ({
                    ...prev,
                    businessId: businessData._id,
                    location: businessData.location,
                    googleLink: businessData.googleLink
                }));

            } catch (error) {

                console.log(error);
                setBusinessFound(false);

            }

        };

        fetchBusiness();

    }, [slug]);

    const GenerateReview = async () => {

        try {

            setLoading(true);
            setCopied(false);

            const response = await axios.post(
                `${import.meta.env.VITE_AI_URL}/ai/generate`,
                {
                    review: Reqdata.originalReview,
                    location: Reqdata.location,
                    sentiment: Reqdata.sentiments
                }
            );

            SetReqData((prev) => ({
                ...prev,
                optimizedReview: response.data.optimizedReview
            }));

            await axios.post(
                `${Baseurl}/review/storereview`,
                {
                    businessId: Reqdata.businessId,
                    userName: Reqdata.userName,
                    rating: Reqdata.rating,
                    sentiments: Reqdata.sentiments,
                    originalReview: Reqdata.originalReview,
                    optimizedReview: response.data.optimizedReview,
                    location: bdata.location
                }
            );

            setTimeout(() => {

                if (window.innerWidth < 1024) {

                    optimizedReviewRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 150);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const CopyReview = async () => {

        try {

            await navigator.clipboard.writeText(
                Reqdata.optimizedReview
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 1800);

        } catch (error) {

            console.log(error);

        }

    };

    const ratingOptions = [
        {
            value: "1",
            label: "1",
            text: "Poor"
        },
        {
            value: "2",
            label: "2",
            text: "Average"
        },
        {
            value: "3",
            label: "3",
            text: "Good"
        },
        {
            value: "4",
            label: "4",
            text: "Very Good"
        },
        {
            value: "5",
            label: "5",
            text: "Excellent"
        }
    ];

    const toneOptions = [
        {
            value: "positive",
            label: "Positive",
            activeClass: "border-emerald-400 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20",
            hoverClass: "hover:border-emerald-400 hover:bg-emerald-400/10"
        },
        {
            value: "neutral",
            label: "Neutral",
            activeClass: "border-amber-300 bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20",
            hoverClass: "hover:border-amber-300 hover:bg-amber-400/10"
        },
        {
            value: "negative",
            label: "Negative",
            activeClass: "border-rose-400 bg-rose-500 text-white shadow-lg shadow-rose-500/20",
            hoverClass: "hover:border-rose-400 hover:bg-rose-400/10"
        }
    ];

    if (!businessFound) {

        return (

            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060716] px-5 text-white">

                <style>
                    {`
                        @keyframes reviewAurora {
                            0%, 100% {
                                transform: translate3d(0, 0, 0) scale(1);
                                opacity: 0.55;
                            }
                            50% {
                                transform: translate3d(40px, -35px, 0) scale(1.08);
                                opacity: 0.9;
                            }
                        }

                        @keyframes reviewFloat {
                            0%, 100% {
                                transform: translateY(0px);
                            }
                            50% {
                                transform: translateY(-14px);
                            }
                        }
                    `}
                </style>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.16),transparent_35%)]"></div>
                <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:54px_54px]"></div>

                <div className="relative w-full max-w-2xl rounded-[34px] border border-white/10 bg-white/[0.07] p-8 text-center shadow-[0_35px_120px_-45px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-12">

                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15 text-red-300 ring-1 ring-red-400/20">
                        <svg
                            className="h-8 w-8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 9V13" />
                            <path d="M12 17H12.01" />
                            <path d="M10.29 3.86L1.82 18A2 2 0 0 0 3.53 21H20.47A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Business Not Found
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-400">
                        The business link you visited is not registered on RankReview.
                        Please check the URL or contact the business owner.
                    </p>

                    <div className="mt-8">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                        >
                            Go To Home Page
                        </a>
                    </div>

                </div>

            </div>

        );

    }

    return (

        <div className="relative min-h-screen overflow-hidden bg-[#060716] text-white">

            <style>
                {`
                    @keyframes reviewAurora {
                        0%, 100% {
                            transform: translate3d(0, 0, 0) scale(1);
                            opacity: 0.55;
                        }
                        50% {
                            transform: translate3d(45px, -35px, 0) scale(1.08);
                            opacity: 0.9;
                        }
                    }

                    @keyframes reviewAuroraTwo {
                        0%, 100% {
                            transform: translate3d(0, 0, 0) scale(1);
                            opacity: 0.45;
                        }
                        50% {
                            transform: translate3d(-45px, 30px, 0) scale(1.12);
                            opacity: 0.85;
                        }
                    }

                    @keyframes reviewFloat {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-14px);
                        }
                    }

                    @keyframes reviewPulse {
                        0%, 100% {
                            opacity: 0.25;
                        }
                        50% {
                            opacity: 0.85;
                        }
                    }

                    @keyframes reviewScan {
                        0% {
                            transform: translateX(-100%);
                            opacity: 0;
                        }
                        20% {
                            opacity: 1;
                        }
                        100% {
                            transform: translateX(220%);
                            opacity: 0;
                        }
                    }
                `}
            </style>

            {/* CRAZY BACKGROUND */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(37,99,235,0.25),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(168,85,247,0.23),transparent_30%),radial-gradient(circle_at_52%_95%,rgba(236,72,153,0.16),transparent_35%)]"></div>

            <div
                className="pointer-events-none absolute -left-40 top-16 h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[110px]"
                style={{ animation: "reviewAurora 13s ease-in-out infinite" }}
            ></div>

            <div
                className="pointer-events-none absolute right-[-160px] top-28 h-[560px] w-[560px] rounded-full bg-violet-600/20 blur-[120px]"
                style={{ animation: "reviewAuroraTwo 15s ease-in-out infinite" }}
            ></div>

            <div
                className="pointer-events-none absolute bottom-[-180px] left-[35%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/15 blur-[130px]"
                style={{ animation: "reviewAurora 17s ease-in-out infinite" }}
            ></div>

            <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:54px_54px]"></div>

            <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 1440 900"
                fill="none"
                preserveAspectRatio="none"
            >
                <g stroke="#8b5cf6" strokeOpacity="0.28" strokeWidth="1.2">
                    <path d="M70 220L170 140L285 205L395 115L520 190L640 125" />
                    <path d="M810 95L920 150L1040 90L1160 175L1320 120" />
                    <path d="M120 620L260 520L410 610L560 500L720 590" />
                    <path d="M880 620L1010 510L1160 610L1330 500" />
                    <path d="M255 205L260 520" />
                    <path d="M920 150L1010 510" />
                    <path d="M520 190L560 500" />
                    <path d="M1160 175L1160 610" />
                </g>

                <g fill="#93c5fd">
                    {
                        [
                            [70, 220], [170, 140], [285, 205], [395, 115], [520, 190], [640, 125],
                            [810, 95], [920, 150], [1040, 90], [1160, 175], [1320, 120],
                            [120, 620], [260, 520], [410, 610], [560, 500], [720, 590],
                            [880, 620], [1010, 510], [1160, 610], [1330, 500]
                        ].map(([cx, cy], index) => (
                            <circle
                                key={index}
                                cx={cx}
                                cy={cy}
                                r={index % 3 === 0 ? "4" : "3"}
                                opacity={index % 2 === 0 ? "0.75" : "0.45"}
                            />
                        ))
                    }
                </g>
            </svg>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#060716]/20 to-[#060716]"></div>

            {/* PAGE CONTENT */}

            <div className="relative mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8">

                {/* TOP BAR */}

                <div className="mb-5 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.07] p-4 shadow-[0_24px_80px_-55px_rgba(0,0,0,0.8)] backdrop-blur-xl">

                    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div
                            className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
                            style={{ animation: "reviewScan 5s linear infinite" }}
                        ></div>

                        <div className="flex items-center gap-4">

                            <div className="flex h-13 w-13 h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-lg font-black text-white shadow-lg shadow-blue-950/40">
                                {
                                    bdata?.name
                                        ? bdata.name.charAt(0).toUpperCase()
                                        : "R"
                                }
                            </div>

                            <div>

                                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">
                                    Secure Review Link
                                </p>

                                <h1 className="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl">
                                    {bdata?.name || "Business"}
                                </h1>

                                <p className="mt-0.5 text-sm font-medium text-slate-400">
                                    {bdata?.location || "Location"}
                                </p>

                            </div>

                        </div>

                        <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-300">

                            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                                01 Write
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                                02 Generate
                            </span>

                            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                                03 Copy & Post
                            </span>

                        </div>

                    </div>

                </div>

                {/* MAIN GRID */}

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-[0.75fr_1fr_1fr]">

                    {/* LEFT CONTENT */}

                    <div className="lg:col-span-2 xl:col-span-1">

                        <div
                            className="sticky top-5 rounded-[34px] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-8"
                            style={{ animation: "reviewFloat 7s ease-in-out infinite" }}
                        >

                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
                                <span
                                    className="h-2 w-2 rounded-full bg-emerald-400"
                                    style={{ animation: "reviewPulse 2.2s ease-in-out infinite" }}
                                ></span>
                                AI Review Optimization
                            </div>

                            <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl xl:text-6xl">
                                Turn Quick Feedback Into
                                <span className="block bg-gradient-to-r from-blue-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                                    Professional Reviews
                                </span>
                            </h2>

                            <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
                                Write your honest experience in simple words. RankReview AI will polish it into a clear, professional review.
                            </p>

                            <div className="mt-8 rounded-[26px] border border-white/10 bg-white/[0.07] p-5">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-lg font-black text-white">
                                        {
                                            bdata?.name
                                                ? bdata.name.charAt(0).toUpperCase()
                                                : "B"
                                        }
                                    </div>

                                    <div>
                                        <h3 className="font-black text-white">
                                            {bdata?.name || "Business"}
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-400">
                                            {bdata?.location || "Location"}
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-3">

                                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                        Fast
                                    </p>
                                    <p className="mt-2 text-lg font-black text-white">
                                        1 click
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                        AI
                                    </p>
                                    <p className="mt-2 text-lg font-black text-white">
                                        Smart
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                        Review
                                    </p>
                                    <p className="mt-2 text-lg font-black text-white">
                                        Ready
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* FORM CARD */}

                    <div className="rounded-[34px] border border-white/10 bg-white/[0.08] p-5 shadow-[0_30px_100px_-55px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-7">

                        <div className="mb-6">

                            <h2 className="text-3xl font-black tracking-tight text-white">
                                Write a Review
                            </h2>

                            <p className="mt-2 text-base text-slate-400">
                                Share your experience with{" "}
                                <span className="font-bold text-white">
                                    {bdata?.name || "this business"}
                                </span>
                            </p>

                        </div>

                        <div className="space-y-5">

                            {/* NAME */}

                            <div>

                                <label className="mb-2 block text-sm font-bold text-slate-300">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    value={Reqdata.userName}
                                    onChange={(e) =>
                                        SetReqData({
                                            ...Reqdata,
                                            userName: e.target.value
                                        })
                                    }
                                    className="h-13 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-base font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:bg-white/[0.13] focus:ring-4 focus:ring-blue-500/10"
                                />

                            </div>

                            {/* RATING */}

                            <div>

                                <label className="mb-2 block text-sm font-bold text-slate-300">
                                    Rating
                                </label>

                                <div className="grid grid-cols-5 gap-2">

                                    {
                                        ratingOptions.map((item) => (

                                            <button
                                                key={item.value}
                                                type="button"
                                                onClick={() =>
                                                    SetReqData({
                                                        ...Reqdata,
                                                        rating: item.value
                                                    })
                                                }
                                                className={`rounded-2xl border px-2 py-3 text-sm font-black transition ${
                                                    Reqdata.rating === item.value
                                                        ? "border-amber-300 bg-amber-300 text-slate-950 shadow-lg shadow-amber-300/20"
                                                        : "border-white/10 bg-white/10 text-slate-300 hover:border-amber-300/60 hover:bg-amber-300/10"
                                                }`}
                                            >
                                                {item.label}★
                                            </button>

                                        ))
                                    }

                                </div>

                                <p className="mt-2 text-xs font-medium text-slate-500">
                                    {
                                        Reqdata.rating
                                            ? ratingOptions.find((item) => item.value === Reqdata.rating)?.text
                                            : "Select your rating"
                                    }
                                </p>

                            </div>

                            {/* REVIEW */}

                            <div>

                                <label className="mb-2 block text-sm font-bold text-slate-300">
                                    Your Review
                                </label>

                                <textarea
                                    rows="4"
                                    placeholder="Example: nice service, staff was helpful..."
                                    value={Reqdata.originalReview}
                                    onChange={(e) =>
                                        SetReqData({
                                            ...Reqdata,
                                            originalReview: e.target.value
                                        })
                                    }
                                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-base font-semibold leading-7 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:bg-white/[0.13] focus:ring-4 focus:ring-blue-500/10"
                                />

                            </div>

                            {/* TONE */}

                            <div>

                                <label className="mb-2 block text-sm font-bold text-slate-300">
                                    Review Tone
                                </label>

                                <div className="grid grid-cols-3 gap-2">

                                    {
                                        toneOptions.map((item) => (

                                            <button
                                                key={item.value}
                                                type="button"
                                                onClick={() =>
                                                    SetReqData({
                                                        ...Reqdata,
                                                        sentiments: item.value
                                                    })
                                                }
                                                className={`rounded-2xl border px-3 py-3 text-sm font-black transition ${
                                                    Reqdata.sentiments === item.value
                                                        ? item.activeClass
                                                        : `border-white/10 bg-white/10 text-slate-300 ${item.hoverClass}`
                                                }`}
                                            >
                                                {item.label}
                                            </button>

                                        ))
                                    }

                                </div>

                            </div>

                            {/* GENERATE BUTTON */}

                            <button
                                type="button"
                                onClick={GenerateReview}
                                disabled={loading}
                                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 px-6 py-4 text-base font-black text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                            >

                                {
                                    loading
                                        ? (
                                            <>
                                                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
                                                Generating...
                                            </>
                                        )
                                        : (
                                            <>
                                                Generate AI Review
                                                <span className="transition group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </>
                                        )
                                }

                            </button>

                        </div>

                    </div>

                    {/* OUTPUT CARD */}

                    <div
                        ref={optimizedReviewRef}
                        className="lg:sticky lg:top-5"
                    >

                        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.08] shadow-[0_30px_100px_-55px_rgba(0,0,0,0.85)] backdrop-blur-xl">

                            <div className="border-b border-white/10 p-5 sm:p-7">

                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                                    <div>

                                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-bold text-violet-200">
                                            AI Generated Output
                                        </div>

                                        <h2 className="text-3xl font-black tracking-tight text-white">
                                            Optimized Review
                                        </h2>

                                        <p className="mt-2 text-base leading-7 text-slate-400">
                                            The polished review appears here instantly.
                                        </p>

                                    </div>

                                    <div className={`w-fit rounded-full px-4 py-2 text-sm font-bold ${
                                        Reqdata.optimizedReview
                                            ? "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/20"
                                            : loading
                                            ? "bg-blue-400/10 text-blue-300 ring-1 ring-blue-300/20"
                                            : "bg-white/10 text-slate-400"
                                    }`}>
                                        {
                                            Reqdata.optimizedReview
                                                ? "Ready"
                                                : loading
                                                ? "Generating"
                                                : "Waiting"
                                        }
                                    </div>

                                </div>

                            </div>

                            <div className="p-5 sm:p-7">

                                {
                                    loading ? (

                                        <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-6">

                                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-300 ring-1 ring-blue-300/20">
                                                <span className="h-6 w-6 animate-spin rounded-full border-2 border-blue-300/30 border-t-blue-300"></span>
                                            </div>

                                            <h3 className="text-xl font-black text-white">
                                                AI is polishing your review
                                            </h3>

                                            <p className="mt-2 text-base leading-7 text-slate-400">
                                                Please wait a moment while we create a professional version.
                                            </p>

                                            <div className="mt-6 space-y-3">
                                                <div className="h-4 w-full animate-pulse rounded-full bg-white/10"></div>
                                                <div className="h-4 w-[88%] animate-pulse rounded-full bg-white/10"></div>
                                                <div className="h-4 w-[72%] animate-pulse rounded-full bg-white/10"></div>
                                            </div>

                                        </div>

                                    ) : !Reqdata.optimizedReview ? (

                                        <div className="rounded-[28px] border border-dashed border-white/15 bg-white/[0.06] p-6">

                                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-400/10 text-violet-300 shadow-sm ring-1 ring-violet-300/20">

                                                <svg
                                                    className="h-6 w-6"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M12 2L13.7 8.3L20 10L13.7 11.7L12 18L10.3 11.7L4 10L10.3 8.3L12 2Z" />
                                                </svg>

                                            </div>

                                            <h3 className="text-xl font-black text-white">
                                                Ready for AI optimization
                                            </h3>

                                            <p className="mt-2 text-base leading-7 text-slate-400">
                                                Fill the form and generate your optimized review. It will appear here without needing to scroll on desktop.
                                            </p>

                                            <div className="mt-6 space-y-3">

                                                <div className="h-4 w-full rounded-full bg-white/10"></div>
                                                <div className="h-4 w-[88%] rounded-full bg-white/10"></div>
                                                <div className="h-4 w-[72%] rounded-full bg-white/10"></div>

                                            </div>

                                        </div>

                                    ) : (

                                        <>

                                            <div className="max-h-[360px] overflow-y-auto rounded-[28px] border border-white/10 bg-white/[0.07] p-6">

                                                <p className="whitespace-pre-wrap text-lg leading-9 text-slate-200">
                                                    {Reqdata.optimizedReview}
                                                </p>

                                            </div>

                                            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                                                <button
                                                    type="button"
                                                    onClick={CopyReview}
                                                    className="flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
                                                >
                                                    {copied ? "Copied!" : "Copy Review"}
                                                </button>

                                                <a
                                                    href={Reqdata.googleLink || "#"}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5"
                                                >
                                                    Open Google
                                                </a>

                                            </div>

                                            <div className="mt-5 rounded-2xl border border-blue-300/20 bg-blue-400/10 p-4">

                                                <p className="text-sm leading-6 text-blue-200">
                                                    Tip: Copy this review, open Google, paste it there, and submit your review.
                                                </p>

                                            </div>

                                        </>

                                    )
                                }

                            </div>

                        </div>

                        {/* MINI DETAILS */}

                        <div className="mt-5 grid grid-cols-3 gap-3">

                            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center backdrop-blur-xl">
                                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                    Tone
                                </p>
                                <p className="mt-1 text-sm font-black capitalize text-white">
                                    {Reqdata.sentiments || "-"}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center backdrop-blur-xl">
                                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                    Rating
                                </p>
                                <p className="mt-1 text-sm font-black text-white">
                                    {Reqdata.rating ? `${Reqdata.rating}★` : "-"}
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center backdrop-blur-xl">
                                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                                    Status
                                </p>
                                <p className="mt-1 text-sm font-black text-white">
                                    {Reqdata.optimizedReview ? "Ready" : "Draft"}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ReviewPage;