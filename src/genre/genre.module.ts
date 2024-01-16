import { Module } from '@nestjs/common'
import { GenreController } from './genre.controller'
import { GenreService } from './genre.service'
import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module'
import { GenreModel } from './genre.model'
import { MovieModule } from 'src/movie/movie.module'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: GenreModel,
				schemaOptions: {
					collection: 'Genre',
				},
			},
		]),
		MovieModule,
	],
	controllers: [GenreController],
	providers: [GenreService],
})
export class GenreModule {}
