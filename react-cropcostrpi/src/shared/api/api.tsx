export interface APIResponse{
    status: number;
    next_page?: string;
    response: any;
}

export interface APIError{
    code: Number;
    message: String;
    errors?: APIError[];
}