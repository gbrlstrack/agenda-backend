const ApiError = require("../../utils/apiError");

const validateSchema = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        const validationErrors = result.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
        }));

        const error = new ApiError("Dados inválidos.", 400, validationErrors);
        next(error);
        return
    }
    req.body = result.data;
    next();
};

module.exports = validateSchema;