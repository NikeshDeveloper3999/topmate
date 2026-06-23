import axiosInstance from "../../utility/axios";

export const getAdminStatsApi = async () => {
  const { data } = await axiosInstance.get("/admin/stats");
  return data;
};

export const getAllUsersAdminApi = async () => {
  const { data } = await axiosInstance.get("/admin/users");
  return data;
};

export const deleteUserAdminApi = async (userId) => {
  const { data } = await axiosInstance.delete(`/admin/users/${userId}`);
  return data;
};

export const getAllServicesAdminApi = async () => {
  const { data } = await axiosInstance.get("/admin/services");
  return data;
};

export const deleteServiceAdminApi = async (serviceId) => {
  const { data } = await axiosInstance.delete(`/admin/services/${serviceId}`);
  return data;
};

export const getAllBookingsAdminApi = async () => {
  const { data } = await axiosInstance.get("/admin/bookings");
  return data;
};
