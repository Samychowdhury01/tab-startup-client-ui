const getUrl = () => {
    const baseUrl = process.env.NEXT_PUBLIC_DEVELOPMENT_API as string
    return baseUrl
};

export default getUrl;