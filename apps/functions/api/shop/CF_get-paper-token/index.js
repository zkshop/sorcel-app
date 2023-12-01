// const Token = TokenService(PaperWalletClient());
const getPaperToken = async (req, res) => {
    res.send('getPaperToken');
    // const { code } = req.body as { code: string };
    // try {
    //   const userToken = await Token.getToken(code);
    //   res.status(OK).json({ userToken });
    // } catch (e) {
    //   console.error({ e });
    //   res.status(INTERNAL_SERVER_ERROR).json(e);
    // }
};

export { getPaperToken };
