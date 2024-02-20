import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.setGlobalPrefix('api')
	app.enableCors({
		origin: 'https://front-next-fixjw0lm2-pepelacon.vercel.app', // Replace with your Vercel app URL
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
		credentials: true,
	})
	await app.listen(process.env.PORT || 4200)
}
bootstrap()
