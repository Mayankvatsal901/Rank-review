import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AppContext } from "../../context/AppContext";

const Profile = () => {

  const {
    backendUrl,
    token,
    business,
    setBusiness
  } = useContext(AppContext);

  console.log(business);

  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({

    name: "",
    slug: "",
    email: "",
    location: "",
    googleLink: ""

  });

  // AUTO FILL DATA

  useEffect(() => {

    if (business) {

      setFormData({

        name: business.name || "",
        slug: business.slug || "",
        email: business.email || "",
        location: business.location || "",
        googleLink: business.googleLink || ""

      });

    }

  }, [business]);

  // HANDLE INPUT

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    });

  };

  // SAVE UPDATE

  const handleUpdate = async () => {

    try {

      const response = await axios.put(

        `${backendUrl}/business/update`,

        formData,

        {
          headers: {
            Authorization: token
          }
        }

      );

      if (response.data.success) {

        setBusiness(response.data.business);

        setEditMode(false);

      }

      if (response.data.status) {

        setBusiness(response.data.data);

        setEditMode(false);

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#f6f8fc] p-4 sm:p-6 lg:p-8">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:42px_42px]"></div>
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 left-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"></div>

      <div className="relative space-y-6">

        {/* HEADER */}

        <div className="rounded-[28px] border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-xl sm:p-7">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                Business Settings
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Business Profile
              </h1>

              <p className="mt-2 max-w-2xl text-base font-medium text-slate-500">
                Manage your business details, public profile information, and Google review link.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <div className={`hidden rounded-full px-4 py-2 text-sm font-semibold sm:block ${
                editMode
                ? "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
                : "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
              }`}>
                {editMode ? "Editing Mode" : "View Mode"}
              </div>

              {

                !editMode ? (

                  <button
                    onClick={() => setEditMode(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20H21" />
                      <path d="M16.5 3.5A2.1 2.1 0 0 1 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" />
                    </svg>

                    Edit Profile
                  </button>

                ) : (

                  <button
                    onClick={handleUpdate}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17L4 12" />
                    </svg>

                    Save Changes
                  </button>

                )

              }

            </div>

          </div>

        </div>

        {/* PROFILE OVERVIEW */}

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.85fr_1.6fr]">

          {/* LEFT CARD */}

          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm">

            <div className="flex flex-col items-center text-center">

              <div className="relative">

                <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-blue-600 to-indigo-600 text-3xl font-bold text-white shadow-xl shadow-blue-600/20">
                  {
                    formData.name
                    ? formData.name.charAt(0).toUpperCase()
                    : "B"
                  }
                </div>

                <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-emerald-500">
                  <svg
                    className="h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                </span>

              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-950">
                {formData.name || "Business Name"}
              </h2>

              <p className="mt-1 text-sm font-medium text-slate-500">
                {formData.email || "business@email.com"}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                Active Business
              </div>

            </div>

            <div className="mt-8 space-y-4">

              <div className="rounded-2xl bg-slate-50 p-4">

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Business Slug
                </p>

                <p className="mt-1 break-all text-sm font-bold text-slate-800">
                  {formData.slug || "Not added"}
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-4">

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Location
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {formData.location || "Not added"}
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-4">

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Google Link
                </p>

                <p className="mt-1 truncate text-sm font-bold text-blue-600">
                  {formData.googleLink || "Not added"}
                </p>

              </div>

            </div>

          </div>

          {/* FORM CARD */}

          <div className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm sm:p-7">

            <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-950">
                  Profile Information
                </h2>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  Update the details shown on your business review profile.
                </p>
              </div>

              <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                {editMode ? "Editable" : "Locked"}
              </span>

            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

              {/* BUSINESS NAME */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M3 21H21" />
                      <path d="M5 21V7L13 3V21" />
                      <path d="M19 21V11L13 7" />
                    </svg>
                  </span>
                  Business Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!editMode}
                  placeholder="Enter business name"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-medium outline-none transition ${
                    editMode
                    ? "border-slate-200 bg-white text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    : "border-slate-100 bg-slate-50 text-slate-500"
                  }`}
                />

              </div>

              {/* BUSINESS SLUG */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M10 13A5 5 0 0 0 17.54 13.54L20.54 10.54A5 5 0 0 0 13.46 3.46L11.75 5.17" />
                      <path d="M14 11A5 5 0 0 0 6.46 10.46L3.46 13.46A5 5 0 0 0 10.54 20.54L12.25 18.83" />
                    </svg>
                  </span>
                  Business Slug
                </label>

                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  disabled={!editMode}
                  placeholder="business-slug"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-medium outline-none transition ${
                    editMode
                    ? "border-slate-200 bg-white text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    : "border-slate-100 bg-slate-50 text-slate-500"
                  }`}
                />

              </div>

              {/* EMAIL */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M4 4H20V20H4V4Z" />
                      <path d="M4 7L12 13L20 7" />
                    </svg>
                  </span>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!editMode}
                  placeholder="business@email.com"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-medium outline-none transition ${
                    editMode
                    ? "border-slate-200 bg-white text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    : "border-slate-100 bg-slate-50 text-slate-500"
                  }`}
                />

              </div>

              {/* LOCATION */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10A9 9 0 1 1 21 10Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={!editMode}
                  placeholder="Enter business location"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-medium outline-none transition ${
                    editMode
                    ? "border-slate-200 bg-white text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    : "border-slate-100 bg-slate-50 text-slate-500"
                  }`}
                />

              </div>

              {/* GOOGLE LINK */}

              <div className="lg:col-span-2">

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 17.3L6.2 20.5L7.3 14L2.5 9.4L9.1 8.5L12 2.5L14.9 8.5L21.5 9.4L16.7 14L17.8 20.5L12 17.3Z" />
                    </svg>
                  </span>
                  Google Review Link
                </label>

                <input
                  type="text"
                  name="googleLink"
                  value={formData.googleLink}
                  onChange={handleChange}
                  disabled={!editMode}
                  placeholder="Paste Google review link"
                  className={`w-full rounded-2xl border px-4 py-3.5 text-sm font-medium outline-none transition ${
                    editMode
                    ? "border-slate-200 bg-white text-slate-900 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    : "border-slate-100 bg-slate-50 text-slate-500"
                  }`}
                />

              </div>

            </div>

            {/* INFO STRIP */}

            <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-4">

              <div className="flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 16V12" />
                    <path d="M12 8H12.01" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-blue-900">
                    Profile visibility
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-blue-700">
                    Keep your business information updated so your customers can easily find and review your business.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Profile;