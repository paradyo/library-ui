import axios from 'axios';
import { baseUrlForEndpoint } from './links';

class ApiBase {
    axiosInstance
    timerHolder = null

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: baseUrlForEndpoint,
            timeout: 90000,
            headers: { 'Api-Version': 'v1.0' }
        });
    }

    MakeRequest = async (axiosInstance, requestProps, method) => {
        try {
            if (requestProps.authorization) {
                axiosInstance.defaults.headers.common['Authorization'] = requestProps.authorization;
            }
            console.log('HEADERS: ', axiosInstance.defaults.headers)
            const response = await axiosInstance[method](requestProps.url, requestProps.body);
            if (response.status == 200 && requestProps.authorization) {
                axiosInstance.interceptors.request.use(
                    (config) => {
                        console.log('config reslee')
                        config.headers.Authorization = requestProps.authorization
                        return config;
                    }
                )
            }
            requestProps.successFunction(response.data);
        } catch (err) {
            if (err.response.status === 404) {
                requestProps.errorFunction(err.response.data);
            }
            else if (err.response.status === 500) {
                requestProps.exceptionFunction(err.response.data);
            }
            else if (err.response.status === 401) {
                requestProps.errorFunction(err.response.data);
            }
            else {
                requestProps.errorFunction({
                    code: 0,
                    data: null,
                    message: 'No internet connection!',
                });
            }
        }
    };

    Post = async (requestProps) => {
        await this.MakeRequest(this.axiosInstance, requestProps, 'post');
    };

    Get = async (requestProps) => {
        await this.MakeRequest(this.axiosInstance, requestProps, 'get');
    };

    Put = async (requestProps) => {
        await this.MakeRequest(this.axiosInstance, requestProps, 'put');
    };

    Patch = async (requestProps) => {
        await this.MakeRequest(this.axiosInstance, requestProps, 'patch');
    };

    Delete = async (requestProps) => {
        await this.MakeRequest(this.axiosInstance, requestProps, 'delete');
    };
}

export default new ApiBase