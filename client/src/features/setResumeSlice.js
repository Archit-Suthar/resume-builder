import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicInfo: {},
  education: {},
  experience: {},
  skills: [],
  achievements: "",
  projects: {},
};

export const setResumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setBasicInfo: (state, action) => {
      state.basicInfo = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setAchievements: (state, action) => {
      state.achievements = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const {
  setBasicInfo,
  setEducation,
  setExperience,
  setSkills,
  setAchievements,
  setProjects,
} = setResumeSlice.actions;

export const selectResume = (state) => state;

export default setResumeSlice.reducer;
