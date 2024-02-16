import ApiService from "@/services/ApiService";

class UsersService {
    /**
     * Service url
     *
     * @returns {String}
     */
    static get URL() {
        return 'users';
    }

    /**
     *
     * @return {Promise<axios.AxiosResponse>}
     */
    static fetch() {
        return ApiService.get(`/${this.URL}`);
    }

    /**
     *
     * @param id
     * @returns {Promise<axios.AxiosResponse>}
     */
    static delete(id) {
        return ApiService.post(`/${this.URL}/${id}`);
    }

    /**
     *
     * @param user
     * @returns {Promise<AxiosResponse<any>>}
     */
    static create(user) {
        return ApiService.post(`/${ this.URL }`, { ...user })
    }

    /**
     *
     * @param user
     * @returns {Promise<AxiosResponse<any>>}
     */
    static update(user , id) {
        return ApiService.put(`/${ this.URL }/${id}`, { ...user })
    }
}

export default UsersService;