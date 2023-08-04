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
            const response = await axiosInstance[method](requestProps.url, requestProps.body);
            requestProps.successFunction(response.data);
        } catch (err) {
            if (err.response.status === 404) {
                requestProps.errorFunction(err.response.data);
            }
            else if (err.response.status === 500) {
                requestProps.exceptionFunction(err.response.data);
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