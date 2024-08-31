module.exports = (req, targetPath, targetMethod) => {
    const { url, method } = req;

    if(url === targetPath && method === targetMethod) return true

    return false
}