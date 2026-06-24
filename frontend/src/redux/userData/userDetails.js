import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: "userData",
    initialState: {
        userId: null,
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        country: "India",
        currency: "Indian Rupee",
        expertise: [],
        linkedInUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        whatsAppNumber: "",
        availability: null,
        timezone: "",
        service: null,
        userImage: null,
        graduationYear: new Date().getFullYear() - 4,
    },
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        },
        setCurrency: (state, action) => {
            state.currency = action.payload;
        },
        setExpertise: (state, action) => {
            state.expertise = action.payload;
        },
        setLinkedInUrl: (state, action) => {
            state.linkedInUrl = action.payload;
        },
        setTwitterUrl: (state, action) => {
            state.twitterUrl = action.payload;
        },
        setInstagramUrl: (state, action) => {
            state.instagramUrl = action.payload;
        },
        setWhatsAppNumber: (state, action) => {
            state.whatsAppNumber = action.payload;
        },
        setAvailability: (state, action) => {
            state.availability = action.payload;
        },
        setTimezone: (state, action) => {
            state.timezone = action.payload;
        },
        setService: (state, action) => {
            state.service = action.payload;
        },
        setUserImage: (state, action) => {
            state.userImage = action.payload;
        },
        setGraduationYear: (state, action) => {
            state.graduationYear = action.payload;
        },
        setJoinDate: (state, action) => {
            state.joinDate = action.payload;
        },
        setUserId: (state, action) => {
            state.userId = action.payload;
        },
        setUserDetails: (state, action) => {
            const user = action.payload || {};
            state.userId = user._id || null;
            state.firstName = user.firstName || "";
            state.lastName = user.lastName || "";
            state.userName = user.userName || "";
            state.email = user.email || "";
            state.country = user.country || "India";
            state.currency = user.currency || "Indian Rupee";
            state.expertise = user.expertise || [];
            state.linkedInUrl = user.linkedInUrl || "";
            state.twitterUrl = user.twitterUrl || "";
            state.instagramUrl = user.instagramUrl || "";
            state.whatsAppNumber = user.whatsAppNumber || "";
            state.availability = user.availability || null;
            state.timezone = user.timezone || "";
            state.service = user.service || null;
            state.userImage = user.userImageUrl || null;
            state.graduationYear = user.graduationYear || new Date().getFullYear() - 4;
            state.joinDate = user.joinDate;
        },
        clearUserDetails: (state) => {
            state.userId = null;
            state.firstName = "";
            state.lastName = "";
            state.userName = "";
            state.email = "";
            state.country = "India";
            state.currency = "Indian Rupee";
            state.expertise = [];
            state.linkedInUrl = "";
            state.twitterUrl = "";
            state.instagramUrl = "";
            state.whatsAppNumber = "";
            state.availability = null;
            state.timezone = "";
            state.service = null;
            state.userImage = null;
            state.graduationYear = new Date().getFullYear() - 4;
        },
    },
})

export const {
    setUserId,
    setFirstName,
    setLastName,
    setUserName,
    setEmail,
    setCountry,
    setCurrency,
    setExpertise,
    setLinkedInUrl,
    setTwitterUrl,
    setInstagramUrl,
    setWhatsAppNumber,
    setAvailability,
    setTimezone,
    setService,
    setUserImage,
    setGraduationYear,
    setUserDetails,
    clearUserDetails,
    setJoinDate
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
