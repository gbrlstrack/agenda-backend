const userController = require('../api/controllers/userController');
const userService = require('../api/services/userService');

jest.mock('../api/services/userService');

describe('userController', () => {
    test('deve criar um usuario e retornar o status 201', async () => {
        const userMock = {
            name: "Maria",
            phone: "42999999999",
            email: "maria@email.com"
        };

        const req = { body: userMock };
        const res = {
            status: jest.fn(() => res),
            json: jest.fn()
        };

        userService.create.mockResolvedValue(userMock);

        await userController.create(req, res);

        expect(userService.create).toHaveBeenCalledWith(userMock);

        expect(res.status).toHaveBeenCalledWith(201);

        expect(res.json).toHaveBeenCalledWith(userMock);
    });
});