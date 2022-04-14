

interface IMeliTokenDTO {
    id?: string;
    meliToken: string;

}

interface IMeliTokenRepository {
    createRefreshToken({meliToken}: IMeliTokenDTO): Promise<void>;
};  

export { IMeliTokenRepository,  IMeliTokenDTO }



