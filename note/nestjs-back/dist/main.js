"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./common/exceptions/http.exception.filter");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidUnknownValues: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter(logger));
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get("PORT");
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT" }, "access_token")
        .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT" }, "refresh_token")
        .setTitle("note project")
        .setDescription("The users API description")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("docs", app, document);
    await app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}/docs`));
}
bootstrap().then((res) => console.log("bootstrap start"));
//# sourceMappingURL=main.js.map