export type IHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type IHttpRequest = {
    url: string;
    method: IHttpMethod;
    data?: any;
    headers?: any;
};

export interface IHttpClient<Response = any> {
    request: (data: IHttpRequest) => Promise<IHttpResponse<Response>>;
}

export enum IHttpStatusCode {
    ok = 200,
    noContent = 204,
    alreadyExists = 303,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    serverError = 500,
}

export type IHttpResponse<Type = any> = {
    data: Type;
    status: number;
};
