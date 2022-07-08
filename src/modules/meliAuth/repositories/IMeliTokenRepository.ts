

interface IMeliTokenDTO {
    id?: string;
    meliToken: string;

}

interface IMeliTokenRepository {
    createOrRefreshToken({meliToken}: IMeliTokenDTO): Promise<void>;
    listToken(): Promise<IMeliTokenDTO>;
};  

export { IMeliTokenRepository,  IMeliTokenDTO }



