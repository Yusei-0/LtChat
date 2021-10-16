
const CreateUserDto = (resource) => ({
    username: resource.username,
    email: resource.email,
    password: resource.password,
    picture: resource.picture,
})

module.exports = CreateUserDto;