import axiosInstance from "../configs/api.ts";
import { useQuery } from "react-query";

const fetchUsers = async () => {
	const { data } = await axiosInstance.get("/users");
	return data;
};

export const useUsers = () => {
	return useQuery("users", fetchUsers);
};

const fetchSingleUser = async (id: string) => {
	const { data } = await axiosInstance.get(`/users/${id}`);
	return data;
};

export const useSingleUser = (id: string) => {
	return useQuery(["users", id], () => fetchSingleUser(id));
};
