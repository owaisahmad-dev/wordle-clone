import { Client } from "../components/Client";

export const start_game = async () => {
    return Client.post("api/v1/start_game/", {})
        .then((response) => {
            return response.data;
        })
        .then(data => {
            return {
                ...data, isError: false, errorMessage: ""
            }
        })
        .catch((error) => {
            return {
                isError: true, errorMessage: error.message
            }
        })
}