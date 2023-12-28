export const ROUTES = {
  LANDING: "/",
  HOME: "/home",
  DOSSIER_MEDICAL: "/home/consultations-list",
  CONSULATION_DETAIL: "/home/consultations-list/details",
  INFO_USER: "/home/personal-infos",
  RDV: "/home/appointment",
  LOGIN: "/login",
  SIGNUP: "/signup",
};

export const API_ROUTES = {
  Login: "/auth/login",
  Signup: "/auth/signup",
  Logout: "/auth/logout",
  GetUserInfos: "/user/get-infos",
  UpdateUserInfos: "/user/update-infos",
  UpdateUserProfileImage: "/user/update-profile-image",
  GetConsultations: "/user/consultations",
  GetServices: "/service/getAllServices",
  GetDoctors: "/doctor/getAllDoctorsByService",
  PostAnalyse: "/upload-files",
  GetFullyBookedDates: "/user/fully-booked-dates",
  GetFullyBookedTimes: "/user/booked-times",
  SaveConsultation: "/user/save-appointment",
  GetUserDoctors: "/user/doctors",
};
