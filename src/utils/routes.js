export const ROUTES = {
  LANDING: "/",
  HOME: "/home",
  DOSSIER_MEDICAL: "/home/dossier-medical",
  INFO_USER: "/home/infos-personnelles",
  RDV: "/home/rdv",
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
  GetServices:"/service/getAllServices",
  GetDoctors:"/doctor/getAllDoctorsByServiceId?serviceId=657822d4ef21ce0985a08e17"
};
