

interface IMeliTokenDTO {
    id?: string;
    meliToken: string;

}

interface IMeliTokenRepository {
    createRefreshToken({meliToken}: IMeliTokenDTO): Promise<void>;
    listToken(): Promise<IMeliTokenDTO>;
};  

export { IMeliTokenRepository,  IMeliTokenDTO }



