var config = {}

// Update to have your correct username and password
config.mongoURI = {
    // production: 'mongodb+srv://charlesondabu:CqSH70opjCd2cI3J@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    // development: 'mongodb+srv://charlesondabu:CqSH70opjCd2cI3J@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    // test: 'mongodb+srv://charlesondabu:CqSH70opjCd2cI3J@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
    production: 'mongodb+srv://admin:CqSH70opjCd2cI3J@atlascluster.ijood98.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster',
    development: 'mongodb+srv://admin:CqSH70opjCd2cI3J@atlascluster.ijood98.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster',
    test: 'mongodb+srv://admin:CqSH70opjCd2cI3J@atlascluster.ijood98.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster',
}
module.exports = config;
